/*
 * @Author: Jiangtao
 * @Date: 2019-11-05 08:51:26
 * @LastEditTime: 2020-06-23 10:40:43
 * @LastEditors: Jiangtao
 */
import MainUIBinder from "../MainUI/MainUIBinder"
import Main from "../MainUI/Main"
import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";
import msgHandler from "../../Net/msgHandler";
import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import TimeUtil from "../../Util/TimeUtil";
import PlayerHead from "../../Entity/Head/PlayerHead";
import { GameUtil, Point } from "../../Util/GameUtil";
import SDKManager from "../../Manager/SDKManager";
import { TipsData } from '../../Const/TipsType';
import Role from "../../Entity/Role/Role";
import com_fabao from "../../Entity/Fabao/com_fabao";
import { PlayerEntity } from "../../Entity/Player/PlayerEntity";
import com_pets from "../../Entity/Pet/com_pet";
import com_main_level from "../MainUI/com_main_level";
import { protoName } from "../../Const/protoName";
import { gameEvents } from "../../Const/gameEvents";
import { TipsType } from "../../Const/TipsType";
const { ccclass, property } = cc._decorator;
@ccclass
export default class MainUI extends baseUI {
    public uiname: string = "MainUI";
    public _view: Main;

    private _sex: number = 0;
    private myExpBallPool: cc.NodePool;
    private login_button: any;

    public get getHeXiuBuffs(): Map<number, proto.PlayerBuff> {
        return Global.gameManager.playerManager.player.getBuffsByType(1);
    }

    public get getBuffs(): Map<number, proto.PlayerBuff> {
        return Global.gameManager.playerManager.player.getBuffsByType(2);
    }
    public get dailyTaskData(): Map<number, proto.playerTask> {
        return Global.gameManager.playerManager.player.getDailyTasks();
    }

    public get extTaskData(): Map<number, proto.playerTask> {
        return Global.gameManager.playerManager.player.getExtTasks();
    }

    onLoad() {

        super.onLoad();
        EventManager.inst.addEvents(gameEvents.updateProp, this.updatePlayerProp.bind(this));
        EventManager.inst.addEvents(gameEvents.updatePerExp, this.updatePlayerPerExp.bind(this));
        EventManager.inst.addEvents(gameEvents.updateCanGetExp, this.updateCanGetExp.bind(this));
        EventManager.inst.addEvents(gameEvents.updateQA, this.updateQA.bind(this));
        EventManager.inst.addEvents(gameEvents.updateNewMail, this.updateNewMail.bind(this));
        EventManager.inst.addEvents(gameEvents.updatHideBird, this.hideBird.bind(this));
        EventManager.inst.addEvents(gameEvents.updatePlayerLevel, this.updatePlayerLevel.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBagItemChange, this.updateBagItemChange.bind(this));
        EventManager.inst.addEvents(gameEvents.updatePlayerOffLineExp, this.showOffLineExp.bind(this));
        EventManager.inst.addEvents(gameEvents.updatePet, this.updatePet.bind(this));

        EventManager.inst.addEvents(gameEvents.updateSign, this.checkRed.bind(this));
        EventManager.inst.addEvents(gameEvents.updateProp, this.checkRed.bind(this));
        EventManager.inst.addEvents(gameEvents.updateBagItems, this.checkRed.bind(this));
        EventManager.inst.addEvents(gameEvents.updatePet, this.checkRed.bind(this));
        EventManager.inst.addEvents(gameEvents.updateXianJin, this.checkRed.bind(this));
        EventManager.inst.addEvents(gameEvents.playTransform, this.playTransform.bind(this));
        EventManager.inst.addEvents(gameEvents.updateTask, this.checkRed.bind(this));

        this._view.setSize(cc.winSize.width, cc.winSize.height);
    }

    show() {
        super.showUI();

    }

    init() {
        if (this._view == null) {
            var me = this;
            MainUIBinder.bindAll();
            this._view = Main.createInstance();
            super.init();
            this.initOnClick();

            this._view.btn_youjian.visible = false;
            this._view.bird.visible = false;
            this._view.tupo.visible = false;
            this._view.btn_tupo.com_wave.visible = false;
            this._view.bottom.setPosition(0, cc.winSize.height - this._view.bottom.height);
            var head: PlayerHead = <PlayerHead>this._view.tophead;
            head.setHead(Global.userinfo.head, Global.userinfo.sex);
            this._view.btn_tupo.time.visible = false;
            this._view.mc_levelup.visible = false;
            this._view.btn_fabao.light.playing = true;
            this._view.btn_fabao.light.setPlaySettings(0, -1, 1, 0, () => {
                this.playLightComplate(1);
            }, null);
            if (cc.sys.isBrowser) {
                this._view.btn_gm.visible = true;
            } else {
                this._view.btn_gm.visible = false;
            }
            this._view.tree_left.node.setScale(-1, 1);

            this._view.com_sex.btn_man.head_icon.url = "ui://ItemUI/tx_man1";
            this._view.com_sex.btn_woman.head_icon.url = "ui://ItemUI/tx_woman1";
            this._view.btn_fabao.bg.url = "ui://MainUI/btn_fabao";
            this._view.btn_gongfa.bg.url = "ui://MainUI/btn_gongfa";
            this._view.btn_pet.bg.url = "ui://MainUI/btn_pet";
            this._view.btn_dongfu.bg.url = "ui://MainUI/btn_dongfu";
            //this._view.bg.url = "https://gametest.qianmo.info/res/loader/main_bg.png";
            this._view.bg.url = Global.resurl + "loader/main_bg.png";
            this._view.btn_tdjh.title.text = "";
            Global.gameManager.point.node.setParent(this._view.node);
            this._view.tupo_bar.titleType = fgui.ProgressTitleType.Percent;
            ConfigUtil.inst.configPlayerLevel.getNames().forEach((value) => {
                let name: com_main_level = <com_main_level>this._view.namelist.addItemFromPool(com_main_level.URL);
                name.text_level.text = value;
            })
            this._view.white_mask.setSize(9999, 9999);
            this.myExpBallPool = new cc.NodePool();
            for (let i = 0; i < 10; i++) {
                let ball = cc.instantiate(Global.gameManager.expball.node); // 创建节点
                this.myExpBallPool.put(ball); // 通过 put 接口放入对象池                
            }
            // this._view.namelist.scrollPane.scrollToView()          

            setTimeout(function () { me.reqRed(); }, 2000);
        }
    }

