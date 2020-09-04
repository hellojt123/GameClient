/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 13:34:43
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import { TipsData } from '../../Const/TipsType';

const { ccclass, property } = cc._decorator;
@ccclass
export default class UI extends baseUI {
    public uiname: string = "xxUI";
    public _view: xx;
    onLoad() {
        super.onLoad();
        //EventManager.inst.addEvents(constAll.gameEvents.updateDailyTask,this.updateTask.bind(this));         
    }
    show() {
        super.show();
    }
    init() {
        if (this._view == null) {
            // xxUIBinder.bindAll(); 
            // this._view = xx.createInstance();
            super.init();

            this.initClick();
        }

    }

    initClick() {

    }


    // private onClickTips(){
    //     var tipsdata:TipsData = new TipsData();
    //     tipsdata.type = constAll.TipsType.NORAML;     
    //     tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng",1);
    //     EventManager.inst.onEvents(constAll.gameEvents.showTips,tipsdata);
    // }
}
