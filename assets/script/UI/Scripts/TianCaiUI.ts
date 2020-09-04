/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-05-11 14:59:21
 */

import ConfigUtil from "../../Util/ConfigUtil";
import msgHandler from "../../Net/msgHandler";
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import { protoName } from "../../Const/protoName";
import { TipsData } from '../../Const/TipsType';
import TianCai from "../TianCaiUI/TianCai";
import TianCaiUIBinder from "../TianCaiUI/TianCaiUIBinder";
import tile_field from "../TianCaiUI/tile_field";
import tile_zhongzi from "../TianCaiUI/tile_zhongzi";
import BagItem from "../../Entity/BagItem/BagItem";
import TimeUtil from "../../Util/TimeUtil";
import SDKManager from "../../Manager/SDKManager";
import Tile_dj from "../TianCaiUI/Tile_dj";
import { gameEvents } from "../../Const/gameEvents";
import * as proto from "../../Net/proto/proto"
import { TipsType } from "../../Const/TipsType";
import btn_tiancai_item from "../TianCaiUI/btn_tiancai_item";
import LoadUtil from "../../Util/LoadUtil";

const { ccclass, property } = cc._decorator;
@ccclass
export default class TianCaiUI extends baseUI {
    public uiname: string = "TianCaiUI";
    public _view: TianCai;
    private tiles: tile_field[] = [];
    private tileIndex: number = 0;

    public get fields(): proto.resPlayerFields {
        return Global.gameManager.playerManager.player.getPlayerFields();
    }

    public get getBuffs(): Map<number, proto.PlayerBuff> {
        return Global.gameManager.playerManager.player.getBuffsByType(3);
    }

