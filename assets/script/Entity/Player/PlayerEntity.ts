/*
 * @Author: Jiangtao
 * @Date: 2019-11-13 16:34:33
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-23 09:18:33
 */
import { baseEntity } from "../Base/baseEntity";
import * as proto from "../../Net/proto/proto";
import EventManager from "../../Manager/EventManager";
import { gameEvents } from "../../Const/gameEvents";

export class PlayerEntity extends baseEntity {
    static ITEM_START: number = 0;
    static MAX_ITEM_NUM: number = 9;

    static EQUIP_START: number = 1000;
    static MAX_EQUIP_NUM: number = 1100;

    static LIANDAN_START: number = 1200;
    static LIANDAN_NUM: number = 1300;

    static BOOKS_TART: number = 1400;
    static BOOK_NUM: number = 1500;



    static MAIN: number = 1;
    static EXT: number = 2;
    static DAILY: number = 3;

    static NORMAL: number = 0;   //保留
    static ACCEPT: number = 1;  //已接受
    static SUBMIT: number = 2;  //可提交  --非自动完成时候,需客户端主动完成
    static DONE: number = 3;   //已完成--此状态只存在给客户端发送完成,一般完成后需要删除,为防止空指针,发送完后手动删除
    static REMOVE: number = 4; //删除 --一般用于刷新任务,任务此时状态未完成


    private props: proto.PlayerProp;
    private signInfo: proto.resSignInfo;
    private perExp: number;
    private canGetPerExp: number;
    private bagItems: Map<number, proto.bagItem> = new Map<number, proto.bagItem>();
    private equips: Map<number, proto.bagItem> = new Map<number, proto.bagItem>();
    private bodys: Map<number, proto.playerBody> = new Map<number, proto.playerBody>();
    private mails: Map<number, proto.PlayerMail> = new Map<number, proto.PlayerMail>();
    private pets: Map<number, proto.petProp> = new Map<number, proto.petProp>();
    private dailys: Map<number, proto.PlayerDaily> = new Map<number, proto.PlayerDaily>();
    // private tasks:Map<number,proto.playerTask> = new Map<number,proto.playerTask>();
    private tasks: Map<number, Map<number, proto.playerTask>> = new Map<number, Map<number, proto.playerTask>>();
    private master: proto.PlayerRelation;
    private masterRelation: proto.PlayerRelation[] = [];
    private graduateRelation: proto.PlayerRelation[] = [];
    private petAD: proto.resPetAD;
    private dropItems: Map<number, proto.DropItem> = new Map<number, proto.DropItem>();
    private buffs: Map<number, Map<number, proto.PlayerBuff>> = new Map<number, Map<number, proto.PlayerBuff>>();
    private params: Map<number, number> = new Map<number, number>();
    private daolvinfo: proto.resDaoLvInfo;
    private treeawards: Map<number, number> = new Map<number, number>();
    private marrylist: proto.WeddingInfo[] = [];
    private currentWeddingAward: proto.WeddingAwardMsg = new proto.WeddingAwardMsg();
    private currentWeddingInfo: proto.WeddingInfo = new proto.WeddingInfo();
    private weddingGuests: proto.PlayerRank[] = [];
    private selfWeddingRank: proto.WeddingRank = new proto.WeddingRank();
    private weddingRanks: proto.WeddingRank[] = [];
    private weddingFoods: Map<number, string> = new Map<number, string>();
    private playerFields: proto.resPlayerFields = new proto.resPlayerFields();
    private xianjin: Map<number, proto.PlayerParam> = new Map<number, proto.PlayerParam>();

    constructor() {
        super();
    }

    setSign(data: proto.resSignInfo) {
        this.signInfo = data;
    }

    setProp(data: proto.PlayerProp) {
        this.props = data;
    }

    setPerExp(data: number) {
        this.perExp = data;
    }

    setMails(data: proto.PlayerMail[]) {
        for (let i = 0; i < data.length; i++) {
            this.mails.set(<number>data[i].id, data[i]);
        }
    }

    setMail(data: proto.PlayerMail) {
        this.mails.set(<number>data.id, data);
    }

    setPet(data: proto.petProp[]) {
        for (let i = 0; i < data.length; i++) {
            this.pets.set(data[i].type, data[i]);
        }
    }
    setPetAD(data: proto.resPetAD) {
        this.petAD = data;
    }

