/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-05-11 14:59:11
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import ZhuanSheng from "../ZhuanShengUI/ZhuanSheng";
import ZhuanShengUIBinder from "../ZhuanShengUI/ZhuanShengUIBinder";
import { TipsData } from '../../Const/TipsType';
import { GameUtil } from "../../Util/GameUtil";
import TimeUtil from "../../Util/TimeUtil";
import SDKManager from "../../Manager/SDKManager";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import PlayerHead from "../../Entity/Head/PlayerHead";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ZhuanShengUI extends baseUI {
    public uiname: string = "ZhuanShengUI";
    public _view: ZhuanSheng;

    private heads: PlayerHead[] = []
    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateProp, this.updatePlayerProp.bind(this));
        EventManager.inst.addEvents(gameEvents.updatetransinfo, this.updateTransInfo.bind(this));
    }
    show() {
        super.show();
        msgHandler.inst.sendmsg(protoName.reqTransframInfo, new proto.reqTransframInfo({}));
    }
    init() {
        if (this._view == null) {
            ZhuanShengUIBinder.bindAll();
            this._view = ZhuanSheng.createInstance();
            super.init();

            this.initClick();
            this._view.n35.getChildAt(0).text = "转生";
            this._interval = setInterval(this.updateTime.bind(this), 1000);
            this.heads = [];
            this.heads.push(<PlayerHead>this._view.friend1)
            this.heads.push(<PlayerHead>this._view.friend2)
            this.heads.push(<PlayerHead>this._view.friend3)
            this.heads.push(<PlayerHead>this._view.friend4)
        }

    }

    updateTime() {
        if (this._view && this._window && this._window.isShowing && this.propData) {
            this._view.n63.text = "九转轮回丹需炼制[color=#EC1C0C]" + TimeUtil.remainDateTime(this.propData.endTransTime) + "[/color]";
        }
    }

    initClick() {
        this._view.frame.onClick(this.hide, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
        this._view.btn_zhuan.onClick(this.onClickTrans, this);
        this._view.btn_ad.onClick(this.onClickAd, this);
        this._view.btn_invite.onClick(this.onClickInvite, this)
    }

    private onClickInvite() {
        SDKManager.CreateShare(5, "type=5&inviteid=" + this.propData.id);
    }

    private onClickAd() {
        SDKManager.CreateAD(6, () => {
            msgHandler.inst.sendmsg(protoName.reqTransframAD, new proto.reqTransframAD({}));
        })
    }

    private updateTransInfo(data: proto.resTransframInfo) {
        if (this._view) {
            this._view.n44.text = GameUtil.ConvertNum(data.exp);
            this._view.n47.text = GameUtil.ConvertNum(data.fame);
            let friends: proto.IPlayerRank[] = data.friends;
            for (let i: number = 0; i < this.heads.length; i++) {
                let head = this.heads[i];
                if (i < friends.length) {
                    let friend = friends[i];
                    head.setHead(friend.head);
                } else {
                    head.setHead(null);
                }
            }
        }
    }

    private onClickTrans() {
        if (TimeUtil.timestamp() > this.propData.endTransTime) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.CHOICE;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng", 1);
            tipsdata.ok_callback = () => {
                this.hide();
                EventManager.inst.onEvents(gameEvents.showUI, "XuanZeUI");
            };
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            // this.hide();
            // EventManager.inst.onEvents(gameEvents.showUI, "XuanZeUI");
        } else {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng", 2);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuansheng", 1);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuansheng", 2);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    updatePlayerProp() {
        if (this.propData.layer > 0 && this.propData.level == 1) {
            this.hide();
        }
    }
}
