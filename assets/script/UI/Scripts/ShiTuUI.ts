/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 14:05:49
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import { TipsData } from '../../Const/TipsType';
import ShiTuUIBinder from "../ShiTuUI/ShiTuUIBinder";
import ShiTu from "../ShiTuUI/ShiTu";
import tile_tudi from "../ShiTuUI/tile_tudi";
import PlayerHead from "../../Entity/Head/PlayerHead";
import tile_shitu from "../ShiTuUI/tile_shitu";
import { GameUtil, ItemData } from "../../Util/GameUtil";
import BagItem from "../../Entity/BagItem/BagItem";
import TimeUtil from "../../Util/TimeUtil";
import SDKManager from "../../Manager/SDKManager";
import { gameEvents } from "../../Const/gameEvents";
import { DailyTypes } from "../../Const/DailyTypes";
import { TipsType } from "../../Const/TipsType";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ShiTuUI extends baseUI {
    public uiname: string = "ShiTuUI";
    public _view: ShiTu;
    private _index: number;

    public get masterRelation(): proto.PlayerRelation[] {
        return Global.gameManager.playerManager.player.getMasterRelation();
    }

    public get GraduateRelation(): proto.PlayerRelation[] {
        return Global.gameManager.playerManager.player.getGraduateRelation();
    }

    public get master(): proto.PlayerRelation {
        return Global.gameManager.playerManager.player.getMaster();
    }

    onLoad() {
        super.onLoad();

        EventManager.inst.addEvents(gameEvents.updateMasterRelation, this.updateMasterRelation.bind(this));
        EventManager.inst.addEvents(gameEvents.updateMasterRelationChange, this.updateMasterRelation.bind(this));
        EventManager.inst.addEvents(gameEvents.updateMasterRelationChange, this.updateMasterRelationChange.bind(this));
        EventManager.inst.addEvents(gameEvents.updateParams, this.updateParams.bind(this));
        EventManager.inst.addEvents(gameEvents.updatedailys, this.updateGraduateRelation.bind(this));
        EventManager.inst.addEvents(gameEvents.updateGraduateTips, this.updateGraduateTips.bind(this));
    }

    show() {
        super.show();
        msgHandler.inst.sendmsg(protoName.reqMasterRelation, new proto.reqMasterRelation({}));
    }

    init() {
        if (this._view == null) {
            ShiTuUIBinder.bindAll();
            this._view = ShiTu.createInstance();
            super.init();
            this.initClick();
            this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
            this._view.graduation.top_title.getChildAt(0).text = "出师表";
            this._view.graduation.bg.url = Global.resurl + "loader/bg_chushi.png"
        }
    }


    initClick() {
        this._view.graduation.btn_get.onClick(this.onClickGetEnyi, this)
        this._view.graduation.btn_tips.onClick(this.onClickTips, this);
        this._view.tile_self.btn_tips.onClick(this.onClickTips1, this);
        this._view.frame.onClick(this.hide, this);
    }

    private onClickTips1() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 82001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 82002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 84001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 84002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickGetEnyi() {
        var daily: proto.PlayerDaily = this.Dailys.get(DailyTypes.ENYI);
        if (daily.num == 0) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 2);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            return;
        }
        if (this.propData.enyi < 20) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 1);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            return;
        }
        msgHandler.inst.sendmsg(protoName.reqEnyi, new proto.reqEnyi({}));
    }

    private onChanged(e) {
        this._index = e.selectedIndex;
        if (this._index == 0) {
            this.updateMasterRelation();
        } else if (this._index == 1) {
            this.updateGraduateRelation();
        }
    }

    updateGraduateTips(data: proto.PlayerRelation) {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.POPUP;
        tipsdata.text = data.name + ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 5);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    updateGraduateRelation() {
        if (this._view && this._index == 1) {
            if (this.GraduateRelation.length > this._view.graduation.list.numChildren) {
                let count: number = this._view.graduation.list.numChildren;
                this._view.graduation.n53.text = "";
                for (let i = 0; i < this.GraduateRelation.length - count; i++) {
                    this._view.graduation.list.addItemFromPool(tile_tudi.URL);
                }
            }
            for (let i = 0; i < this._view.graduation.list.numChildren; i++) {
                let tile: tile_tudi = <tile_tudi>this._view.graduation.list.getChildAt(i);
                let data: proto.PlayerRelation = this.GraduateRelation[i];
                tile.tabs.setSelectedIndex(1);
                var head: PlayerHead = <PlayerHead>tile.head;
                head.setHead(data.head, data.sex);
                tile.playername.text = data.name;
                tile.playerlevel.text = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(data.level).name + "   " + data.layer + "转";
                tile.lastlogin.text = "上次登录:" + TimeUtil.timetrans(data.lastlogin);
            }
            var daily: proto.PlayerDaily = this.Dailys.get(DailyTypes.ENYI);
            this._view.graduation.n54.text = "总恩义值:" + this.propData.enyi;
            this._view.graduation.n55.text = "今日可兑换:" + daily.num + "/" + daily.maxnum;
            this._view.graduation.n59.text = "可兑换:" + Number.parseInt(Math.floor(this.propData.enyi / 20));
        }
    }

    updateMasterRelation() {
        if (this._view) {
            if (this.master) {
                this._view.tile_self.tabs.setSelectedIndex(1);
                var head: PlayerHead = <PlayerHead>this._view.tile_self.tile_shifu.head;
                head.setHead(this.master.head, this.master.sex);
                this._view.tile_self.tile_shifu.playername.text = this.master.name;
                this._view.tile_self.tile_shifu.playerlevel.text = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(this.master.level).name + "   " + this.master.layer + "转";
                this._view.tile_self.tile_shifu.btn_shitu.text_title.text = "师徒奖励";
                this._view.tile_self.tile_shifu.btn_shitu.icon_pic.url = "ui://ShiTuUI/icon_shitu";
                this._view.tile_self.tile_shifu.btn_shitu.clearClick();
                this._view.tile_self.tile_shifu.btn_shitu.onClick(() => {
                    this.onClickFollowerAward(0, 1);
                }, this);
            } else {
                this._view.tile_self.tabs.setSelectedIndex(0);
                this._view.tile_self.tile_self.btn_learn.clearClick();
                this._view.tile_self.tile_self.btn_learn.onClick(() => {
                    this.onClickFollowerAward(0, 1);
                }, this);
            }

            for (let i = 0; i < this._view.tile_self.shitulist.numChildren; i++) {
                let data: proto.PlayerRelation = this.masterRelation[i];
                let tile: tile_tudi = <tile_tudi>this._view.tile_self.shitulist.getChildAt(i);
                if (data) {
                    tile.playername.text = data.name;
                    tile.playerlevel.text = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(data.level).name + "   " + data.layer + "转";
                    tile.lastlogin.text = ""
                    tile.empty.text = "";
                    let kickout = true;

                    if (data.params && data.params.length > 0) {
                        let params: proto.PlayerParam[] = <proto.PlayerParam[]>data.params;
                        for (let i = 0; i < params.length; i++) {
                            let param = params[i];
                            if (param.ParamValue == 1) {
                                kickout = false;
                            }
                        }
                    }

                    if (TimeUtil.timestamp() - data.addtime > 7 * 24 * 60 * 60 && kickout) {
                        tile.btn_shitu.text_title.text = "逐出师门";
                        tile.btn_shitu.icon_pic.url = "ui://ShiTuUI/icon_tianfu";
                        tile.btn_shitu.clearClick();
                        tile.btn_shitu.onClick(() => {
                            this.onClickKickOut(i);
                        }, this)
                    } else {
                        tile.btn_shitu.text_title.text = "师徒奖励";
                        tile.btn_shitu.icon_pic.url = "ui://ShiTuUI/icon_shitu";
                        tile.btn_shitu.clearClick();
                        tile.btn_shitu.onClick(() => {
                            this.onClickFollowerAward(i, 0);
                        }, this)
                    }
                    var head: PlayerHead = <PlayerHead>tile.head;
                    head.setHead(data.head, data.sex);
                } else {
                    tile.playername.text = "";
                    tile.playerlevel.text = "";
                    tile.empty.text = "空缺";
                    tile.lastlogin.text = "";
                    tile.btn_shitu.icon_pic.url = "ui://CommonUI/btn_ty1";
                    tile.btn_shitu.text_title.text = "收徒";
                    tile.btn_shitu.clearClick();
                    tile.btn_shitu.onClick(this.onClickHire, this)
                    var head: PlayerHead = <PlayerHead>tile.head;
                    head.setHead(null, 1);
                }
            }
        }
    }

    private onClickKickOut(index: number) {
        var data = this.masterRelation[index];
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("shitu", 1);
        tipsdata.ok_callback = () => {
            msgHandler.inst.sendmsg(protoName.reqKickoutRookie, new proto.reqKickoutRookie({ playerid: data.playerid }));
        };
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickHire() {
        SDKManager.CreateShare(1, "type=1&inviteid=" + this.propData.id);
    }

    private onClickFollowerAward(index: number, type: number) {
        if (type == 0) {
            var data = this.masterRelation[index];
        } else {
            var data: proto.PlayerRelation = null;
        }
        this.sortlist(data, type);
        if (this.sortedList.length > 0) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.LIST;
            tipsdata.itemRenderer = this.renderListItem.bind(this);
            tipsdata.itemProvider = this.getProvider;
            tipsdata.title = "目标奖励";
            tipsdata.listtype = "shitu";
            tipsdata.numItems = 7;
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }
    }

    private updateParams() {
        this.sortlist(null, 1);
    }

    private updateMasterRelationChange(data: proto.PlayerRelation) {
        this.sortlist(data, 0);
    }

    private sortedList: activitystate[] = []
    private sortlist(data: proto.PlayerRelation, type: number) {
        this.sortedList = [];
        let playerid: number = 0;
        let level: number = 0;
        let addtime: number = 0;
        let configs: Map<number, IConfigactivity> = null;
        let map: Map<number, number> = new Map<number, number>();
        if (type == 0) {
            playerid = <number>data.playerid;
            level = data.level;
            addtime = data.addtime;
            let array: proto.PlayerParam[] = <proto.PlayerParam[]>data.params;
            for (let i = 0; i < array.length; i++) {
                map.set(array[i].ParamKey, array[i].ParamValue)
            }

            configs = ConfigUtil.inst.ConfigActivityContainer.getDayConfigsByType(3)
        } else {
            playerid = <number>this.propData.id;
            level = this.propData.histroyLevel;
            addtime = this.propData.addtime;
            map = this.getParams;
            configs = ConfigUtil.inst.ConfigActivityContainer.getDayConfigsByType(2)
        }
        let index: number = 0;
        configs.forEach((config) => {
            let state: number = 0;
            if (map.has(config.param)) {
                state = map.get(config.param);
            }
            if (state == 0 || state == 1) {
                this.sortedList.push(new activitystate(config.aid, state, playerid, level, addtime));
            }
        })

        configs.forEach((config) => {
            let state: number = 0;
            if (map.has(config.param)) {
                state = map.get(config.param);
            }
            if (state == 2) {
                this.sortedList.push(new activitystate(config.aid, state, playerid, level, addtime));
            }
        })

        EventManager.inst.onEvents(gameEvents.refreshVirtualList, "shitu");
    }

    private getProvider(index: number) {
        return tile_shitu.URL;
    }

    private renderListItem(index: number, obj: fgui.GObject) {
        let tile: tile_shitu = <tile_shitu>obj;
        if (index < this.sortedList.length) {
            let data = this.sortedList[index];
            tile.visible = true;
            let config: IConfigactivity = ConfigUtil.inst.ConfigActivityContainer.getConfigById(data.aid);
            if (config) {
                tile.title_text.text = config.title + " " + config.desc;
                let itemdatas: ItemData[] = GameUtil.getItemConfigByStr(config.awardstr);
                let bagitem1: BagItem = <BagItem>tile.item1;
                bagitem1.setIconByItemId(itemdatas[0].itemid);
                tile.item1num.text = GameUtil.ConvertNum(itemdatas[0].itemnum);

                if (itemdatas.length > 1) {
                    tile.item2.visible = true;
                    let bagitem2: BagItem = <BagItem>tile.item2;
                    bagitem2.setIconByItemId(itemdatas[1].itemid);
                    tile.item2num.text = GameUtil.ConvertNum(itemdatas[1].itemnum);
                } else {
                    tile.item2.visible = false;
                    tile.item2num.text = "";
                }


                if (data) {
                    if (data.state == 2) {
                        tile.tabs.setSelectedIndex(2);
                        tile.btn_get.clearClick();
                    } else if (data.state == 1 && (TimeUtil.timestamp() - data.addtime) > ((config.days - 1) * 24 * 60 * 60)) {
                        tile.tabs.setSelectedIndex(1)
                        tile.btn_get.clearClick();
                        tile.btn_get.onClick(() => {
                            this.onClickGetAward(data);
                        }, this)
                    } else {
                        tile.tabs.setSelectedIndex(0);
                    }
                } else {
                    tile.visible = false;
                }
            } else {
                tile.visible = false;
            }
        }
    }

    private onClickGetAward(data: activitystate) {
        msgHandler.inst.sendmsg(protoName.reqActivity, new proto.reqActivity({ id: data.aid, playerid: data.playerid }));
    }



    // private onClickTips(){
    //     var tipsdata:TipsData = new TipsData();
    //     tipsdata.type = TipsType.NORAML;     
    //     tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng",1);
    //     EventManager.inst.onEvents(gameEvents.showTips,tipsdata);
    // }
}

export class activitystate {
    public param: proto.PlayerParam;
    public playerid: number;
    public level: number;
    public addtime: number;
    public aid: number;
    public state: number;
    constructor(aid: number, state: number, playerid: number, level: number, addtime: number) {
        this.aid = aid;
        this.state = state;
        this.playerid = playerid;
        this.level = level;
        this.addtime = addtime;
    }

}