    setBodys(data: proto.playerBody[]) {
        for (let i = 0; i < data.length; i++) {
            this.bodys.set(data[i].type, data[i]);
        }
    }

    setBagItems(data: proto.bagItem[]) {
        var newitems: proto.bagItem[] = [];
        for (let i = 0; i < data.length; i++) {
            let item: proto.bagItem = data[i];
            if (item.index < 9999) {
                if (item.stats > 3) {
                    this.bagItems.delete(Number(item.index));
                } else {
                    var org = this.bagItems.get(Number(item.index));
                    if (org) {
                        var newitem = new proto.bagItem();
                        newitem.itemid = data[i].itemid;
                        newitem.num = data[i].num - org.num;
                        newitem.stats = data[i].stats;
                        newitems.push(newitem);
                    }
                    this.bagItems.set(Number(item.index), item);
                }
            }
        }
        EventManager.inst.onEvents(gameEvents.updateBagItemChange, newitems);
    }

    setDailys(data: proto.PlayerDaily[]) {
        for (let i = 0; i < data.length; i++) {
            var daily: proto.PlayerDaily = data[i];
            this.dailys.set(daily.dailyid, daily);
        }
    }



    setTasks(data: proto.playerTask[]) {
        for (let i = 0; i < data.length; i++) {
            let task: proto.playerTask = data[i];
            if (!this.tasks.has(task.type)) {
                this.tasks.set(task.type, new Map<number, proto.playerTask>());
            }
            var map: Map<number, proto.playerTask> = this.tasks.get(task.type);
            if (task.state == PlayerEntity.REMOVE) {
                map.delete(Number(task.id))
            } else {
                map.set(Number(task.id), task);
            }
        }
    }

    setMasterRelation(data: proto.resMasterRelation) {
        this.master = <proto.PlayerRelation>data.master;
        this.masterRelation = [];
        this.graduateRelation = [];
        let list: proto.PlayerRelation[] = data.players;
        for (let i = 0; i < list.length; i++) {
            var Relation: proto.PlayerRelation = list[i];
            if (Relation.graduate && Relation.graduate == 1) {
                this.graduateRelation.push(Relation);
            } else {
                this.masterRelation.push(Relation);
            }
        }
    }

    updateMasterRelation(data: proto.PlayerRelation) {
        if (data.graduate == 0) {
            let find: boolean = false;
            for (var i = 0; i < this.masterRelation.length; i++) {
                let val = this.masterRelation[i];
                if (val.playerid == data.playerid) {
                    this.masterRelation[i] = data;
                    find = true;
                }
            }
            if (!find) {
                this.masterRelation.push(data);
            }
        } else if (data.graduate == 1) {
            this.masterRelation = this.masterRelation.filter(val =>
                val.playerid !== data.playerid
            )
            this.graduateRelation.push(data);
            EventManager.inst.onEvents(gameEvents.updateGraduateTips, data);
        } else if (data.graduate == 2) {
            this.masterRelation = this.masterRelation.filter(val =>
                val.playerid !== data.playerid
            )
        }
    }

    updatePlayerParams(data: proto.PlayerParam[]) {
        if (data) {
            data.forEach((value) => {
                this.params.set(value.ParamKey, value.ParamValue);
            })
        }
    }

    updatePlayerDropItems(data: proto.resDropItems) {
        if (data.type == 1) {
            var array: proto.DropItem[] = data.dropitems;
            array.forEach((value) => {
                var item = this.dropItems.get(value.itemid);
                if (item) {
                    item.num += <number>value.num;
                } else {
                    this.dropItems.set(value.itemid, value);
                }
            })
        }
    }

    setPlayerBuff(data: proto.PlayerBuff[]) {
        for (let i: number = 0; i < data.length; i++) {
            let value: proto.PlayerBuff = data[i];
            if (!this.buffs.has(value.type)) {
                this.buffs.set(value.type, new Map<number, proto.PlayerBuff>());
            }
            let datas: Map<number, proto.PlayerBuff> = this.buffs.get(value.type);
            datas.set(<number>value.id, value);
        }
    }

    updatePlayerBuff(data: proto.PlayerBuff) {
        if (!this.buffs.has(data.type)) {
            this.buffs.set(data.type, new Map<number, proto.PlayerBuff>());
        }
        let buffmap = this.buffs.get(data.type);
        buffmap.set(<number>data.id, data);
    }

