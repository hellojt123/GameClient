/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-22 11:47:13
 */


import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { Point, GameUtil } from "../../Util/GameUtil";
import BagItem from "../../Entity/BagItem/BagItem";
import { BagType } from "../../Const/BagType";
import { protoName } from "../../Const/protoName";
import XianChongUIBinder from "../XianChongUI/XianChongUIBinder";
import XianChong from "../XianChongUI/XianChong";
import btn_dikuai from "../XianChongUI/btn_dikuai";
import TimeUtil from "../../Util/TimeUtil";
import { TipsData } from '../../Const/TipsType';
import SDKManager from "../../Manager/SDKManager";
import tile_mubiao from "../XianChongUI/tile_mubiao";
import tile_xianchong_dropItem from "../XianChongUI/tile_xianchong_dropItem";
import com_pets from "../../Entity/Pet/com_pet";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import LoadUtil from "../../Util/LoadUtil";

const { ccclass, property } = cc._decorator;
@ccclass
export default class XianChongUI extends baseUI {
    public uiname: string = "XianChongUI";
    public _view: XianChong;
    private _index: number = 0;
    private _juLingIndex: number = 0;
    private _config: IConfigpet;
    private _stars: fgui.GImage[];
    private _levels: fgui.GImage[];
    private _petPool: fgui.GList;
    private _WIDTH: number = 5;
    private _HEIGHT: number = 5;
    private _enterFirst: boolean = true;
    private _grids: Map<number, Map<number, btn_dikuai>>;
    private remainTime: number = 0;
    private _weiyangIndex: number = 0;


