/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 09:14:56
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import { TipsData } from '../../Const/TipsType';
import xuanze from "../XuanZeUI/xuanze";
import XuanZeUIBinder from "../XuanZeUI/XuanZeUIBinder";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import Role from "../../Entity/Role/Role";

const { ccclass, property } = cc._decorator;
@ccclass
export default class XuanZeUI extends baseUI {
    public uiname: string = "XuanZeUI";
    public _view: xuanze;
    private tab_sex_index: number = 0;

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updatePlayerLevel, this.updatePlayerProp.bind(this));
    }

    show() {
        super.show();
        this.changeRole();
    }

    init() {
        if (this._view == null) {
            XuanZeUIBinder.bindAll();
            this._view = xuanze.createInstance();
            super.init();
            this._view.tab_sex.on(fgui.Event.STATUS_CHANGED, this.onSexChanged, this);
            this.initClick();
            let role: Role = <Role>this._view.main_role;
            role.holder.visible = false;
            this._view.bg.url = Global.resurl + "loader/bg_friend.png";
        }
    }

    onSexChanged(e: fgui.Controller) {
        this.tab_sex_index = e.selectedIndex;
        this.changeRole();
    }

    changeRole() {
        let role: Role = <Role>this._view.main_role;
        role.setRole(ConfigUtil.inst.configPlayerLevel.getConfig().size, this.tab_sex_index);
        role.setStopAni(true);
    }

    updatePlayerProp() {
        if (this.propData && this.propData.choseSex == 1) {
            this.hide();
        }
    }

    initClick() {
        this._view.btn_ok.onClick(this.onClickChoseSex, this)
    }

    private onClickChoseSex() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.title = "转世重修";
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xuanze", 1);
        tipsdata.ok_callback = this.sendChoseSex.bind(this);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }


    private sendChoseSex() {
        this.hide();
        EventManager.inst.onEvents(gameEvents.playTransform, this.tab_sex_index);
    }

}
