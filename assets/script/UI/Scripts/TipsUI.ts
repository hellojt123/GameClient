/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-22 20:22:40
 */
import baseUI from "./baseUI";
import EventManager from "../../Manager/EventManager";
import Tips from "../TipsUI/Tips";
import TipsUIBinder from "../TipsUI/TipsUIBinder";
import { GameUtil, ItemData } from "../../Util/GameUtil";
import BagItem from "../../Entity/BagItem/BagItem";
import tips_item_tile from "../TipsUI/tips_item_tile";
import tips_desc from "../TipsUI/tips_desc";
import { windowModel } from "./windowModel";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType, TipsData } from "../../Const/TipsType";

const { ccclass, property } = cc._decorator;
@ccclass
export default class TipsUI extends cc.Component {
    public uiname: string = "TipsUI";
    public _view: Tips;
    private tipsList: TipsData[];
    private tips: windowModel[];
    private ok_callback: Map<number, Function>;
    private cancel_callback: Map<number, Function>;

    onLoad() {
        TipsUIBinder.bindAll();
        this.init();
        EventManager.inst.addEvents(gameEvents.showTips, this.makeTips.bind(this));
        EventManager.inst.addEvents(gameEvents.hidetips, this.hidetips.bind(this));
        EventManager.inst.addEvents(gameEvents.refreshVirtualList, this.refreshVirtualList.bind(this));
    }

    init() {
        this._view = Tips.createInstance();
        this._view.tips5.vlist.setVirtual();
        this.tipsList = [];
        this.tips = [];
        this.ok_callback = new Map<number, Function>();
        this.cancel_callback = new Map<number, Function>();
        this.createTips(this._view.tips0);
        this.createTips(this._view.tips1);
        this.createTips(this._view.tips2);
        this.createTips(this._view.tips3);
        this.createTips(this._view.tips4);
        this.createTips(this._view.tips5);

        this.initClick();
    }

    createTips(tip) {
        var tips = new windowModel(tip);
        tips.contentPane = tip;
        tips.hideImmediately();
        this.tips.push(tips);
        let frame: fgui.GLabel = tip.frame;
        if (frame) {
            frame.onClick(tips.hide.bind(this));
        }
    }

    initClick() {

        this._view.tips1.btn_ok.onClick(() => this.onClickOK_tips(1), this)
        this._view.tips1.btn_cancel.onClick(() => this.onClickCancel_tips(1), this)

        this._view.tips2.btn_ok.onClick(() => this.onClickOK_tips(2), this)
        this._view.tips2.btn_cancel.onClick(() => this.onClickCancel_tips(2), this)

        this._view.tips4.btn_ok.onClick(() => this.onClickOK_tips(4), this);
        this._view.tips5.btn_ok.onClick(() => this.onClickOK_tips(5), this);
    }

    private onClickOK_tips(index: number) {
        this.tips[index].hide();
        var ok = this.ok_callback.get(index);
        if (ok) {
            ok();
        }
    }

    private onClickCancel_tips(index: number) {
        this.tips[index].hide();
        var cancel = this.cancel_callback.get(index);
        if (cancel) {
            cancel();
        }
    }

    makeTips(data: TipsData) {
        switch (data.type) {
            case TipsType.NORAML:
                this.makeNormalTips(data);
                break;
            case TipsType.ITEMSHOW:
                this.makeItemShowTips(data);
                break;
            case TipsType.CHOICE:
                this.makeChoiceTips(data);
                break
            case TipsType.POPUP:
                this.tipsList.push(data);
                if (this.tips[data.type] && !this.tips[data.type].isShowing) {
                    this.makePopUpTips();
                }
                break
            case TipsType.MAIL:
                this.makeMailTips(data);
                break
            case TipsType.LIST:
                this.clearData();
                this.makeListTips(data);
                break
        }
    }

    makeNormalTips(data: TipsData) {
        this.tips[data.type].show();
        if (data.title) {
            this._view.tips0.title.text = data.title;
        } else {
            this._view.tips0.title.text = "提示";
        }
        this._view.tips0.desc.text = data.text;

    }

