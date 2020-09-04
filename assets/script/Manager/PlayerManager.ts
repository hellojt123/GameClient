/*
 * @Author: Jiangtao
 * @Date: 2019-11-04 10:09:27
 * @LastEditTime: 2020-06-23 08:26:51
 * @LastEditors: Jiangtao
 */

import { PlayerEntity } from '../Entity/Player/PlayerEntity';
import * as proto from "../Net/proto/proto";
import EventManager from './EventManager';
import { gameEvents } from '../Const/gameEvents';
import { TipsData } from '../Const/TipsType';
import { TipsType } from '../Const/TipsType';
import ConfigUtil from '../Util/ConfigUtil';


const { ccclass, property } = cc._decorator;
@ccclass
export default class PlayerManager extends cc.Component {
    //其他玩家
    players: Map<number | Long, PlayerEntity> = new Map<number, PlayerEntity>();
    //当前玩家
    player: PlayerEntity = new PlayerEntity();
    //玩家排行
    ranks: proto.PlayerRank[] = [];
    friendranks: proto.PlayerRank[] = [];
    onLoad() {

    }

    public updateAlchemy(data: proto.resAlchemy) {
        this.player.getProp().endAlchemyTime = data.alchemyEndTime;
        this.player.getProp().alchemyItem = data.alchemyItem;
        this.player.getProp().alchemyexp = data.alchemyexp;
        this.player.getProp().alchemylevel = data.alchemylevel;
        EventManager.inst.onEvents(gameEvents.updateProp, this.player.getProp());
    }

    public updateTransframInfo(data: proto.resTransframInfo) {
        if (this.player.getProp()) {
            this.player.getProp().endTransTime = data.endTransTime;
            this.player.getProp().histroyExp = data.exp;
        }
        EventManager.inst.onEvents(gameEvents.updatetransinfo, data);
    }

    public updateDaily(data: proto.PlayerDaily[]) {
        this.player.setDailys(data);
        EventManager.inst.onEvents(gameEvents.updatedailys, data);
    }

    public updatePlayerProp(data: proto.PlayerProp) {

        if ((this.player.getProp() && this.player.getProp().level != data.level) || !this.player.getProp()) {
            EventManager.inst.onEvents(gameEvents.updatePlayerLevel, data);
        }

        if (this.player.getProp() && data.composelevel > this.player.getProp().composelevel) {
            EventManager.inst.onEvents(gameEvents.updatecomposelevel, data.composelevel);
        }

        EventManager.inst.onEvents(gameEvents.updateguide, data);

        this.player.setProp(data);

        EventManager.inst.onEvents(gameEvents.updateProp, this.player.getProp());
    }

    public updatePlayerBagItem(data: proto.bagItem[]) {
        this.player.setBagItems(data);
        EventManager.inst.onEvents(gameEvents.updateBagItems, data);
    }

    public updatePlayerBagItemChange(data: proto.bagItem[]) {
        this.player.setBagItems(data);
        EventManager.inst.onEvents(gameEvents.updateBagItems, this.player.getBagItems());
    }

    public updatePlayerDaily(data: proto.PlayerDaily[]) {
        this.player.setDailys(data);
        EventManager.inst.onEvents(gameEvents.updatedailys, this.player.getDailys());
    }

    public updatePlayerOffLineExp(data: number) {
        EventManager.inst.onEvents(gameEvents.updatePlayerOffLineExp, data);
    }

    public updatePlayerTask(data: proto.playerTask[]) {
        this.player.setTasks(data);
        EventManager.inst.onEvents(gameEvents.updateTask, this.player.getTasks());
    }

    public updateChangeItemPos(from: number, to: number) {
        this.player.changeItemPos(from, to);
        EventManager.inst.onEvents(gameEvents.updateBagItems, this.player.getBagItems());
    }

    public updatePlayerBodys(data: proto.playerBody[]) {
        this.player.setBodys(data);
        EventManager.inst.onEvents(gameEvents.updateBody, this.player.getBodys());
    }

    public updatePlayerPerExp(data: proto.resPerExp) {
        this.player.setPerExp(Number(data.exp));
        this.player.setCanGetPerExp(Number(data.canGet));
        EventManager.inst.onEvents(gameEvents.updatePerExp, data);
    }

    public updatePlayerMails(data: proto.PlayerMail[]) {
        this.player.setMails(data);
        EventManager.inst.onEvents(gameEvents.updateMail, this.player.getMails());
    }

    public updatePlayerMail(data: proto.PlayerMail) {
        this.player.setMail(data);
        EventManager.inst.onEvents(gameEvents.updateMailChange, data);
    }

    public updatePlayerSign(data: proto.resSignInfo) {
        this.player.setSign(data);
        EventManager.inst.onEvents(gameEvents.updateSign, this.player.getSign());
    }

