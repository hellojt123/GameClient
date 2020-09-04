/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 13:32:18
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import { protoName } from "../../Const/protoName";
import FuLi from "../FuLiUI/FuLi";
import FuLiUIBinder from "../FuLiUI/FuLiUIBinder";
import BagItem from "../../Entity/BagItem/BagItem";
import btn_day from "../FuLiUI/btn_day";
import EventManager from "../../Manager/EventManager";
import TimeUtil from "../../Util/TimeUtil";
import { TipsData } from '../../Const/TipsType';
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";

const { ccclass, property } = cc._decorator;
@ccclass
export default class FuLiUI extends baseUI {
    public uiname: string = "FuLiUI";
    public _view: FuLi;
    private btns: btn_day[] = [];



    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateSign, this.updateSign.bind(this));
    }

    public show() {
        super.show();
        this.reqSignInfo();
    }

    init() {
        if (this._view == null) {
            FuLiUIBinder.bindAll();
            this._view = FuLi.createInstance();
            super.init();
            this.btns = [];
            this.initClick();
            this.initTile();
        }
    }

    private initClick() {
        this._view.frame.onClick(this.hide, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fuli", 31001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fuli", 31002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private updateSign() {
        if (this._view) {
            for (var i: number = 0; i < this.btns.length; i++) {
                var btn: btn_day = this.btns[i];
                if (btn && btn.mc_ring) {
                    btn.mc_ring.visible = false;
                    if (i < this.singData.signDays) {
                        btn.border.visible = true;
                        btn.n6.text = "已领取";
                    } else {
                        if (i == this.singData.signDays) {
                            if (TimeUtil.compareDay(this.singData.lastSignTime) > 0) {
                                btn.border.visible = false;
                                btn.mc_ring.visible = true;
                            } else {
                                btn.border.visible = true;
                            }
                        } else {
                            btn.border.visible = true;
                        }
                    }
                }
            }
        }
    }


    initTile() {

        let sign: Map<number, IConfigsign> = ConfigUtil.inst.ConfigSignContainer.getConfig();
        sign.forEach((config, k) => {
            if (config.days == 1) {
                this.setTile(this._view.btn_day1, config);
            }
            else if (config.days == 2) {
                this.setTile(this._view.btn_day2, config);
            }
            else if (config.days == 3) {
                this.setTile(this._view.btn_day3, config);
            }
            else if (config.days == 4) {
                this.setTile(this._view.btn_day4, config);
            }
            else if (config.days == 5) {
                this.setTile(this._view.btn_day5, config);
            }
            else if (config.days == 6) {
                this.setTile(this._view.btn_day6, config);
            }
            else if (config.days == 7) {
                this.setTile(this._view.btn_day7, config);
            }
        })
    }

    private setTile(tile: btn_day, config: IConfigsign) {
        tile.day.text = config.name;
        tile.n6.text = config.desc;
        var bi: BagItem = <BagItem>tile.item;
        bi.setItem(config.award);
        bi.title = "";
        tile.onClick(this.onClickGetSign, this);
        this.btns.push(tile);
    }

    private onClickGetSign() {
        msgHandler.inst.sendmsg(protoName.reqSign, new proto.reqSign({}))
    }

    private reqSignInfo() {
        msgHandler.inst.sendmsg(protoName.reqSignInfo, new proto.reqSignInfo({}));
    }


}
