/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-05-11 16:10:19
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import ZhuanSheng from "../ZhuanShengUI/ZhuanSheng";
import ZhuanShengUIBinder from "../ZhuanShengUI/ZhuanShengUIBinder";
import XiTong from "../XiTongUI/XiTong";
import XiTongUIBinder from "../XiTongUI/XiTongUIBinder";
import PlayerHead from "../../Entity/Head/PlayerHead";
import { gameEvents } from "../../Const/gameEvents";
import SDKManager from "../../Manager/SDKManager";

const { ccclass, property } = cc._decorator;
@ccclass
export default class XiTongUI extends baseUI {
    public uiname: string = "XiTongUI";
    public _view: XiTong;

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateSystemInfo, this.updateSystemInfo.bind(this));

    }

    show() {
        super.show();
        msgHandler.inst.sendmsg(protoName.reqSystemInfo, new proto.reqSystemInfo({}));
        this.updateAudio();
    }

    init() {
        if (this._view == null) {
            XiTongUIBinder.bindAll();
            this._view = XiTong.createInstance();
            super.init();
            this.initClick();
            if (Global.isQQ) {
                this._view.n67.visible = false;
            }
        }
    }


    initClick() {
        this._view.frame.onClick(this.hideSave, this);
        this._view.bgm_mute.on(fgui.Event.STATUS_CHANGED, this.bgm_mute_change.bind(this));
        this._view.bgm_volume.on(fgui.Event.STATUS_CHANGED, this.bgm_volume_change.bind(this));

        this._view.button_mute.on(fgui.Event.STATUS_CHANGED, this.button_mute_change.bind(this));
        this._view.button_volume.on(fgui.Event.STATUS_CHANGED, this.button_volume_change.bind(this));

        this._view.n67.onClick(this.onClickCustom, this);
    }

    onClickCustom() {
        SDKManager.openCustomerService();
    }

    public hideSave() {
        Global.gameManager.audioManager.saveAudio();
        this.hide();
    }

    bgm_volume_change(e) {
        Global.gameManager.audioManager.settings.bgm_volume = Number.parseFloat(this._view.bgm_volume.value / 100);
        Global.gameManager.audioManager.updateAudio();

    }

    bgm_mute_change(e) {
        Global.gameManager.audioManager.settings.bgm_mute = this._view.bgm_mute.selected;
        Global.gameManager.audioManager.updateAudio();
    }

    button_volume_change(e) {
        Global.gameManager.audioManager.settings.button_volume = Number.parseFloat(this._view.button_volume.value / 100);
        Global.gameManager.audioManager.updateAudio();

    }

    button_mute_change(e) {
        Global.gameManager.audioManager.settings.button_mute = this._view.button_mute.selected;
        Global.gameManager.audioManager.updateAudio();

    }

    private updateAudio() {
        if (this._view) {
            this._view.bgm_mute.selected = Global.gameManager.audioManager.settings.bgm_mute;
            this._view.bgm_volume.value = Global.gameManager.audioManager.settings.bgm_volume * 100;
            this._view.button_mute.selected = Global.gameManager.audioManager.settings.button_mute;
            this._view.button_volume.value = Global.gameManager.audioManager.settings.button_volume * 100;
        }
    }

    private updateSystemInfo(data: proto.resSystemInfo) {
        if (this._view) {
            let level: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(data.level);
            this._view.n40.text = Global.userinfo.nickname;
            this._view.n44.text = level.name;
            this._view.n65.text = data.layer + "转";
            this._view.n66.text = "ID:" + this.propData.id;
            var head: PlayerHead = <PlayerHead>this._view.n56;
            head.setHead(Global.userinfo.head, Global.userinfo.sex);
            var itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(data.fabaoid);
            if (itemconfig) {
                this._view.n71.text = "法宝:" + itemconfig.name;
            } else {
                this._view.n71.text = "尚未获得";
            }

            var forgetconfig: IConfigforge = ConfigUtil.inst.ConfigForgeContainer.getConfigByLevel(data.forgelevel);
            if (forgetconfig) {
                this._view.n72.text = "练气诀:" + forgetconfig.name;
            } else {
                this._view.n72.text = "尚未获得";
            }

            var petconfig: IConfigpet = ConfigUtil.inst.ConfigPetContainer.getConfigById(data.petid);
            if (petconfig) {
                this._view.n73.text = "仙宠:" + petconfig.name;
                this._view.n74.text = "宠物探险:" + data.petfloor + "层";
            } else {
                this._view.n73.text = "尚未获得";
            }

            if (data.cpname) {
                this._view.n76.text = data.cpname;
            } else {
                this._view.n76.text = "无";
            }
            this._view.n77.text = "当前秒产:" + data.perexp;
        }
    }
}

