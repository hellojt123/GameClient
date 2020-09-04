/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 15:41:55
 */


import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import { TipsData } from '../../Const/TipsType';
import DaoLv from "../DaoLvUI/DaoLv";
import DaoLvUIBinder from "../DaoLvUI/DaoLvUIBinder";
import SDKManager from "../../Manager/SDKManager";
import Role from "../../Entity/Role/Role";
import TimeUtil from "../../Util/TimeUtil";
import title_sansheng from "../DaoLvUI/title_sansheng";
import BagItem from "../../Entity/BagItem/BagItem";
import { GameUtil } from "../../Util/GameUtil";
import title_binke from "../DaoLvUI/title_binke";
import PlayerHead from "../../Entity/Head/PlayerHead";
import com_message from "../DaoLvUI/com_message";
import TileWedding from "../../Entity/Wedding/TileWedding";
import com_wedding from "../CommonUI/com_wedding";
import Com_daolv from "../DaoLvUI/Com_daolv";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import ConfigUtil from "../../Util/ConfigUtil";


const { ccclass, property } = cc._decorator;
@ccclass
export default class DaoLvUI extends baseUI {
    public uiname: string = "DaoLvUI";
    public _view: DaoLv;
    public _interval: any;
    private _index: Number;

    public get DaoLvInfo(): proto.resDaoLvInfo {
        return Global.gameManager.playerManager.player.getDaoLvInfo();
    }

    public get treeawards(): Map<number, number> {
        return Global.gameManager.playerManager.player.getTreeAwards();
    }

    public get weddinglist(): proto.WeddingInfo[] {
        return Global.gameManager.playerManager.player.getWeddingList();
    }

    public get weddingInfo(): proto.WeddingInfo {
        return Global.gameManager.playerManager.player.getWeddingInfo();
    }

    public get weddingAward(): proto.WeddingAwardMsg {
        return Global.gameManager.playerManager.player.getWeddingAward();
    }

    public get weddingGuests(): proto.PlayerRank[] {
        return Global.gameManager.playerManager.player.getWeddingGuests();
    }

    public get selfWeddingRank(): proto.WeddingRank {
        return Global.gameManager.playerManager.player.getSelfWeddingRank();
    }

    public set selfWeddingRank(self: proto.WeddingRank) {
        Global.gameManager.playerManager.player.setSelfWeddingRank(self);
    }

    public get weddingRanks(): proto.WeddingRank[] {
        return Global.gameManager.playerManager.player.getWeddingRanks();
    }
    public get weddingFoods(): Map<number, string> {
        return Global.gameManager.playerManager.player.getWeddingFoods();
    }

