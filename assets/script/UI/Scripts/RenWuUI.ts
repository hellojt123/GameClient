/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-05-11 14:59:32
 */

import ConfigUtil from "../../Util/ConfigUtil";
import * as proto from "../../Net/proto/proto"
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import TimeUtil from "../../Util/TimeUtil";

import RenWuUIBinder from "../RenWuUI/RenWuUIBinder";
import RenWu from "../RenWuUI/RenWu";
import tile_renwu from "../RenWuUI/tile_renwu";
import { TipsData } from '../../Const/TipsType';
import SDKManager from "../../Manager/SDKManager";
import { protoName } from "../../Const/protoName";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import { DailyTypes } from "../../Const/DailyTypes";
const { ccclass, property } = cc._decorator;
@ccclass
export default class RenWuUI extends baseUI {
    public uiname: string = "RenWuUI";
    public _view: RenWu;
    private listtile: tile_renwu[] = [];
    public get dailyTaskData(): Map<number, proto.playerTask> {
        return Global.gameManager.playerManager.player.getDailyTasks();
    }

    public get extTaskData(): Map<number, proto.playerTask> {
        return Global.gameManager.playerManager.player.getExtTasks();
    }

    onLoad() {
        super.onLoad();

        EventManager.inst.addEvents(gameEvents.updateTask, this.updateTask.bind(this));
        EventManager.inst.addEvents(gameEvents.updatedailys, this.updateDaily.bind(this));
    }

    show() {
        super.show();
        this.updateDaily();
        msgHandler.inst.sendmsg(protoName.reqPlayerTask, new proto.reqPlayerTask({}));
    }

    init() {
        if (this._view == null) {
            RenWuUIBinder.bindAll();
            this._view = RenWu.createInstance();
            super.init();

            this.initTile();
            this.initClick();
            this._interval = setInterval(this.updateTime.bind(this), 1000);
        }

    }

    private initClick() {
        this._view.n72.onClick(this.onClickTaskAward, this);
    }

    private onClickTaskAward() {
        this.extTaskData.forEach((value, key) => {
            var config: IConfigtask = ConfigUtil.inst.ConfigTaskContainer.getConfigById(value.taskId);
            if (config) {
                if (value.num >= config.targetNum) {
                    msgHandler.inst.sendmsg(protoName.reqSubmitTask, new proto.reqSubmitTask({ id: value.id, taskid: value.taskId }));
                }
            }
        })
    }

    initTile() {
        this._view.frame.onClick(this.hide, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
        this.listtile = []
        for (var i = 0; i < 3; i++) {
            var tile: tile_renwu = <tile_renwu>this._view.list.addItemFromPool(tile_renwu.URL);
            this.listtile.push(tile);
        }
        this._view.n9.getChildAt(0).text = "任务";
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("renwu", 1);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("renwu", 2);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickGoTo(data: proto.playerTask) {
        let config: IConfigtask = ConfigUtil.inst.ConfigTaskContainer.getConfigById(data.taskId);
        if (data.num >= config.targetNum) {
            msgHandler.inst.sendmsg(protoName.reqSubmitTask, new proto.reqSubmitTask({ id: data.id, taskid: data.taskId }));
        } else {
            if (config.link) {
                EventManager.inst.onEvents(gameEvents.linkCMD, config.link);
            } else {
                this.hide()
            }
        }
    }

    private onClickRefresh(data: proto.playerTask) {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("renwu", 10);
        tipsdata.ok_callback = () => {
            msgHandler.inst.sendmsg(protoName.reqWaitRefresh, new proto.reqWaitRefresh({ id: data.id, taskid: data.taskId }));
        };
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);

    }

    private onClickADRefresh(data: proto.playerTask) {
        var daily: proto.PlayerDaily = this.Dailys.get(DailyTypes.TASKAD);
        if (daily.num == 0) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("renwu", 12);
        } else {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.CHOICE;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("renwu", 11);
            tipsdata.ok_callback = () => {
                SDKManager.CreateAD(8, () => {
                    msgHandler.inst.sendmsg(protoName.reqRefreshTask, new proto.reqRefreshTask({ id: data.id, taskid: data.taskId, isad: true }));
                });
            };
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);

    }

    private updateTime() {
        if (this._view && this._window && this._window.isShowing) {
            for (var i = 0; i < this.listtile.length; i++) {
                var tile: tile_renwu = this.listtile[i];
                if (tile && tile.data) {
                    var task: proto.playerTask = tile.data;
                    if (task.refreshTime != 0) {
                        if (task.refreshTime > TimeUtil.timestamp()) {
                            tile.n74.text = "剩余时间:" + TimeUtil.remainDateTime(task.refreshTime);
                        } else if (task.refreshTime < TimeUtil.timestamp()) {
                            msgHandler.inst.sendmsg(protoName.reqRefreshTask, new proto.reqRefreshTask({ id: task.id, taskid: task.taskId, isad: false }));
                        }
                    }
                }
            }
        }
    }

    private updateDaily() {
        if (this._view && this._window.isShowing) {
            var daily: proto.PlayerDaily = this.Dailys.get(DailyTypes.TASKAD);
            if (daily && daily.num && daily.num > daily.maxnum) {
                daily.num = daily.maxnum
            }
            this._view.n71.text = "观看视频刷新任务次数" + daily.num + "/" + daily.maxnum
        }
    }

    private updateTask() {
        this.updateDailyTask();
        this.updateExtTask();
    }

    private updateExtTask() {
        if (this._view) {
            this.extTaskData.forEach((value, key) => {
                var config: IConfigtask = ConfigUtil.inst.ConfigTaskContainer.getConfigById(value.taskId);
                if (config) {
                    this._view.n56.text = config.taskDesc.replace("%s", config.targetNum.toString());
                    if (value.num > config.targetNum) {
                        value.num = config.targetNum
                    }
                    this._view.n58.text = "(" + value.num + "/" + config.targetNum + ")";
                }
            })
        }
    }

    private updateDailyTask() {
        if (this._view) {
            this.listtile.forEach((tile) => {
                tile.visible = false;
            })
            var index = 0;
            this.dailyTaskData.forEach((value, key) => {
                if (index < this.listtile.length) {
                    this.updateTileUI(this.listtile[index], value);
                }
                index++;
            })
        }
    }

    private updateTileUI(tile: tile_renwu, data: proto.playerTask) {
        if (tile && data) {
            tile.visible = true;
            tile.n64.clearClick();
            tile.n69.clearClick();
            tile.n73.clearClick();

            tile.n64.onClick(() => { this.onClickRefresh(data) }, this);
            tile.n69.onClick(() => { this.onClickGoTo(data) }, this);
            tile.n73.onClick(() => { this.onClickADRefresh(data) }, this);
            tile.data = data;
            let config: IConfigtask = ConfigUtil.inst.ConfigTaskContainer.getConfigById(data.taskId);
            tile.n62.text = config.taskName.replace("%s", config.targetNum.toString());
            tile.n68.icon = config.icon;
            if (data.num > config.targetNum) {
                data.num = config.targetNum
            }
            tile.n63.text = data.num + "/" + config.targetNum;
            if (data.refreshTime > TimeUtil.timestamp()) {
                tile.tabs.selectedIndex = 1;
            } else {
                if (data.num >= config.targetNum) {
                    tile.n69.title = "领取奖励";
                } else {
                    tile.n69.title = "去完成";
                }
                tile.tabs.selectedIndex = 0;
            }
        }
        if (!data && tile) {
            tile.visible = false;
        }
    }

}
