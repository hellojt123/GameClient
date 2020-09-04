/*
 * @Author: Jiangtao
 * @Date: 2019-11-19 14:05:42
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 15:24:38
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import { protoName } from "../../Const/protoName";
import EventManager from "../../Manager/EventManager";
import { gameEvents } from "../../Const/gameEvents";
import { TipsData } from "../../Const/TipsType";
import { TipsType } from "../../Const/TipsType";
import { GameUtil } from "../../Util/GameUtil";
import ConfigUtil from "../../Util/ConfigUtil";


export default class playerHandlers extends baseHandlers {
    constructor() {
        super();
        this.init();
    }

    protected init() {
        msgHandler.inst.addHandler(protoName.resPerExp, this.onResPerExp);
        msgHandler.inst.addHandler(protoName.resPlayerProp, this.resPlayerProp);
        msgHandler.inst.addHandler(protoName.resRank, this.resPlayerRank);
        msgHandler.inst.addHandler(protoName.resBagItems, this.resPlayerBag);
        msgHandler.inst.addHandler(protoName.resChangeItemPos, this.resChangeItemPos);
        msgHandler.inst.addHandler(protoName.resPlayerBody, this.resPlayerBody);
        msgHandler.inst.addHandler(protoName.resSignInfo, this.onResSign);
        msgHandler.inst.addHandler(protoName.resPlayerMail, this.onResPlayerMail);
        msgHandler.inst.addHandler(protoName.resPlayerNewMail, this.onResPlayerNewMail);
        msgHandler.inst.addHandler(protoName.resSystemInfo, this.onResSystemInfo);
        msgHandler.inst.addHandler(protoName.resTransframInfo, this.onResTransframInfo);
        msgHandler.inst.addHandler(protoName.resPlayerDaily, this.onResPlayerDaily);
        msgHandler.inst.addHandler(protoName.resAlchemy, this.onResAlchemy);
        msgHandler.inst.addHandler(protoName.resPlayerMailChange, this.onResPlayerMailChange);
        msgHandler.inst.addHandler(protoName.resMasterRelation, this.onResMasterRelation);
        msgHandler.inst.addHandler(protoName.PlayerParams, this.onPlayerParams);
        msgHandler.inst.addHandler(protoName.resMasterRelationChange, this.onResMasterRelationChange);
        msgHandler.inst.addHandler(protoName.resBuff, this.onResBuff);
        msgHandler.inst.addHandler(protoName.resBuffChange, this.onResBuffChange);
        msgHandler.inst.addHandler(protoName.resPlayerFields, this.onResPlayerFields);
        msgHandler.inst.addHandler(protoName.resXianJin, this.onResXianJin);
        msgHandler.inst.addHandler(protoName.resNumChange, this.onResNumChange);
        msgHandler.inst.addHandler(protoName.resSystemNotice, this.onResSystemNotice);
    }

    onResSystemNotice(data: proto.resSystemNotice) {
        if (data) {
            if (data.id > 0) {
                if (data.id == 1) {
                    var tipsdata: TipsData = new TipsData();
                    tipsdata.type = TipsType.POPUP;
                    tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("lihun", 3);
                    EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
                }
            }
        }
    }

    onResNumChange(data: proto.resNumChange) {
        if (data) {
            if (data.type == 1) {
                let config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(90001);
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.POPUP;
                tipsdata.text = "获得<img src='" + config.icon + "' height='40' width='40'/>" + GameUtil.ConvertNum(data.num);
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            }
        }
    }

    onResXianJin(data: proto.resXianJin) {
        Global.gameManager.playerManager.setPlayerXianJin(data);
    }

    onResPlayerFields(data: proto.resPlayerFields) {
        Global.gameManager.playerManager.setPlayerFields(data);
    }

    onResBuffChange(data: proto.resBuffChange) {
        //Global.gameManager.playerManager.setPlayerBuff(data.players);
    }

    onResBuff(data: proto.resBuff) {
        Global.gameManager.playerManager.setPlayerBuff(data.buffs);
    }

    onResMasterRelationChange(data: proto.resMasterRelationChange) {
        Global.gameManager.playerManager.updateMasterRelationChange(data.player);
    }

    onPlayerParams(data: proto.PlayerParams) {
        Global.gameManager.playerManager.updatePlayerParams(data.params);
    }

    onResMasterRelation(data: proto.resMasterRelation) {
        Global.gameManager.playerManager.updateMasterRelation(data);
    }

    onResPlayerMailChange(data: proto.resPlayerMailChange) {
        Global.gameManager.playerManager.updatePlayerMail(data.mail);
    }

    onResAlchemy(data: proto.resAlchemy) {
        Global.gameManager.playerManager.updateAlchemy(data);
    }

    onResPlayerDaily(data: proto.resPlayerDaily) {
        Global.gameManager.playerManager.updateDaily(data.dailys);
    }

    onResTransframInfo(data: proto.resTransframInfo) {
        Global.gameManager.playerManager.updateTransframInfo(data);
    }

    onResSystemInfo(data: proto.resSystemInfo) {
        EventManager.inst.onEvents(gameEvents.updateSystemInfo, data);
    }

    onResPlayerMail(data: proto.resPlayerMail) {
        Global.gameManager.playerManager.updatePlayerMails(data.mails);
    }

    onResPlayerNewMail(data: proto.resPlayerNewMail) {
        EventManager.inst.onEvents(gameEvents.updateNewMail, data.type);
    }

    onResSign(data: proto.resSignInfo) {
        Global.gameManager.playerManager.updatePlayerSign(data);
    }

    onResPerExp(data: proto.resPerExp) {
        Global.gameManager.playerManager.updatePlayerPerExp(data);
    }

    resPlayerProp(data: proto.resPlayerProp) {
        Global.gameManager.playerManager.updatePlayerProp(data.props);
    }

    resPlayerRank(data: proto.resRank) {
        Global.gameManager.playerManager.updatePlayerRank(data.type, data.players);
    }

    resPlayerBag(data: proto.resBagItems) {
        Global.gameManager.playerManager.updatePlayerBagItemChange(data.bagitem);
    }

    resChangeItemPos(data: proto.resChangeItemPos) {
        Global.gameManager.playerManager.updateChangeItemPos(data.fromPos, data.toPos);
    }

    resPlayerBody(data: proto.resPlayerBody) {
        Global.gameManager.playerManager.updatePlayerBodys(data.playerbodys);
    }
}