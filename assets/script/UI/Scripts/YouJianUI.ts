/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-24 11:06:33
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import YouJian from "../YouJianUI/YouJian";
import Component_youjian from "../YouJianUI/Component_youjian";
import TimeUtil from "../../Util/TimeUtil";
import { TipsData } from '../../Const/TipsType';
import YouJianUIBinder from "../YouJianUI/YouJianUIBinder";
import msgHandler from "../../Net/msgHandler";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import BagItem from "../../Entity/BagItem/BagItem";

const { ccclass, property } = cc._decorator;
@ccclass
export default class YouJianUI extends baseUI {
    public uiname: string = "YouJianUI";
    public _view: YouJian;
    public get mailData(): Map<number, proto.PlayerMail> {
        return Global.gameManager.playerManager.player.getMails();
    }

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateMail, this.updateMail.bind(this));
        EventManager.inst.addEvents(gameEvents.updateMailChange, this.updateMailChange.bind(this));
    }

    show() {
        super.show();
        this.updateMail();
        this.reqPlayerMail();
    }

    init() {
        if (this._view == null) {
            YouJianUIBinder.bindAll();
            this._view = YouJian.createInstance();
            super.init();

            this.initClick();
            this._view.top_title.getChildAt(0).text = "邮件";
        }

        //this._view.maillist.resizeToFit(); 
    }

    reqPlayerMail() {
        msgHandler.inst.sendmsg(protoName.reqPlayerMail, new proto.reqPlayerMail({ page: 1 }));
    }

    initClick() {
        this._view.frame.onClick(this.onClickClose, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
    }

    private onClickClose() {
        var hideicon: boolean = true;
        this.mailData.forEach((value, key) => {
            if (value.state < 2) {
                hideicon = false;
            } else {
                Global.gameManager.playerManager.player.getMails().delete(key);
            }
        });
        if (hideicon) {
            Global.gameManager.uiManager.mainui._view.btn_youjian.visible = false;
        }
        this.hide();
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("youjian", 1);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    updateMailChange(msg: proto.PlayerMail) {

        for (var i = 0; i < this._view.maillist.numChildren; i++) {
            var tile: Component_youjian = <Component_youjian>this._view.maillist.getChildAt(i);
            var data: proto.PlayerMail = tile.data;
            if (data.id == msg.id) {
                this.setTile(tile, msg);
                return;
            }
        }
    }

    updateMail() {
        if (this._view && this._window.isShowing) {
            if (this._view.maillist.numChildren < this.mailData.size) {
                var count: number = this.mailData.size - this._view.maillist.numChildren;
                for (var i: number = 0; i < count; i++) {
                    this._view.maillist.addItemFromPool(Component_youjian.URL);
                }
            }
            for (var i = 0; i < this._view.maillist.numChildren; i++) {
                this._view.maillist.getChildAt(i).visible = false;
            }
            if (this.mailData) {
                var index = 0;
                this.mailData.forEach((value, key) => {
                    var tile: Component_youjian = <Component_youjian>this._view.maillist.getChildAt(index);
                    if (tile) {
                        this.setTile(tile, value);
                    }
                    index++;
                })
            }
        }
    }

    private setTile(tile: Component_youjian, data: proto.PlayerMail) {
        if (data) {
            tile.visible = true;
            tile.data = data;

            if (data.title) {
                tile.n77.text = data.title;
            }
            if (data.icon) {
                let bagitem: BagItem = <BagItem>tile.n76;
                bagitem.seturl(data.icon);
            }
            if (data.state > 1) {
                tile.n79.text = "已读";
            } else {
                tile.n79.text = "点击查看";
            }
            tile.n78.text = TimeUtil.timetrans(data.addTime);
            tile.clearClick();
            tile.onClick(() => { this.onClickMail(tile, data) }, this)
        }
    }

    private onClickMail(tile: Component_youjian, data: proto.PlayerMail) {
        if (data.state < 2) {
            msgHandler.inst.sendmsg(protoName.reqPlayerMailRead, new proto.reqPlayerMailRead({ mailid: data.id }));
        }
        var tipsdata: TipsData = new TipsData();
        tipsdata.title = data.title;
        tipsdata.type = TipsType.MAIL;
        tipsdata.text = data.text;
        tipsdata.award = data.appendix;
        tipsdata.state = data.getState;
        tipsdata.ok_callback = () => {
            msgHandler.inst.sendmsg(protoName.reqPlayerMailGet, new proto.reqPlayerMailGet({ mailid: data.id }));
        };
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

}