    public updatePlayerPet(data: proto.petProp[]) {
        this.player.setPet(data);
        EventManager.inst.onEvents(gameEvents.updatePet, this.player.getPet());
    }

    public updatePetAD(data: proto.resPetAD) {
        this.player.setPetAD(data);
        EventManager.inst.onEvents(gameEvents.uppdatePetAD, this.player.getPetAD());
    }

    public updateMasterRelation(data: proto.resMasterRelation) {
        this.player.setMasterRelation(data);
        EventManager.inst.onEvents(gameEvents.updateMasterRelation, this.player.getMasterRelation());
    }

    public updatePlayerParams(data: proto.PlayerParam[]) {
        this.player.updatePlayerParams(data);
        EventManager.inst.onEvents(gameEvents.updateParams, this.player.getParams());
    }

    public updateMasterRelationChange(data: proto.PlayerRelation) {
        this.player.updateMasterRelation(data);
        EventManager.inst.onEvents(gameEvents.updateMasterRelationChange, data);
    }

    public setPlayerBuff(data: proto.PlayerBuff[]) {
        this.player.setPlayerBuff(data);
        EventManager.inst.onEvents(gameEvents.updateBuff, data);
    }


    public updatePlayerBuff(data: proto.PlayerBuff) {
        this.player.updatePlayerBuff(data);
        EventManager.inst.onEvents(gameEvents.updateBuffChange, data);
    }

    public setPlayerDaoLvInfo(data: proto.resDaoLvInfo) {
        if (this.player.getDaoLvInfo() && this.player.getDaoLvInfo().cpname != "") {
            if (data.cpname == "" && data.cpid == 0) {
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.POPUP;
                tipsdata.text = data.cpname + ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("lihun", 2);
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            }
        }
        this.player.setPlayerDaoLvInfo(data);
        EventManager.inst.onEvents(gameEvents.updateDaoLvInfo, data);
    }

    public setTreeAward(data: proto.resTreeAward) {
        this.player.setTreeAward(data.params);
        EventManager.inst.onEvents(gameEvents.updateTreeAward, data.params);
    }

    public setMarrList(data: proto.resMaryyList) {
        this.player.setMarrList(data.list);
        EventManager.inst.onEvents(gameEvents.updateMarryList, data.list);
    }

    public setWeddingInfo(data: proto.resWeddingInfo) {
        if (data.weddingAward) {
            this.player.setWeddingAward(data.weddingAward);
        }
        if (data.currentWedding) {
            this.player.setWedingInfo(data.currentWedding);
        }
        if (data.foods) {
            this.player.setWeddingFoods(data.foods);
        }
        EventManager.inst.onEvents(gameEvents.updateWeddingInfo, data);
    }

    public setWeddingGuests(data: proto.resWeddingGuests) {
        this.player.setWeddingGuests(data.guests);
        EventManager.inst.onEvents(gameEvents.updateWeddingGuests, data);
    }

    public setHongBao(data: proto.resHongBao) {
        EventManager.inst.onEvents(gameEvents.updateHongBao, data);
    }

    public setResSendGift(data: proto.resSendGift) {
        EventManager.inst.onEvents(gameEvents.updateResSendGift, data);
    }

    public setResWeddingRanks(data: proto.resWeddingRanks) {
        this.player.setWeddingRanks(data);
        EventManager.inst.onEvents(gameEvents.updateWeddingRanks, data);
    }

    public setPlayerFields(data: proto.resPlayerFields) {
        this.player.setPlayerFields(data);
        EventManager.inst.onEvents(gameEvents.updatePlayerFields, data);
    }

    public setPlayerXianJin(data: proto.resXianJin) {
        this.player.setPlayerXianJin(data.params);
        EventManager.inst.onEvents(gameEvents.updateXianJin, data);
    }

    public getItemNumByItemId(itemid: number): number {
        let count: number = 0;
        if (itemid == 70001) {
            return <number>this.player.getProp().exp;
        } else if (itemid == 80001) {
            return <number>this.player.getProp().stone;
        } else if (itemid == 90001) {
            return <number>this.player.getProp().fame;
        }
        this.player.getBagItems().forEach((value, key) => {
            if (value && value.itemid == itemid) {
                if (value.num == 0) {
                    value.num = 1;
                }
                count += <number>value.num;
            }
        })
        return count;
    }

    public updatePlayerRank(type: number, datas: proto.PlayerRank[]) {
        if (type == 0) {
            this.ranks = datas;
            EventManager.inst.onEvents(gameEvents.updateRank, this.ranks);
        } else {
            this.friendranks = datas;
            EventManager.inst.onEvents(gameEvents.updateFriendRank, this.friendranks);
        }
    }

    public updatePlayerDropItems(dropitems: proto.resDropItems) {
        this.player.updatePlayerDropItems(dropitems);
    }
}