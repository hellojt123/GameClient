/*
 * @Author: Jiangtao
 * @Date: 2019-11-19 14:05:42
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-23 14:53:34
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import { protoName } from "../../Const/protoName";
import { TipsData } from "../../Const/TipsType";
import { TipsType } from "../../Const/TipsType";
import ConfigUtil from "../../Util/ConfigUtil";
import EventManager from "../../Manager/EventManager";
import { gameEvents } from "../../Const/gameEvents";




export default class weddingHandlers extends baseHandlers {
    constructor() {
        super();
        this.init();
    }

    protected init() {
        msgHandler.inst.addHandler(protoName.resDaoLvInfo, this.onResDaoLvInfo);
        msgHandler.inst.addHandler(protoName.resTreeAward, this.onResTreeAward);
        msgHandler.inst.addHandler(protoName.resOpenMarry, this.onResOpenMarry);
        msgHandler.inst.addHandler(protoName.resMaryyList, this.onResMaryyList);
        msgHandler.inst.addHandler(protoName.resWeddingInfo, this.onResWeddingInfo);
        msgHandler.inst.addHandler(protoName.resWeddingGuests, this.onResWeddingGuests);
        msgHandler.inst.addHandler(protoName.resHongBao, this.onResHongBao);
        msgHandler.inst.addHandler(protoName.resSendGift, this.onResSendGift);
        msgHandler.inst.addHandler(protoName.resWeddingRanks, this.onResWeddingRanks);
    }

    onResWeddingRanks(data: proto.resWeddingRanks) {
        Global.gameManager.playerManager.setResWeddingRanks(data);
    }

    onResSendGift(data: proto.resSendGift) {
        Global.gameManager.playerManager.setResSendGift(data);
    }

    onResHongBao(data: proto.resHongBao) {
        Global.gameManager.playerManager.setHongBao(data);
    }

    onResWeddingGuests(data: proto.resWeddingGuests) {
        Global.gameManager.playerManager.setWeddingGuests(data);
    }

    onResWeddingInfo(data: proto.resWeddingInfo) {
        Global.gameManager.playerManager.setWeddingInfo(data);
    }

    onResMaryyList(data: proto.resMaryyList) {
        Global.gameManager.playerManager.setMarrList(data);
    }

    onResOpenMarry(data: proto.resOpenMarry) {
        if (data.type == 1) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hunyan", 2);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        } else if (data.type == 2) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("hunyan", 4);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }
    }

    onResTreeAward(data: proto.resTreeAward) {
        Global.gameManager.playerManager.setTreeAward(data);
    }

    onResDaoLvInfo(data: proto.resDaoLvInfo) {
        Global.gameManager.playerManager.setPlayerDaoLvInfo(data);
    }
}