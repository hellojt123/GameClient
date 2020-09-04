/*
 * @Author: Jiangtao
 * @Date: 2019-12-11 13:57:39
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 09:49:08
 */

import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";
import msgHandler from "../../Net/msgHandler";
import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import { protoName } from "../../Const/protoName";
import FeiGe from "../FeiGeUI/FeiGe";
import FeiGeUIBinder from "../FeiGeUI/FeiGeUIBinder";
import TimeUtil from "../../Util/TimeUtil";
import { GameUtil } from "../../Util/GameUtil";
import { gameEvents } from "../../Const/gameEvents";
const { ccclass, property } = cc._decorator;


@ccclass
export default class FeiGeUI extends baseUI {
    public uiname: string = "FeiGeUI";
    public _view: FeiGe;
    // private btns:btn_tab[] = []
    private _config: IConfigqa;
    private _answer: Map<number, string> = new Map<number, string>();
    private _answerDesc: Map<number, string> = new Map<number, string>();
    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateQA, this.updateData.bind(this));
        EventManager.inst.addEvents(gameEvents.updateQAReward, this.updateQAReward.bind(this));
    }

    show() {
        super.show();
        if (this._view) {
            this._view.wenda.line1.text = "";
            this._view.wenda.line2.text = "";
            this._view.wenda.line3.text = "";
            this._view.wenda.line4.text = "";

            this._view.daan.answer_desc1.text = "";
            this._view.daan.answer_desc2.text = "";
            this._view.daan.answer_desc3.text = "";
            this._view.daan.answer_desc4.text = "";
            this._view.wenda.a1.text = "";
            this._view.wenda.a2.text = "";
            this._answer.clear();
            this._answerDesc.clear();
            this._view.tabs.setSelectedIndex(0);
            this.updateQA();
        }
    }

    init() {
        if (this._view == null) {
            FeiGeUIBinder.bindAll();
            this._view = FeiGe.createInstance();
            super.init();
            this.initOnClick();
            this._view.bg.url = Global.resurl + "loader/fg_bg.png";
        }
    }

    initOnClick() {
        this._view.wenda.a1.onClick(this.onClickAnswer1, this);
        this._view.wenda.a2.onClick(this.onClickAnswer2, this);
        this._view.frame.onClick(this.hide, this);
    }

    updateData(data: proto.resQA) {
        if (data) {
            this._config = ConfigUtil.inst.ConfigQAContainer.getConfigById(data.id);
            this.updateQA();
        }
    }

    private updateQA() {
        if (this._view && this._window && this._window.isShowing && this._config) {
            this.updateUI();
        }
    }

    private updateQAReward(data: proto.resQAReward) {
        if (data.rewards) {
            var items: string[] = data.rewards.split(";");
            if (items) {
                var item: string[] = items[0].split(",");
                var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(Number.parseInt(item[0]));
                this._view.daan.n35.text = "获得<img src='" + config.icon + "' height='34' width='34'/>" + GameUtil.ConvertNum(item[1]);
            }
        }
        EventManager.inst.onEvents(gameEvents.updatHideBird, false);
    }

    private updateDaAn(type: number) {
        this._view.daan.answer.text = "您的选择是:" + this._answer.get(type);
        var arr = this.splitStr(this._answerDesc.get(type));
        this._view.daan.answer_desc1.text = arr[0];
        if (arr.length > 1)
            this._view.daan.answer_desc2.text = arr[1];
        if (arr.length > 2)
            this._view.daan.answer_desc3.text = arr[2];
        if (arr.length > 3)
            this._view.daan.answer_desc4.text = arr[3];

        this._view.daan.now.text = TimeUtil.number2Chinese(TimeUtil.timestamp())
    }

    private updateUI() {
        if (this._view && this._config && this._config.desc) {
            this._view.wenda.playername.text = "用户：" + Global.userinfo.nickname;
            if (this._config.desc) {

                var arr = this.splitStr(this._config.desc);

                this._view.wenda.line1.text = arr[0];
                if (arr.length > 1)
                    this._view.wenda.line2.text = arr[1];
                if (arr.length > 2)
                    this._view.wenda.line3.text = arr[2];
                if (arr.length > 3)
                    this._view.wenda.line4.text = arr[3];
            }

            if (this._config.options) {
                var answers: string[] = this._config.options.split(";");
                this._answer.set(0, answers[0].split(",")[0])
                this._answer.set(1, answers[1].split(",")[0])
                this._answerDesc.set(0, answers[0].split(",")[1])
                this._answerDesc.set(1, answers[1].split(",")[1])
                this._view.wenda.a1.text = this._answer.get(0);
                this._view.wenda.a2.text = this._answer.get(1);
            }
            this._view.wenda.now.text = TimeUtil.number2Chinese(TimeUtil.timestamp())
        }
    }

    private splitStr(intstr: string): string[] {
        var str = intstr;
        var f = 17, arr: string[] = [], i = 0, le = str.length / f;
        while (i < le) {
            var strs = str.substr(0, f);
            str = str.substring(f);
            arr.push(strs);
            i++;
        }
        return arr;
    }

    public onClickAnswer1() {
        this._view.tabs.setSelectedIndex(1);
        this.updateDaAn(0);
        msgHandler.inst.sendmsg(protoName.reqQA, new proto.reqQA({ id: this._config.id, answer: 0 }))
    }

    public onClickAnswer2() {
        this._view.tabs.setSelectedIndex(1);
        this.updateDaAn(1);
        msgHandler.inst.sendmsg(protoName.reqQA, new proto.reqQA({ id: this._config.id, answer: 1 }))
    }



}