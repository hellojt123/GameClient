/*
 * @Author: Jiangtao
 * @Date: 2019-10-31 14:59:58
 * @LastEditTime: 2020-03-25 10:33:54
 * @LastEditors: Jiangtao
 * @Description: In User Settings Edit
 * @FilePath: \NewProject\assets\Script\UI\RootUI.ts
 */
import MainUI from '../UI/Scripts/MainUI'
import FaBaoUI from '../UI/Scripts/FaBaoUI';
import FuLiUI from '../UI/Scripts/FuLiUI';
import GongFaUI from '../UI/Scripts/GongFaUI';
import PaiHangUI from '../UI/Scripts/PaiHangUI';
import XianChongUI from '../UI/Scripts/XianChongUI';
import QiuQianUI from '../UI/Scripts/QiuQianUI';
import DongFuUI from '../UI/Scripts/DongFuUI';
import RenWuUI from '../UI/Scripts/RenWuUI';
import ZhuanShengUI from '../UI/Scripts/ZhuanShengUI';
import XiTongUI from '../UI/Scripts/XiTongUI';
import FeiGeUI from '../UI/Scripts/FeiGeUI';
import LayerTipsUI from '../UI/Scripts/LayerTipsUI';
import TipsUI from '../UI/Scripts/TipsUI';
import MaskUI from '../UI/Scripts/MaskUI';
import YouJianUI from '../UI/Scripts/YouJianUI';
import QianDaoUI from '../UI/Scripts/QianDaoUI';
import ShiTuUI from '../UI/Scripts/ShiTuUI';
import HeXiuUI from '../UI/Scripts/HeXiuUI';
import baseUI from '../UI/Scripts/baseUI';
import Loading from '../UI/LoadingUI/Loading';
import LoadingUIBinder from '../UI/LoadingUI/LoadingUIBinder';
import DaoLvUI from '../UI/Scripts/DaoLvUI';
import TianCaiUI from '../UI/Scripts/TianCaiUI';
import GuideUI from '../UI/Scripts/GuideUI';
import XuanZeUI from '../UI/Scripts/XuanZeUI';
import { gameEvents } from '../Const/gameEvents';
import EventManager from './EventManager';
import msgHandler from '../Net/msgHandler';
import { protoName } from '../Const/protoName';
import * as proto from "../Net/proto/proto"
import Long = require('long');
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
    @property(cc.ParticleSystem)
    expball: cc.ParticleSystem = null;

    @property(cc.MotionStreak)
    point: cc.MotionStreak = null;

    @property(cc.WXSubContextView)
    wxsub: cc.WXSubContextView = null;

    public mainui: MainUI;
    public prayerui: QiuQianUI;
    public signui: FuLiUI;
    public rankui: PaiHangUI;
    public fabaoui: FaBaoUI;
    public bodyui: GongFaUI;
    public petui: XianChongUI;
    public homeui: DongFuUI;
    public taskui: RenWuUI;
    public qaui: FeiGeUI;
    public zhuangshengui: ZhuanShengUI;
    public xitongui: XiTongUI;
    public layertipsui: LayerTipsUI;
    public tipsui: TipsUI;
    public maskui: MaskUI;
    public youjianui: YouJianUI;
    public qiandaoui: QianDaoUI;
    public shituui: ShiTuUI;
    public heixuui: HeXiuUI;
    public daolvui: DaoLvUI;
    public tiancaiui: TianCaiUI;
    public guideui: GuideUI;
    public xuanzeui: XuanZeUI;

    private _hideTipslist: Function[] = [];
    private uilist: Map<string, baseUI> = new Map<string, baseUI>();

    onLoad() {
        fgui.UIConfig.modalLayerColor = cc.color(0, 0, 0, 0);
        LoadingUIBinder.bindAll();
        fgui.UIConfig.windowModalWaiting = Loading.URL;
        fgui.GRoot.create();
        EventManager.inst.addEvents(gameEvents.showUI, this.ShowUI.bind(this));
        EventManager.inst.addEvents(gameEvents.linkCMD, this.LinkCMD.bind(this));
        EventManager.inst.addEvents(gameEvents.onshow, this.onshow.bind(this));
    }

    start() {
        Global.gameManager.uiManager.initUI();
        Global.gameManager.uiManager.initEvent();
    }

    onshow(data) {
        if (data && data.type && data.inviteid) {
            let type: number = Number.parseInt(data.type);
            let inviteid: Long = Long.fromValue(data.inviteid);
            let msg = new proto.reqInvite({ type: type, inviteid: inviteid.toNumber() });
            msgHandler.inst.sendmsg(protoName.reqInvite, msg);
        }

    }

    initEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMoveStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(e) {
        console.log(e);
    }

    onMoveStart(e) {
        console.log(e);
        if (this.point) {

            //this.point.node.setPosition()
        }
    }

    onTouchEnd(e) {
        console.log(e);
    }

    initUI() {
        this.createMainUI();
        this.createPrayerUI();
        this.createSignUI();
        this.createRankUI();
        this.createFaBaoUI();
        this.createBodyUI();
        this.createPetUI();
        this.createHomeUI();
        this.createTaskUI();
        this.createQAUI();
        this.createZhuanShengUI();
        this.createLayerTipsUI();
        this.createXiTongUI();
        this.createTipsUI();
        this.createYouJianUI();
        this.createQianDaoUI();
        this.createShiTuUI();
        this.createHeXiuUI();
        this.createDaoLvUI();
        this.createTianCaiUI();
        this.createGuideUI();
        this.createXuanZeUI();
    }

    private createXuanZeUI() {
        var node = new cc.Node();
        this.xuanzeui = node.addComponent(XuanZeUI);
        this.uilist.set("XuanZeUI", this.xuanzeui);
        this.node.addChild(node);
    }

    private createGuideUI() {
        var node = new cc.Node();
        this.guideui = node.addComponent(GuideUI);
        this.uilist.set("GuideUI", this.guideui);
        this.node.addChild(node);
    }

    private createTianCaiUI() {
        var node = new cc.Node();
        this.tiancaiui = node.addComponent(TianCaiUI);
        this.uilist.set("TianCaiUI", this.tiancaiui);
        this.node.addChild(node);
    }

    private createDaoLvUI() {
        var node = new cc.Node();
        this.daolvui = node.addComponent(DaoLvUI);
        this.uilist.set("DaoLvUI", this.daolvui);
        this.node.addChild(node);
    }

    private createHeXiuUI() {
        var node = new cc.Node();
        this.heixuui = node.addComponent(HeXiuUI);
        this.uilist.set("HeXiuUI", this.heixuui);
        this.node.addChild(node);
    }


    private createShiTuUI() {
        var node = new cc.Node();
        this.shituui = node.addComponent(ShiTuUI);
        this.uilist.set("ShiTuUI", this.shituui);
        this.node.addChild(node);
    }

    private createQianDaoUI() {
        var node = new cc.Node();
        this.qiandaoui = node.addComponent(QianDaoUI);
        this.uilist.set("QianDaoUI", this.qiandaoui);
        this.node.addChild(node);
    }

    private createYouJianUI() {
        var node = new cc.Node();
        this.youjianui = node.addComponent(YouJianUI);
        this.uilist.set("YouJianUI", this.youjianui);
        this.node.addChild(node);
    }

    private createTipsUI() {
        var node = new cc.Node();
        this.tipsui = node.addComponent(TipsUI);
        // this.uilist.set("TipsUI",this.tipsui);   
        this.node.addChild(node);
    }

    private createLayerTipsUI() {
        var node = new cc.Node();
        this.layertipsui = node.addComponent(LayerTipsUI);
        this.uilist.set("LayerTipsUI", this.layertipsui);
        this.node.addChild(node);
    }

    private createXiTongUI() {
        var node = new cc.Node();
        this.xitongui = node.addComponent(XiTongUI);
        this.uilist.set("XiTongUI", this.xitongui);
        this.node.addChild(node);
    }

    private createZhuanShengUI() {
        var node = new cc.Node();
        this.zhuangshengui = node.addComponent(ZhuanShengUI);
        this.uilist.set("ZhuanShengUI", this.zhuangshengui);
        this.node.addChild(node);
    }

    private createQAUI() {
        var node = new cc.Node();
        this.qaui = node.addComponent(FeiGeUI);
        this.uilist.set("FeiGeUI", this.qaui);
        this.node.addChild(node);
    }

    private createTaskUI() {
        var node = new cc.Node();
        this.taskui = node.addComponent(RenWuUI);
        this.uilist.set("RenWuUI", this.taskui);
        this.node.addChild(node);
    }

    private createHomeUI() {
        var node = new cc.Node();
        this.homeui = node.addComponent(DongFuUI);
        this.uilist.set("DongFuUI", this.homeui);
        this.node.addChild(node);
    }

    private createPetUI() {
        var node = new cc.Node();
        this.petui = node.addComponent(XianChongUI);
        this.uilist.set("XianChongUI", this.petui);
        this.node.addChild(node);
    }

    private createBodyUI() {
        var node = new cc.Node();
        this.bodyui = node.addComponent(GongFaUI);
        this.uilist.set("GongFaUI", this.bodyui);
        this.node.addChild(node);
    }

    private createSignUI() {
        var node = new cc.Node();
        this.signui = node.addComponent(FuLiUI);
        this.uilist.set("FuLiUI", this.signui);
        this.node.addChild(node);
    }

    private createFaBaoUI() {
        var node = new cc.Node();
        this.fabaoui = node.addComponent(FaBaoUI);
        this.uilist.set("FaBaoUI", this.fabaoui);
        this.node.addChild(node);
    }

    private createRankUI() {
        var node = new cc.Node();
        this.rankui = node.addComponent(PaiHangUI);
        this.uilist.set("PaiHangUI", this.rankui);
        this.node.addChild(node);
    }

    private createMainUI() {
        var node = new cc.Node();
        this.mainui = node.addComponent(MainUI);
        this.uilist.set("MainUI", this.mainui);
        this.node.addChild(node);
    }

    private createPrayerUI() {
        var node = new cc.Node();
        this.prayerui = node.addComponent(QiuQianUI);
        this.uilist.set("QiuQianUI", this.prayerui);
        this.node.addChild(node);
    }

    public addHideTips(obj: any): void {
        this._hideTipslist.push(obj);
    }

    public getHideTips(): Function[] {
        return this._hideTipslist;
    }

    public getUI(uiname: string): baseUI {
        return this.uilist.get(uiname);
    }

    LinkCMD(cmd: string) {
        let str: string[] = cmd.split(":");
        if (str.length > 0) {
            if (str[0] == "openui") {
                let subcmd: string[] = str[1].split(",");
                if (subcmd.length > 1) {
                    console.log(subcmd)
                    let ui = this.uilist.get(subcmd[0]);
                    if (ui) {
                        ui.showUI(() => {
                            let target = ui._view.getChildByPath(subcmd[1]);
                            fgui.GRoot.inst.inputProcessor.simulateClick(target);
                        })
                    }
                } else {
                    this.ShowUI(str[1]);
                }
            }
        }
    }

    ShowUI(uiname: string) {
        if (this.uilist.has(uiname)) {
            let ui = this.uilist.get(uiname);
            ui.showUI()
        }
    }

}
