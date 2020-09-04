/*
 * @Author: Jiangtao
 * @Date: 2019-11-26 13:26:03
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-17 11:13:19
 */

import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";
import msgHandler from "../../Net/msgHandler";
import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import { PlayerEntity } from "../../Entity/Player/PlayerEntity";
import { protoName } from "../../Const/protoName";
import FaBaoUIBinder from "../FaBaoUI/FaBaoUIBinder";
import { TipsData } from '../../Const/TipsType';
import { GameUtil } from "../../Util/GameUtil";
import TimeUtil from "../../Util/TimeUtil";
import SDKManager from "../../Manager/SDKManager";
import BagItem from "../../Entity/BagItem/BagItem";
import Long = require("long");
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import LoadUtil from "../../Util/LoadUtil";
import com_fabao from "../../Entity/Fabao/com_fabao";
import FaBao from "../FaBaoUI/FaBao";


export default class FaBaoUI extends baseUI {
    public uiname: string = "FaBaoUI";
    public _view: FaBao;
    private baglist: fgui.GList;
    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateBagItems, this.updateBagItems.bind(this));
        EventManager.inst.addEvents(gameEvents.updateProp, this.updatePlayerProp.bind(this));
        EventManager.inst.addEvents(gameEvents.updatecomposelevel, this.updateComposeLevel.bind(this));
    }

    show() {
        super.show();
        this.updateBagItems();
        msgHandler.inst.sendmsg(protoName.reqAlchemy, new proto.reqAlchemy({ index: 0 }))
    }


    init() {
        if (this._view == null) {
            FaBaoUIBinder.bindAll();
            this._view = FaBao.createInstance();
            super.init();

            this._view.tab_fabao.title = "法宝";
            this._view.tab_lianqi.title = "炼器";
            this._view.tab_liandan.title = "炼丹";
            this.baglist = this._view.fabao.n25;
            this._view.fabao.trash.visible = false;
            this.initClick();
            this.initController();
            this.initAlchemy();
            this._interval = setInterval(this.updateTime.bind(this), 1000);

            this._view.fabao.bg_fabao.url = Global.resurl + "loader/bg_fabao.png";
            this._view.fabao.bg.url = Global.resurl + "loader/bg_fazhen1.png";
            this._view.fabao.fabao_view.bg.url = Global.resurl + "loader/bg_fbzs.png";
            this._view.lianqi.bg.url = Global.resurl + "loader/bg_fazhen1.png";
            this._view.lianqi.n28.url = Global.resurl + "loader/bg_lianqi.png";
            // this.updateComposeLevel(1);
        }
    }
    private initClick() {
        this._view.frame.onClick(this.hide, this);
        this._view.fabao.n12.onClick(this.onCLickBuyItem, this);
        this._view.lianqi.n12.onClick(this.onClickForge, this);

        this._view.fabao.btn_tips.onClick(this.onClickTips, this);
        this._view.lianqi.btn_tips.onClick(this.onClickTips, this);

        this._view.liandan.n12.onClick(this.onClickAlchemy, this);
        this._view.liandan.btn_tips.onClick(this.onClickTips, this);
        this._view.liandan.btn_get.onClick(this.onClickAlchemyAward, this);
        this._view.liandan.btn_ad.onClick(this.onClickAlchemyAD, this);
        this._view.liandan.success.btn_use.onClick(this.onClickAlchemyAward, this);
        this._view.fabao.fabao_view.frame.onClick(this.hideFabaoView, this)
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        if (this._view.tabs.selectedIndex == 0) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 94001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 94004);
        } else if (this._view.tabs.selectedIndex == 1) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 94003);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 94004);
        } else if (this._view.tabs.selectedIndex == 2) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 97001);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 97002);
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private initController() {
        this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        this._view.liandan.tabs.on(fgui.Event.STATUS_CHANGED, this.onAlchemyChanged, this);
        this._view.fabao.trash.on(fgui.Event.DROP, this.__onTrash, this);
        for (let i = 0; i < this.baglist.numChildren; i++) {
            this.initBagItem(i, <fgui.GButton>this.baglist.getChildAt(i));
        }
        this.initBagItem(PlayerEntity.EQUIP_START, this._view.fabao.n26);
    }

    private initBagItem(index: number, obj: fgui.GButton) {
        obj.draggable = true;
        obj.on(fgui.Event.DRAG_START, this.__onDragStart, this);
        obj.on(fgui.Event.DROP, this.__onDrop, this);
        obj.data = { pos: index, itemData: null };
        let bagitem: BagItem = <BagItem>obj;
        bagitem.loader.setScale(1.5, 1.5);
    }

    private __onDrop(target: fgui.GObject, from: any): void {
        msgHandler.inst.sendmsg(protoName.reqChangeItemPos, new proto.reqChangeItemPos({ fromPos: from.data.pos, toPos: target.data.pos }));
    }

    private __onTrash(target: fgui.GObject, from: any): void {

        if (from && from.data && from.data.itemData) {
            let config: IConfigcompose = ConfigUtil.inst.ConfigComposeContainer.getLevelComposeByLevel(this.propData.composelevel);
            let times = this.propData.forgetTimes;
            let mul: number = Number.parseInt(times / config.times);
            if (mul == 0) {
                mul = 1;
            }
            let cost = config.cost * config.rate * config.rec_rate * mul;
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.CHOICE;
            let str = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 2);
            str = str.replace("%?", GameUtil.ConvertNum(cost))
            tipsdata.text = str;
            tipsdata.ok_callback = () => {
                msgHandler.inst.sendmsg(protoName.reqTrashItem, new proto.reqTrashItem({ id: from.data.itemData.id }));
            };
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }
    }

    private __onDragEnd(evt: fgui.Event): void {
        this._view.fabao.trash.visible = false;
    }

    private __onDragStart(evt: fgui.Event): void {
        var btn: BagItem = <BagItem>fgui.GObject.cast(evt.currentTarget);
        if (btn.getConfig()) {
            btn.stopDrag();//取消对原目标的拖动，换成一个替代品  
            fgui.DragDropManager.inst.startDrag(btn, "ui://ItemUI/" + btn.getConfig().icon2, btn);
            fgui.DragDropManager.inst.dragAgent.on(fgui.Event.DRAG_END, this.__onDragEnd, this);
            this._view.fabao.trash.visible = true;
            //fgui.DragDropManager.inst.dragAgent.y = fgui.DragDropManager.inst.dragAgent.y+btn.height+100;
        }
    }

    private onChanged(e) {
        if (e.selectedIndex == 2) {
            this.updateAlchemyItem();
        }
    }

    private onClickForge(e) {
        msgHandler.inst.sendmsg(protoName.reqForge, new proto.reqForge({}));
    }

    private onCLickBuyItem(e) {
        if (this.getBagEmptyPos == -1) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 1);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        } else {
            var config: IConfigcompose = ConfigUtil.inst.ConfigComposeContainer.getLevelComposeByLevel(this.propData.composelevel);
            let mul: number = Number.parseInt(this.propData.forgetTimes / config.times);
            if (mul == 0) {
                mul = 1;
            }
            let cost: number = Long.fromValue(config.cost * Math.pow(config.rate, mul)).toNumber();

            if (this.propData.fame < cost) {
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.POPUP;
                tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 8);
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            } else {
                msgHandler.inst.sendmsg(protoName.reqBuyItem, new proto.reqBuyItem({ itemid: 0, num: 0 }));
            }
        }
    }


    private updatePlayerProp() {
        this.updateDuanZao();
        this.updateForge();
        this.updateAlchemy();
    }

    private hideFabaoView() {
        this._view.fabao.fabao_view.visible = false;
    }

    public doAnimation(): void {
        this._view.fabao.fabao_view.setScale(0.1, 0.1);
        this._view.fabao.fabao_view.visible = true;
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.2)
            .setTarget(this, this.updateScale.bind(this))
            .setEase(fgui.EaseType.Linear)
    }

    private updateScale(x: number, y: number) {
        this._view.fabao.fabao_view.setScale(x, y);
    }

    private updateComposeLevel(level: number) {
        this.doAnimation();
        // this._view.fabao.fabao_view.visible = true;        
        let config: IConfigcompose = ConfigUtil.inst.ConfigComposeContainer.getLevelComposeByLevel(this.propData.composelevel);
        let itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(config.targetid);
        if (itemconfig) {
            this._view.fabao.fabao_view.itemname.text = itemconfig.name;
            let com: com_fabao = <com_fabao>this._view.fabao.fabao_view.com_fabao_ui;
            com.setIconPackage(itemconfig.icon, itemconfig.icon2)
        }
    }

    private updateDuanZao() {
        if (this._view) {
            let config: IConfigcompose = ConfigUtil.inst.ConfigComposeContainer.getLevelComposeByLevel(this.propData.composelevel);
            if (config) {
                let mul: number = Number.parseInt(this.propData.forgetTimes / config.times);
                if (mul == 0) {
                    mul = 1;
                }
                let cost: number = Long.fromValue(config.cost * Math.pow(config.rate, mul)).toNumber();
                if (cost > this.propData.fame) {
                    this._view.fabao.n7.text = "[color=#EC1C0C]花费:" + GameUtil.ConvertNum(cost) + "[/color]";
                } else {
                    this._view.fabao.n7.text = "花费:" + GameUtil.ConvertNum(cost);
                }
                this._view.fabao.n6.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao_random", this.propData.composelevel);
            }
        }
    }

    private updateForge() {
        if (this._view) {
            let config: IConfigforge = ConfigUtil.inst.ConfigForgeContainer.getConfigByLevel(this.propData.forgelevel);
            if (config) {
                this._view.lianqi.n3.text = config.name;
                this._view.lianqi.n6.text = "当前效果:法宝效果提升" + config.mul + "倍";
                let nextconfig: IConfigforge = ConfigUtil.inst.ConfigForgeContainer.getConfigByLevel(this.propData.forgelevel + 1);
                if (nextconfig) {
                    this._view.lianqi.n27.text = "下级效果:法宝效果提升" + nextconfig.mul + "倍";
                } else {
                    this._view.lianqi.n27.text = "";
                }
                this._view.lianqi.n7.text = "花费:" + config.cost;
            }
        }
    }

    private maxID: number = 0;
    private updateBagItems() {
        if (this._view) {
            //更新锻造item      
            for (let i: number = 0; i < this.baglist.numChildren; i++) {
                let item: BagItem = <BagItem>this.baglist.getChildAt(i);
                let data: proto.bagItem = this.bagItemsData.get(item.data.pos);
                if (data) {
                    if (item.data != data) {
                        let config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(data.itemid);
                        item.data.itemData = data;
                        item.setIconByItemId(data.itemid);
                        item.setTitle("Lv" + config.param);
                        item.setBorder("ui://CommonUI/pz" + config.param);
                        if (data.id > this.maxID) {
                            this.maxID = data.id;
                            item.playmc();
                        }
                    }
                } else {
                    item.data.itemData = null;
                    item.setConfig(null);
                    item.setBorder(null);
                }
            }

            var equip = this.bagItemsData.get(PlayerEntity.EQUIP_START);
            let bagitem: BagItem = <BagItem>this._view.fabao.n26;
            if (equip) {
                let config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(equip.itemid);
                bagitem.setConfig(config);
                bagitem.setTitle("Lv" + config.param);
                bagitem.setBorder("ui://CommonUI/pz" + config.param);
                this._view.fabao.n3.text = config.name;
                this._view.fabao.n4.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao_next", equip.itemid);
                this._view.fabao.mc_fabao.visible = true;
                this._view.fabao.level.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao_level", equip.itemid);

            } else {
                bagitem.setConfig(null);
                bagitem.setBorder(null);
                this._view.fabao.n3.text = "未装备法宝";
                this._view.fabao.n4.text = "";
                this._view.fabao.mc_fabao.visible = false;
                this._view.fabao.level.text = "";
            }
            this.updateAlchemyUI();
            this.updateAlchemyItem();
        }
    }


    /////炼丹
    private index: number = 1;
    private masterConfig: IConfigalchemymaster;
    private updateAlchemy() {
        if (this._view && this._window.isShowing && this.propData) {

            if (this.propData.alchemyItem == "") {
                this._view.liandan.bottom.visible = true;
                this._view.liandan.ad.visible = false;
                this._view.liandan.success.visible = false;
                this._view.liandan.n7.text = "";
            } else {

                let alchemyconfig: string[] = this.propData.alchemyItem.split("|");
                let index = Number.parseInt(alchemyconfig[1]);
                let itemstr: string = alchemyconfig[0];
                let itemid: number = Number.parseInt(itemstr.split(",")[0]);

                this._view.liandan.tabs.setSelectedIndex(index - 1);
                var config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(this.index, this.propData.alchemylevel);
                if (config) {
                    if (this.propData.endAlchemyTime - TimeUtil.timestamp() > config.min_time) {
                        this._view.liandan.ad.visible = true;
                    } else {
                        this._view.liandan.ad.visible = false;
                    }
                }

                this._view.liandan.bottom.visible = false;
                if (TimeUtil.timestamp() > this.propData.endAlchemyTime) {
                    let itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(itemid);
                    this._view.liandan.success.visible = true;
                    this.setSuccess(itemconfig);
                }
            }

            this.masterConfig = ConfigUtil.inst.ConfigAlchemyMasterContainer.getConfigByLevel(this.propData.alchemylevel);
            if (this.masterConfig) {
                this._view.liandan.n3.text = this.masterConfig.name;
                this._view.liandan.n42.max = this.masterConfig.needexp;
                this._view.liandan.n42.min = 0;
                this._view.liandan.n42.value = this.propData.alchemyexp;
            }
            this.updateAlchemyItem();
        }
    }

    private setSuccess(config: IConfigitem) {
        if (config) {
            this._view.liandan.success.itemname.text = config.name;
            this._view.liandan.success.itemicon.url = "ui://ItemUI/icon_danyao" + this.index + "1";
            this._view.liandan.success.desc.text = config.desc;
            let count: number = Number.parseInt(config.param.toString());
            for (let i = 0; i < this._view.liandan.success.starlist.numChildren; i++) {
                let star = this._view.liandan.success.starlist.getChildAt(i);
                if (i < count) {
                    star.visible = true;
                } else {
                    star.visible = false;
                }
            }
        }
    }

    private updateTime() {
        if (this._view && this._window && this._window.isShowing) {
            if (this.propData.alchemyItem) {
                if (this.propData.endAlchemyTime > TimeUtil.timestamp()) {
                    this._view.liandan.n7.text = TimeUtil.remainDateTime(this.propData.endAlchemyTime, "炼制成功");
                } else {
                    if (!this._view.liandan.success.visible) {
                        this._view.liandan.success.visible = true;
                        this.updateAlchemy();
                    }
                }
            }
        }
    }

    private initAlchemy() {
        this.updateAlchemyUI();
    }

    private onClickAlchemyAD() {
        SDKManager.CreateAD(3, () => {
            msgHandler.inst.sendmsg(protoName.reqAlchemyAD, new proto.reqAlchemyAD({}));
        })
    }

    private onClickAlchemyAward() {
        msgHandler.inst.sendmsg(protoName.reqAlchemyAward, new proto.reqAlchemyAward({}))
    }

    private onClickUse(config: IConfigitem) {
        //msgHandler.inst.sendmsg(protoName.reqUseItem,new proto.reqUseItem({id:config}))
    }

    private onClickAlchemy() {
        let check: boolean = true;
        let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(this.index, this.propData.alchemylevel);
        if (config) {
            var items: string[] = config.needitem.split(";");
            for (let i = 0; i < items.length; i++) {
                let itemConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[i]);
                if (itemConfig) {
                    let neednum: number = Number.parseInt(items[i].split(",")[1]);
                    if (this.getItemNumByItemId(itemConfig.itemid) < neednum) {
                        check = false;
                        break;
                    }
                }
            }
        } else {
            check = false;
        }

        if (check) {
            msgHandler.inst.sendmsg(protoName.reqAlchemy, new proto.reqAlchemy({ index: this.index }))
        } else {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 10);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }

    }

    private updateAlchemyUI() {
        this.updateTypeItem(this._view.liandan.target1.item, 1);
        this.updateTypeItem(this._view.liandan.target2.item, 2);
        this.updateTypeItem(this._view.liandan.target3.item, 3);
        this.updateTypeItem(this._view.liandan.target4.item, 4);
    }

    private updateTypeItem(button: fgui.GButton, type: number) {
        if (this.propData) {
            let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(type, this.propData.alchemylevel);
            if (config != null) {
                var items: string[] = config.needitem.split(";");
                let itemConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[0]);
                button.icon = itemConfig.icon;
                button.title = this.getItemNumByItemId(itemConfig.itemid) + "/" + items[0].split(",")[1];
            }
        }
    }

    private onAlchemyChanged(e) {
        this.index = e.selectedIndex + 1;
        this.updateAlchemyItem();
    }

    private updateAlchemyItem() {
        if (this._view) {
            if (this.masterConfig) {
                let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(this.index, this.masterConfig.level);
                if (config) {
                    this._view.liandan.n6.text = config.name.split("+")[0];
                    let items: string[] = config.needitem.split(";");

                    let item1Config: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[1]);
                    this._view.liandan.need_left.item.title = this.getItemNumByItemId(item1Config.itemid) + "/" + items[1].split(",")[1];
                    this._view.liandan.need_left.item.icon = item1Config.icon;

                    let item2Config: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[2]);
                    this._view.liandan.need_right.item.title = this.getItemNumByItemId(item2Config.itemid) + "/" + items[2].split(",")[1];
                    this._view.liandan.need_right.item.icon = item2Config.icon;

                    let targetConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(config.targeItem);
                    this._view.liandan.targetitem.item.icon = targetConfig.icon;
                }
            }
        }
    }

}