    setPlayerDaoLvInfo(data: proto.resDaoLvInfo) {
        this.daolvinfo = data;
    }

    setTreeAward(data: proto.PlayerParam[]) {
        let params: proto.PlayerParam[] = data;
        params.forEach((value) => {
            this.treeawards.set(value.ParamKey, value.ParamValue);
        })
    }

    setMarrList(data: proto.WeddingInfo[]) {
        this.marrylist = data;
    }

    setWedingInfo(data: proto.WeddingInfo) {
        this.currentWeddingInfo = data;
    }

    setWeddingAward(data: proto.WeddingAwardMsg) {
        this.currentWeddingAward = data;
    }

    setWeddingFoods(data: proto.WeddingFoodInfo[]) {
        this.weddingFoods.clear();
        data.forEach((value) => {
            this.weddingFoods.set(value.time, value.award);
        })
    }

    setWeddingGuests(data: proto.PlayerRank[]) {
        this.weddingGuests = data;
    }

    setWeddingRanks(data: proto.resWeddingRanks) {
        this.selfWeddingRank = <proto.WeddingRank>data.self;
        this.weddingRanks = data.list;
    }

    setPlayerFields(data: proto.resPlayerFields) {
        this.playerFields = data;
    }

    setPlayerXianJin(data: proto.PlayerParam[]) {
        data.forEach((value) => {
            this.xianjin.set(value.aid, value);
        })
    }

    changeItemPos(from: number, to: number) {

        let fromItem: proto.bagItem = this.bagItems.get(from);
        let toItem: proto.bagItem = this.bagItems.get(to);

        this.bagItems.set(from, toItem);
        this.bagItems.set(to, fromItem);
    }

    setCanGetPerExp(data: number) {
        this.canGetPerExp = data;
    }

    getCanGetPerExp() {
        return this.canGetPerExp;
    }

    getProp(): proto.PlayerProp {
        return this.props;
    }
    getPerExp(): number {
        return this.perExp;
    }

    getBodys() {
        return this.bodys;
    }

    getPet(type: number = 1) {
        return this.pets.get(type);
    }

    getPetAD() {
        return this.petAD;
    }

    getBagItems(): Map<number, proto.bagItem> {
        return this.bagItems;
    }

    getTasks(): Map<number, Map<number, proto.playerTask>> {
        return this.tasks;
    }

    getDailyTasks(): Map<number, proto.playerTask> {
        return this.tasks.get(PlayerEntity.DAILY);
    }

    getExtTasks(): Map<number, proto.playerTask> {
        return this.tasks.get(PlayerEntity.EXT);
    }

    getSign() {
        return this.signInfo;
    }

    getMails() {
        return this.mails;
    }
    getDailys() {
        return this.dailys;
    }

    getDropItems() {
        return this.dropItems;
    }

    resetDropItems() {
        this.dropItems = new Map<number, proto.DropItem>();
    }

    getBagEmptyPos() {
        for (var i = PlayerEntity.ITEM_START; i < PlayerEntity.MAX_ITEM_NUM; i++) {
            var item = this.bagItems.get(i);
            if (item == null) {
                return i;
            }
        }
        return -1;
    }

    getMaster() {
        return this.master;
    }

    getMasterRelation() {
        return this.masterRelation;
    }

    getGraduateRelation() {
        return this.graduateRelation;
    }

    getParams(): Map<number, number> {
        return this.params;
    }

    getBuffsByType(type: number) {
        return this.buffs.get(type);
    }

    getBuffs() {
        return this.buffs;
    }

    getDaoLvInfo() {
        return this.daolvinfo;
    }

    getTreeAwards() {
        return this.treeawards;
    }

    getWeddingList() {
        return this.marrylist;
    }

    getWeddingInfo() {
        return this.currentWeddingInfo;
    }

    getWeddingAward() {
        return this.currentWeddingAward;
    }

    getWeddingGuests() {
        return this.weddingGuests;
    }

    getSelfWeddingRank() {
        return this.selfWeddingRank;
    }

    setSelfWeddingRank(data: proto.WeddingRank) {
        this.selfWeddingRank = data;
    }

    getWeddingRanks() {
        return this.weddingRanks;
    }

    getWeddingFoods() {
        return this.weddingFoods;
    }

    getPlayerFields() {
        return this.playerFields;
    }

    getXianJin() {
        return this.xianjin;
    }
}