    showOffLineExp(data: number) {
        if (data > 0) {
            var tipsdata: TipsData = new TipsData();
            tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("offlineexp", 1);
            tipsdata.type = TipsType.ITEMSHOW;
            tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("offlineexp", 2);
            tipsdata.cancel_text = "直接领取";
            tipsdata.cancel_callback = () => {
                msgHandler.inst.sendmsg(protoName.reqOffLineExp, new proto.reqOffLineExp({ isAd: false }));
            };
            tipsdata.ok_text = "视频双倍";
            tipsdata.ok_callback = () => {
                SDKManager.CreateAD(1, () => {
                    msgHandler.inst.sendmsg(protoName.reqOffLineExp, new proto.reqOffLineExp({ isAd: true }));
                })
            }
            tipsdata.itemid = 70001;
            tipsdata.itemnum = data;
            tipsdata.cancal_background = true;
            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
        }
    }



    private playLightComplate(type: number) {
        if (type == 1) {
            this._view.btn_gongfa.light.playing = true;
            this._view.btn_gongfa.light.setPlaySettings(0, -1, 1, 0, () => {
                this.playLightComplate(2);
            }, null);
        } else if (type == 2) {
            this._view.btn_pet.light.playing = true;
            this._view.btn_pet.light.setPlaySettings(0, -1, 1, 0, () => {
                this.playLightComplate(3);
            }, null);
        } else if (type == 3) {
            this._view.btn_dongfu.light.playing = true;
            this._view.btn_dongfu.light.setPlaySettings(0, -1, 1, 0, () => {
                this.playLightComplate(4);
            }, null);
        } else if (type == 4) {
            this._view.btn_fabao.light.playing = true;
            this._view.btn_fabao.light.setPlaySettings(0, -1, 1, 0, () => {
                this.playLightComplate(1);
            }, null);
        }
    }

    private hideALL() {
        this._view.btn_tupo.state.text = "注 灵";
        this._view.shengzi.visible = false;
        this._view.top.visible = false;
        this._view.APP.visible = false;
        this._view.apps.visible = false;
        this._view.text_jiewei.visible = false;
        this._view.bottom.visible = false;
        this._view.bird.visible = false;
        this._view.tree_left.visible = false;
        this._view.tree_right.visible = false;
    }

    private showALL() {
        this._view.btn_tupo.state.text = "突 破";
        this._view.shengzi.visible = true;
        this._view.top.visible = true;
        this._view.APP.visible = true;
        this._view.apps.visible = true;
        this._view.text_jiewei.visible = true;
        this._view.bottom.visible = true;
        this._view.tree_left.visible = true;
        this._view.tree_right.visible = true;
        this._view.btn_tupo.visible = true;
    }

