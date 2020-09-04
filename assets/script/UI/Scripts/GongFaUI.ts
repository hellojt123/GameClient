/*
 * @Author: Jiangtao
 * @Date: 2019-11-26 13:26:03
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 08:32:01
 */

import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";
import msgHandler from "../../Net/msgHandler";
import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import { protoName } from "../../Const/protoName";
import GongFa from "../GongFaUI/GongFa";
import GongFaUIBinder from "../GongFaUI/GongFaUIBinder";
import title_body from "../GongFaUI/title_body";
import { TipsData } from '../../Const/TipsType';
import { GameUtil } from "../../Util/GameUtil";
import BagItem from "../../Entity/BagItem/BagItem";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";


export default class GongFaUI extends baseUI {
    public uiname: string = "GongFaUI";
    public _view: GongFa;
    private _bodys: Map<number, title_body>;
    private _index: number = 0;
    private _type: number = 0;
    private _mul: number = 1;
    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateBody, this.updatePlayerBodys.bind(this));

    }

    public show() {
        super.show();
        msgHandler.inst.sendmsg(protoName.reqPlayerBody, new proto.reqPlayerBody({}));
    }

    init() {
        if (this._view == null) {
            GongFaUIBinder.bindAll();
            this._view = GongFa.createInstance();
            super.init();
            this._bodys = new Map<number, title_body>();
            this._bodys.set(1, this._view.tile_body1);
            this._bodys.set(2, this._view.tile_body2);
            this._bodys.set(3, this._view.tile_body3);
            this._bodys.set(4, this._view.tile_body4);
            this._bodys.set(5, this._view.tile_body5);
            this._bodys.set(6, this._view.tile_body6);
            this._bodys.set(7, this._view.tile_body7);
            this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
            this._view.toptitle.getChildAt(0).text = "功法";
            this.initClick();
            this._view.bg.url = Global.resurl + "loader/bg_gf.png";
        }
    }

    private initClick() {
        this._view.frame.onClick(this.hide, this);
        this._view.n48.onClick(this.onClickChangeType, this);
        this._view.n49.onClick(this.onClickUpLevel, this);
        this._view.n50.onClick(this.onClickUpLayer, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("gongfa", 101001);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("gongfa", 101002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickUpLayer() {
        msgHandler.inst.sendmsg(protoName.reqUpLayerBody, new proto.reqUpLayerBody({ bodytype: this._index + 1 }));
    }

    private onClickUpLevel() {
        let btn: title_body = this._bodys.get(this._index + 1);
        if (btn) {
            btn.success.visible = true;
            btn.success.setPlaySettings(0, -1, 1, 0, () => {
                btn.success.visible = false;
            })
        }
        msgHandler.inst.sendmsg(protoName.reqUpLevelBody, new proto.reqUpLevelBody({ bodytype: this._index + 1, uptype: this._type }));
    }

    private endPlay() {

    }

    private onClickChangeType() {
        if (this._type > 3) {
            this._type = 0;
        }
        if (this._type == 0) {
            this._view.n48.title = "x1";
            this._mul = 1;
        } else if (this._type == 1) {
            this._view.n48.title = "x5";
            this._mul = 5;
        } else if (this._type == 2) {
            this._view.n48.title = "x10";
            this._mul = 10;
        } else if (this._type == 3) {
            this._view.n48.title = "x20";
            this._mul = 20;
        }
        this._type++;
        this.updatePlayerBodys();
    }

    private onChanged(e) {
        this._index = e.selectedIndex;
        this.updateBodysUI();
        this.updatePlayerBodys();
    }

    private updateBodysUI() {
        if (this._view) {
            let btn: title_body = this._bodys.get(this._index + 1);
            if (btn && btn.data && btn.data.config) {
                let config: IConfigbody = btn.data.config;
                let value: proto.playerBody = btn.data.value;
                this._view.n26.text = config.name;
                let nextconfig: IConfigbody = ConfigUtil.inst.ConfigbodyContainer.getConfigByTypeLayer(this._index + 1, value.layer + 1);
                this._view.n30.text = "效果:每秒凝聚" + GameUtil.ConvertNum(config.addexp * value.level);
                if (nextconfig) {
                    this._view.n45.text = "x" + config.layer_mul + "(下阶x" + nextconfig.layer_mul + "倍)"
                }
                let items: string[] = config.layer_need.split(";");
                let itemdetile: string[] = items[0].split(",");
                let itemConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[0]);
                if (itemConfig) {
                    let hasNum: number = Global.gameManager.playerManager.getItemNumByItemId(itemConfig.itemid);
                    let needNum: number = Number.parseInt(itemdetile[1]);
                    if (hasNum >= needNum) {
                        this._view.n53.text = "[color=#00FFFF]消耗:" + Global.gameManager.playerManager.getItemNumByItemId(itemConfig.itemid) + "/" + needNum;
                    } else {
                        this._view.n53.text = "[color=#FF0000]消耗:" + Global.gameManager.playerManager.getItemNumByItemId(itemConfig.itemid) + "/" + needNum;
                    }
                    var bi: BagItem = <BagItem>this._view.n52;
                    bi.setIconByItemId(itemConfig.itemid);
                    bi.setIcon(itemConfig.icon2);
                } else {
                    this._view.n53.text = "";
                }
            }
        }
    }

    private updatePlayerBodys() {
        if (this._view) {
            this.bodyData.forEach((value, key) => {
                let btn: title_body = this._bodys.get(key);
                if (btn) {
                    let config: IConfigbody = ConfigUtil.inst.ConfigbodyContainer.getConfigByTypeLayer(key, value.layer);
                    if (config) {
                        btn.level.text = "LV" + value.level;
                        let num: number = 0;
                        for (let i: number = 0; i < this._mul; i++) {
                            num += config.needexp * Math.pow(config.cost_mul, value.level + i)
                        }
                        btn.desc.text = "消耗" + GameUtil.ConvertNum(num);
                        btn.data = { config: config, value: value };
                        if (key == this._index + 1) {
                            if (this.propData.exp >= num) {
                                this._view.n49.enabled = true;
                            } else {
                                this._view.n49.enabled = false;
                            }
                            this.updateBodysUI();
                        }
                    }
                }
            })
        }
    }
}