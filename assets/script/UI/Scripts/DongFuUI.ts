/*
 * @Author: Jiangtao
 * @Date: 2019-11-26 10:45:40
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 13:21:05
 */
import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";
import msgHandler from "../../Net/msgHandler";
import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import { protoName } from "../../Const/protoName";
import DongFuUIBinder from "../DongFuUI/DongFuUIBinder";
import DongFu from "../DongFuUI/DongFu";
import pic_jianjue from "../DongFuUI/pic_jianjue";
import { TipsData } from '../../Const/TipsType';
import SDKManager from "../../Manager/SDKManager";
import TimeUtil from "../../Util/TimeUtil";
import BagItem from "../../Entity/BagItem/BagItem";
import { BagType } from "../../Const/BagType";
import { Point, GameUtil, ItemData } from "../../Util/GameUtil";
import tile_home_item from "../DongFuUI/tile_home_item";
import com_point from "../DongFuUI/com_point";
import tile_dropItem from "../DongFuUI/tile_dropItem";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import { DailyTypes } from "../../Const/DailyTypes";




const { ccclass, property } = cc._decorator;


@ccclass
export default class DongFuUI extends baseUI {
    public uiname: string = "DongFuUI";
    public _view: DongFu;
    public _list: proto.bagItem[] = [];
    public _listitems: tile_home_item[] = [];
    public _listitem: tile_home_item[] = [];
    private _positions: Point[];
    private _dfIndex: number = 0;
    private _listPoints: com_point[] = [];
    private _listDropItm: Map<number, proto.bagItem[]> = new Map<number, proto.bagItem[]>();

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateBody, this.updateBodyProp.bind(this));
        EventManager.inst.addEvents(gameEvents.updateProp, this.updateProp.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBagItemChange, this.updateBagItems.bind(this));
        EventManager.inst.addEvents(gameEvents.updateXianJin, this.updateXianJin.bind(this));
        EventManager.inst.addEvents(gameEvents.updatedailys, this.updateDaily.bind(this));
    }

    public show() {
        super.show();

        msgHandler.inst.sendmsg(protoName.reqPlayerBody, new proto.reqPlayerBody({}));
        msgHandler.inst.sendmsg(protoName.reqXianJin, new proto.reqXianJin({}));
        this.updateDongFuUI();
        this.updateProp();
        this.updateBodyProp();
        this.updateDaily();
    }


    init() {
        if (this._view == null) {
            DongFuUIBinder.bindAll();
            this._view = DongFu.createInstance();
            super.init();

            this.initClick();
            // this._view.dongfu.n9.getChildAt(0).text = "洞府";
            this._view.xinfa.n9.getChildAt(0).text = "心法";

            this._view.listitems.visible = false;

            this._positions = [];
            this._positions.push(new Point(this._view.listitems.x, this._view.listitems.y));
            this._positions.push(new Point(this._view.listitems.item1.x, this._view.listitems.item1.y));
            this._positions.push(new Point(this._view.listitems.item2.x, this._view.listitems.item2.y));
            this._positions.push(new Point(this._view.listitems.item3.x, this._view.listitems.item3.y));

            this._listitems = [];
            this._listitems.push(this._view.listitems.item1);
            this._listitems.push(this._view.listitems.item2);
            this._listitems.push(this._view.listitems.item3);

            this._listitem = [];
            this._listitem.push(this._view.listitems.item2);

            // this._interval = setInterval(this.updateTime.bind(this), 1000);

            this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);

            Global.gameManager.uiManager.addHideTips(this.hideTips.bind(this));
            this._view.dongfu1.bg.url = Global.resurl + "loader/bg_dongfu.png";
            this.initXianJin();
        }
    }

    private hideTips() {
        return this._view.visible;
    }

    private onChanged(e) {
        if (e.selectedIndex == 1) {
            msgHandler.inst.sendmsg(protoName.reqPlayerBody, new proto.reqPlayerBody({}));
        }
    }

    private onDongFuChange(e) {
        this._dfIndex = e.selectedIndex;
        this.updateXianJin();
    }

    private _type: number = 1;

    private updateDongFuUI() {
        if (this._view && this._window.isShowing) {
            // var config: IConfighome = ConfigUtil.inst.ConfigHomeContainer.getConfigByTypeLevel(this._type, this.propData.level);

            // if (config) {
            //     var config100: IConfighome = ConfigUtil.inst.ConfigHomeContainer.getConfigByTypeLevel(100, this.propData.level);
            //     var num: number = Global.gameManager.playerManager.getItemNumByItemId(config.needitem);
            //     if (num <= 0) {
            //         this._view.dongfu.n75.text = "拥有:0";
            //         this._view.dongfu.n80.title = "消耗" + GameUtil.ConvertNum(config.cost);
            //         (<BagItem>this._view.dongfu.n76).setIconByItemId(70001)
            //     } else {
            //         this._view.dongfu.n75.text = "拥有:" + GameUtil.ConvertNum(num);
            //         this._view.dongfu.n80.title = "消耗" + GameUtil.ConvertNum(config.neednum);
            //         (<BagItem>this._view.dongfu.n76).setIconByItemId(100001)
            //     }
            //     this._view.dongfu.n54.text = "拥有" + GameUtil.ConvertNum(this.propData.heart);
            //     this._view.dongfu.n82.title = "消耗" + GameUtil.ConvertNum(config100.neednum);
            //     (<BagItem>this._view.dongfu.n57).setIconByItemId(90001);
            // }
        }
    }

    private updateXinFaUI(data: Map<number, proto.playerBody>) {
        if (this._view) {
            data.forEach((value, key) => {
                var xf_tile: pic_jianjue = <pic_jianjue>this._view.xinfa.n79.getChildAt(key - 1);
                var config: IConfigbook = ConfigUtil.inst.ConfigbookContainer.getConfigByTypeLevel(value.type, value.booklevel);
                if (config.needlevel > this.propData.level) {
                    xf_tile.maskpic.visible = true;
                } else {
                    xf_tile.maskpic.visible = false;
                }
                var configitem: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(config.needItemId);
                xf_tile.showicon.url = "ui://DongFuUI/pic_jianjue" + key;
                xf_tile.name_text.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("jianjue", key).replace("%s", value.booklevel.toString())
                xf_tile.num_text.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("chanchu", key).replace("%s", config.mul.toString());
                xf_tile.n76.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("canye", key) + value.booknum + "/" + config.neednum;
                if (value.booknum > 0) {
                    xf_tile.maskpic.visible = false;
                }
            })
        }
    }

    private updateTime() {
        if (this._window.isShowing) {
            if (this.propData.qyad > TimeUtil.timestamp()) {
                // this._view.dongfu.countDown.text = TimeUtil.remainDateTime(this.propData.qyad);
            } else {
                // this._view.dongfu.countDown.text = "";
            }
        }
    }

    private playIndex: number = 0;
    private updateBagItems(data: proto.bagItem[]) {

        if (this._view && this._window.isShowing) {
            if (this.getXianJin && this.getXianJin.has(this._dfIndex + 1) && this.getXianJin.get(this._dfIndex + 1).ParamValue > 0) {
                var push: boolean = false;
                this.updateDongFuUI();
                if (!this._listDropItm.has(this._dfIndex)) {
                    this._listDropItm.set(this._dfIndex, []);
                }

                let itemlist: proto.bagItem[] = this._listDropItm.get(this._dfIndex);

                data.forEach((value) => {
                    if (value.stats == 1) {
                        this._list.push(value);
                        push = true;
                        itemlist.push(value);
                    }
                });

                if (push) {
                    // if (data && data.length <= 3) {
                    //     this.PlayFlyItem(this._listitem);
                    // } else 
                    {
                        if (!this._view.dongfu1.com_xuanwo.visible) {
                            this._view.dongfu1.com_xuanwo.visible = true;
                            this._view.dongfu1.com_xuanwo.frame.alpha = 0;
                            fgui.GTween.to(0, 1, 2)
                                .setTarget(this._view.dongfu1.com_xuanwo.frame, this.setAlpha.bind(this))
                                .setEase(fgui.EaseType.Linear)

                        }
                        this.PlayFlyItem(this._listitems);
                    }
                }
            }
        }
    }

    private setAlpha(alpha: number) {
        this._view.dongfu1.com_xuanwo.frame.alpha = alpha;
    }

    private PlayFlyItem(tiles: tile_home_item[]) {
        var me = this;
        me._view.listitems.visible = true;
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            tile.visible = true;
            var data: proto.bagItem = me._list.shift();
            if (data) {
                tile.data = data;
                var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(data.itemid);
                tile.book_boder.visible = false;
                tile.jiangli.visible = false;
                if (data.isbook) {
                    tile.book.visible = true;
                    tile.itemicon.url = "";
                    tile.showicon.url = "ui://DongFuUI/pic_jianjue" + data.type;
                    tile.name_text.text = config.name + data.bookLastlevel + "层";
                    var bodylevel = ConfigUtil.inst.ConfigbookContainer.getConfigByTypeLevel(data.bookType, data.bookLastlevel);
                    tile.num_text.text = "产出x" + bodylevel.mul + "倍";
                    tile.book_num.text = "残页" + data.bookLastnum + "/" + data.bookNeednum;
                    tile.book_boder.visible = true;
                } else {
                    tile.book.visible = false;
                    tile.itemicon.url = config.icon;
                    tile.showicon.url = "";
                    tile.name_text.text = "";
                    tile.num_text.text = GameUtil.ConvertNum(data.num);
                    tile.jiangli.visible = true;
                }
            }
        }

        me._view.t0.play(() => {
            for (var i = 0; i < tiles.length; i++) {
                var tile = tiles[i];
                var data: proto.bagItem = tile.data;
                var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(data.itemid);
                if (config.type == BagType.EXP) {
                    var globalpos = Global.gameManager.uiManager.mainui._view.localToGlobal(Global.gameManager.uiManager.mainui._view.icon_lingqi1.x, Global.gameManager.uiManager.mainui._view.icon_lingqi1.y, cc.Vec2.ZERO);
                } else if (config.type == BagType.STONE) {
                    var globalpos = Global.gameManager.uiManager.mainui._view.localToGlobal(Global.gameManager.uiManager.mainui._view.n204.x, Global.gameManager.uiManager.mainui._view.n204.y, cc.Vec2.ZERO);
                } else if (config.type == BagType.FAME) {
                    var globalpos = Global.gameManager.uiManager.mainui._view.localToGlobal(Global.gameManager.uiManager.mainui._view.n208.x, Global.gameManager.uiManager.mainui._view.n208.y, cc.Vec2.ZERO);
                } else {
                    var globalpos = this._view.localToGlobal(this._view.tab_lianqi.x, this._view.tab_lianqi.y, cc.Vec2.ZERO);
                }
                var localpos = me._view.listitems.globalToLocal(globalpos.x, globalpos.y, cc.Vec2.ZERO);
                me.playItemFlyTo(tile, new Point(tile.x, tile.y), new Point(localpos.x, localpos.y), data, tiles);
            }

            if (me._list.length > 0) {
                setTimeout(() => {
                    me.PlayFlyItem(tiles);
                }, 1600);
            } else {
                setTimeout(() => {
                    me._view.dongfu1.com_xuanwo.visible = false;
                }, 2000);

            }

        });
    }

    private playItemFlyTo(target: fgui.GObject, fromPos: Point, toPos: Point, data: proto.bagItem, tiles: tile_home_item[]) {
        fgui.GTween.to2(fromPos.x, fromPos.y, toPos.x, toPos.y, 0.5)
            .setDelay(1)
            .setTarget(target, target.setPosition)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(() => (this.onFlyComplate(data, tiles)), this);

        fgui.GTween.to2(1, 1, 0.2, 0.2, 0.4)
            .setDelay(1)
            .setTarget(target, target.setScale)
            .setEase(fgui.EaseType.Linear);
    }

    private onFlyComplate(data: proto.bagItem, tile: tile_home_item[]) {
        if (data) {
            var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(data.itemid);

            if (config.type == BagType.EXP) {
                this.propData.exp += data.num;
            } else if (config.type == BagType.STONE) {
                this.propData.stone += data.num;
            } else if (config.type == BagType.FAME) {
                this.propData.fame += data.num;
            }

            EventManager.inst.onEvents(gameEvents.updateProp, this.propData);

            this._view.listitems.visible = false;
            this._view.listitems.setScale(0.2, 0.2);
            this._view.listitems.setPosition(this._positions[0].x, this._positions[0].y);

            this._view.listitems.item1.visible = false;
            this._view.listitems.item1.setScale(1, 1);
            this._view.listitems.item1.setPosition(this._positions[1].x, this._positions[1].y);

            this._view.listitems.item2.visible = false;
            this._view.listitems.item2.setScale(1, 1);
            this._view.listitems.item2.setPosition(this._positions[2].x, this._positions[2].y);

            this._view.listitems.item3.visible = false;
            this._view.listitems.item3.setScale(1, 1);
            this._view.listitems.item3.setPosition(this._positions[3].x, this._positions[3].y);
        }
    }

    private updateProp() {
        this.updateDongFuUI();
    }

    private updateBodyProp() {
        this.updateXinFaUI(this.bodyData);
    }

    private updateDaily() {
        var daily: proto.PlayerDaily = this.Dailys.get(DailyTypes.TICKETS);
        if (daily && this._view) {
            this._view.dongfu1.btn_tickets.visible = false;
            this._view.dongfu1.n93.visible = false;
            this._view.dongfu1.n94.visible = false;
            if (daily.num > 0) {
                this._view.dongfu1.btn_tickets.visible = true;
                this._view.dongfu1.n93.visible = true;
                this._view.dongfu1.n94.visible = true;
                this._view.dongfu1.n94.text = "剩余次数:" + daily.num;
                this.updateXianJin();
            }
        }
    }

    initClick() {
        this._view.frame.onClick(this.onClickClose, this);
        this._view.xinfa.btn_tips.onClick(this.onClickDongFuTips, this);
        this._view.dongfu1.btn_tips.onClick(this.onClickDongFuTips, this);
        this._view.dongfu1.btn_tickets.onClick(this.onClickBuyTickets, this);
    }

    private onClickBuyTickets() {
        SDKManager.CreateAD(0, () => {
            msgHandler.inst.sendmsg(protoName.reqBuyTickets, new proto.reqBuyTickets({}));
        })
    }

    private onClickClose() {
        this.hide();
        this._list = [];
    }

    private onClickDongFuTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        if (this._view.tabs.selectedIndex == 0) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("dongfu", 122001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("dongfu", 122002);
        } else {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("dongfu", 124001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("dongfu", 124002);
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }
    private clickgap: number = 0;
    private onClickHome() {
        if (this.checkBtn()) {
            this.clickgap = TimeUtil.timestamp();
            msgHandler.inst.sendmsg(protoName.reqHome, new proto.reqHome({ type: this._type, ad: false }));
        }
    }
    private clickhear: number = 0;
    private onClickHeart() {
        if (this.checkBtn()) {
            this.clickhear = TimeUtil.timestamp();
            msgHandler.inst.sendmsg(protoName.reqHome, new proto.reqHome({ type: 100, ad: false }));
        }
    }

    private onClickAD() {
        // var bis:proto.bagItem[] = [];
        // var bi:proto.bagItem = null;
        // bi= new proto.bagItem({itemid:70001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:80001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:90001});
        // bis.push(bi);
        // bi= new proto.bagItem({itemid:70001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:80001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:90001});
        // bis.push(bi);
        // bi= new proto.bagItem({itemid:70001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:80001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:90001});
        // bis.push(bi);
        // bi= new proto.bagItem({itemid:70001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:80001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:90001});
        // bis.push(bi);
        // bi= new proto.bagItem({itemid:70001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:80001});
        // bis.push(bi);
        // bi = new proto.bagItem({itemid:90001});
        // bis.push(bi);
        // this.updateBagItems(bis);
        // return ;
        // if (this.checkBtn()) {
        //     this.clickgap = TimeUtil.timestamp();
        //     SDKManager.CreateAD(2, () => {
        //         msgHandler.inst.sendmsg(protoName.reqHome, new proto.reqHome({ type: 100, ad: true }));
        //     })
        // }
    }

    private onClickType() {
        if (this._type == 1) {
            // this._view.dongfu.n81.text = "五连";
            this._type = 2;
        } else {
            this._type = 1;
            // this._view.dongfu.n81.text = "单抽";
        }
        this.updateDongFuUI();
    }

    private initXianJin() {
        if (this._view) {
            this._view.dongfu1.tab_df.on(fgui.Event.STATUS_CHANGED, this.onDongFuChange, this);
            let configs = ConfigUtil.inst.ConfigXianJinContainer.getConfigs();
            this._view.dongfu1.btn_df1.text_title.text = configs.get(1).get(1).name;
            this._view.dongfu1.btn_df2.text_title.text = configs.get(2).get(1).name;
            this._view.dongfu1.btn_df3.text_title.text = configs.get(3).get(1).name;
            this._view.dongfu1.btn_df4.text_title.text = configs.get(4).get(1).name;

            this._view.dongfu1.btn_shilian.onClick(this.onClickShiLian, this);
            this._view.dongfu1.com_stats.bar.min = 0;
            this._view.dongfu1.com_stats.bar.max = 4;
            this._listPoints = [];
            this._listPoints.push(this._view.dongfu1.com_stats.p1);
            this._listPoints.push(this._view.dongfu1.com_stats.p2);
            this._listPoints.push(this._view.dongfu1.com_stats.p3);
            this._listPoints.push(this._view.dongfu1.com_stats.p4);
            this._listPoints.push(this._view.dongfu1.com_stats.p5);

            this._view.dongfu1.com_stats.btn_final.onClick(this.onClickShowFinal, this);
        }
    }

    private onClickShiLian() {
        if (this.checkBtn()) {
            let param = this.getXianJin.get(this._dfIndex + 1);
            if (param) {
                let config: IConfigxianjin = ConfigUtil.inst.ConfigXianJinContainer.getConfigByTypeByLevel(param.aid, param.ParamValue);
                if (config) {
                    if (config.needitem == 0) {
                        this.onClickShowFinal();
                    } else {
                        msgHandler.inst.sendmsg(protoName.reqShiLian, new proto.reqShiLian({ type: this._dfIndex }));
                    }
                }
            }
        }
    }

    private setPoint(level: number) {
        for (let i = 0; i < this._listPoints.length; i++) {
            let p = this._listPoints[i];
            if (i < level) {
                p.stats.setSelectedIndex(1);
            } else if (i == level) {
                p.stats.setSelectedIndex(2);
            } else {
                p.stats.setSelectedIndex(0);
            }
        }
    }

    private updateXianJin() {
        if (this._view && this._window.isShowing && this.getXianJin.has(this._dfIndex + 1)) {
            let param = this.getXianJin.get(this._dfIndex + 1);
            if (param) {
                let config: IConfigxianjin = ConfigUtil.inst.ConfigXianJinContainer.getConfigByTypeByLevel(param.aid, param.ParamValue);
                if (config) {
                    if (config.level == 0) {
                        if (!this._listDropItm.has(this._dfIndex)) {
                            this._listDropItm.set(this._dfIndex, []);
                        }
                    }
                    if (config.needitem > 0) {
                        this._view.dongfu1.neednum.visible = true;
                        this._view.dongfu1.needitem.visible = true;
                        this._view.dongfu1.btn_item_num.visible = true;
                        let item: BagItem = <BagItem>this._view.dongfu1.needitem;
                        item.setIconByItemId(config.needitem);
                        this._view.dongfu1.neednum.text = this.getItemNumByItemId(config.needitem).toString();
                        this._view.dongfu1.btn_item_num.title = "消耗:" + config.neednum;
                    } else {
                        this._view.dongfu1.neednum.visible = false;
                        this._view.dongfu1.needitem.visible = false;
                        this._view.dongfu1.btn_item_num.visible = false;
                    }
                    this._view.dongfu1.com_stats.bar.tweenValue(config.level, 1);
                    this.setPoint(config.level);
                }
            }
        }
    }

    private onClickShowFinal() {
        if (this.getXianJin.has(this._dfIndex + 1)) {
            tile_dropItem.createInstance();
            let param = this.getXianJin.get(this._dfIndex + 1);
            if (param) {
                let config: IConfigxianjin = ConfigUtil.inst.ConfigXianJinContainer.getConfigByTypeByLevel(param.aid, param.ParamValue);
                if (config) {
                    var tipsdata: TipsData = new TipsData();
                    tipsdata.type = TipsType.LIST;
                    tipsdata.itemRenderer = this.renderListItem.bind(this);
                    tipsdata.itemProvider = this.getProvider;
                    tipsdata.title = "奖励";
                    tipsdata.listtype = "dongfu";
                    tipsdata.numItems = ConfigUtil.inst.ConfigXianJinContainer.getFinalConfigs().get(this._dfIndex + 1).length;
                    if (config.needitem == 0) {
                        tipsdata.ok_callback = this.reqFinalAward.bind(this);
                        tipsdata.ok_text = "领取";
                    } else {
                        tipsdata.ok_callback = this.reqFinalAward.bind(this);
                        tipsdata.ok_text = "未达成";
                    }
                    EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
                }
            }
        }
    }

    private reqFinalAward() {
        if (this.checkBtn()) {
            if (this.getXianJin.has(this._dfIndex + 1)) {
                let param = this.getXianJin.get(this._dfIndex + 1);
                if (param) {
                    let config: IConfigxianjin = ConfigUtil.inst.ConfigXianJinContainer.getConfigByTypeByLevel(param.aid, param.ParamValue);
                    if (config && config.needitem == 0) {
                        msgHandler.inst.sendmsg(protoName.reqShiLian, new proto.reqShiLian({ type: this._dfIndex }));
                    }
                }
            }
        }
    }

    private checkBtn(): boolean {
        if (this._list.length == 0 && this._view.listitems.visible == false && TimeUtil.timestamp() - this.clickgap > 3) {
            return true;
        } else {
            return false;
        }
    }

    private renderListItem(index: number, obj: fgui.GObject) {
        let configs = ConfigUtil.inst.ConfigXianJinContainer.getFinalConfigs();
        if (configs.has(this._dfIndex + 1) && obj) {
            let bagitems: ItemData[] = configs.get(this._dfIndex + 1);
            if (index < bagitems.length) {
                let bagitem = bagitems[index];
                let tile: tile_dropItem = <tile_dropItem>obj;
                if (tile) {
                    var tile_bagitem: BagItem = <BagItem>tile.getChildAt(1);
                    tile_bagitem.setIconByItemId(bagitem.itemid);
                    tile.getChildAt(0).text = "获得" + tile_bagitem.getConfig().name;
                    tile.getChildAt(2).text = GameUtil.ConvertNum(bagitem.itemnum);
                }
            }
        }
    }


    public getProvider(index: number): string {
        return tile_dropItem.URL;
    }

}