    public get getBuffs(): Map<number, proto.PlayerBuff> {
        return Global.gameManager.playerManager.player.getBuffsByType(5);
    }

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateBuff, this.updateBuff.bind(this));
        EventManager.inst.addEvents(gameEvents.updateDaoLvInfo, this.updateDaoLvInfo.bind(this));
        EventManager.inst.addEvents(gameEvents.updateTreeAward, this.updateTreeAward.bind(this));
        EventManager.inst.addEvents(gameEvents.updateMarryList, this.updateMarryList.bind(this));
        EventManager.inst.addEvents(gameEvents.updateOpenMarry, this.updateOpenMarry.bind(this));
        EventManager.inst.addEvents(gameEvents.updateWeddingInfo, this.updateWeddingInfo.bind(this));
        EventManager.inst.addEvents(gameEvents.updateWeddingGuests, this.updateWeddingGuests.bind(this));
        EventManager.inst.addEvents(gameEvents.updateHongBao, this.updateHongBao.bind(this));
        EventManager.inst.addEvents(gameEvents.updateResSendGift, this.updateResSendGift.bind(this));
        EventManager.inst.addEvents(gameEvents.updateWeddingRanks, this.updateWeddingRanks.bind(this));

    }
    show() {
        super.show();
        msgHandler.inst.sendmsg(protoName.reqDaoLvInfo, new proto.reqDaoLvInfo({}));
        msgHandler.inst.sendmsg(protoName.reqBuff, new proto.reqBuff({ type: 5 }));
        this.initDaolv();
    }

    init() {
        if (this._view == null) {
            DaoLvUIBinder.bindAll();
            this._view = DaoLv.createInstance();
            super.init();

            this.initClick();
            this.initWedding();
            this._interval = setInterval(this.updateTime.bind(this), 1000);
            this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
            this._view.food.visible = false;
            this._view.rank.ranklist.setVirtual();
            this._view.rank.ranklist.itemRenderer = this.renderRanksItem.bind(this);
            this._view.rank.ranklist.numItems = 100;
            this._view.dao_lv.bg1.url = Global.resurl + "loader/bg_chouzi.png";
            this._view.dao_lv.bg2.url = Global.resurl + "loader/bg_tree.png";
            this._view.dao_lv.bg3.url = Global.resurl + "loader/bg_dltaizi.png";
            this._view.dao_lv.bg4.url = Global.resurl + "loader/bg_dltaizi.png";
            this._view.marry.tree.url = Global.resurl + "loader/bg_sanshengshu.png";
            this._view.hunyan.n87.url = Global.resurl + "loader/bg_moon.png";
            this._view.hunyan.n88.url = Global.resurl + "loader/bg_tree.png";
            this._view.hunyan1.n128.url = Global.resurl + "loader/bg_jiehun.png";
            this._view.hunyan
        }
    }

    initClick() {
        this._view.frame.onClick(this.onClickClose, this);
        this._view.dao_lv.btn_ask.onClick(this.onClickAsk, this);
        this._view.dao_lv.btn_tips.onClick(this.onClickDaoLvTips, this);
        this._view.marry.btn_seed_0.onClick(this.onClickSeed0, this);
        this._view.marry.btn_seed_1.onClick(this.onClickSeed1, this);
        this._view.marry.btn_seed_2.onClick(this.onClickSeed2, this);
        this._view.marry.btn_seed_3.onClick(this.onClickSeed3, this);
        this._view.marry.btn_seed_4.onClick(this.onClickSeed4, this);
        this._view.marry.btn_water.onClick(this.onClickWater, this);
        this._view.marry.btn_cancel.onClick(this.onClickCancel, this);
        this._view.marry.btn_awrards.onClick(this.onClickShowAwards, this);
        this._view.marry.btn_tips.onClick(this.onClickMarryTips, this);
        this._view.hunyan.btn_open_marry.onClick(this.onClickOpenMarry, this);
        this._view.hunyan.btn_marry_list.onClick(this.onClickMarryList, this);
        this._view.hunyan.btn_tips.onClick(this.onClickHunyanTips, this);

        //婚宴开始
        this._view.hunyan1.btn_gift.onClick(this.onClickGift, this);
        this._view.hunyan1.btn_drink.onClick(this.onClickDrink, this);
        this._view.hunyan1.btn_invite.onClick(this.onClickAddWedding, this);
        this._view.hunyan1.btn_guest_list.onClick(this.onClickGuestList, this);
        this._view.hunyan1.btn_tips.onClick(this.onClickHunyan1Tips, this)
        //排行
        this._view.rank.btn_tips.onClick(this.onClickRankTips, this);
    }

    private onClickRankTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 56001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 56002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickHunyanTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 54001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 54002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickHunyan1Tips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hunyan_title", 1);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hunyan_title", 1);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onChanged(e) {
        this._index = e.selectedIndex;
        this._view.food.visible = false;
        if (this._index == 0) {
        } else if (this._index == 1) {
            this._view.hunyan1.hongbao.visible = false;
            msgHandler.inst.sendmsg(protoName.reqWeddingInfo, new proto.reqWeddingInfo({}));
        } else {
            msgHandler.inst.sendmsg(protoName.reqWeddingRanks, new proto.reqWeddingRanks({}));
        }
    }

    private onClickOpenMarry() {
        msgHandler.inst.sendmsg(protoName.reqOpenMarry, new proto.reqOpenMarry({ type: 1 }));
    }



    private onClickMarryList() {
        msgHandler.inst.sendmsg(protoName.reqMarryList, new proto.reqMarryList({}));
    }

    private onClickMarryTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 52001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 52002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickShowAwards() {
        msgHandler.inst.sendmsg(protoName.reqTreeAward, new proto.reqTreeAward({}));

        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.LIST;
        tipsdata.itemRenderer = this.renderListItem.bind(this);
        tipsdata.itemProvider = this.getProvider;
        tipsdata.title = "奖励";
        tipsdata.listtype = "daolv";
        tipsdata.numItems = ConfigUtil.inst.ConfigMarryContainer.getConfig().size;
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);

    }


    private updateTreeAward(): void {
        EventManager.inst.onEvents(gameEvents.refreshVirtualList, "daolv");
    }

    private updateOpenMarry() {

    }


    private renderListItem(index: number, obj: fgui.GObject) {
        var config: IConfigmarry = ConfigUtil.inst.ConfigMarryContainer.getConfigByLevel(index + 1);
        if (config) {
            let tile: title_sansheng = <title_sansheng>obj;
            tile.desc.text = "三生树buff：自动修炼提升" + config.tree_buff + "倍"
            tile.level.text = "LV." + config.level;
            let awards = config.tree_award.split(";");

            let award1 = awards[0].split(",");
            let item1: BagItem = <BagItem>tile.item1;
            item1.setIconByItemId(Number.parseInt(award1[0]));
            tile.item1num.text = GameUtil.ConvertNum(award1[1]);

            let award2 = awards[1].split(",");
            let item2: BagItem = <BagItem>tile.item2;
            item2.setIconByItemId(Number.parseInt(award2[0]));
            tile.item2num.text = GameUtil.ConvertNum(award2[1]);

            let award3 = awards[2].split(",");
            let item3: BagItem = <BagItem>tile.item3;
            item3.setIconByItemId(Number.parseInt(award3[0]));
            tile.item3num.text = GameUtil.ConvertNum(award3[1]);
            let value: number = this.treeawards.get(config.award_param);
            if (value == 1) {
                tile.btn_get.visible = false;
            } else {
                tile.btn_get.visible = true;
                tile.btn_get.clearClick();
                tile.btn_get.onClick(() => this.onClickGetTreeAward(config.level));
            }
        }
    }

    private onClickGetTreeAward(level: number) {
        msgHandler.inst.sendmsg(protoName.reqGetTreeAward, new proto.reqGetTreeAward({ level: level }));
    }

    private getProvider(index: number) {
        return title_sansheng.URL;
    }


    private onClickCancel() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("lihun", 1);
        tipsdata.ok_callback = () => {
            msgHandler.inst.sendmsg(protoName.reqCancelMarry, new proto.reqCancelMarry({}));
        };
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickWater() {
        msgHandler.inst.sendmsg(protoName.reqWater, new proto.reqWater({}));
    }

    private onClickSeed0() {
        msgHandler.inst.sendmsg(protoName.reqSeed, new proto.reqSeed({ type: 0 }));
    }

    private onClickSeed1() {
        msgHandler.inst.sendmsg(protoName.reqSeed, new proto.reqSeed({ type: 1 }));
    }
    private onClickSeed2() {
        msgHandler.inst.sendmsg(protoName.reqSeed, new proto.reqSeed({ type: 2 }));
    }
    private onClickSeed3() {
        msgHandler.inst.sendmsg(protoName.reqSeed, new proto.reqSeed({ type: 3 }));
    }
    private onClickSeed4() {
        msgHandler.inst.sendmsg(protoName.reqSeed, new proto.reqSeed({ type: 4 }));
    }

    private updateTime() {
        if (this._window.isShowing && this.DaoLvInfo) {
            if (this.DaoLvInfo.seed1end > 0 && this.DaoLvInfo.seed1end > TimeUtil.timestamp()) {
                this._view.marry.btn_seed_1.time.text = TimeUtil.remainDateTime(this.DaoLvInfo.seed1end);
                this._view.marry.btn_seed_1.border.visible = true;
            } else {
                this._view.marry.btn_seed_1.time.text = "";
                this._view.marry.btn_seed_1.border.visible = false;
            }
            if (this.DaoLvInfo.seed2end > 0 && this.DaoLvInfo.seed2end > TimeUtil.timestamp()) {
                this._view.marry.btn_seed_2.time.text = TimeUtil.remainDateTime(this.DaoLvInfo.seed2end);
                this._view.marry.btn_seed_2.border.visible = true;
            } else {
                this._view.marry.btn_seed_2.time.text = "";
                this._view.marry.btn_seed_2.border.visible = false;
            }
            if (this.DaoLvInfo.seed3end > 0 && this.DaoLvInfo.seed3end > TimeUtil.timestamp()) {
                this._view.marry.btn_seed_3.time.text = TimeUtil.remainDateTime(this.DaoLvInfo.seed3end);
                this._view.marry.btn_seed_3.border.visible = true;
            } else {
                this._view.marry.btn_seed_3.time.text = "";
                this._view.marry.btn_seed_3.border.visible = false;
            }
            if (this.DaoLvInfo.seed4end > 0 && this.DaoLvInfo.seed4end > TimeUtil.timestamp()) {
                this._view.marry.btn_seed_4.time.text = TimeUtil.remainDateTime(this.DaoLvInfo.seed4end);
                this._view.marry.btn_seed_4.border.visible = true;
            } else {
                this._view.marry.btn_seed_4.time.text = "";
                this._view.marry.btn_seed_4.border.visible = false;
            }
            //婚宴开启          
            if (this.weddingInfo && this._index == 1) {
                if (TimeUtil.timestamp() < this.weddingInfo.endtime) {
                    this._view.hunyan1.time.text = TimeUtil.remainDateTime(this.weddingInfo.endtime);
                    this._view.food.visible = false;
                    this.weddingFoods.forEach((value, key) => {
                        let intime: number = TimeUtil.timestamp() - key;
                        let config: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(value);
                        if (intime >= 0 && intime <= 5 && config) {
                            if (Number.parseInt(intime) == 0 || this._view.food.food_icon.url == "") {
                                this._view.food.food_icon.url = Global.resurl + "loader/pic_meishi" + GameUtil.random(1, 5) + ".png"
                            }
                            this._view.food.visible = true;
                            this._view.food.time.text = (Number.parseInt((5 - intime).toString())).toString();
                            this._view.food.btn_eat.clearClick();
                            this._view.food.btn_eat.onClick(() => {
                                this.onClickEat(key);
                            })
                        }
                    })
                } else {
                    if (this._view.hunyan1.visible) {
                        if (this._index == 1) {
                            this._view.hunyan1.visible = false;
                            this._view.hunyan.visible = true;
                        }
                    }
                }
            }
            if (this.getBuffs && this.getBuffs.size > 0) {
                this.getBuffs.forEach((value, key) => {
                    if (value.activeTime + value.duration > TimeUtil.timestamp()) {
                        this._view.marry.mc_seed.visible = true;
                        this._view.marry.bufftime.text = TimeUtil.remainDateTime(value.activeTime + value.duration, "", false);
                    } else {
                        this._view.marry.bufftime.text = "";
                        this._view.marry.mc_seed.visible = false;
                    }
                })
            } else {
                this._view.marry.mc_seed.visible = false;
                this._view.marry.bufftime.text = "";
            }
        }
    }

    private onClickClose() {
        this.hide();
    }

    private onClickDaoLvTips(): void {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 52001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("daolv", 52002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickAsk(): void {
        if (this.DaoLvInfo && this.DaoLvInfo.borkenend < TimeUtil.timestamp()) {
            SDKManager.CreateShare(3, "type=3&inviteid=" + this.propData.id);
        } else {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("lihun", 3);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }
    }

    private initDaolv(): void {
        let role: Role = <Role>this._view.dao_lv.main_role;
        role.setRole(this.propData.level, this.propData.sex);
        role.touchable = false;
        role.setStopAni(true);
        this._view.dao_lv.playername.text = this.propData.name;
    }

    private updateBuff(): void {
        if (this._view && this.getBuffs && this.getBuffs.size > 0) {
            this.getBuffs.forEach((value, key) => {
                this._view.marry.bufftime.text = TimeUtil.remainDateTime(value.activeTime + value.duration, "", false);
            })
        }
    }

    private updateDaoLvInfo(): void {
        if (this._view && this._window.isShowing && this.DaoLvInfo) {

            if (this.DaoLvInfo.cpid > 0) {
                this._view.hunyan.cp_role.visible = true;
                this._view.dao_lv.visible = false;
                this._view.marry.visible = true;
                this._view.hunyan.playername.text = this.propData.name;
                this._view.hunyan.cpname.text = this.DaoLvInfo.cpname;
                this._view.hunyan.btn_open_marry.enabled = true;
                let cp_role: Role = <Role>this._view.hunyan.cp_role;
                cp_role.setRole(this.DaoLvInfo.cplevel, this.DaoLvInfo.cpsex);
                cp_role.setStopAni(true);
                cp_role.touchable = false;

                cp_role = <Role>this._view.marry.cp_role;
                cp_role.setRole(this.DaoLvInfo.cplevel, this.DaoLvInfo.cpsex);
                cp_role.setStopAni(true);
                cp_role.touchable = false;
            } else {
                this._view.hunyan.btn_open_marry.enabled = false;
                this._view.hunyan.cp_role.visible = false;
                this._view.hunyan.playername.text = this.propData.name;
                this._view.hunyan.cpname.text = "";
                this._view.dao_lv.visible = true;
                this._view.marry.visible = false;
            }

            let role: Role = <Role>this._view.hunyan.player;
            role.setRole(this.propData.level, this.propData.sex);
            role.setStopAni(true);
            role.touchable = false;

            role = <Role>this._view.marry.main_role;
            role.setRole(this.propData.level, this.propData.sex);
            role.setStopAni(true);
            role.touchable = false;

            var config: IConfigmarry = ConfigUtil.inst.ConfigMarryContainer.getConfigByLevel(this.DaoLvInfo.treelevel);
            if (config) {
                this._view.marry.playername.text = this.propData.name;
                this._view.marry.cp_name.text = this.DaoLvInfo.cpname;
                this._view.marry.level_text.text = "LV." + this.DaoLvInfo.treelevel;
                this._view.marry.process_bar.min = 0;
                this._view.marry.process_bar.value = this.DaoLvInfo.treeexp;
                this._view.marry.process_bar.max = config.need_exp;

                if (this.DaoLvInfo.waterState >= TimeUtil.timestamp()) {
                    this._view.marry.water_state.text = "[color=#006600]已浇水[/color]";
                    this._view.marry.btn_water.enabled = false;
                } else {
                    this._view.marry.water_state.text = "[color=#FF0000]未浇水[/color]";
                    this._view.marry.btn_water.enabled = true;
                }

                if (this.DaoLvInfo.cpWaterState >= TimeUtil.timestamp()) {
                    this._view.marry.cp_water_state.text = "[color=#006600]已浇水[/color]";
                } else {
                    this._view.marry.cp_water_state.text = "[color=#FF0000]未浇水[/color]";
                }
                this._view.marry.cost.text = "消耗:" + GameUtil.ConvertNum(config.water_cost);
                var awards: string[] = config.water_award.split(";");
                let bagitem: BagItem = <BagItem>this._view.marry.award1item;
                bagitem.setIconByItemId(Number.parseInt(awards[0].split(",")[0]));
                this._view.marry.award1num.text = awards[0].split(",")[1];

                bagitem = <BagItem>this._view.marry.award2item;
                bagitem.setIconByItemId(Number.parseInt(awards[1].split(",")[0]));
                this._view.marry.award2num.text = awards[1].split(",")[1];

                bagitem = <BagItem>this._view.marry.needitem;
                bagitem.setIconByItemId(90001);
            }
        }
    }

    //婚宴开始
    private gift_max: number = 0;
    private initWedding() {
        let configs = ConfigUtil.inst.ConfigWeddingContainer.getGiftConfig();
        var index: number = 0;
        configs.forEach((value, key) => {
            if (index == 0) {
                this._view.hunyan1.gift1_num.text = value.index + "";
            } else if (index == 1) {
                this._view.hunyan1.gift2_num.text = value.index + "";
            }
            else if (index == 2) {
                this._view.hunyan1.gift3_num.text = value.index + "";
            }
            else if (index == 3) {
                this._view.hunyan1.gift4_num.text = value.index + "";
                this.gift_max = value.index;
            }
            index++;
        })
    }

    private updateWeddingInfo() {
        if (this._view) {
            if (this.weddingInfo && this.weddingInfo.endtime > TimeUtil.timestamp()) {
                this._view.hunyan1.solgan.text = this.weddingInfo.player1.name + "与" + this.weddingInfo.player2.name + "的婚宴";
                this._view.hunyan.visible = false;
                this._view.hunyan1.visible = true;
                if (this.propData.id == this.weddingInfo.player1.id || this.propData.id == this.weddingInfo.player2.id) {
                    this._view.hunyan1.btn_invite.visible = true;
                    this._view.hunyan1.di2.visible = false;
                } else {
                    this._view.hunyan1.btn_invite.visible = false;
                    this._view.hunyan1.di2.visible = true;
                }
                this._view.hunyan1.playernum.text = "婚宴人数：" + this.weddingInfo.playernum + "/10";
                this._view.hunyan1.gift_num.text = this.weddingInfo.giftnum + "";
                this._view.hunyan1.process_gift.min = 0;
                this._view.hunyan1.process_gift.tweenValue(this.weddingInfo.giftnum, 0.2);
                this._view.hunyan1.process_gift.max = this.gift_max;
                let config: IConfigwedding = ConfigUtil.inst.ConfigWeddingContainer.getConfigById(this.weddingInfo.giftnum);
                if (config) {
                    this._view.hunyan1.cost.text = "消耗:" + config.cost;
                    let costitem: BagItem = this._view.hunyan1.item_cost;
                    costitem.setIconByItemId(80001);
                    if (this.weddingAward) {
                        this._view.hunyan1.times.text = (config.max_drink - this.weddingAward.times) + "/" + config.max_drink;
                        let bagitem: BagItem = <BagItem>this._view.hunyan1.award1;
                        bagitem.setIconByItemId(160001);
                        this._view.hunyan1.award1num.text = this.weddingAward.heart + "";

                        bagitem = <BagItem>this._view.hunyan1.award2;
                        bagitem.setIconByItemId(80001);
                        this._view.hunyan1.award2num.text = this.weddingAward.stone + "";

                    }
                }
                let buffconfig: IConfigbuff = ConfigUtil.inst.ConfigBuffContainer.getConfigById(2);
                if (buffconfig) {
                    let num = this.weddingInfo.playernum + this.weddingInfo.giftnum;
                    let seconds = num * buffconfig.duration;
                    let minutes = seconds / 60;
                    this._view.hunyan1.award3num.text = Number.parseInt(minutes) + "分钟"
                }
            } else {
                this._view.hunyan.visible = true;
                this._view.hunyan1.visible = false;
            }
        }
    }

    private onClickGift() {

        let config: IConfigwedding = ConfigUtil.inst.ConfigWeddingContainer.getConfigById(this.weddingInfo.giftnum);
        if (config) {
            if (this.propData.stone >= config.cost) {
                msgHandler.inst.sendmsg(protoName.reqSendGift, new proto.reqSendGift({ type: 1 }));
            } else {

            }
        }
    }

    private onClickDrink() {
        msgHandler.inst.sendmsg(protoName.reqSendGift, new proto.reqSendGift({ type: 2 }));
    }

    private onClickAddWedding() {
        if (this.weddingInfo && this.weddingInfo.endtime > TimeUtil.timestamp()) {
            SDKManager.CreateShare(4, "type=4&inviteid=" + this.weddingInfo.weddingid);
        }
    }

    private onClickEat(time: number) {
        this.weddingFoods.delete(time);
        this._view.food.visible = false;
        msgHandler.inst.sendmsg(protoName.reqEatFood, new proto.reqEatFood({ time: time }));
    }

    private onClickGuestList() {
        msgHandler.inst.sendmsg(protoName.reqWeddingGuests, new proto.reqWeddingGuests({}));
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.LIST;
        tipsdata.itemRenderer = this.renderGuestsItem.bind(this);
        tipsdata.itemProvider = this.getGuestProvider;
        tipsdata.title = "宾客";
        tipsdata.listtype = "daolv_guests";
        tipsdata.numItems = 10;
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private renderGuestsItem(index: number, obj: fgui.GObject) {
        if (this.weddingGuests) {
            if (index < this.weddingGuests.length) {
                obj.visible = true;
                let player: proto.PlayerRank = this.weddingGuests[index];
                let level: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(player.level);
                let tile: title_binke = <title_binke>obj;
                tile.playername.text = player.name;
                tile.level.text = level.name;
                tile.layer.text = player.layer + "转";
                let head: PlayerHead = <PlayerHead>tile.head;
                head.setHead(player.head);
            } else {
                obj.visible = false;
            }
        }
    }

    private getGuestProvider(index: number) {
        return title_binke.URL;
    }

    private updateMarryList() {
        var tipsdata: TipsData = new TipsData();
        if (this.weddinglist == null || this.weddinglist.length == 0) {
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("liebiao", 1);
        } else {

            tipsdata.type = TipsType.LIST;
            tipsdata.itemRenderer = this.renderWeddingListItem.bind(this);
            tipsdata.itemProvider = this.getWeddingListProvider;
            tipsdata.title = "婚宴列表";
            tipsdata.listtype = "marry_list";
            tipsdata.numItems = this.weddinglist.length;
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private renderWeddingListItem(index: number, obj: fgui.GObject) {
        if (this.weddinglist) {
            if (index < this.weddinglist.length) {
                obj.visible = true;
                let tile: TileWedding = <TileWedding>obj;
                let data = this.weddinglist[index];
                if (tile && data) {
                    tile.setWeddingInfo(data);
                    tile.btn_join.clearClick();
                    tile.btn_join.onClick(() => { this.onClickJoinWedding(data.weddingid) });
                }
            } else {
                obj.visible = false;
            }
        }
    }

    private onClickJoinWedding(weddingid: number) {
        EventManager.inst.onEvents(gameEvents.hidetips);
        msgHandler.inst.sendmsg(protoName.reqJoinWedding, new proto.reqJoinWedding({ weddingid: weddingid }));
    }

    private getWeddingListProvider(index: number) {
        return com_wedding.URL;
    }

    private updateHongBao(data: proto.resHongBao) {
        if (this._view && this._window.isShowing) {
            if (data.result == 1) {
                this._view.hunyan1.hongbao.visible = true;

                this._view.hunyan1.hongbao1.visible = true;
                this._view.hunyan1.hongbao1.clearClick();
                this._view.hunyan1.hongbao1.onClick(() => {
                    this.onClickHongBao(data.hongbao1);
                    this._view.hunyan1.hongbao1.visible = false;
                });

                this._view.hunyan1.hongbao2.visible = true;
                this._view.hunyan1.hongbao2.clearClick();
                this._view.hunyan1.hongbao2.onClick(() => {
                    this.onClickHongBao(data.hongbao2);
                    this._view.hunyan1.hongbao2.visible = false;
                });

                this._view.hunyan1.hongbao3.visible = true;
                this._view.hunyan1.hongbao3.clearClick();
                this._view.hunyan1.hongbao3.onClick(() => {
                    this.onClickHongBao(data.hongbao3);
                    this._view.hunyan1.hongbao3.visible = false;
                });

                this._view.hunyan1.hongbao4.visible = true;
                this._view.hunyan1.hongbao4.clearClick();
                this._view.hunyan1.hongbao4.onClick(() => {
                    this.onClickHongBao(data.hongbao4);
                    this._view.hunyan1.hongbao4.visible = false;
                });
            } else if (data.result == 2) {
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.POPUP;
                tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hunyan_hongbao", 1);
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            }
        }


    }
    private floor: number = 0;
    private updateResSendGift(data: proto.resSendGift) {
        if (this._view && this._window.isShowing) {
            if (data.result == 1) {
                if (this.floor > 6) {
                    this.floor = 0;
                }
                let message: com_message = <com_message>fgui.UIPackage.createObjectFromURL(com_message.URL).asCom;
                message.playername.text = data.playername;
                message.word.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hunyan_heci", this.floor)
                this._view.hunyan1.box.addChild(message);
                message.ensureSizeCorrect();
                message.x = 400;
                fgui.GTween.to2(400, this.floor * message.height + 5, -message.width, this.floor * message.height + 5, 3)
                    .setTarget(message, message.setPosition)
                    .setEase(fgui.EaseType.Linear)
                    .onComplete(() => { this.onSendComplate(message) }, this);
                this.floor++;
            }
        }
    }

    onSendComplate(child: com_message) {
        this._view.hunyan1.box.removeChild(child)
    }


    private onClickHongBao(index: number) {
        msgHandler.inst.sendmsg(protoName.reqHongBao, new proto.reqHongBao({ index: index }));
    }

    private updateWeddingGuests() {
        EventManager.inst.onEvents(gameEvents.refreshVirtualList, "daolv_guests");
    }

    private updateWeddingRanks() {
        this._view.rank.ranklist.refreshVirtualList();
        var find: boolean = false;
        var index: number = 0;
        for (let i: number = 0; i < this.weddingRanks.length; i++) {
            let data = this.weddingRanks[i];
            if (data && data.player1 && data.player2) {
                if (data.player1.id == this.propData.id || data.player2.id == this.propData.id) {
                    find = true;
                    index = i;
                    this.selfWeddingRank = data;
                }
            }
        }
        this.updateSelfRank(find, index);
    }

    private updateSelfRank(inrank: boolean, index: number) {
        if (!this.selfWeddingRank.player2) {
            this._view.rank.self.visible = false;
        } else {
            this._view.rank.self.visible = true;
        }
        if (this.selfWeddingRank) {
            let tile: Com_daolv = this._view.rank.self;
            tile.tabs.setSelectedIndex(1);
            if (index < 3) {
                tile.top.visible = true;
                tile.top.url = "ui://CommonUI/bz_dj" + (index + 1);
                tile.rank.visible = false;
            } else {
                tile.top.visible = false;
                tile.rank.visible = true;
                tile.rank.text = (index + 1).toString();
            }

            tile.heart.text = this.selfWeddingRank.rank.toString();

            tile.player1name.text = this.selfWeddingRank.player1.name;
            let head1: PlayerHead = <PlayerHead>tile.player1head;
            head1.setHead(this.selfWeddingRank.player1.head);
            if (this.selfWeddingRank.player2) {
                tile.player2name.text = this.selfWeddingRank.player2.name;
                let head2: PlayerHead = <PlayerHead>tile.player2head;
                head2.setHead(this.selfWeddingRank.player2.head);
                tile.player2head.visible = true;
            } else {
                tile.player2name.text = "";
                tile.player2head.visible = false;
            }

            if (inrank) {
                tile.inrank.text = "";
            } else {
                tile.inrank.text = "未上榜";
            }
        }

    }

    private renderRanksItem(index: number, obj: fgui.GObject): void {
        if (this.weddingRanks) {
            if (index < this.weddingRanks.length) {
                let data = this.weddingRanks[index];
                obj.visible = true;
                let tile: Com_daolv = <Com_daolv>obj;
                if (index < 3) {
                    tile.top.visible = true;
                    tile.top.url = "ui://CommonUI/bz_dj" + (index + 1);
                    tile.rank.visible = false;
                } else {
                    tile.top.visible = false;
                    tile.rank.visible = true;
                    tile.rank.text = (index + 1).toString();
                }
                tile.heart.text = data.rank.toString();

                tile.player1name.text = data.player1.name;
                let head1: PlayerHead = <PlayerHead>tile.player1head;
                head1.setHead(data.player1.head);

                tile.player2name.text = data.player2.name;
                let head2: PlayerHead = <PlayerHead>tile.player2head;
                head2.setHead(data.player2.head);

            } else {
                obj.visible = false;
            }
        }
    }

    // private onClickTips(){
    //     var tipsdata:TipsData = new TipsData();
    //     tipsdata.type = TipsType.NORAML;     
    //     tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng",1);
    //     EventManager.inst.onEvents(gameEvents.showTips,tipsdata);
    // }
}