    makeItemShowTips(data: TipsData) {
        this.tips[data.type].show();
        this._view.tips1.tipstitle.text = data.title;
        this._view.tips1.desc.text = data.text;
        this._view.tips1.tipsnum.text = GameUtil.ConvertNum(data.itemnum);
        let bagitem: BagItem = <BagItem>this._view.tips1.tipsitem;
        bagitem.setIconByItemId(data.itemid);
        this._view.tips1.btn_ok.text = data.ok_text;
        this._view.tips1.btn_cancel.text = data.cancel_text;
        this.ok_callback.set(1, data.ok_callback);
        this.cancel_callback.set(1, data.cancel_callback);
    }

    makeChoiceTips(data: TipsData) {
        this.tips[data.type].show();
        if (data.cancal_background) {
            this.tips[data.type].cancalClick();
            this._view.tips2.n25.visible = false;
        } else {
            this.tips[data.type].setClick();
            this._view.tips2.n25.visible = true;
        }
        this._view.tips2.n29.text = data.text;
        this._view.tips2.btn_ok.text = data.ok_text;
        this._view.tips2.btn_cancel.text = data.cancel_text;
        this.ok_callback.set(2, data.ok_callback);
        this.cancel_callback.set(2, data.cancel_callback);
    }


    private timeoutObj;
    makePopUpTips() {
        this.tips[3].show();
        var data = this.tipsList.shift();
        if (data) {
            this._view.tips3.desc.text = data.text;
            if (this.timeoutObj) {
                clearTimeout(this.timeoutObj);
                this.timeoutObj = null;
            }
            this.timeoutObj = setTimeout(this.closetips3.bind(this), 1000);
        }
    }

    private closetips3() {
        if (this.tipsList.length > 0) {
            this.tips[3].hideImmediately();
            this.makePopUpTips();
        } else {
            this.tips[3].hide();
        }
    }

    makeMailTips(data: TipsData) {
        this.tips[data.type].show();
        this._view.tips4.text_title.text = data.title;
        var desc: tips_desc = <tips_desc>this._view.tips4.desclist.getChildAt(0);
        desc.desc.text = data.text;
        var items: ItemData[] = GameUtil.getItemConfigByStr(data.award);
        if (items.length == 1) {
            items.unshift(null);
        }

        for (var i = 0; i < this._view.tips4.itemlist.numChildren; i++) {
            var item: tips_item_tile = <tips_item_tile>this._view.tips4.itemlist.getChildAt(i);
            if (i < items.length) {
                if (items[i]) {
                    item.visible = true;
                    var bagitem: BagItem = <BagItem>item.n0;
                    bagitem.setIconByItemId(items[i].itemid);
                    bagitem.setNum(0);
                    item.n1.text = GameUtil.ConvertNum(items[i].itemnum);
                } else {
                    item.visible = false;
                }
            } else {
                item.visible = false;
            }
        }

        if (data.award && data.state == 10) {
            this._view.tips4.btn_ok.text = "领取";
        } else {
            this._view.tips4.btn_ok.text = data.ok_text;
        }

        this.ok_callback.set(4, data.ok_callback);
    }

    makeListTips(data: TipsData) {
        this.tips[data.type].show();
        this.clearData();
        this._view.tips5.vlist.itemProvider = data.itemProvider;
        this._view.tips5.vlist.itemRenderer = data.itemRenderer;
        this._view.tips5.vlist.numItems = 0;
        this._view.tips5.vlist.numItems = data.numItems;
        this._view.tips5.vlist.refreshVirtualList();
        this._view.tips5.toptile.getChildAt(0).text = data.title;
        this._view.tips5.data = data.listtype;
        if (data.ok_callback) {
            this.ok_callback.set(5, data.ok_callback);
            this._view.tips5.btn_ok.visible = true;
            if (data.ok_text) {
                this._view.tips5.btn_ok.text = data.ok_text;
            } else {
                this._view.tips5.btn_ok.text = "确定";
            }
        } else {
            this.ok_callback.set(5, null);
            this._view.tips5.btn_ok.visible = false;
        }
    }

    refreshVirtualList(type) {
        if (this._view && this._view.tips5 && this.tips[5] && this.tips[5].isShowing && type == this._view.tips5.data) {
            this._view.tips5.vlist.refreshVirtualList();
        }
    }

    clearData() {
        if (this._view.tips5.vlist.itemRenderer) {
            this._view.tips5.vlist.numItems = 0;
            this._view.tips5.vlist.itemRenderer = null;
            this._view.tips5.vlist.itemProvider = null;
        }
    }

    hidetips() {
        this.tips.forEach((value) => {
            value.hide();
        })
    }

}