    onLoad() {
        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updatePlayerFields, this.updatePlayerFields.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBuff, this.updateBuff.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBagItems, this.updateBagItems.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBagItemChange, this.updateBagItems.bind(this));
        EventManager.inst.addEvents(gameEvents.updateProp, this.updateAlchemy.bind(this));
        EventManager.inst.addEvents(gameEvents.updateProp, this.updateLianDan.bind(this));

    }
    show() {
        super.show();
        msgHandler.inst.sendmsg(protoName.reqPlayerFields, new proto.reqPlayerFields({}));
        msgHandler.inst.sendmsg(protoName.reqBuff, new proto.reqBuff({ type: 3 }));
        this._view.main.seeds.refreshVirtualList();
        this.updateBagItems();
        this.updateLianDan();
    }

    init() {
        if (this._view == null) {
            TianCaiUIBinder.bindAll();
            this._view = TianCai.createInstance();
            super.init();
            this.intComponents();
            this.initClick();
            this.initLianDan();
            this._interval = setInterval(this.updateTime.bind(this), 1000);
            this._view.main.bg.url = Global.resurl + "loader/tc_bg.png";
            this._view.liandan1.bg.url = Global.resurl + "loader/bg_fazhen1.png";
            this._view.liandan1.fabao.url = Global.resurl + "loader/danlu1.png";
        }
    }

    intComponents() {
        this.tiles = [];
        this.tiles.push(this._view.main.tile_1);
        this.tiles.push(this._view.main.tile_2);
        this.tiles.push(this._view.main.tile_3);
        this.tiles.push(this._view.main.tile_4);
        this.tiles.push(this._view.main.tile_5);
        this.tiles.push(this._view.main.tile_6);
        this.tiles.push(this._view.main.tile_7);
        this.tiles.push(this._view.main.tile_8);
        this.tiles.push(this._view.main.tile_9);
        // this.tiles.forEach((value)=>{
        //     value.node.skewY = 20;
        // })

        let configs: Map<number, IConfigseed> = ConfigUtil.inst.ConfigSeedsContainer.getConfigs();
        this._view.main.seeds.setVirtual();
        this._view.main.seeds.itemRenderer = this.renderListItem.bind(this);
        this._view.main.seeds.numItems = configs.size;
        this._view.main.seeds.refreshVirtualList();


        this.updateAlchemyUI();
    }

    private renderListItem(index: number, obj: tile_zhongzi): void {
        let configs: Map<number, IConfigseed> = ConfigUtil.inst.ConfigSeedsContainer.getConfigs();
        if (index < configs.size) {
            let type = index + 1;
            let config: IConfigseed = configs.get(type);
            if (config) {
                let itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(config.seed);
                if (itemconfig) {
                    obj.itemname.text = itemconfig.name;
                    let item: BagItem = <BagItem>obj.item;
                    let num: number = this.getItemNumByItemId(config.seed);
                    item.setIconByItemId(config.seed);
                    obj.num.text = "X" + num;
                    obj.clearClick();
                    obj.onClick(() => {
                        this.onClickSeed(type, config.seed);
                    })
                }
            }
        }
    }

    private onClickSeed(type: number, itemid: number) {
        if (this.tileIndex >= this.fields.level) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 10);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        } else {
            let num: number = this.getItemNumByItemId(itemid);
            if (num > 0) {
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.CHOICE;
                tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 9);
                tipsdata.ok_callback = () => {
                    msgHandler.inst.sendmsg(protoName.reqSowSeed, new proto.reqSowSeed({ type: type, index: this.tileIndex }));
                };
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            }
        }
    }

    initClick() {
        for (let i: number = 0; i < this.tiles.length; i++) {
            let tile: tile_field = this.tiles[i];
            tile.onClick(() => { this.onClickTile(tile, i) });
        }

        this._view.main.btn_dig.onClick(this.onClickDig.bind(this), this);
        this._view.frame.onClick(this.hide, this);
        this._view.main.btn_juqi.onClick(this.onClickJuQi.bind(this), this);
        this._view.main.tileIndex.on(fgui.Event.STATUS_CHANGED, this.onTileIndexChange, this);
        this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onTabsChange, this);
        this._view.main.seedinfo.btn_harvest.onClick(this.onClickHarvest, this);
        this._view.main.btn_tips.onClick(this.onClickMainTips, this);

        // this._view.liandan.n12.onClick(this.onClickAlchemy, this);
        // this._view.liandan.btn_tips.onClick(this.onClickLianDanTips, this);
        // this._view.liandan.btn_get.onClick(this.onClickAlchemyAward, this);
        // this._view.liandan.btn_ad.onClick(this.onClickAlchemyAD, this);
        // this._view.liandan.success.btn_use.onClick(this.onClickAlchemyAward, this);
        // this._view.liandan.tabs.on(fgui.Event.STATUS_CHANGED, this.onAlchemyChanged, this);

        this._view.kufang.btn_tips.onClick(this.onClickMainTips, this);
    }

    onClickKufangTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 3);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 4);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    onClickMainTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 1);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 2);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    onTabsChange(e) {
        if (e.selectedIndex == 2) {
            msgHandler.inst.sendmsg(protoName.reqAlchemy, new proto.reqAlchemy({ index: 0 }))
        } else if (e.selectedIndex == 3) {
            msgHandler.inst.sendmsg(protoName.reqLianDan, new proto.reqLianDan({ daoyan: -1, ext: 0 }))
        }
    }

    private time: number = 0;
    updateTime() {
        if (this._view && this._window && this._window.isShowing) {

            msgHandler.inst.sendmsg(protoName.reqPlayerFields, new proto.reqPlayerFields({}));

            this.updateBuff();

            let datas: proto.PlayerField[] = this.fields.fields.fields;

            if (datas) {
                let data: proto.PlayerField = datas[this.tileIndex];
                if (data) {
                    this._view.main.seedinfo.plant_time.text = TimeUtil.dateFormat(data.time, false);
                    if (data.time <= 0) {
                        this._view.main.seedinfo.plant_time.text = "";
                        this._view.main.seedinfo.btn_harvest.enabled = true;
                    } else {
                        this._view.main.seedinfo.btn_harvest.enabled = false;
                    }
                }
            }


            // if(this.propData && this.propData.alchemyItem) {
            //     if(this.propData.endAlchemyTime > TimeUtil.timestamp() ){
            //         this._view.liandan.n7.text = TimeUtil.remainDateTime(this.propData.endAlchemyTime,"炼制成功");        
            //     }else{
            //         if(!this._view.liandan.success.visible) {
            //             this._view.liandan.success.visible = true;
            //             this.updateAlchemy();
            //         }
            //     }
            // }

            if (this.propData && this.propData.alchemyItem) {
                if (this.propData.endAlchemyTime > TimeUtil.timestamp()) {
                    this._view.liandan1.time.text = TimeUtil.remainDateTime(this.propData.endAlchemyTime, "炼制成功");
                } else {
                    if (!this._view.liandan1.success.visible) {
                        this._view.liandan1.success.visible = true;
                        this.updateLianDan();
                    }
                }
            }

        }
    }

    private updateAlchemyUI() {
        // this.updateTypeItem(this._view.liandan.target1.item, 1);
        // this.updateTypeItem(this._view.liandan.target2.item, 2);
        // this.updateTypeItem(this._view.liandan.target3.item, 3);
        // this.updateTypeItem(this._view.liandan.target4.item, 4);
    }

    private updateTypeItem(button: fgui.GButton, type) {
        if (this.propData) {
            let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(type, this.propData.alchemylevel);
            if (config != null) {
                var items: string[] = config.needitem.split(";");
                let itemConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[0]);
                button.icon = itemConfig.icon;
                button.title = this.getItemNumByItemId(itemConfig.itemid) + "/" + items[0].split(",")[1];
            }
        }
    }

    updatePlayerFields() {
        if (this.fields) {
            let index: number = 0;
            let config: IConfigtiancai = ConfigUtil.inst.ConfigTiancaiContainer.getConfigByLevel(this.fields.level);
            this._view.main.level.text = this.fields.level.toString();
            this._view.main.exp_progress_bar.min = 0;
            this._view.main.exp_progress_bar.max = config.needexp;
            this._view.main.exp_progress_bar.value = this.fields.exp;
            let datas: proto.PlayerField[] = this.fields.fields.fields;
            this.tiles.forEach((value) => {
                let data: proto.PlayerField = datas[index];

                if (index == this.tileIndex) {
                    this.onClickTile(value, index);
                }

                value.plant.clearClick();
                if (index < this.fields.level) {
                    value.load_icon.url = "ui://TianCaiUI/btn_tudi1";
                    value.star.visible = false;
                    if (data && data.type > 0) {
                        value.plant.visible = true;

                        let config: IConfigseed = ConfigUtil.inst.ConfigSeedsContainer.getConfigByType(data.type);
                        let layer = 0;
                        if (config) {

                            if (data.time <= config.t1 && data.time > config.t2) {
                                layer = 1;
                            } else if (data.time <= config.t2 && data.time > config.t3) {
                                layer = 2;
                            } else if (data.time < config.t3) {
                                layer = 3;
                                value.star.visible = true;
                            }
                            value.plant.url = config.icon + layer;
                        }
                    } else {
                        value.plant.visible = false;
                    }
                } else {
                    value.load_icon.url = "ui://TianCaiUI/btn_tudi2";
                    value.plant.visible = false;
                }
                if (data && TimeUtil.timestamp() >= data.flowerTime && data.flowerTime > 0) {
                    value.flower.visible = true;
                } else {
                    value.flower.visible = false;
                }
                index++;
            })
        }
    }

    updateBagItems() {
        if (this._view && this._window.isShowing) {
            this._view.main.seeds.refreshVirtualList();
            this.updateAlchemyUI();
            let list1_index: number = 0;
            let list2_index: number = 0;
            this.bagItemsData.forEach((value, key) => {
                if (value) {
                    let config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(value.itemid);
                    if (config) {
                        if (config.bag_show == 1) {
                            let tile: Tile_dj = <Tile_dj>this._view.kufang.list1.getChildAt(list1_index);
                            tile.clearClick();
                            if (tile) {
                                let bagitem: BagItem = <BagItem>tile.item;
                                bagitem.setIconByItemId(config.itemid);
                                bagitem.setNum(<number>value.num);
                                tile.onClick(() => this.ShowTips(config.itemid), this);
                            }
                            list1_index++;
                        } else if (config.bag_show == 2) {
                            let tile: Tile_dj = <Tile_dj>this._view.kufang.list2.getChildAt(list2_index);
                            tile.clearClick();
                            if (tile) {
                                let bagitem: BagItem = <BagItem>tile.item;
                                bagitem.setIconByItemId(config.itemid);
                                bagitem.setNum(<number>value.num);
                                tile.onClick(() => this.ShowTips(config.itemid), this);
                            }
                            list2_index++;
                        }
                    }
                }
            });
        }
    }

    ShowTips(itemid: number) {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("itemtitle", itemid);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("itemdesc", itemid);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }


    updateBuff() {
        if (this._view && this._window.isShowing) {
            if (this.getBuffs && this.getBuffs.size > 0) {
                this._view.main.buff_time.visible = true;
                this.getBuffs.forEach((value, key) => {
                    this._view.main.buff_time.text = " 灵气富集 " + TimeUtil.remainDateTime(value.activeTime + value.duration);
                })
            } else {
                this._view.main.buff_time.visible = false;
            }
        }
    }

    onClickJuQi() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.title = "灵气富集";
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 7);
        tipsdata.ok_callback = () => {
            SDKManager.CreateAD(7, () => {
                msgHandler.inst.sendmsg(protoName.reqAddBuff, new proto.reqAddBuff({ type: 3 }));
            })
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    onClickDig() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 8);
        tipsdata.ok_callback = () => {
            msgHandler.inst.sendmsg(protoName.reqHarvest, new proto.reqHarvest({ type: 3, index: this.tileIndex }));
        };
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    onClickHarvest() {
        msgHandler.inst.sendmsg(protoName.reqHarvest, new proto.reqHarvest({ type: 1, index: this.tileIndex }));
    }

    onClickTile(tile: tile_field, index: number) {
        let datas: proto.PlayerField[] = this.fields.fields.fields;
        if (datas) {
            let data: proto.PlayerField = datas[index];
            if (data) {

                if (data.type > 0) {
                    let configseed: IConfigseed = ConfigUtil.inst.ConfigSeedsContainer.getConfigByType(data.type);
                    this._view.main.seeds.visible = false;
                    this._view.main.seedinfo.visible = true;
                    if (configseed) {
                        this._view.main.seedinfo.plant_name.text = configseed.plant_name;
                        this._view.main.seedinfo.plant_desc.text = configseed.plant_desc;
                        this._view.main.seedinfo.plant_icon.url = configseed.icon + "3";

                    }
                } else {
                    this._view.main.seeds.visible = true;
                    this._view.main.seedinfo.visible = false;
                }

                if (TimeUtil.timestamp() >= data.flowerTime && data.flowerTime > 0) {
                    msgHandler.inst.sendmsg(protoName.reqHarvest, new proto.reqHarvest({ type: 2, index: index }));
                    tile.flower.visible = false;
                }
            }
        }
    }

    /////炼丹
    private index: number = 1;
    private masterConfig: IConfigalchemymaster;
    private updateAlchemy() {
        // if (this._view && this._window.isShowing && this.propData) {
        //     if (this.propData.alchemyItem == "") {
        //         this._view.liandan.bottom.visible = true;
        //         this._view.liandan.ad.visible = false;
        //         this._view.liandan.success.visible = false;
        //         this._view.liandan.n7.text = "";
        //     } else {

        //         let alchemyconfig: string[] = this.propData.alchemyItem.split("|");
        //         let index = Number.parseInt(alchemyconfig[1]);
        //         let itemstr: string = alchemyconfig[0];
        //         let itemid: number = Number.parseInt(itemstr.split(",")[0]);

        //         this._view.liandan.tabs.setSelectedIndex(index - 1);
        //         var config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(this.index, this.propData.alchemylevel);
        //         if (config) {
        //             if (this.propData.endAlchemyTime - TimeUtil.timestamp() > config.min_time) {
        //                 this._view.liandan.ad.visible = true;
        //             } else {
        //                 this._view.liandan.ad.visible = false;
        //             }
        //         }

        //         this._view.liandan.bottom.visible = false;
        //         if (TimeUtil.timestamp() > this.propData.endAlchemyTime) {
        //             let itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(itemid);
        //             this._view.liandan.success.visible = true;
        //             this.setSuccess(itemconfig);
        //         }
        //     }

        //     this.masterConfig = ConfigUtil.inst.ConfigAlchemyMasterContainer.getConfigByLevel(this.propData.alchemylevel);
        //     if (this.masterConfig) {
        //         this._view.liandan.n3.text = this.masterConfig.name;
        //         this._view.liandan.n42.max = this.masterConfig.needexp;
        //         this._view.liandan.n42.min = 0;
        //         this._view.liandan.n42.value = this.propData.alchemyexp;
        //     }
        //     this.updateAlchemyItem();
        // }
    }

    private setSuccess(config: IConfigitem) {
        // if (config) {
        //     this._view.liandan.success.itemname.text = config.name;
        //     this._view.liandan.success.itemicon.url = "ui://ItemUI/icon_danyao" + this.index + "1";
        //     this._view.liandan.success.desc.text = config.desc;
        //     let count: number = Number.parseInt(config.param.toString());
        //     for (let i = 0; i < this._view.liandan.success.starlist.numChildren; i++) {
        //         let star = this._view.liandan.success.starlist.getChildAt(i);
        //         if (i < count) {
        //             star.visible = true;
        //         } else {
        //             star.visible = false;
        //         }
        //     }
        // }
    }

    private onAlchemyChanged(e) {
        this.index = e.selectedIndex + 1;
        this.updateAlchemyItem();
    }

    private updateAlchemyItem() {
        // if (this._view) {
        //     if (this.masterConfig) {
        //         let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(this.index, this.masterConfig.level);
        //         if (config) {
        //             this._view.liandan.n6.text = config.name.split("+")[0];
        //             let items: string[] = config.needitem.split(";");

        //             let item1Config: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[1]);
        //             this._view.liandan.need_left.item.title = this.getItemNumByItemId(item1Config.itemid) + "/" + items[1].split(",")[1];
        //             this._view.liandan.need_left.item.icon = item1Config.icon;

        //             let item2Config: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[2]);
        //             this._view.liandan.need_right.item.title = this.getItemNumByItemId(item2Config.itemid) + "/" + items[2].split(",")[1];
        //             this._view.liandan.need_right.item.icon = item2Config.icon;

        //             let targetConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(config.targeItem);
        //             this._view.liandan.targetitem.item.icon = targetConfig.icon;
        //         }
        //     }
        // }
    }

    private onClickAlchemy() {
        let check: boolean = true;
        let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(this.index, this.propData.alchemylevel);
        if (config) {
            var items: string[] = config.needitem.split(";");
            for (let i = 0; i < items.length; i++) {
                let itemConfig: IConfigitem = ConfigUtil.inst.configItem.getItemByStr(items[i]);
                if (itemConfig) {
                    let neednum: number = Number.parseInt(items[i].split(",")[1]);
                    if (this.getItemNumByItemId(itemConfig.itemid) < neednum) {
                        check = false;
                        break;
                    }
                }
            }
        } else {
            check = false;
        }

        if (check) {
            msgHandler.inst.sendmsg(protoName.reqAlchemy, new proto.reqAlchemy({ index: this.index }))
        } else {
            var tipsdata: TipsData = new TipsData();
            tipsdata.type = TipsType.POPUP;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("fabao", 10);
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }

    }

    private onClickAlchemyAward() {
        msgHandler.inst.sendmsg(protoName.reqAlchemyAward, new proto.reqAlchemyAward({}))
    }

    private onClickAlchemyAD() {
        // SDKManager.CreateAD(3, () => {
        //     msgHandler.inst.sendmsg(protoName.reqAlchemyAD, new proto.reqAlchemyAD({}));
        // })
    }

    onClickLianDanTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 5);
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 6);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    onTileIndexChange(e) {
        this.tileIndex = e.selectedIndex;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //炼丹1
    private extIndex: number = 0;
    private danyaoIndex: number = 0;
    private initLianDan() {
        if (this._view) {
            this.initExt();
            this.initPeiFang();
            //this._view.liandan1.ext.tabs.on(fgui.Event.STATUS_CHANGED, this.onExtChanged, this); 
            this._view.liandan1.ext.tabs.onChanged(this.onExtChanged, this)
            this._view.liandan1.peifang.tabs.onChanged(this.onDanYaoChanged, this);
            // this._view.liandan1.peifang.tabs.on(fgui.Event.STATUS_CHANGED, this.onDanYaoChanged, this); 
            this._view.liandan1.ext_item.onClick(this.onClickExt, this);
            this._view.liandan1.peifang_item.onClick(this.onClickPeiFang, this);
            this._view.liandan1.ext.frame.onClick(this.onClickExtFrame, this);
            this._view.liandan1.peifang.frame.onClick(this.onClickPeiFangFrame, this);
            this._view.liandan1.btn_tips.onClick(this.onClickLianDanTips, this);
            this._view.liandan1.btn_liandan.onClick(this.onClickLianDan, this);
            this._view.liandan1.success.btn_use.onClick(this.onClickAlchemyAward, this);
        }
    }

    private onClickLianDan() {
        msgHandler.inst.sendmsg(protoName.reqLianDan, new proto.reqLianDan({ daoyan: this.danyaoIndex, ext: this.extIndex }));
    }

    private onClickExtFrame() {
        this._view.liandan1.ext.visible = false;
    }

    private onClickPeiFangFrame() {
        this._view.liandan1.peifang.visible = false;
    }

    private initExt() {
        let masterConfig: IConfigalchemymaster = ConfigUtil.inst.ConfigAlchemyMasterContainer.getConfigByLevel(1);
        let extItemStrs: string[] = masterConfig.ext_items.split(";");
        // let first: btn_tiancai_item = <btn_tiancai_item>this._view.liandan1.ext.itemlist.addItemFromPool();
        // let bagitem: BagItem = <BagItem>first.item;
        // bagitem.setIcon("");
        for (let i: number = 0; i < extItemStrs.length; i++) {
            let itemstr: string[] = extItemStrs[i].split(",");
            let tile: btn_tiancai_item = <btn_tiancai_item>this._view.liandan1.ext.itemlist.addItemFromPool();
            let bagitem: BagItem = <BagItem>tile.item;
            let itemid: number = Number.parseInt(itemstr[0]);
            bagitem.setIconByItemId(itemid);
        }
        this._view.liandan1.ext.tabs.setSelectedIndex(0);
    }

    private initPeiFang() {
        let configs: Map<number, IConfigliandan> = ConfigUtil.inst.ConfigLianDanContainer.getConfigs();
        configs.forEach(value => {
            let tile: btn_tiancai_item = <btn_tiancai_item>this._view.liandan1.peifang.itemlist.addItemFromPool();
            let itemstr: string[] = value.peifang.split(",");
            let bagitem: BagItem = <BagItem>tile.item;
            let itemid: number = Number.parseInt(itemstr[0]);
            bagitem.setIconByItemId(itemid);
        });
        this._view.liandan1.peifang.tabs.setSelectedIndex(0);
    }

    private onClickPeiFang() {
        this._view.liandan1.peifang.visible = true;
    }

    private onClickExt() {
        this._view.liandan1.ext.visible = true;
    }

    private onExtChanged(e: fgui.Controller) {
        this.extIndex = e.selectedIndex;
        this.updateExt();
    }

    private onDanYaoChanged(e: fgui.Controller) {
        this.danyaoIndex = e.selectedIndex;
        this.updateDanYao();
    }

    private updateLianDan() {
        if (this._view && this._window.isShowing && this.propData) {

            if (this.propData.alchemyItem == "") {
                this._view.liandan1.bottom.enabled = true;
                this._view.liandan1.success.visible = false;
                this._view.liandan1.time.text = "";
                this._view.liandan1.btn_liandan.enabled = true;
                if (this._view.liandan1.holder.node.childrenCount > 0) {
                    this._view.liandan1.holder.node.removeAllChildren();
                    LoadUtil.inst.RemoveDragonBones("danlu_" + this.propData.alchemylevel);
                }
            } else {
                console.log("this.propData.alchemyItem", this.propData.alchemyItem)
                if (this._view.liandan1.holder.node.childrenCount == 0) {
                    LoadUtil.inst.LoadDragonBones("danlu_" + this.propData.alchemylevel, (prefab) => {
                        this._view.liandan1.fabao.visible = false;
                        var node = cc.instantiate(prefab);
                        node.setParent(this._view.liandan1.holder.node);
                        node.setPosition(cc.Vec2.ZERO)
                        node.active = true;
                        let db = node.getComponent("dragonBones.ArmatureDisplay");
                        db.playAnimation("ani_danlu1", -1);
                    })
                }
                let liandanconfig: string[] = this.propData.alchemyItem.split("|");
                let itemstr: string = liandanconfig[0];
                let itemid: number = Number.parseInt(itemstr.split(",")[0]);

                this._view.liandan1.bottom.enabled = false;
                if (TimeUtil.timestamp() > this.propData.endAlchemyTime) {
                    let itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(itemid);
                    this._view.liandan1.success.visible = true;
                    this.setLianDanSuccess(itemconfig);
                }
                this._view.liandan1.btn_liandan.enabled = false;
            }

            this.masterConfig = ConfigUtil.inst.ConfigAlchemyMasterContainer.getConfigByLevel(this.propData.alchemylevel);
            if (this.masterConfig) {
                this._view.liandan1.mastername.text = this.masterConfig.name;
                this._view.liandan1.exp_bar.max = this.masterConfig.needexp;
                this._view.liandan1.exp_bar.min = 0;
                this._view.liandan1.exp_bar.value = this.propData.alchemyexp;
            }
            this.updateExt();
            this.updateDanYao();
        }
    }

    private updateExt() {
        let tile: btn_tiancai_item = <btn_tiancai_item>this._view.liandan1.ext.itemlist.getChildAt(this.extIndex);
        if (tile) {
            let config: IConfigliandan = ConfigUtil.inst.ConfigLianDanContainer.getConfigByType(this.danyaoIndex);
            let bagitem: BagItem = <BagItem>tile.item;
            let configitem: IConfigitem = bagitem.getConfig();
            let color: cc.Color = cc.Color.WHITE;
            let extitem: BagItem = <BagItem>this._view.liandan1.ext_item.item;
            if (configitem) {
                let itemid: number = bagitem.getConfig().itemid;
                let num: number = Global.gameManager.playerManager.getItemNumByItemId(itemid);
                this._view.liandan1.ext.com_name.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai_title", itemid);
                this._view.liandan1.ext.desc.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", itemid);
                extitem.setIconByItemId(bagitem.getConfig().itemid);
                if (num < config.ext_need) {
                    color = cc.Color.RED;
                }
                extitem.setTitle(num + "/" + config.ext_need);
                extitem.getTextField().color = color;
            } else {
                extitem.setIcon("")
                extitem.setTitle("");
                extitem.getTextField().color = color;
            }
        }
        this._view.liandan1.level.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", 20 + this.extIndex);
    }

    private updateDanYao() {
        let tile: btn_tiancai_item = <btn_tiancai_item>this._view.liandan1.peifang.itemlist.getChildAt(this.danyaoIndex);
        if (tile) {
            let bagitem: BagItem = <BagItem>tile.item;
            this._view.liandan1.peifang.com_name.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai_title", bagitem.getConfig().itemid);
            this._view.liandan1.peifang.desc.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tiancai", bagitem.getConfig().itemid);
        }
        let config: IConfigliandan = ConfigUtil.inst.ConfigLianDanContainer.getConfigByType(this.danyaoIndex);
        if (config) {
            //配方
            let itemstr: string[] = config.peifang.split(",");
            let peifang: BagItem = <BagItem>this._view.liandan1.peifang_item.item;
            let peifangid: number = Number.parseInt(itemstr[0]);
            peifang.setIconByItemId(peifangid);
            let num: number = Global.gameManager.playerManager.getItemNumByItemId(peifangid);
            peifang.setNum(num);

            //需要材料
            let needItems: string[] = config.needitem.split(";");
            //左边材料
            let needleftItems: string[] = needItems[0].split(",");

            let leftItem: BagItem = <BagItem>this._view.liandan1.need_left_item.item;
            let leftid: number = Number.parseInt(needleftItems[0]);
            let leftNeed: number = Number.parseInt(needleftItems[1]);

            let leftnum: number = Global.gameManager.playerManager.getItemNumByItemId(leftid);
            leftItem.setIconByItemId(leftid);
            let leftcolor: cc.Color = cc.Color.WHITE
            if (leftnum < leftNeed) {
                leftcolor = cc.Color.RED;
            }
            leftItem.setTitle(leftnum + "/" + leftNeed);
            leftItem.getTextField().color = leftcolor;

            //右边材料
            let needrightItems: string[] = needItems[1].split(",");
            let rightItem: BagItem = <BagItem>this._view.liandan1.need_right_item.item;
            let rightid: number = Number.parseInt(needrightItems[0]);
            let rightNeed: number = Number.parseInt(needrightItems[1]);
            let rightnum: number = Global.gameManager.playerManager.getItemNumByItemId(rightid);
            rightItem.setIconByItemId(rightid);
            let rightcolor: cc.Color = cc.Color.WHITE
            if (rightnum < rightNeed) {
                rightcolor = cc.Color.RED;
            }
            rightItem.setTitle(rightnum + "/" + rightNeed);
            rightItem.getTextField().color = rightcolor;

            //炼丹产物
            let targetStr: string[] = config.targeItem.split(",");
            let targetitem: BagItem = <BagItem>this._view.liandan1.target_item.item;
            let targetid: number = Number.parseInt(targetStr[0]);
            targetitem.setIconByItemId(targetid);

            //丹药名称
            this._view.liandan1.itemname.text = targetitem.getConfig().name;
            //炼制时间
            let masterConfig: IConfigalchemymaster = ConfigUtil.inst.ConfigAlchemyMasterContainer.getConfigByLevel(this.propData.alchemylevel);
            this._view.liandan1.time.text = TimeUtil.dateFormat(config.reset_time - masterConfig.reduce_time, true);
            this._view.liandan1.ext.tabs.setSelectedIndex(0);
            this.onExtChanged(this._view.liandan1.ext.tabs);
        }
    }

    private setLianDanSuccess(config: IConfigitem) {
        if (config) {
            this._view.liandan1.success.itemname.text = config.name;
            this._view.liandan1.success.itemicon.url = "ui://ItemUI/icon_danyao" + this.index + "1";
            this._view.liandan1.success.desc.text = config.desc;
            for (let i = 0; i < this._view.liandan1.success.starlist.numChildren; i++) {
                let star = this._view.liandan1.success.starlist.getChildAt(i);
                if (i < config.param) {
                    star.visible = true;
                } else {
                    star.visible = false;
                }
            }
        }
    }


    // private onClickTips(){
    //     var tipsdata:TipsData = new TipsData();
    //     tipsdata.type = TipsType.NORAML;     
    //     tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng",1);
    //     EventManager.inst.onEvents(gameEvents.showTips,tipsdata);
    // }
}
