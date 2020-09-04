/*
 * @Author: Jiangtao
 * @Date: 2019-11-26 10:45:40
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-24 10:30:36
 */
import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";
import msgHandler from "../../Net/msgHandler";
import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import { protoName } from "../../Const/protoName";
import PaiHang from "../PaiHangUI/PaiHang";
import PaiHangUIBinder from "../PaiHangUI/PaiHangUIBinder";
import Com_paihang1 from "../PaiHangUI/Com_paihang1";
import { TipsData } from '../../Const/TipsType';
import PlayerHead from "../../Entity/Head/PlayerHead";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
import SDKManager from "../../Manager/SDKManager";
import TimeUtil from "../../Util/TimeUtil";

const { ccclass, property } = cc._decorator;


@ccclass
export default class PaiHangUI extends baseUI {
    public uiname: string = "PaiHangUI";
    public _view: PaiHang;
    private _index: number = 0;
    private _page: number = 0;
    private _first: boolean = true;
    private _texture: cc.Texture2D = new cc.Texture2D();
    private _gap: number = 0;
    public get rankData(): proto.PlayerRank[] {
        return Global.gameManager.playerManager.ranks;
    }

    onLoad() {
        super.onLoad();

        EventManager.inst.addEvents(gameEvents.updateRank, this.updatePlayerRank.bind(this));
        EventManager.inst.addEvents(gameEvents.updateFriendRank, this.updatePlayerRank.bind(this));
    }
    public show() {
        super.show();
        if (this._first) {
            msgHandler.inst.sendmsg(protoName.reqRank, new proto.reqRank({ type: this._index, page: this._page }));
            this._first = false;
        }
        this.updatePlayerRank();
    }




    init() {
        if (this._view == null) {
            PaiHangUIBinder.bindAll();
            this._view = PaiHang.createInstance();
            super.init();

            this.updateself();
            this._view.shijie.ranklist.itemRenderer = this.renderListItem.bind(this);
            this._view.shijie.ranklist.setVirtual();
            this._view.shijie.ranklist.numItems = 100;
            this._view.tabs.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
            this._view.haoyou.top_title.getChildAt(0).text = "好友排行";
            this._view.shijie.top_title.getChildAt(0).text = "世界排行";
            this.initClick();

            // this.wxsub = child.addComponent(cc.WXSubContextView)
            // this._view.haoyou.holder.node.width = 720;
            // this._view.haoyou.holder.node.height = 1280;
            // this._view.haoyou.holder.node.setContentSize(cc.size(514, 1280))
            //let child = new cc.Node();
            // child.setAnchorPoint(0, 0)
            // child.setPosition(0, 0)
            //this._view.haoyou.holder.node.addChild(child);
            //this._sprite = child.addComponent(cc.Sprite)
            // this.wxsub = this._view.haoyou.holder.node.addComponent(cc.WXSubContextView)
            // child.setPosition(cc.Vec2.ZERO)
            SDKManager.sendSubMessage("changesize", { width: cc.winSize.width, height: cc.winSize.height });
            SDKManager.sendSubMessage("level");

        }

    }

    initClick() {
        this._view.frame.onClick(this.hide, this);
        this._view.haoyou.btn_left.onClick(this.onClickLeft, this)
        this._view.haoyou.btn_right.onClick(this.onClickRight, this)
        this._view.haoyou.btn_tips.onClick(this.onClickTips, this);
        this._view.shijie.btn_tips.onClick(this.onClickTips, this);
    }

    private onClickTips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        if (this._view.tabs.selectedIndex == 0) {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("paihang", 60005);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("paihang", 60006);
        } else {
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("paihang", 3);
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("paihang", 4);
        }
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onChanged(e) {
        this._index = e.selectedIndex;
        msgHandler.inst.sendmsg(protoName.reqRank, new proto.reqRank({ type: this._index, page: this._page }));
    }

    private renderListItem(index: number, obj: fgui.GObject): void {
        if (this.rankData.length > 0 && this.rankData[index]) {
            obj.visible = true;
            var rankData: proto.PlayerRank = this.rankData[index];
            var item: Com_paihang1 = <Com_paihang1>obj;
            if (index < 3) {
                item.top.url = "ui://CommonUI/bz_dj" + (index + 1);
                item.top.visible = true;
                item.rank.visible = false;
            } else {
                item.rank.text = (index + 1).toString();
                item.top.visible = false;
                item.rank.visible = true;
            }
            this.updateselfRank(index, rankData);
            item.playername.text = this.rankData[index].name;
            let level: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(this.rankData[index].level);
            item.level.text = level.name;
            item.layer.text = this.rankData[index].layer + "转";
            var head: PlayerHead = <PlayerHead>item.head;
            head.setHead(rankData.head, 1);
        } else {
            obj.visible = false;
        }
    }
    private updateself() {
        if (this._view) {
            var prop: proto.PlayerProp = Global.gameManager.playerManager.player.getProp();
            if (prop) {
                let level: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(prop.level);
                this._view.shijie.self.playername.text = prop.name;
                this._view.shijie.self.level.text = level.name;
                this._view.shijie.self.layer.text = prop.layer + "转";
                this._view.shijie.self.rank.text = "未上榜";
                var head: PlayerHead = <PlayerHead>this._view.shijie.self.head;
                head.setHead(Global.userinfo.head, Global.userinfo.sex);
            }
        }
    }

    private updateselfRank(rank: number, data: proto.PlayerRank) {
        var prop: proto.PlayerProp = Global.gameManager.playerManager.player.getProp();
        if (data && prop && data.id == prop.id) {
            var head: PlayerHead = <PlayerHead>this._view.shijie.self.head;
            head.setHead(Global.userinfo.head, Global.userinfo.sex);
            this._view.shijie.self.rank.text = (rank + 1).toString();
        }
    }

    private updatePlayerRank() {
        if (this._view) {
            this._view.shijie.ranklist.refreshVirtualList();
        }
    }



    private onClickLeft() {
        SDKManager.sendSubMessage("level", "-1");
    }

    private onClickRight() {
        SDKManager.sendSubMessage("level", "1");
    }

    update(dt) {
        if (this._view && this._window.isShowing && TimeUtil.timestamp() - this._gap > 1) {
            if (cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BAIDU_GAME) {
                var openDataContext = null
                if (Global.isQQ) {
                    openDataContext = qq.getOpenDataContext();
                } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                    openDataContext = wx.getOpenDataContext();
                } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
                    openDataContext = swan.getOpenDataContext();
                }
                this._gap = TimeUtil.timestamp();
                var sharedCanvas = openDataContext.canvas;
                if (sharedCanvas) {
                    this._texture.initWithElement(sharedCanvas);
                    //this.texture.handleLoadedTexture();

                    this._texture.width = cc.winSize.width;
                    this._texture.height = cc.winSize.height;

                    // this.texture.width = wx.getSystemInfoSync().screenWidth * wx.getSystemInfoSync().pixelRatio;
                    // this.texture.height = wx.getSystemInfoSync().screenHeight * wx.getSystemInfoSync().pixelRatio;
                    // this._view.haoyou.holder1
                    var sprite = new cc.SpriteFrame();
                    sprite.setTexture(this._texture);
                    if (this._view.haoyou.holder1.texture) {
                        this._view.haoyou.holder1.texture.ensureLoadTexture();

                    }
                    this._view.haoyou.holder1.texture = sprite;
                }
            }
        }
        // this.subContextView.updateSubContextViewport
        // if (this.wxsub) {
        //     this.wxsub.updateSubContextViewport()
        // }
    }

}