    initOnClick() {
        this._view.main_Role.onClick(this.onClickGet, this);
        this._view.btn_sign.onClick(this.onClickPrayer, this);
        this._view.btn_reward.onClick(this.onClickSign, this);
        this._view.btn_rank.onClick(this.onClickRank, this);
        this._view.btn_fabao.onClick(this.onClickBag, this);
        this._view.btn_gongfa.onClick(this.onClickBody, this);
        this._view.btn_dongfu.onClick(this.onClickDF, this);
        this._view.btn_pet.onClick(this.onClickPet, this);
        this._view.btn_renwu.onClick(this.onClickTask, this);
        this._view.bird.onClick(this.onClickQA, this);
        this._view.btn_tcdb.onClick(this.onClickTcdb, this);
        this._view.btn_tips.onClick(this.onClickTips, this);
        this._view.btn_tdjh.onClick(this.onClickTdjh, this);
        this._view.tophead.onClick(this.onClickShowXiTong, this);
        this._view.btn_zhuan.onClick(this.onClickZhuanSheng, this)
        this._view.btn_youjian.onClick(this.onClickYouJian, this);
        this._view.btn_denglu.onClick(this.onClickQianDao, this);
        this._view.btn_gm.btn_send.onClick(this.onClickSendGM, this);
        this._view.btn_shitu.onClick(this.onClickShiTu, this);
        this._view.btn_hexiu.onClick(this.onClickHeXiu, this);
        this._view.btn_marray.onClick(this.onClickMarray, this);
        this._view.com_sex.btn_chose.onClick(this.onClickChoseSex, this);
        this._view.com_sex.tab_sex.on(fgui.Event.STATUS_CHANGED, this.onSexChanged, this);
        this._view.btn_linqi.onClick(this.onClickTop1Tips, this);
        this._view.btn_zuanshi.onClick(this.onClickTop2Tips, this);
        this._view.btn_hua.onClick(this.onClickTop3Tips, this);
        this._view.btn_yaopu.onClick(this.onClickYaoPu, this);
        this._view.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this._view.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMoveStart, this);
        this._view.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: cc.Event.EventMouse) {
        let pos = this._view.node.convertToNodeSpaceAR(event.getLocation());
        Global.gameManager.point.node.setPosition(pos);
        Global.gameManager.point.node.active = true;
        if (this.login_button) {
            this.login_button.hide();
        }
    }

    onMoveStart(event: cc.Event.EventMouse) {
        let pos = this._view.node.convertToNodeSpaceAR(event.getLocation());
        Global.gameManager.point.node.setPosition(pos);
    }

    onTouchEnd(e) {
        Global.gameManager.point.node.active = false;
    }

    private onClickYaoPu() {
        if (this._view.btn_yaopu.grayed) {
            this.limitLevel();
        } else {
            Global.gameManager.uiManager.tiancaiui.showUI();
        }
    }

    private onClickTop1Tips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("main", 17001);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickTop2Tips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("main", 17002);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private onClickTop3Tips() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.NORAML;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("main", 17003);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }


    private onSexChanged(e) {
        this._sex = e.selectedIndex;
    }

    private sendChoseSex() {
        msgHandler.inst.sendmsg(protoName.reqChoseSex, new proto.reqChoseSex({ sex: this._sex }));
    }

    private onClickChoseSex() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.CHOICE;
        tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("main", 12);
        tipsdata.ok_callback = this.sendChoseSex.bind(this);
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }


    private onClickMarray() {
        if (this._view.btn_marray.grayed) {
            this.limitLevel();
        } else {
            Global.gameManager.uiManager.daolvui.showUI();
        }
    }

    private onClickHeXiu() {
        if (this._view.btn_hexiu.grayed) {
            this.limitLevel();
        } else {
            Global.gameManager.uiManager.heixuui.showUI();
        }
    }

    private onClickShiTu() {
        if (this._view.btn_shitu.grayed) {
            this.limitLevel();
        } else {
            Global.gameManager.uiManager.shituui.showUI();
        }
    }

    private onClickSendGM() {
        if (this._view.btn_gm.n4.text) {
            let str: string = this._view.btn_gm.n4.text;
            if (str.startsWith("guide")) {
                Global.gameManager.uiManager.guideui.testguide(str.split(":")[1]);
            } else if (str.startsWith("uiguide")) {
                Global.gameManager.uiManager.guideui.testpath(str.split(":")[1]);
            } else if (str.startsWith("resetguide")) {
                Global.gameManager.uiManager.guideui.reset();
            } else {
                msgHandler.inst.sendmsg(protoName.reqGMCommand, new proto.reqGMCommand({ command: this._view.btn_gm.n4.text }));
                this._view.btn_gm.n4.text = "";
            }
        }
    }

    private onClickQianDao() {
        Global.gameManager.uiManager.qiandaoui.showUI();
    }

    private onClickYouJian() {
        Global.gameManager.uiManager.youjianui.showUI();
    }

    private onClickTips() {
        Global.gameManager.uiManager.layertipsui.showUI();
    }

    private onClickZhuanSheng() {
        Global.gameManager.uiManager.zhuangshengui.showUI();
    }

    private onClickShowXiTong() {
        Global.gameManager.uiManager.xitongui.showUI();
    }

    private loadStep: number = 0;
    private bottom_pos: number = 170;
    private tupo_times: number = 0;
    private countTime: number = 0;
    private stopTime: boolean = false;
    private onClickLevelUp() {
        let me = this;
        var config: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(this.propData.level);
        if (config) {
            this.hideALL();
            if (config.tupo > 0) {
                // if(1> 0) {              

                let role: Role = <Role>this._view.main_Role;
                this._view.tupo.visible = true;
                this._view.btn_tupo.n5.visible = false;
                this._view.btn_tupo.com_wave.visible = true;

                if (this.tupo_times < config.tupotimes) {
                    if (this.tupo_times == 0 && this.countTime == 0) {
                        this.countTime = config.tupo;
                        this.PlayBgColor(255, 51);
                    }
                    this.stopTime = false;
                    this.tupo_times++;
                    this.playBall(
                        this._view.ps.node.x,
                        this._view.ps.node.y,
                        this._view.ball_target.node.x,
                        this._view.ball_target.node.y,
                        null
                    )
                    let dis: number = this.bottom_pos / config.tupotimes;
                    this._view.tupo_bar.max = config.tupotimes;
                    this._view.tupo_bar.min = 0;
                    this._view.tupo_bar.value = this.tupo_times;
                    this._view.btn_tupo.com_wave.wave.y += dis;
                    SDKManager.VibrateShort();
                } else {
                    this.stopTime = true;
                    this._view.tupo.visible = false;
                    // this.tupo_mc = fgui.UIPackage.createObject("TuPoUI","tupo").asMovieClip; 
                    // this.tupo_mc.setScale(2,2);
                    // this.tupo_mc.setPlaySettings(0,-1,1,0,this.playWhite.bind(this),null);
                    // this._view.main_Role.addChild(this.tupo_mc);
                    // this.tupo_mc.setPosition(-62,-416); 
                    // this.tupo_mc.playing = true;                    
                    this._view.btn_tupo.visible = false;

                    role.playLevelUp2(this.playWhite.bind(this));
                }
            } else {
                this._view.btn_tupo.visible = false;
                let role: Role = <Role>this._view.main_Role;
                role.playLevelUp1(this.playWhite.bind(this));
            }

        }
    }

    private PlayBgColor(from: number, to: number) {
        fgui.GTween.to(from, to, 1)
            .setTarget(this, this.setBgColor.bind(this));
    }

    private setBgColor(value: number) {
        this._view.bg.color = cc.color(value, value, value)
    }

    private onClickLevelUpAD() {
        SDKManager.CreateAD(3, () => {
            msgHandler.inst.sendmsg(protoName.reqLevelUpAD, new proto.reqLevelUpAD({}));
        })
        // var tipsdata: TipsData = new TipsData();
        // tipsdata.type = TipsType.CHOICE;
        // tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("xinmo", 1);
        // tipsdata.ok_text = "视频";
        // tipsdata.cancel_text = "取消";
        // tipsdata.ok_callback = () => {
        //     SDKManager.CreateAD(3, () => {
        //         msgHandler.inst.sendmsg(protoName.reqLevelUpAD, new proto.reqLevelUpAD({}));
        //     })
        // };
        // EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }

    private playWhite(sucess: boolean = true) {
        if (!this.ad) {
            this.ad = SDKManager.CreateBannerAd("eebb2de7659f7cd7c7db95d1b416e67b", 320, 0, 680);
        } else {
            this.ad.show();
        }
        fgui.GTween.to(0, 255, 1)
            .setTarget(this, this.setWhiteAlpha.bind(this))
            .onComplete(() => (this.levelUpComplate(sucess)), this);
    }

    private setWhiteAlpha(alpha: number) {
        this._view.white_mask.color = cc.color(255, 255, 255, alpha);
    }

    private level: number = 0;
    private ad: any;
    private levelUpComplate(sucess: boolean = true) {
        if (this.ad != null) {
            this.ad.offLoad();
            this.ad.hide();
        }
        this.showALL();
        this._view.white_mask.color = cc.color(255, 255, 255, 0);
        this._view.mc_levelup.visible = true;
        this._view.mc_levelup.setPlaySettings(0, -1, 1, 0, this.leveupEnd.bind(this), null);

        if (this._view.bg.color.getA() != 255) {
            this.PlayBgColor(51, 255);
        }
        this.loadStep = 0;
        this.tupo_times = 0;
        this.countTime = 0;
        this._view.tupo_bar.value = 0;
        this._view.tupo.visible = false;
        this._view.btn_tupo.n5.visible = true;
        this._view.btn_tupo.com_wave.visible = false;
        this._view.btn_tupo.com_wave.wave.y = 0;
        if (sucess) {
            msgHandler.inst.sendmsg(protoName.reqLevelUp, new proto.reqLevelUp({}));
        }
    }

    private leveupEnd() {
        this._view.mc_levelup.visible = false;
    }

    private onClickTcdb() {
        if (this.propData) {
            let levelconfig: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(this.propData.level);
            let activityconfig: IConfigactivity = ConfigUtil.inst.ConfigActivityContainer.getConfigById(25);
            if (levelconfig && activityconfig) {
                let tipsdata: TipsData = new TipsData();
                tipsdata.title = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tdlq", 1);
                tipsdata.type = TipsType.MAIL;
                tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("tdlq", 2);
                let rate = 0;
                if (this.propData.islevelTcdb) {
                    rate = levelconfig.tcdb_rate
                } else {
                    rate = activityconfig.exp_rate;
                }
                let exp = levelconfig.needExp * rate;
                if (exp == 0) {
                    exp = 1;
                }
                tipsdata.itemid = 70001;
                tipsdata.award = "70001," + exp;
                tipsdata.ok_text = "观看视频";
                tipsdata.ok_callback = () => {
                    SDKManager.CreateAD(2, () => {
                        msgHandler.inst.sendmsg(protoName.reqActivity, new proto.reqActivity({ id: 22 }));
                    })
                };
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            }
            //Global.gameManager.uiManager.tiancaiui.showUI();
        }
    }

    private onClickTdjh() {
        //Global.gameManager.uiManager.tiancaiui.showUI();    
        //msgHandler.inst.sendmsg(protoName.reqActivity, new proto.reqActivity({id:25}));
    }

    private onClickQA() {
        Global.gameManager.uiManager.qaui.showUI();
    }

    private onClickTask() {
        Global.gameManager.uiManager.taskui.showUI();
    }

    private onClickDF() {
        if (!this._view.btn_dongfu.dis.visible || cc.sys.isBrowser) {
            Global.gameManager.uiManager.homeui.showUI();
        } else {
            this.limitLevel();
        }

    }

    private onClickPet() {
        if (!this._view.btn_pet.dis.visible || cc.sys.isBrowser) {
            Global.gameManager.uiManager.petui.showUI();
        } else {
            this.limitLevel();
        }

    }

    private onClickBody() {
        if (!this._view.btn_gongfa.dis.visible || cc.sys.isBrowser) {
            Global.gameManager.uiManager.bodyui.showUI();
        } else {
            this.limitLevel();
        }

    }

    private onClickBag() {
        if (!this._view.btn_fabao.dis.visible || cc.sys.isBrowser) {
            Global.gameManager.uiManager.fabaoui.showUI();
        } else {
            this.limitLevel();
        }

    }

    private onClickSign() {
        if (this._view.btn_reward.grayed) {
            this.limitLevel();
        } else {
            Global.gameManager.uiManager.signui.showUI();
        }
    }

    private onClickPrayer() {
        if (this._view.btn_sign.grayed) {
            this.limitLevel();
        } else {
            Global.gameManager.uiManager.prayerui.showUI();
        }
    }

    private onClickRank() {
        let me = this;
        if (this._view.btn_rank.grayed && !cc.sys.isBrowser) {
            this.limitLevel();
        } else {
            if (Global.isQQ && cc.sys.platform == cc.sys.WECHAT_GAME) {
                qq.getSetting({
                    success(res) {
                        if (res.authSetting["scope.userInfo"]) {
                            qq.getUserInfo({
                                success: function (res) {
                                    var str = JSON.stringify(res.userInfo);
                                    cc.sys.localStorage.setItem("userInfo", str);
                                    Global.gameManager.uiManager.rankui.showUI();
                                }
                            })
                        }
                        else {
                            me.createBtnLogin();
                            var tipsdata: TipsData = new TipsData();
                            tipsdata.type = TipsType.CHOICE;
                            tipsdata.text = "排行榜功能需要授权用户信息";
                            tipsdata.ok_callback = () => {

                            };
                            EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
                        }
                    }
                })
            } else {
                Global.gameManager.uiManager.rankui.showUI();
            }

        }
    }

    createBtnLogin() {
        let sysInfo = qq.getSystemInfoSync();
        let left = sysInfo.screenWidth / 2 + 100;
        let top = sysInfo.screenHeight / 2;
        this.login_button = qq.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
                left: left - 100,
                top: top,
                width: 200,
                height: 50,
                lineHeight: 40,

                textAlign: 'center',
                fontSize: 18,
                borderRadius: 4
            }
        })
        if (this.login_button) {
            this.login_button.onTap((res) => {
                EventManager.inst.onEvents(gameEvents.hidetips);
                Global.userinfo.nickname = res.userInfo.nickName;
                Global.userinfo.job = 0;
                Global.userinfo.sex = res.userInfo.gender;
                Global.userinfo.head = res.userInfo.avatarUrl;
                Global.gameManager.uiManager.rankui.showUI();
                this.login_button.hide();
            })
        }

    }

    private limitLevel() {
        var tipsdata: TipsData = new TipsData();
        tipsdata.type = TipsType.POPUP;
        tipsdata.text = "等级不足，尚未解锁";
        EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
    }


    private onClickGet(e: fgui.Event) {
        // EventManager.inst.onEvents(gameEvents.linkCMD, "openui:XianChongUI,n28");

        //LoadUtil.inst.RemoveDragonBones("role_0_0_1");
        this._view.n196.text = "0";
        this.playBall(
            this._view.ps.node.x,
            this._view.ps.node.y,
            this._view.icon_lingqi1.node.x + 40,
            this._view.icon_lingqi1.node.y - 20,
            () => msgHandler.inst.sendmsg(protoName.reqGetExp, new proto.reqGetExp({}))
        )
    }

    playBall(start_x, start_y, point_x, point_y, func: Function) {
        if (this.myExpBallPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            let node = this.myExpBallPool.get();
            node.active = true;
            node.setParent(this._view.node);
            let random = GameUtil.random(-1, 9);
            let x = random * 100;
            let p1: fgui.GPathPoint = fgui.GPathPoint.newCubicBezierPoint(start_x, start_y, x, -100, 50, -100);
            let p2: fgui.GPathPoint = fgui.GPathPoint.newCubicBezierPoint(point_x, point_y, -100, -100, 100, 100);
            let points: fgui.GPathPoint[] = [];
            points.push(p1);
            points.push(p2);
            let path: fgui.GPath = new fgui.GPath();
            path.create(points);
            fgui.GTween.to2(0, 0, 0, 0, 1.5)
                .setPath(path)
                .setTarget(this._view, (x, y) => {
                    node.setPosition(x, y);
                })
                .setEase(fgui.EaseType.Linear)
                .onComplete(() => (this.onFlyComplate(node)), this);
            if (func) {
                func();
            }
        }

    }


    onFlyComplate(node: cc.Node) {
        node.active = false;
        this.myExpBallPool.put(node);
    }

    updateQA(data: proto.resQA) {
        if (this._view && this.tupo_times == 0) {
            this._view.bird.visible = true;
        }
    }

    hideBird() {
        if (this._view) {
            this._view.bird.visible = false;
        }
    }

    showBird() {
        if (this._view && this.tupo_times == 0) {
            this._view.bird.visible = true;
        }
    }

    private updateNewMail(type: number) {
        this._view.btn_youjian.visible = true;
    }

    updateBagItemChange(data: proto.bagItem[]) {
        if (data) {

            var show = true;
            var hides = Global.gameManager.uiManager.getHideTips();
            for (var i = 0; i < hides.length; i++) {
                if (hides[i] && hides[i]()) {
                    return;
                }
            }

            let showtext = "";
            data.forEach((value) => {
                if (value && show) {
                    if (value.stats == 1) {
                        var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(value.itemid);
                        if (config && config.showTips == 1) {
                            showtext += "获得<img src='" + config.icon + "' height='40' width='40'/>" + GameUtil.ConvertNum(value.num) + ",";
                        }
                    }
                }
            })

            if (showtext && show) {
                showtext = showtext.substring(0, showtext.lastIndexOf(','));
                var tipsdata: TipsData = new TipsData();
                tipsdata.type = TipsType.POPUP;
                tipsdata.text = showtext;
                EventManager.inst.onEvents(gameEvents.showTips, tipsdata);
            }
        }
    }
    private reqPet: boolean = false;
    updatePlayerProp() {
        this._view.n201.text = GameUtil.ConvertNum(this.propData.exp);
        this._view.n205.text = GameUtil.ConvertNum(this.propData.stone);
        this._view.n209.text = GameUtil.ConvertNum(this.propData.fame);

        this.updateloginGifts();

        if (!this.reqPet) {
            this.reqPet = true;
            msgHandler.inst.sendmsg(protoName.reqPlayerPet, new proto.reqPlayerPet({}));
        }

        if (this.propData.choseSex == 0) {
            Global.gameManager.uiManager.xuanzeui.showUI();
        }

        if (this.propData.xmEndTime <= TimeUtil.timestamp()) {
            if (!this._view.btn_tupo.com_wave.visible) {
                this._view.btn_tupo.n5.visible = true;
            }
            this._view.btn_tupo.time.visible = false;
            this._view.xinmo.visible = false;
            this._view.btn_tupo.offClick(this.onClickLevelUpAD, this);
            this._view.btn_tupo.state.text = "突 破";
            this._view.bg.color = cc.color(255, 255, 255);
        }

        let levelconfig: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(this.propData.level);
        let role: Role = <Role>this._view.main_Role;
        role.setRole(this.propData.level, this.propData.sex);
        if (levelconfig) {
            this.udpdatePlayerNeedExp(levelconfig.needExp);
            if (this.propData.xmEndTime <= TimeUtil.timestamp()) {
                this._view.btn_tupo.offClick(this.onClickLevelUpAD, this);
                this._view.btn_tupo.time.visible = false;
                if (this.propData.exp >= levelconfig.needExp) {

                    this._view.btn_tupo.onClick(this.onClickLevelUp, this);
                    this._view.btn_tupo.n5.visible = true;
                } else {
                    this._view.btn_tupo.offClick(this.onClickLevelUp, this);
                    this._view.btn_tupo.n5.visible = false;
                }
            } else {
                this._view.btn_tupo.offClick(this.onClickLevelUp, this);
                this._view.btn_tupo.onClick(this.onClickLevelUpAD, this);
                this._view.btn_tupo.time.visible = true;
            }
        }
        var config: IConfigactivity = ConfigUtil.inst.ConfigActivityContainer.getDayConfigByTypeDay(1, this.propData.logingiftDays);
        this._view.btn_denglu.itemicon.url = 'ui://ItemUI/tx_xianchong' + (this.propData.logingiftDays + 1)
        this._view.btn_denglu.itemname.text = config.title;
        this.checkIconLevelShow();
    }



    updatePet() {
        if (this.petData) {
            let pet: com_pets = <com_pets>this._view.com_pet;
            let config = ConfigUtil.inst.ConfigPetContainer.getConfigById(this.petData.petid);
            pet.setIconPackage(config.package_name, config.res_name, config.main_pos);
        }
    }

    updatePlayerLevel(data: proto.PlayerProp) {
        if (this.level != data.level) {
            SDKManager.setCloudData("level", data.layer + "," + data.level)
            this._view.namelist.scrollPane.scrollStep = 51;
            if (this.level != 0) {
                if (data.level == 1) {
                    this._view.namelist.scrollPane.scrollTop(true);
                } else {
                    this._view.namelist.scrollPane.scrollDown(data.level - this.level, true);
                }
            } else {
                this._view.namelist.scrollPane.scrollDown(data.level - 1, true);
            }
            this.level = data.level;
        }
    }


    updateloginGifts() {
        let config: IConfigactivity = ConfigUtil.inst.ConfigActivityContainer.getDayConfigByTypeDay(1, this.propData.logingiftDays);
        if (config) {
            this._view.btn_denglu.visible = true;
            if (TimeUtil.timestamp() < this.propData.logingiftTime) {
                this._view.btn_denglu.today_icon.visible = false;
                this._view.btn_denglu.tomarrow_icon.visible = true;
            } else {
                this._view.btn_denglu.today_icon.visible = true;
                this._view.btn_denglu.tomarrow_icon.visible = false;
            }
        } else {
            this._view.btn_denglu.visible = false;
        }
    }


    updateCanGetExp(data: number) {
        this._view.n196.text = GameUtil.ConvertNum(data);
    }

    updatePlayerPerExp(data: proto.resPerExp) {
        if (this._view) {
            this._view.btn_per_exp.text = "每秒修为:" + GameUtil.ConvertNum(data.exp) + "";
            this._view.n196.text = GameUtil.ConvertNum(data.canGet);
            if (this.propData) {

                // if(this.propData.endTdjhTime){
                //     this._view.btn_tdjh.title.text =  TimeUtil.remainDateTime(this.propData.endTdjhTime,"可领取",false);
                // }else{
                //     this._view.btn_tdjh.title.text ="可领取";
                // }

                // console.log("this.propData.islevelTcdb", this.propData.islevelTcdb)
                if (TimeUtil.timestamp() >= this.propData.endTcdbTime || this.propData.islevelTcdb) {
                    this._view.btn_tcdb.visible = true;
                } else {
                    this._view.btn_tcdb.visible = false;
                }


                if (this.propData.xmEndTime > TimeUtil.timestamp()) {
                    this._view.btn_tupo.n5.visible = false;
                    this._view.btn_tupo.time.text = TimeUtil.remainDateTime(this.propData.xmEndTime) + "\n\r后自动祛除";
                    this._view.xinmo.visible = true;
                    this._view.btn_tupo.state.text = "祛除心魔";
                    this._view.bg.color = cc.color(51, 51, 51);
                }
                else {
                    if (this._view.xinmo.visible) {
                        this._view.xinmo.visible = false;
                        this._view.btn_tupo.n5.visible = true;
                        this._view.btn_tupo.time.visible = false;
                        this._view.xinmo.visible = false;
                        this._view.btn_tupo.offClick(this.onClickLevelUpAD, this);
                        this._view.btn_tupo.state.text = "突 破";
                        this._view.bg.color = cc.color(255, 255, 255);
                    }
                }
                this._view.ProgressBar.value = 0;
                this._view.ProgressBar.tweenValue(100, 1);
            }

            if (this.countTime > 0 && !this.stopTime) {
                this._view.c_time.text = GameUtil.convertCurrency(this.countTime);
                this._view.c_time_ani.text = GameUtil.convertCurrency(this.countTime);
                this._view.t1.play();
                if (this.tupo_times > 0 && this.countTime == 1) {
                    this.levelUpComplate(false);
                }
                this.countTime--;
            }

            if (this.getBuffs && this.getBuffs.size > 0) {
                this.getBuffs.forEach((value, key) => {
                    if (value) {
                        let remain: number = (value.activeTime + value.duration) - TimeUtil.timestamp();
                        if (remain > 0) {
                            this._view.qy.visible = true;
                            this._view.qytime.text = TimeUtil.dateFormat(remain, false);
                        } else {
                            this._view.qy.visible = false;
                        }
                    }
                })
            }
        }
    }

    udpdatePlayerNeedExp(data: number) {
        this._view.n213.text = "所需修为:" + GameUtil.ConvertNum(data);
    }

    checkIconLevelShow() {
        let configlevel: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(this.propData.level);

        if (configlevel) {
            if (configlevel.trans_reset_time > 0) {
                this._view.btn_zhuan.visible = true;
            } else {
                this._view.btn_zhuan.visible = false;
            }
        }

        if (this.propData.histroyLevel < 9) {
            this._view.btn_dongfu.dis.visible = true;
        } else {
            this._view.btn_dongfu.dis.visible = false;
        }

        if (this.propData.histroyLevel < 5) {
            this._view.btn_pet.dis.visible = true;
        } else {
            this._view.btn_pet.dis.visible = false;
        }

        if (this.propData.layer < 1) {
            this._view.btn_fabao.dis.visible = true;
        } else {
            this._view.btn_fabao.dis.visible = false;
        }

        if (this.propData.histroyLevel < 2) {
            this._view.btn_gongfa.dis.visible = true;
        } else {
            this._view.btn_gongfa.dis.visible = false;
        }

        if (this.propData.histroyLevel < 7) {
            this._view.btn_sign.grayed = true;
        } else {
            this._view.btn_sign.grayed = false;
        }

        if (this.propData.histroyLevel < 8) {
            this._view.btn_reward.grayed = true;
        } else {
            this._view.btn_reward.grayed = false;
        }

        if (this.propData.histroyLevel < 13) {
            this._view.btn_marray.grayed = true;
        } else {
            this._view.btn_marray.grayed = false;
        }
        if (this.propData.layer < 1) {
            this._view.btn_yaopu.grayed = true;
        } else {
            if (this.propData.histroyLevel < 8) {
                this._view.btn_yaopu.grayed = true;
            } else {
                this._view.btn_yaopu.grayed = false;
            }
        }


        if (this.propData.layer < 1) {
            this._view.btn_rank.grayed = true;
        } else {
            this._view.btn_rank.grayed = false;
        }

        if (this.propData.histroyLevel < 10) {
            this._view.btn_hexiu.grayed = true;
        } else {
            this._view.btn_hexiu.grayed = false;
        }

        if (this.propData.histroyLevel < 7) {
            this._view.btn_shitu.grayed = true;
        } else {
            this._view.btn_shitu.grayed = false;
        }
    }


    ///红点系统
    reqRed() {
        //签到
        msgHandler.inst.sendmsg(protoName.reqSignInfo, new proto.reqSignInfo({}));
        //仙境
        msgHandler.inst.sendmsg(protoName.reqXianJin, new proto.reqXianJin({}));
        //任务
        msgHandler.inst.sendmsg(protoName.reqPlayerTask, new proto.reqPlayerTask({}));
        //合修buff
        msgHandler.inst.sendmsg(protoName.reqBuff, new proto.reqBuff({ type: 1 }));
    }


    checkRed() {
        if (this._view) {
            this.checkQiuqianRed();
            this.checkFuLiRed();
            this.checkFaBao();
            this.checkPet();
            this.checkDongFu();
            this.checkTask();
            this.checkHeXiu();

            var equip = this.bagItemsData.get(PlayerEntity.EQUIP_START);
            if (equip) {
                let itemconfig: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(equip.itemid);
                if (itemconfig && itemconfig.main_pos) {
                    this._view.com_fabao.visible = true;
                    let fabao: com_fabao = <com_fabao>this._view.com_fabao;
                    fabao.setIconPackage(itemconfig.icon, itemconfig.icon2, itemconfig.main_pos);
                }
            } else {
                this._view.com_fabao.visible = false;
            }
        }
    }

    checkQiuqianRed() {
        if (this.propData && TimeUtil.timestamp() > this.propData.endprayer) {
            this._view.btn_sign.red.visible = true;
        } else {
            this._view.btn_sign.red.visible = false;
        }
    }

    checkFuLiRed() {
        if (this.singData && TimeUtil.compareDay(this.singData.lastSignTime) > 0) {
            this._view.btn_reward.red.visible = true;
        } else {
            this._view.btn_reward.red.visible = false;
        }
    }

    checkFaBao() {
        let check: boolean = true;
        for (let i = 1; i < 5; i++) {
            let config: IConfigalchemy = ConfigUtil.inst.ConfigAlchemyContainer.getConfigByTypeLevel(i, this.propData.alchemylevel);
            let items: string[] = config.needitem.split(";");
            for (let j = 0; j < items.length; j++) {
                let itemdetail: string[] = items[j].split(",");
                let hasNum: number = this.getItemNumByItemId(Number.parseInt(itemdetail[0]));
                let needNum: number = Number.parseInt(itemdetail[1]);
                if (hasNum < needNum) {
                    check = false;
                }
            }
        }
        if (check) {
            this._view.btn_fabao.red.visible = true;
        } else {
            this._view.btn_fabao.red.visible = false;
        }
    }

    checkPet() {
        this._view.btn_pet.red.visible = false;
        if (this.petData) {
            let config: IConfigpet = ConfigUtil.inst.ConfigPetContainer.getConfigById(this.petData.petid);
            let cost_items: string[] = config.tongling_cost.split(";");
            for (let i = 0; i < cost_items.length; i++) {
                let cost_itemid = Number.parseInt(cost_items[i].split(",")[0]);
                let cost_num = Number.parseInt(cost_items[i].split(",")[1]);
                let have_num = Global.gameManager.playerManager.getItemNumByItemId(cost_itemid);
                if (have_num >= cost_num) {
                    this._view.btn_pet.red.visible = true;
                }
            }
            if (this.petData.times > 0) {
                this._view.btn_pet.red.visible = true;
            }
        }

    }

    checkDongFu() {
        if (this.getXianJin) {
            this._view.btn_dongfu.red.visible = false;
            this.getXianJin.forEach((param, key) => {
                if (param) {
                    let config: IConfigxianjin = ConfigUtil.inst.ConfigXianJinContainer.getConfigByTypeByLevel(param.aid, param.ParamValue);
                    if (config.needitem > 0) {
                        let hasNum: number = this.getItemNumByItemId(config.needitem);
                        let needNum: number = config.neednum;
                        if (hasNum >= needNum) {
                            this._view.btn_dongfu.red.visible = true;
                        }
                    } else {
                        this._view.btn_dongfu.red.visible = true;
                    }
                }
            });
        }
    }

    checkTask() {
        this._view.btn_renwu.n1.visible = false;

        if (this.extTaskData) {
            this.extTaskData.forEach((value, key) => {
                let config: IConfigtask = ConfigUtil.inst.ConfigTaskContainer.getConfigById(value.taskId);
                if (value.num < config.targetNum) {
                    this._view.btn_renwu.n1.visible = true;
                }
            })
        }

        if (this.dailyTaskData) {
            this.dailyTaskData.forEach((value, key) => {
                let config: IConfigtask = ConfigUtil.inst.ConfigTaskContainer.getConfigById(value.taskId);
                if (value.num < config.targetNum) {
                    this._view.btn_renwu.n1.visible = true;
                }
            })
        }
    }

    checkHeXiu() {
        this._view.btn_hexiu.red.visible = false;
        if (this.getHeXiuBuffs && this.getHeXiuBuffs.size > 0) {
            this.getHeXiuBuffs.forEach((value, key) => {
                if (value.activeTime == 0) {
                    this._view.btn_hexiu.red.visible = true;
                }
            })
        }
    }
    playTransform(index: number) {
        let role: Role = <Role>this._view.main_Role;
        role.playTransform(() => {
            msgHandler.inst.sendmsg(protoName.reqChoseSex, new proto.reqChoseSex({ sex: index }));
        })
    }


    update(dt) {

    }
}
