import LoadUtil from "../Util/LoadUtil";
import msgHandler from "../Net/msgHandler";
import BagItem from "../Entity/BagItem/BagItem";
import { GameUtil } from "../Util/GameUtil";
import PlayerHead from "../Entity/Head/PlayerHead";
import Long = require("long");
import SDKManager from "./SDKManager";
import Role from "../Entity/Role/Role";
import TileWedding from "../Entity/Wedding/TileWedding";
import com_fabao from "../Entity/Fabao/com_fabao";
import com_pet from "../Entity/Pet/com_pet";
import MyLoader from "../Entity/Loader/MyLoader";
import { util } from "protobufjs";
import TimeUtil from "../Util/TimeUtil";

if (cc.sys.isBrowser) {
    var axios = require("axios")
}
/*
 * @Author: Jiangtao
 * @Date: 2019-12-17 14:24:41
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-23 17:02:59
 */
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingManager extends cc.Component {

    @property(cc.Label)
    loadText: cc.Label = null;

    @property(cc.Label)
    percentText: cc.Label = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Sprite)
    btn: cc.Sprite = null;

    @property(cc.Font)
    font: cc.Font = null;



    private button: any;
    private loadstrs: string[] = ["正在加载中", "请耐心等待", "马上就好", "开始啦"];
    private count: number = 0;
    private isQQ: boolean = true;
    public onLoad() {
        SDKManager.Init();
        if (cc.sys.isBrowser) {
            var arg = GameUtil.getQueryStringArgs();
            if (arg['username']) {
                Global.username = arg['username'];
                Global.userinfo.nickname = arg['username'];
            }
            if (arg['password']) {
                Global.password = arg['password'];
            }
            if (arg['type'] && arg['inviteid']) {
                Global.inviteType = arg['type'];
                Global.inviteid = arg['inviteid'];
            }
        }

        //注册自定义组件 

        fgui.UIObjectFactory.setLoaderExtension(MyLoader);
        fgui.UIConfig.buttonSound = "ui://Audio/tap";
        fgui.UIConfig.buttonSoundVolumeScale = 0.5;
        fgui.UIObjectFactory.setExtension("ui://CommonUI/Tile_item", BagItem);
        fgui.UIObjectFactory.setExtension("ui://CommonUI/Tile_head1", PlayerHead);
        fgui.UIObjectFactory.setExtension("ui://CommonUI/main_role", Role);
        fgui.UIObjectFactory.setExtension("ui://CommonUI/com_wedding", TileWedding);
        fgui.UIObjectFactory.setExtension("ui://CommonUI/com_fabao_ui", com_fabao);
        fgui.UIObjectFactory.setExtension("ui://CommonUI/com_pet_ui", com_pet);

        let me = this;
        me.btn.node.active = false;
        // cc.loader.loadRes("font/FZJJ2", cc.Font, function (err, font) {
        //     fgui.registerFont("font/FZJJ2", "font/FZJJ2")
        //     fgui.UIConfig.defaultFont = 'font/FZJJ2';
        //     fgui.addLoadHandler();
        //     //加载资源      
        //     LoadUtil.inst.loadGameRes(me.loadComplate.bind(me), me.loadCheck.bind(me).bind(me));
        // })

        fgui.addLoadHandler();
        //加载资源      
        LoadUtil.inst.loadGameRes(me.loadComplate.bind(me), me.loadCheck.bind(me).bind(me));
    }

    loadCheck(percent: number) {
        this.progressBar.progress = percent;
        this.percentText.string = Number.parseInt(percent * 100) + "%";
        this.loadText.string = this.loadstrs[this.count];
        this.count++;
        if (this.count >= this.loadstrs.length) {
            this.count = 0;
        }
    }

    loadComplate() {
        //加载完成        
        console.log("loadComplate")
        //消息处理初始化
        msgHandler.inst.init();

        if (cc.sys.isBrowser) {
            //普通直接登录
            this.DoWebLogin();
        } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            if (Global.isQQ) {
                this.DoQQLogin();
            } else {
                this.DoWXLogin();
            }
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            this.DoBaiLogin();
        } else {

        }
    }
    private DoWebLogin() {
        axios.get("http://" + Global.host + ":" + Global.getWebPort() + "/lanweblogin?username=" + Global.username + "&password=" + Global.password)
            .then((res) => {
                this.DoEnterGame();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    private DoBaiLogin() {
        let me = this;
        swan.login({
            success: res => {
                swan.request({
                    url: "https://" + Global.host + "/baidulogin",
                    data: {
                        code: res.code
                    },
                    success(loginres) {
                        Global.username = loginres.data.name;
                        Global.password = loginres.data.pwd;
                        swan.authorize({
                            scope: 'scope.userInfo',
                            success: (res) => {
                                swan.getSetting({
                                    success(res) {
                                        if (res.authSetting["scope.userInfo"]) {
                                            swan.getUserInfo({
                                                success: function (userinfo) {
                                                    me.onBaiduUserInfo(userinfo);
                                                },
                                                fail: err => {
                                                    me.BaiduLoginFail()
                                                }
                                            })
                                        }
                                        else {
                                            me.BaiduLoginFail()
                                        }
                                    }
                                })
                            },
                            fail: err => {
                                me.BaiduLoginFail()
                            }
                        })
                    },
                    fail(f) {
                        me.BaiduLoginFail()
                    }
                })
            },
            fail: function () {
                me.BaiduLoginFail();
            }
        })
    }

    private BaiduLoginFail() {
        let me = this;
        swan.showModal({
            title: "登录失败",
            content: "游戏需要登录信息,是否重新登录？",
            cancelText: "退出游戏",
            success: res => {
                if (res.confirm) {
                    swan.openSetting({
                        success: res => {
                            if (res.authSetting["scope.userInfo"]) {
                                swan.showToast({
                                    title: '已授权,请等待',
                                    duration: 2000,
                                    icon: "none"
                                })
                                swan.getUserInfo({
                                    success: function (userinfo) {
                                        me.onBaiduUserInfo(userinfo);
                                    }
                                })
                            } else {
                                swan.exit();
                            }
                        },
                        fail: err => {
                            swan.exit();
                        }
                    });
                }
                else if (res.cancel) {
                    swan.exit();
                }
            }
        })
    }

    private DoQQLogin() {
        var me = this;
        // SDKManager.getFriend();
        qq.login({
            success(res) {
                if (res.code) {
                    //发起网络请求
                    qq.request({
                        url: "https://" + Global.host + "/qqlogin",
                        data: {
                            code: res.code
                        },
                        success(loginres) {
                            if (loginres.data && loginres.data.name) {
                                Global.username = loginres.data.name;
                                Global.password = loginres.data.pwd;

                                qq.getSetting({
                                    success(res) {
                                        if (res.authSetting["scope.userInfo"]) {
                                            qq.getUserInfo({
                                                success: function (userinfo) {
                                                    me.onWxUserInfo(userinfo);
                                                }
                                            })
                                        }
                                        else {
                                            me.onQQUserInfo();
                                            //me.createWXLogin();
                                        }
                                    }
                                })
                            } else {
                                qq.showToast({
                                    title: '游戏正在维护中,请稍后再试',
                                    duration: 2000
                                })
                            }
                        },
                        fail(f) {
                            qq.showToast({
                                title: '登录失败！',
                                duration: 2000
                            })
                        }
                    })
                } else {
                    qq.showToast({
                        title: '登录失败！',
                        duration: 2000
                    })
                    return;
                }
            }
        })
    }

    private DoWXLogin() {
        var me = this;
        // SDKManager.getFriend();
        wx.login({
            success(res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: "https://" + Global.host + "/wxlogin",
                        data: {
                            code: res.code
                        },
                        success(loginres) {
                            if (loginres.data && loginres.data.name) {
                                Global.username = loginres.data.name;
                                Global.password = loginres.data.pwd;
                                wx.getSetting({
                                    success(res) {
                                        if (res.authSetting["scope.userInfo"]) {
                                            wx.getUserInfo({
                                                success: function (userinfo) {
                                                    me.onWxUserInfo(userinfo);
                                                }
                                            })
                                        }
                                        else {
                                            me.createWXLogin();
                                        }
                                    }
                                })
                            } else {
                                wx.showToast({
                                    title: '游戏正在维护中,请稍后再试',
                                    duration: 2000
                                })
                            }
                        },
                        fail(f) {
                            wx.showToast({
                                title: '登录失败！',
                                duration: 2000
                            })
                        }
                    })
                } else {
                    wx.showToast({
                        title: '登录失败！',
                        duration: 2000
                    })
                    return;
                }
            }
        })
    }

    private createBaiduLogin() {

        var me = this;
        me.button = swan.createUserInfoButton({
            type: 'text',
            text: '                ',
            style: {
                left: swan.getSystemInfoSync().windowWidth / 2 - 100,
                top: swan.getSystemInfoSync().windowHeight - 100,
                width: 200,
                height: 40,
                lineHeight: 40,
                //   backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        })
        this.btn.node.active = true;
        me.button.onTap(res => {
            me.onBaiduUserInfo(res);
        })

    }

    private createWXLogin() {
        console.log("createWxLogin")
        var me = this;
        me.button = wx.createUserInfoButton({
            type: 'text',
            text: '                ',
            style: {
                left: wx.getSystemInfoSync().windowWidth / 2 - 100,
                top: wx.getSystemInfoSync().windowHeight - 100,
                width: 200,
                height: 40,
                lineHeight: 40,
                //   backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        })
        this.btn.node.active = true;
        me.button.onTap((res) => {
            me.onWxUserInfo(res);
        })

    }

    public createQQLogin() {
        var me = this;
        me.button = qq.createUserInfoButton({
            type: 'text',
            text: '                ',
            style: {
                left: qq.getSystemInfoSync().windowWidth / 2 - 100,
                top: qq.getSystemInfoSync().windowHeight - 100,
                width: 200,
                height: 40,
                lineHeight: 40,
                //   backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        })
        this.btn.node.active = true;
        me.button.onTap((res) => {
            me.onQQUserInfo(res);
        })

    }

    private onBaiduUserInfo(res) {
        if (this.button) {
            this.button.destroy();
        }
        Global.userinfo.nickname = res.userInfo.nickName;
        Global.userinfo.job = 0;
        Global.userinfo.sex = res.userInfo.gender;
        Global.userinfo.head = res.userInfo.avatarUrl;
        this.DoEnterGame();
    }

    private onWxUserInfo(res) {
        if (this.button) {
            this.button.destroy();
        }
        Global.userinfo.nickname = res.userInfo.nickName;
        Global.userinfo.job = 0;
        Global.userinfo.sex = res.userInfo.gender;
        Global.userinfo.head = res.userInfo.avatarUrl;
        this.DoEnterGame();
    }

    public onQQUserInfo(res) {
        let userInfo = null;
        if (!res) {
            userInfo = cc.sys.localStorage.getItem("userInfo");
            if (userInfo) {
                userInfo = JSON.parse(userInfo);
            }
        } else {
            var str = JSON.stringify(res.userInfo);
            userInfo = res.userInfo;
            cc.sys.localStorage.setItem("userInfo", str);
        }

        if (userInfo) {
            Global.userinfo.nickname = userInfo.nickName;
            Global.userinfo.job = 0;
            Global.userinfo.sex = userInfo.gender;
            Global.userinfo.head = userInfo.avatarUrl;
        } else {
            let tempid = cc.sys.localStorage.getItem("tempid");
            if (tempid) {
                Global.userinfo.nickname = "用户" + tempid;
            } else {
                Global.userinfo.nickname = "用户" + Number.parseInt(TimeUtil.timestamp().toString());
                cc.sys.localStorage.setItem("tempid", Number.parseInt(TimeUtil.timestamp().toString()));
            }
            Global.userinfo.job = 0;
            Global.userinfo.sex = 0;
            Global.userinfo.head = "https://gametest.qianmo.info/res/loader/touxiang2.png";
        }
        cc.director.loadScene("Game");
    }


    private DoEnterGame() {
        cc.director.loadScene("Game");
    }

}
