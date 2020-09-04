/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-05-11 16:44:54
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import QianDao from "../QianDaoUI/QianDao";
import QianDaoUIBinder from "../QianDaoUI/QianDaoUIBinder";
import TimeUtil from "../../Util/TimeUtil";
import { GameUtil, ItemData } from "../../Util/GameUtil";
import BagItem from "../../Entity/BagItem/BagItem";
import { protoName } from "../../Const/protoName";
import { gameEvents } from "../../Const/gameEvents";
import LoadUtil from "../../Util/LoadUtil";

const { ccclass, property } = cc._decorator;
@ccclass
export default class QianDaoUI extends baseUI {
    public uiname: string = "QianDaoUI";
    public _view: QianDao;
    private cacheName: string;
    onLoad() {
        super.onLoad();

        EventManager.inst.addEvents(gameEvents.updateProp, this.updateProp.bind(this));
    }

    show() {
        super.show();
        this.updateProp();
    }

    init() {
        if (this._view == null) {
            QianDaoUIBinder.bindAll();
            this._view = QianDao.createInstance();
            super.init();
            this.initClick();
            this._view.bg.url = Global.resurl + "loader/qiandaodi.png";
        }

    }

    private updateProp() {
        if (this._view && this._window.isShowing) {
            var config: IConfigactivity = null;
            var str: string = "今日登陆送 \n\r\n\r\n\r";
            this._view.btn_get.text = "领取";
            this._view.btn_get.enabled = true;
            var config: IConfigactivity = ConfigUtil.inst.ConfigActivityContainer.getDayConfigByTypeDay(1, this.propData.logingiftDays);
            if (config) {
                if (TimeUtil.timestamp() < this.propData.logingiftTime) {
                    this._view.btn_get.enabled = false;
                    this._view.btn_get.text = "明日领取";
                    str = "明日登陆送 \n\r\n\r\n\r";
                    config = ConfigUtil.inst.ConfigActivityContainer.getDayConfigByTypeDay(1, this.propData.logingiftDays);
                } else {

                }

                var item: BagItem = <BagItem>this._view.item;
                var itemdata: ItemData[] = GameUtil.getItemConfigByStr(config.awardstr);
                if (itemdata) {
                    let numstr: string = GameUtil.ConvertNum(itemdata[0].itemnum);
                    numstr = numstr.split("").join("\n\r");
                    this._view.award_item.text = str + numstr;
                    item.setIconByItemId(itemdata[0].itemid);
                    this._view.award_title.text = config.title;
                    this._view.solgan.text = config.solgan;
                    this._view.award_desc.text = config.desc;
                    if (config.icon.startsWith("ui://")) {
                        this._view.load_icon.url = config.icon;
                        this._view.load_icon.x = config.posx;
                        this._view.load_icon.y = config.posy;
                        this._view.load_icon.setScale(config.scale, config.scale);
                    } else {
                        this.setIconPackage(config.icon, config.icon2, config)
                    }
                }
            }
        }
    }

    public setIconPackage(package_name: string, res_name: string, config: IConfigactivity) {
        if (package_name && res_name) {
            if (LoadUtil.inst.getByName(package_name)) {
                if (LoadUtil.inst.getItemURL(package_name, res_name)) {
                    this._view.load_icon.url = LoadUtil.inst.getItemURL(package_name, res_name);
                } else {
                    this._view.load_icon.url = LoadUtil.inst.createObject(package_name, res_name).resourceURL;
                }
            } else {
                LoadUtil.inst.LoadPackage(package_name, (err) => {
                    if (!err) {
                        this._view.load_icon.url = LoadUtil.inst.createObject(package_name, res_name).resourceURL;
                    }
                });
            }
            this._view.load_icon.x = config.posx;
            this._view.load_icon.y = config.posy;
            this._view.load_icon.setScale(config.scale, config.scale);
        } else if (package_name == "" && res_name) {

            if (this.cacheName != "" && this.cacheName != res_name) {
                let armature: dragonBones.ArmatureDisplay = this._view.holder.node.getComponent("dragonBones.ArmatureDisplay");
                if (armature) {
                    armature.armature().node.removeFromParent();
                }
                this._view.holder.node.removeAllChildren();
            }
            if (this.cacheName == "" || this.cacheName != res_name) {
                this._view.holder.node.removeAllChildren();
                LoadUtil.inst.LoadDragonBones(res_name, (prefab) => {
                    this.cacheName = res_name;
                    var node = cc.instantiate(prefab);
                    node.setParent(this._view.holder.node);
                    node.setPosition(cc.Vec2.ZERO)
                    node.active = true;
                    if (config) {
                        this._view.holder.x = config.posx
                        this._view.holder.y = config.posy
                        this._view.holder.setScale(config.scale, config.scale)
                    }
                });
            }
        }
    }

    initClick() {
        this._view.btn_get.onClick(this.onClickGet, this);
        this._view.frame.onClick(this.hide, this);
    }

    private onClickGet() {
        msgHandler.inst.sendmsg(protoName.reqLoginGift, new proto.reqLoginGift({}));
    }


    // private onClickTips(){
    //     var tipsdata:TipsData = new TipsData();
    //     tipsdata.type = TipsType.NORAML;     
    //     tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng",1);
    //     EventManager.inst.onEvents(gameEvents.showTips,tipsdata);
    // }
}
