/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 09:49:17
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import { TipsData } from '../../Const/TipsType';
import HeXiu from "../HeXiuUI/HeXiu";
import HeXiuUIBinder from "../HeXiuUI/HeXiuUIBinder";
import com_taren from "../HeXiuUI/com_taren";
import SDKManager from "../../Manager/SDKManager";
import PlayerHead from "../../Entity/Head/PlayerHead";
import TimeUtil from "../../Util/TimeUtil";
import Role from "../../Entity/Role/Role";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";

const { ccclass, property } = cc._decorator;
@ccclass
export default class HeXiuUI extends baseUI {
    public uiname: string = "HeXiuUI";
    public _view: HeXiu;
    private _friends: com_taren[];

    public get getBuffs(): Map<number, proto.PlayerBuff> {
        return Global.gameManager.playerManager.player.getBuffsByType(1);
    }

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateBuff, this.updateBuff.bind(this));
    }

    show() {
        super.show();
        this.updateSelf();
        msgHandler.inst.sendmsg(protoName.reqBuff, new proto.reqBuff({ type: 1 }));
    }

    init() {
        if (this._view == null) {
            HeXiuUIBinder.bindAll();
            this._view = HeXiu.createInstance();
            super.init();
            this._friends = [];
            this._friends.push(this._view.character_1);
            this._friends.push(this._view.character_2);
            this._friends.push(this._view.character_3);
            this._friends.push(this._view.character_4);
            this._friends.push(this._view.character_5);
            for (let i = 0; i < this._friends.length; i++) {
                let friend = this._friends[i];
                this.initInvite(friend);
            }
            this.initClick();
            this._interval = setInterval(this.updateTime.bind(this), 1000);
            this._view.bg.url = Global.resurl + "loader/bg_friend.png";
        }
    }

    initInvite(tile: com_taren) {
        tile.playername.text = "";
        tile.time.text = "";
        tile.progress_bar.visible = false;
        let role: Role = <Role>tile.btn_main_role;
        role.setStaticAni("fx_1");
        tile.btn_taoqing.onClick(this.onClickInvite, this);
    }

    onClickInvite() {
        SDKManager.CreateShare(2, "type=2&inviteid=" + this.propData.id);
    }

    updateSelf() {
        if (this._view && this._window.isShowing) {
            let role: Role = <Role>this._view.self.main_role;
            role.setStaticAni("fx_1");
            role.setRole(this.propData.level, this.propData.sex);
        }
    }

    updateBuff() {
        if (this._view && this._window.isShowing) {
            for (let i = 0; i < this._friends.length; i++) {
                let tile = this._friends[i];
                tile.playername.text = "";
                tile.progress_bar.visible = false;
                tile.time.text = "";
                tile.tabs.setSelectedIndex(0);
                let head: PlayerHead = <PlayerHead>tile.head;
                head.setHead(null, 1);
                tile.data = null;
                tile.btn_ok.visible = false;
            }
            if (this.getBuffs && this.getBuffs.size > 0) {
                let index: number = 0;
                this.getBuffs.forEach((value, key) => {
                    let tile = this._friends[index];
                    if (tile) {
                        tile.tabs.setSelectedIndex(1);
                        tile.playername.text = value.name;
                        let head: PlayerHead = <PlayerHead>tile.head;
                        head.setHead(value.head, value.sex);
                        let role: Role = <Role>tile.btn_main_role;
                        role.setRole(value.level, value.sex);
                        tile.data = value;
                        tile.btn_ok.clearClick();
                        tile.btn_ok.visible = false;
                        if (value.creatureType == 5) {
                            if (value.activeTime == 0) {
                                tile.btn_ok.onClick(() => {
                                    this.onClickActiveBuff(value.id);
                                })
                                tile.btn_ok.visible = true;
                            }
                        }
                        if (value.activeTime > 0) {
                            this._view.state.text = "修炼中";
                            this._view.mc_hexiu.visible = true;
                        }
                    }
                    index++;
                })
                let config: IConfigbuff = ConfigUtil.inst.ConfigBuffContainer.getConfigById(1);
                if (config) {
                    if (this.getBuffs.size > 0) {
                        this._view.number.text = this.getBuffs.size + "/" + config.limit;
                        this._view.desc.text = "当前自动修为加成：" + this.getBuffs.size * config.param + "倍";
                    } else {
                        this._view.number.text = this.getBuffs.size + "/" + config.limit;
                        this._view.desc.text = "";
                    }
                }
            } else {
                this._view.state.text = "";
                this._view.mc_hexiu.visible = false;
            }
        }
    }

    onClickActiveBuff(id: number) {
        msgHandler.inst.sendmsg(protoName.reqActiveBuff, new proto.reqActiveBuff({ buffid: id }));
    }

    updateTime() {
        if (this._view && this._window && this._window.isShowing) {
            for (let i = 0; i < this._friends.length; i++) {
                let tile = this._friends[i];
                if (tile && tile.data) {
                    let data: proto.PlayerBuff = tile.data;
                    if (data.creatureType == 5) {
                        if (data.activeTime == 0) {
                            let config: IConfigbuff = ConfigUtil.inst.ConfigBuffContainer.getConfigById(data.type);
                            let remain: number = (data.addTime + config.waitTime) - TimeUtil.timestamp();
                            if (remain <= 0) {
                                this.getBuffs.delete(<number>data.id);
                            }
                        } else {
                            let remain: number = (data.activeTime + data.duration) - TimeUtil.timestamp();
                            if (remain > 0) {
                                tile.progress_bar.visible = true;
                                tile.time.text = TimeUtil.dateFormat(remain, false);
                                tile.progress_bar.max = data.duration;
                                tile.progress_bar.min = 0;
                                tile.progress_bar.value = remain;
                            } else {
                                tile.data = null;
                                this.getBuffs.delete(<number>data.id);
                            }
                        }
                    } else {
                        let remain: number = (data.activeTime + data.duration) - TimeUtil.timestamp();
                        if (remain > 0) {
                            tile.progress_bar.visible = true;
                            tile.time.text = TimeUtil.dateFormat(remain, false);
                            tile.progress_bar.max = data.duration;
                            tile.progress_bar.min = 0;
                            tile.progress_bar.value = remain;
                        } else {
                            tile.data = null;
                            this.getBuffs.delete(<number>data.id);
                        }
                    }

                } else {
                    tile.playername.text = "";
                    tile.progress_bar.visible = false;
                    tile.time.text = "";
                    tile.tabs.setSelectedIndex(0);
                    let head: PlayerHead = <PlayerHead>tile.head;
                    head.setHead(null, 1);
                    tile.data = null;
                }
            }
        }
    }

    initClick() {
        this._view.frame.onClick(this.hide, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
    }


    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hexiu", 71001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hexiu", 71002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }
}
