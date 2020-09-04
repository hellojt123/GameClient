/*
 * @Author: Jiangtao
 * @Date: 2019-11-22 11:04:54
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 08:04:33
 */
import EventManager from "../../Manager/EventManager";
import * as proto from "../../Net/proto/proto"
import ConfigUtil from "../../Util/ConfigUtil";
import TimeUtil from "../../Util/TimeUtil";
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import { protoName } from "../../Const/protoName";
import QiuQian from "../QiuQianUI/QiuQian";
import QiuQianUIBinder from "../QiuQianUI/QiuQianUIBinder";
import { TipsData } from '../../Const/TipsType';
import text_tile from "../QiuQianUI/text_tile";
import SDKManager from "../../Manager/SDKManager";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";

export default class QiuQianUI extends baseUI {
    public uiname: string = "QiuQianUI";
    public _view: QiuQian;
    public _list: fgui.GList;
    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateProp, this.updatePlayerProp.bind(this));
    }



    public show() {
        super.show();

        this.updatePlayerProp();
    }

    init() {
        if (this._view == null) {
            QiuQianUIBinder.bindAll();
            this._view = QiuQian.createInstance();
            super.init();

            this._interval = setInterval(this.updateTime.bind(this), 1000);
            this._list = this._view.book.list;
            this.initClick();
            this._view.book.qian_qiantong01.btn_qiuqian.text3.text = "重抽";
            this._view.qian_qiantong01.btn_qiuqian.n48.visible = false;
        }
    }

    private initClick() {
        this._view.qian_qiantong01.btn_qiuqian.onClick(this.onClickPrayer, this);
        this._view.book.frame.onClick(this.onClickBookClose, this);
        this._view.book.qian_qiantong01.btn_qiuqian.onClick(this.onClickPrayer, this);
        this._view.frame.onClick(this.onClickClose, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("qiuqian", 21001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("qiuqian", 21002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickClose() {
        if (!this._view.qian_qiantong01.t2.playing) {
            this.hide();
        }
    }

    private onClickBookClose() {
        this._view.book.visible = false;

    }
    private clickgap: number = 0;
    private onClickPrayer(e) {
        if (TimeUtil.timestamp() - this.clickgap > 2) {
            this.clickgap = TimeUtil.timestamp();
            if (this._view.book.visible == true) {
                this._view.book.visible = false;
            }
            var me = this;
            if (TimeUtil.timestamp() > this.propData.endprayer) {
                msgHandler.inst.sendmsg(protoName.reqPrayer, new proto.reqPrayer({ type: 0 }));
                this._view.qian_qiantong01.t2.play(this.onShakeComplate.bind(this))
            } else {
                SDKManager.CreateAD(5, () => {
                    msgHandler.inst.sendmsg(protoName.reqPrayer, new proto.reqPrayer({ type: 1 }));
                    me._view.qian_qiantong01.t2.play(this.onShakeComplate.bind(me))
                })
            }
        }
    }

    private onShakeComplate() {
        this.doAnimation();
    }

    public doAnimation(): void {
        this._view.book.setPivot(0.5, 0.5);
        this._view.book.setScale(0.1, 0.1);
        this._view.book.visible = true;
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.2)
            .setTarget(this, this.updateScale.bind(this))
            .setEase(fgui.EaseType.Linear)
    }

    private updateScale(x: number, y: number) {
        this._view.book.setScale(x, y);
    }


    public dispose() {
        this._view.dispose();
    }

    private updatePlayerProp() {
        if (this._view) {
            this._view.book.visible = false;
            let prayer: IConfigprayer = ConfigUtil.inst.ConfigPrayerContainer.getConfigByPrayerId(this.propData.prayerid);
            if (TimeUtil.timestamp() > this.propData.endprayer) {
                this._view.n49.text = "当前签文无加成";
                this._view.n53.text = "";
            } else {
                this._view.n49.text = "当前签文加成x" + prayer.mul;

                var textarr = this.splitStr(prayer.desc);
                var index = 0;
                for (var i = this._list.numChildren - 1; i >= 0; i--) {
                    var tile: text_tile = <text_tile>this._list.getChildAt(i);
                    if (index < textarr.length) {
                        tile.n0.text = textarr[index];
                    } else {
                        tile.n0.text = "";
                    }
                    index++;
                }
                this._view.qian_qiantong01.qian.desc.text = prayer.name;
                this._view.book.Component_qian.desc.text = prayer.name;
                this._view.book.time.text = TimeUtil.number2Chinese(TimeUtil.timestamp());
            }
        }
    }

    private splitStr(intstr: string): string[] {
        var str = intstr;
        var f = 12, arr: string[] = [], i = 0, le = str.length / f;
        while (i < le) {
            var strs = str.substr(0, f);
            str = str.substring(12);
            arr.push(strs);
            i++;
        }
        return arr;
    }

    private updateTime() {
        if (this._view && this._window && this._window.isShowing) {
            if (this.propData && this.propData.endprayer > TimeUtil.timestamp()) {
                this._view.qian_qiantong01.btn_qiuqian.n48.visible = true;
                this._view.n53.text = "剩余时间:[color=#00FFFF]" + TimeUtil.remainDateTime(this.propData.endprayer, "") + "[/color]";
            } else {
                this._view.qian_qiantong01.btn_qiuqian.n48.visible = false;
            }
        }

    }
}