    public get PetAD(): proto.resPetAD {
        return Global.gameManager.playerManager.player.getPetAD();
    }
    public get AwardConfig(): IConfigpetfloor[] {
        return ConfigUtil.inst.ConfigPetFloorContainer.getAwardConfig();
    }

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateProp, this.updatePet.bind(this));
        EventManager.inst.addEvents(gameEvents.updatePet, this.updatePet.bind(this));
        EventManager.inst.addEvents(gameEvents.updateDropItem, this.updateDropItem.bind(this));
        EventManager.inst.addEvents(gameEvents.updateNextFloor, this.initPetGrid.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBagItems, this.updateJuLingUI.bind(this));
        EventManager.inst.addEvents(gameEvents.uppdatePetAD, this.updatePetAD.bind(this));
    }

    public show() {
        super.show();
        this.updateJuLingUI();
        msgHandler.inst.sendmsg(protoName.reqPlayerPet, new proto.reqPlayerPet({}));
    }

    checkIconLevelShow() {
        if (this.propData.layer < 1) {
            this._view.n29.grayed = true;
            this._view.n29.enabled = false;
        } else {
            if (this.propData.histroyLevel < 7) {
                this._view.n29.grayed = true;
                this._view.n29.enabled = false;
            } else {
                this._view.n29.grayed = false;
                this._view.n29.enabled = true;
            }
        }
    }

    init() {
        if (this._view == null) {
            XianChongUIBinder.bindAll();
            this._view = XianChong.createInstance();
            super.init();
            this._grids = new Map<number, Map<number, btn_dikuai>>();
            this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
            this._view.juling.tabs.on(fgui.Event.STATUS_CHANGED, this.onJunLingChanged, this);
            this._view.weiyang.tabs.on(fgui.Event.STATUS_CHANGED, this.onWeiYangChange, this);
            this.initPet();
            this._interval = setInterval(this.updateTime.bind(this), 1000);
            this._view.tanxian.petGame.droplist.visible = false;
            this._view.top_title.getChildAt(0).text = "仙宠";
            Global.gameManager.uiManager.addHideTips(this.hidetips.bind(this));
            this._view.n29.onClick(this.onclickExplorer, this);
        }

    }

    private hidetips() {
        return this._view.tabs.selectedIndex == 2;
    }

    private updateTime() {
        if (this._view && this._window && this._window.isShowing) {
            if (this.remainTime >= TimeUtil.timestamp()) {
                this._view.tanxian.n65.text = TimeUtil.remainDateTime(this.remainTime);
            } else {
                this._view.tanxian.n65.text = "";
            }
        }
    }

    private initPet() {
        this._stars = [];
        this._stars.push(this._view.weiyang.jiewei1);
        this._stars.push(this._view.weiyang.jiewei2);
        this._stars.push(this._view.weiyang.jiewei3);
        this._levels = [];
        this._levels.push(this._view.weiyang.xinji1);
        this._levels.push(this._view.weiyang.xinji2);
        this._levels.push(this._view.weiyang.xinji3);
        this._levels.push(this._view.weiyang.xinji4);
        this._levels.push(this._view.weiyang.xinji5);
        this._levels.push(this._view.weiyang.xinji6);
        this._levels.push(this._view.weiyang.xinji7);
        this._levels.push(this._view.weiyang.xinji8);
        this._levels.push(this._view.weiyang.xinji9);
        this._levels.push(this._view.weiyang.xinji10);

        this._petPool = this._view.tanxian.petGame.daoju;

        this.initPetFloor();

        this._view.weiyang.btn_weiyang.onClick(this.onClickUpLevelPet, this);
        this._view.weiyang.n57.onClick(this.onClickPriview, this);
        this._view.juling.n53.onClick(this.onClickJuLing, this);
        this._view.frame.onClick(this.hide, this);
        this._view.juling.btn_tips.onClick(this.onClickTips, this);
        this._view.tanxian.btn_tips.onClick(this.onClickTips, this);
        this._view.tanxian.petGame.btn_tips.onClick(this.onClickTips, this);
        this._view.weiyang.btn_tips.onClick(this.onClickTips, this);
        this._view.tanxian.petGame.droplist.btn_ok.onClick(this.onClickCloseDropList, this);

        this._view.juling.bg.url = Global.resurl + "loader/pet_fz1.png";
        this._view.tanxian.bg.url = Global.resurl + "loader/bg_tanxian1.png";
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        if (this._view.tabs.selectedIndex == 0) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 113001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 113002);
        } else if (this._view.tabs.selectedIndex == 1) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 113001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 113002);
        } else if (this._view.tabs.selectedIndex == 2) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 113001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 113002);
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onWeiYangChange(e) {
        this._weiyangIndex = e.selectedIndex;
        if (this._weiyangIndex == 0) {
            this.updateFeedUI(this._config);
        } else {
            let config: IConfigpet = ConfigUtil.inst.ConfigPetContainer.getConfigByShowType(this._config.showtype + 1);
            if (config) {
                this.updateFeedUI(config);
            } else {
                this.updateFeedUI(this._config);
            }
        }
    }

    private onJunLingChanged(e) {
        this._juLingIndex = e.selectedIndex;
        this.updateJuLingUI();
    }

    onclickExplorer() {
        if (this._view.n29.grayed) {
            this.limitLevel();
        }
    }

    private limitLevel() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.POPUP;
        tipsdata.text = "等级不足，尚未解锁";
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onChanged(e) {
        this._index = e.selectedIndex;
        if (this._index == 0) {
            this.updateFeedUI(this._config);
        } else if (this._index == 1) {
            this.updateJuLingUI();
        }
    }

    private updatePet() {
        if (this._view && this._window.isShowing && this.petData) {
            this._config = ConfigUtil.inst.ConfigPetContainer.getConfigById(this.petData.petid);
            this.updateFeedUI(this._config);
            this.updateExplorerUI();
            this.sortAwardList();
            this.checkIconLevelShow();

        }
    }


    //喂养  

    private onClickPriview() {

    }

    private onClickUpLevelPet() {
        if (this._config && Global.gameManager.playerManager.getItemNumByItemId(80001) < this._config.need_stone) {
            if (this.petData.adTimes < 5) {
                SDKManager.CreateAD(0, () => {
                    msgHandler.inst.sendmsg(protoName.reqUpLevelPet, new proto.reqUpLevelPet({}));
                })
            }
        } else {
            msgHandler.inst.sendmsg(protoName.reqUpLevelPet, new proto.reqUpLevelPet({}));
        }
    }

    private updateFeedUI(config: IConfigpet) {
        if (this._view && config) {
            this._view.weiyang.xianchongname.text = config.name;
            this._view.juling.n45.text = config.name;
            let compet: com_pets = <com_pets>this._view.weiyang.com_pet;
            compet.setIconPackage(config.package_name, config.res_name, config.ui_pos);
            compet = <com_pets>this._view.juling.com_pet;
            compet.setIconPackage(config.package_name, config.res_name, config.ui_pos);
            for (let i: number = 0; i < this._stars.length; i++) {
                let star = this._stars[i];

                star.grayed = true;
                if (i < config.layer) {
                    star.grayed = false;
                }
            }

            for (let i: number = 0; i < this._levels.length; i++) {
                let level = this._levels[i];

                level.grayed = true;
                if (i < config.level % 10) {
                    level.grayed = false;
                }
                if (config.level > 9 && config.level % 10 == 0) {
                    level.grayed = false;
                }
            }
            this._view.weiyang.n54.text = "当前效果:提升修为效率" + config.mulexp.toFixed(1);


            if (Global.gameManager.playerManager.getItemNumByItemId(80001) < config.need_stone) {
                this._view.weiyang.n66.visible = true;
                if (this.petData.adTimes < 5) {
                    this._view.weiyang.n50.text = "剩余广告:" + (5 - this.petData.adTimes);
                } else {
                    this._view.weiyang.n66.visible = false;
                    this._view.weiyang.n50.text = "[color=#EC1C0C]暂不能升级[/color]";
                }
            } else {
                this._view.weiyang.n66.visible = false;
                this._view.weiyang.n55.visible = true;
                this._view.weiyang.n50.text = "消耗:" + config.need_stone.toString();
            }

            let nextConfig = ConfigUtil.inst.ConfigPetContainer.getConfigById(config.petid + 1);
            if (nextConfig) {
                this._view.weiyang.n51.text = "下级效果:提升修为效率" + nextConfig.mulexp.toFixed(1);
            }
        }
    }


    //聚灵
    private needstone: boolean = false;
    private updateJuLingUI() {
        if (this._view && this._window.isShowing && this._config) {
            let seconds = 0;
            let hour = 2;
            let mul = 2;
            let reward_items: string[] = this._config.tongling_reward.split(";");
            let cost_items: string[] = this._config.tongling_cost.split(";");

            if (this._juLingIndex == 0) {
                hour = 2;
                mul = 2;
                reward_items = this._config.tongling_reward.split(";");
                cost_items = this._config.tongling_cost.split(";");
            } else if (this._juLingIndex == 1) {
                hour = 4;
                mul = 4;
                reward_items = this._config.yuling_reward.split(";");
                cost_items = this._config.yuling_cost.split(";");
            } else if (this._juLingIndex == 2) {
                hour = 24;
                mul = 10;
                reward_items = this._config.juling_reward.split(";");
                cost_items = this._config.juling_cost.split(";");
            }

            if (this._config) {
                this._view.juling.n51.text = "本次通灵获得" + hour + "小时";
                for (let i = 0; i < reward_items.length; i++) {
                    let itemid = Number.parseInt(reward_items[i].split(",")[0]);
                    let num = Number(reward_items[i].split(",")[1]);
                    let itemConfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(itemid);
                    if (itemConfig.type == BagType.EXP) {
                        this._view.juling.n51.text += itemConfig.name + GameUtil.ConvertNum((hour * 60 * 60 + seconds) * this.player.getPerExp()) + ",";
                    } else if (itemConfig.type == BagType.FAME) {
                        this._view.juling.n51.text += itemConfig.name + GameUtil.ConvertNum(2.701 * Math.pow(<number>this.propData.histroyExp, 0.3532) * 0.02 * mul) + ",";
                    }
                }

                for (let i = 0; i < cost_items.length; i++) {
                    let cost_itemid = Number.parseInt(cost_items[i].split(",")[0]);
                    let cost_num = Number.parseInt(cost_items[i].split(",")[1]);
                    let have_num = Global.gameManager.playerManager.getItemNumByItemId(cost_itemid);
                    var bi: BagItem = <BagItem>this._view.juling.n55;
                    var needbi: BagItem = <BagItem>this._view.juling.n64;
                    this._view.juling.n53.title = "开始 x" + GameUtil.ConvertNum(cost_num);
                    if (have_num >= cost_num) {
                        this._view.juling.n50.text = "拥有:" + GameUtil.ConvertNum(have_num);
                        needbi.setIconByItemId(cost_itemid);
                        bi.setIconByItemId(cost_itemid);
                        this.needstone = false;
                        return;
                    } else {
                        this._view.juling.n50.text = "[color=#EC1C0C]拥有:" + GameUtil.ConvertNum(have_num) + "[/color]";

                        needbi.setIconByItemId(cost_itemid);
                        bi.setIconByItemId(cost_itemid);
                        this.needstone = true;
                    }
                }
            }
        }
    }

    private onClickJuLing() {
        if (this.needstone) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong-junlin", 1);
        } else {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.CHOICE;
            tipsdata.text = this._view.juling.n51.text;
            tipsdata.ok_callback = () => {
                LoadUtil.inst.LoadPackage("FaZhen" + this._juLingIndex, (err) => {
                    if (!err) {
                        let mc = fgui.UIPackage.createObject("FaZhen" + this._juLingIndex, "fazhen_" + this._juLingIndex).asMovieClip;
                        mc.setSize(451, 451);
                        mc.setScale(2, 2);
                        this._view.juling.holder.node.addChild(mc.node);
                        mc.setPlaySettings(0, -1, 1, 0, () => {
                            msgHandler.inst.sendmsg(protoName.reqJuLing, new proto.reqJuLing({ index: this._juLingIndex }));
                            this._view.juling.holder.node.removeAllChildren();
                            LoadUtil.inst.removePackage("FaZhen" + this._juLingIndex);
                        }, null);

                    } else {
                        console.log("err", err)
                    }
                })
            }
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    //探险
    private sortedList: IConfigpetfloor[] = []
    private sortAwardList() {
        this.sortedList = [];
        for (var i = this.AwardConfig.length - 1; i >= 0; i--) {
            var config: IConfigpetfloor = this.AwardConfig[i];
            if (config.floor <= this.petData.awardfloor) {
                this.sortedList.push(config);
            } else {
                this.sortedList.unshift(config);
            }
        }
        EventManager.inst.onEvents(gameEvents.refreshVirtualList, "xianchong");
    }


    private renderListItem(index: number, obj: fgui.GObject) {
        if (index < this.sortedList.length) {
            var config: IConfigpetfloor = this.sortedList[index];
            if (config) {
                var tile: tile_mubiao = <tile_mubiao>obj;
                tile.n62.text = "通过" + config.floor + "关";

                if (config.floor <= this.petData.awardfloor) {
                    tile.n63.text = "已领取"
                    tile.n69.enabled = false;
                } else {
                    if (config.floor < this.petData.floor && config.floor > this.petData.awardfloor) {
                        tile.n63.text = "可领取"
                        tile.n69.enabled = true;
                    } else {
                        tile.n63.text = "";
                        tile.n69.enabled = false;
                    }
                }

                tile.n69.clearClick();
                tile.n69.onClick(() => {
                    this.onClickAwardItem(config);
                }, this);

                var str: string[] = config.award.split(";");
                if (str.length > 0) {
                    var item = str[0].split(",");
                    var bagitem: BagItem = <BagItem>tile.n68;
                    bagitem.setItem(str[0]);
                    tile.n75.text = GameUtil.ConvertNum(item[1]);
                }
                if (str.length > 1) {
                    var item = str[1].split(",");
                    tile.n76.visible = true;
                    var bagitem: BagItem = <BagItem>tile.n76;
                    bagitem.setItem(str[1]);
                    tile.n77.text = GameUtil.ConvertNum(item[1]);
                } else {
                    tile.n76.visible = false;
                    tile.n77.text = ""
                }

            }
        }
    }

    private getProvider(index: number) {
        return tile_mubiao.URL;
    }

    private onClickMuBiao() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.LIST;
        tipsdata.itemRenderer = this.renderListItem.bind(this);
        tipsdata.itemProvider = this.getProvider;
        tipsdata.title = "目标奖励";
        tipsdata.listtype = "xianchong";
        tipsdata.numItems = ConfigUtil.inst.ConfigPetFloorContainer.getAwardConfig().length;
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private updatePetAD() {
        if (this.PetAD.addstrength > 0) {
            var target: number = this._view.tanxian.petGame.n75.value + this.PetAD.addstrength;
            this._view.tanxian.petGame.n75.tweenValue(target, 0.2);
        }
    }

    private hasFloor: boolean = false;
    private updateDropItem(data: proto.resDropItems) {
        if (this._view) {
            data.dropitems.forEach((value) => {
                let dp: proto.IDropItem = <proto.IDropItem>value;
                let config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(dp.itemid);
                var showtips: boolean = true;
                var showfly: boolean = true;

                let tile: btn_dikuai = this._grids.get(dp.posX).get(dp.posy)
                let btn: BagItem = <BagItem>tile.item;
                tile.tanxian_mc_2.visible = false;
                tile.icon = TileType.walked;

                switch (config.type) {
                    case BagType.PETFLOOR:
                        showtips = false;
                        showfly = false;
                        this.hasFloor = true;
                        break;
                    case BagType.ADDSTRENGTH:
                        var target: number = this._view.tanxian.petGame.n75.value + <number>dp.num;
                        this._view.tanxian.petGame.n75.tweenValue(target, 0.2);

                        showfly = false;
                        break;

                    case BagType.REDUCESTRENGTH:
                        var target: number = this._view.tanxian.petGame.n75.value - <number>dp.num;
                        if (target < 0) {
                            target = 0;
                        }
                        this._view.tanxian.petGame.n75.tweenValue(target, 0.2);

                        showfly = false;
                        break;
                    default:
                        tile.tanxian_mc_2.visible = true;
                        tile.tanxian_mc_2.setPlaySettings(0, -1, -1, -1);
                        break
                }




                if (config) {
                    tile.tips.text = config.name + "+" + GameUtil.ConvertNum(dp.num);
                    btn.setConfig(config);
                    btn.title = "";
                    if (showtips) {
                        tile.showtips.play();
                    }
                    if (showfly) {
                        GameUtil.PlayItemFly(config, tile);
                    }
                }
            })
        }
    }

    private updateExplorerUI() {
        this._view.tanxian.n51.text = "初始体力:" + this.petData.strength;
        this._view.tanxian.n63.text = "当前关卡:" + this.petData.floor;
        this._view.tanxian.n64.text = "剩余次数:" + this.petData.times + "/" + this._config.times;
        if (this.petData.times > 0) {
            this._view.n33.visible = true;
        } else {
            this._view.n33.visible = false;
        }
        this._view.tanxian.petGame.n74.text = "第" + this.petData.floor + "层";
        if (this._config) {
            this._view.tanxian.petGame.n75.min = 0;
            this._view.tanxian.petGame.n75.max = this._config.strength;
            this._view.tanxian.petGame.n75.value = this.petData.strength;
            this.remainTime = this.petData.lastTime;
            if (this.petData.lastTime - TimeUtil.timestamp() > 0) {
                this._timeout = setTimeout(() => {
                    clearTimeout(this._timeout);
                    this._timeout = null;
                    msgHandler.inst.sendmsg(protoName.reqPlayerPet, new proto.reqPlayerPet({}));
                }, (this.petData.lastTime + 1 - TimeUtil.timestamp()) * 1000);
            }
        }
    }

    private onClickEnter() {
        if (this.petData.times > 0) {
            clearTimeout(this._timeout);
            this._timeout = null;
            this.initPetGrid(true);
            this._view.tanxian.n70.visible = false;
            this._view.tanxian.petGame.visible = true;
            this._enterFirst = true;
            msgHandler.inst.sendmsg(protoName.reqPetExplorer, new proto.reqPetExplorer({}));
        }
    }

    private initPetFloor() {
        this._view.tanxian.n53.onClick(this.onClickEnter, this);
        this._view.tanxian.petGame.n76.onClick(this.onClickBack.bind(this), this);
        this._view.tanxian.n70.visible = true;
        this._view.tanxian.petGame.visible = false;
        this._petPool.on(fgui.Event.CLICK_ITEM, this.onClickPetMove, this);
        this._view.tanxian.btn_mubiao.onClick(this.onClickMuBiao, this);
        this.initPetGrid(false);
    }



    private onClickAwardItem(data: IConfigpetfloor) {
        msgHandler.inst.sendmsg(protoName.reqPetFloorAward, new proto.reqPetFloorAward({ floor: data.floor }));
    }

    private initPetGrid(next: boolean = true) {
        if (this._view) {
            this.hasFloor = false;
            let k: number = 0;
            for (let i = 0; i < this._WIDTH; i++) {
                for (let j = 0; j < this._HEIGHT; j++) {
                    if (!next) {
                        let tile: btn_dikuai = <btn_dikuai>this._petPool.addItemFromPool(btn_dikuai.URL);
                        tile.name = k.toString();
                        let btn: BagItem = <BagItem>tile.item;
                        if (!this._grids.has(i)) {
                            this._grids.set(i, new Map<number, btn_dikuai>());
                        }
                        let map = this._grids.get(i);
                        map.set(j, tile);
                        btn.setConfig(null);
                        btn.setPos(new Point(i, j));
                        btn.icon = null;
                        btn.title = "";
                        tile.border.url = TileType.block;
                    } else {
                        this._enterFirst = true;
                        let tile: btn_dikuai = this._grids.get(i).get(j);
                        let btn: BagItem = <BagItem>tile.item;
                        btn.setConfig(null);
                        btn.icon = null;
                        btn.title = ""
                        tile.border.url = TileType.block;
                        tile.tanxian_mc_2.visible = false;
                    }
                }
            }
        }
    }

    private onClickBack() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 130003);
        tipsdata.ok_callback = this.EndPetExplorer.bind(this);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickPetMove(t: btn_dikuai) {
        let e: BagItem = <BagItem>t.item;
        if (e.getConfig()) {
            if (e.getConfig().type == BagType.PETFLOOR) {
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.CHOICE;
                tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 130002);
                tipsdata.ok_callback = () => {
                    msgHandler.inst.sendmsg(protoName.reqNextFloor, new proto.reqNextFloor({}))
                };
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
                return;
            }
        }

        if (this._view.tanxian.petGame.n75.value > 0) {
            if (this._enterFirst) {
                for (let i = 0; i < this._WIDTH; i++) {
                    for (let j = 0; j < this._HEIGHT; j++) {
                        let t_pos: Point = e.getPos();
                        let tile: btn_dikuai = <btn_dikuai>(this._grids.get(i).get(j));
                        if (t_pos.x == i && t_pos.y == j) {
                            tile.border.url = TileType.walked;
                            msgHandler.inst.sendmsg(protoName.reqPetMove, new proto.reqPetMove({ x: e.getPos().x, y: e.getPos().y }));
                        } else {
                            if (t_pos.getDistanceXY(i, j) < 2) {
                                tile.border.url = TileType.safe;
                            } else {
                                tile.border.url = TileType.block;
                            }
                        }
                    }
                }
                this._enterFirst = false;
                var target: number = this._view.tanxian.petGame.n75.value - 1;
                this._view.tanxian.petGame.n75.tweenValue(target, 0.2);
            } else {
                if (t.border.url != TileType.block) {
                    for (let i = 0; i < this._WIDTH; i++) {
                        for (let j = 0; j < this._HEIGHT; j++) {
                            let t_pos: Point = e.getPos();
                            let tile: btn_dikuai = <btn_dikuai>(this._grids.get(i).get(j));
                            if (t_pos.x == i && t_pos.y == j) {
                                if (tile.border.url == TileType.safe) {
                                    var target: number = this._view.tanxian.petGame.n75.value - 1;
                                    this._view.tanxian.petGame.n75.tweenValue(target, 0.2);
                                    tile.border.url = TileType.walked;
                                    tile.tanxian_mc_1.visible = true;
                                    tile.tanxian_mc_1.setPlaySettings(0, -1, 1, 0, () => {
                                        this.hideTileMC(tile);
                                    }, this)
                                    msgHandler.inst.sendmsg(protoName.reqPetMove, new proto.reqPetMove({ x: e.getPos().x, y: e.getPos().y }));
                                }
                            } else if (t_pos.getDistanceXY(i, j) < 2) {
                                if (tile.border.url == TileType.block) {
                                    tile.border.url = TileType.safe;
                                }
                            };
                        };
                    };
                }
            }
        } else {
            if (this.PetAD.times > 0 || this.hasFloor) {
                if (this.PetAD.times > 0) {
                    var tipsdata: TipsData = new TipsData();
                    tipsdata.type = TipsType.CHOICE;
                    tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 130001);
                    tipsdata.ok_callback = () => {
                        SDKManager.CreateAD(4, () => {
                            msgHandler.inst.sendmsg(protoName.reqPetAD, new proto.reqPetAD({}));
                        })
                    };
                    tipsdata.cancel_callback = this.EndPetExplorer.bind(this);

                } else {
                    var tipsdata: TipsData = new TipsData();
                    tipsdata.type = TipsType.CHOICE;
                    tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong", 130002);
                    tipsdata.ok_callback = () => {
                        msgHandler.inst.sendmsg(protoName.reqNextFloor, new proto.reqNextFloor({}))
                    };
                }
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            } else {

                this.EndPetExplorer();
                // tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xianchong",1);
                // tipsdata.ok_callback = this.EndPetExplorer.bind(this);
            }

        }
    }

    hideTileMC(tile: btn_dikuai) {
        tile.tanxian_mc_1.visible = false;
    }

    private EndPetExplorer() {
        // this._view.tanxian.n70.visible = true;
        // this._view.tanxian.petGame.visible = false;
        msgHandler.inst.sendmsg(protoName.reqEndPetExplorer, new proto.reqEndPetExplorer({}));
        var dropitems: Map<number, proto.DropItem> = Global.gameManager.playerManager.player.getDropItems();
        if (dropitems && dropitems.size > 0) {
            this._view.tanxian.petGame.droplist.visible = true;
            if (dropitems.size > this._view.tanxian.petGame.droplist.itemlist.numChildren) {
                var count = this._view.tanxian.petGame.droplist.itemlist.numChildren;
                for (var i = 0; i < dropitems.size - count; i++) {
                    this._view.tanxian.petGame.droplist.itemlist.addItemFromPool(tile_xianchong_dropItem.URL);
                }
                for (var i = 0; i < this._view.tanxian.petGame.droplist.itemlist.numChildren; i++) {
                    var dropitem: tile_xianchong_dropItem = <tile_xianchong_dropItem>this._view.tanxian.petGame.droplist.itemlist.getChildAt(i);
                    dropitem.visible = false;
                }
                var index = 0;
                dropitems.forEach((value, key) => {
                    var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(value.itemid);
                    if (config.type < 11) {
                        var tile: tile_xianchong_dropItem = <tile_xianchong_dropItem>this._view.tanxian.petGame.droplist.itemlist.getChildAt(index);
                        tile.visible = true;
                        var bagitem: BagItem = <BagItem>tile.item.asCom;
                        bagitem.setIconByItemId(value.itemid);
                        tile.itemname.text = "获得" + config.name;
                        tile.itemnum.text = GameUtil.ConvertNum(value.num);
                        index++;
                    }
                });
            }
        } else {
            this._view.tanxian.n70.visible = true;
            this._view.tanxian.petGame.visible = false;
            this._view.tanxian.petGame.droplist.visible = false;
        }
        Global.gameManager.playerManager.player.resetDropItems();
    }

    private onClickCloseDropList() {
        this._view.tanxian.n70.visible = true;
        this._view.tanxian.petGame.visible = false;
        this._view.tanxian.petGame.droplist.visible = false;
    }
}

export class TileType {
    public static safe = "ui://XianChongUI/dikuai1";
    public static walked = "ui://XianChongUI/dikuai3";
    public static block = "ui://XianChongUI/dikuai2";
}