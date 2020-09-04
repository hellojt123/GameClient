import NetManager from "./NetManager";
import { GameUtil } from "../Util/GameUtil";
import ConfigUtil from "../Util/ConfigUtil";
import { gameEvents } from "../Const/gameEvents";
import EventManager from "./EventManager";
import TimeUtil from "../Util/TimeUtil";

/*
 * @Author: Jiangtao
 * @Date: 2019-12-23 14:34:02
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-23 10:40:05
 */

export default class SDKManager {
    private static rewardedVideoAd: any
    private static createAdCallBack: Function;
    public static innerAudioContext: any;
    private static _gap: number;

    public static Init() {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            var obj = wx.getLaunchOptionsSync();
            if (obj && obj.query) {
                if (obj.query.type && obj.query.inviteid) {
                    Global.inviteType = obj.query.type;
                    Global.inviteid = obj.query.inviteid;
                }
            }
            wx.onShow(SDKManager.onShow);
            if (Global.isQQ) {
                qq.showShareMenu({
                    showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
                })

                qq.onShareAppMessage(() => ({
                    imageUrl: 'https://gametest.qianmo.info/ad/lj_zs_1.png' // 图片 URL
                }))
            }
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            var obj = swan.getLaunchOptionsSync();
            if (obj && obj.query) {
                if (obj.query.type && obj.query.inviteid) {
                    Global.inviteType = obj.query.type;
                    Global.inviteid = obj.query.inviteid;
                }
            }
            swan.onShow(SDKManager.onShow);
        }
    }

    public static onShow(res) {
        if (TimeUtil.timestamp() - SDKManager._gap > 2) {
            if (SDKManager.createAdCallBack) {
                SDKManager.createAdCallBack();
                SDKManager.createAdCallBack = null;
            }
        } else {
            if (SDKManager.createAdCallBack) {
                if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                    wx.showToast({
                        title: '分享失败',
                        duration: 2000,
                        icon: "none"
                    })
                } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                    swan.showToast({
                        title: '分享失败',
                        duration: 2000,
                        icon: "none"
                    })
                }
            }

        }

        if (res && res.query) {
            EventManager.inst.onEvents(gameEvents.onshow, res.query);
        }
    }

    public static CreateAD(type: number, onSucess: Function) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            let me = this;
            var adid = "";
            if (Global.isQQ) {
                if (type == 1) {
                    adid = 'd7d4d78279182ad9af0e0f7e33ea6986';
                } else if (type == 2) {
                    adid = '0afede13b9a5f77756daef34b066cd9d';
                } else if (type == 3) {
                    adid = '6d6c53047a17b5b035c858c2e2db824e';
                } else if (type == 4) {
                    adid = '62c0199b3aa88cf13fde5f860c3b4025';
                } else if (type == 5) {
                    adid = '832aa1de2a58dfbaff1533a098031382';
                } else if (type == 6) {
                    adid = 'b85a6e95e505b990cc6ae46f62bf67f8';
                } else if (type == 7) {
                    adid = '17ea1a7ff45cba108ac8c33a705b7bcb';
                } else if (type == 8) {
                    adid = '2a64bbf63271ab065bbaf3018ee1c4d4';
                } else {
                    adid = "223d134124c878d96f2fea17bff1a200"
                }
            }

            if (!me.rewardedVideoAd) {
                me.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: adid
                });
                me.rewardedVideoAd.onClose(res => {
                    // 用户点击了【关闭广告】按钮
                    // 小于 2.1.0 的基础库版本，res 是一个 undefined
                    console.log("ad res", res)
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        console.log("ad onSucess", onSucess)
                        if (onSucess) {
                            SDKManager.createAdCallBack = null;
                            me.rewardedVideoAd.offClose();
                            me.rewardedVideoAd = null;
                            onSucess();
                        }
                    }
                    else {
                        console.log("ad no")
                        me.rewardedVideoAd.offClose();
                        me.rewardedVideoAd = null;
                        // 播放中途退出，不下发游戏奖励
                    }
                })
                me.rewardedVideoAd.onError(err => {
                    console.log("err", err)
                })
                if (me.rewardedVideoAd) {
                    me.rewardedVideoAd.load().then(() => {
                        me.rewardedVideoAd.show()
                            .catch(err => {
                                console.log("err", err)
                                SDKManager.CreateShare(6, "")
                                SDKManager._gap = TimeUtil.timestamp();
                                SDKManager.createAdCallBack = onSucess;
                                me.rewardedVideoAd.offClose();
                                me.rewardedVideoAd = null;
                            })
                    })
                }

            }
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {

            let me = this;
            if (!me.rewardedVideoAd) {
                me.rewardedVideoAd = swan.createRewardedVideoAd({
                    adUnitId: '6989339',
                    appSid: 'a6a54b68'
                });

                me.rewardedVideoAd.onClose(res => {
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        if (onSucess) {
                            SDKManager.createAdCallBack = null;
                            onSucess();
                        }
                    }
                    else {
                        // 播放中途退出，不下发游戏奖励
                    }
                })
            }

            me.rewardedVideoAd.show()
                .catch(err => {
                    swan.showToast({
                        title: '暂无可展示视频',
                        duration: 2000,
                        icon: "none"
                    })
                    console.log(err)
                    // if (onSucess) {
                    //     SDKManager.createAdCallBack = null;
                    //     onSucess();
                    // }
                    SDKManager.CreateShare(6, "")
                    SDKManager._gap = TimeUtil.timestamp();
                    SDKManager.createAdCallBack = onSucess;
                })

        } else {
            if (onSucess) {
                SDKManager.createAdCallBack = null;
                onSucess();
            }
        }
    }

    public static CreateShare(type: number, query: string) {
        if (type && type > 0) {
            let config: IConfigshare = ConfigUtil.inst.ConfigShareContainer.getConfigByType(type);
            if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                wx.shareAppMessage({
                    title: config.title,
                    query: query,
                    imageUrl: config.url
                });
            } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
                swan.shareAppMessage({
                    title: config.title,
                    query: query,
                    imageUrl: config.url
                });
            } else {
                let str: string = window.location.host + "/?" + query;
                GameUtil.copyToClipBoard(str, str);
            }
        }

    }

    public static getFriend(): void {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.getFriendCloudStorage({
                keyList: ['score'],
                success: function (res) {
                    console.log(res.data)
                },
                fail: function (err) {
                    console.log(err)
                }
            })
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            swan.getFriendCloudStorage({
                keyList: ['score'],
                success: function (res) {
                    console.log(res.data)
                },
                fail: function (err) {
                    console.log(err)
                }
            })
        }

    }

    public static VibrateShort(): void {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.vibrateShort({});
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            swan.vibrateShort({});
        }
    }

    public static PlayBgm(callback) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            SDKManager.innerAudioContext = wx.createInnerAudioContext()
            // SDKManager.innerAudioContext.autoplay = true  // 是否自动开始播放，默认为 false
            SDKManager.innerAudioContext.loop = true  // 是否循环播放，默认为 false
            SDKManager.innerAudioContext.volume = 0;
            wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
                obeyMuteSwitch: false,   // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
                success: function (e) {
                    console.log(e)
                    console.log('play success')
                    if (callback) {
                        callback();
                    }
                },
                fail: function (e) {
                    console.log(e)
                    console.log('play fail')
                }
            })
            SDKManager.innerAudioContext.src = 'https://gametest.qianmo.info/res/loader/audio/bgm_xiuxian1.mp3';  // 音频资源的地址

            SDKManager.innerAudioContext.onPlay(() => {  // 监听音频播放事件
                console.log("onPlay")
            })

            SDKManager.innerAudioContext.onStop(() => {  // 监听音频播放事件
                console.log("onStop")
            })
            SDKManager.innerAudioContext.onError((res) => { // 监听音频播放错误事件
                console.log(res.errMsg)
                console.log(res.errCode)
            })
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            SDKManager.innerAudioContext = swan.createInnerAudioContext()
            // SDKManager.innerAudioContext.autoplay = true  // 是否自动开始播放，默认为 false
            SDKManager.innerAudioContext.loop = true  // 是否循环播放，默认为 false
            SDKManager.innerAudioContext.volume = 0;
            swan.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
                obeyMuteSwitch: false,   // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
                success: function (e) {
                    console.log(e)
                    console.log('play success')
                    if (callback) {
                        callback();
                    }
                },
                fail: function (e) {
                    console.log(e)
                    console.log('play fail')
                }
            })
            SDKManager.innerAudioContext.src = 'https://gametest.qianmo.info/res/loader/audio/bgm_xiuxian1.mp3';  // 音频资源的地址

            SDKManager.innerAudioContext.onPlay(() => {  // 监听音频播放事件
                console.log("onPlay")
            })

            SDKManager.innerAudioContext.onStop(() => {  // 监听音频播放事件
                console.log("onStop")
            })
            SDKManager.innerAudioContext.onError((res) => { // 监听音频播放错误事件
                console.log(res.errMsg)
                console.log(res.errCode)
            })
        }
    }

    public static sendSubMessage(type: string, value: any = null) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            let openDataContext = wx.getOpenDataContext();
            openDataContext.postMessage({
                type: type,
                value: value,
            });
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            let openDataContext = swan.getOpenDataContext();
            console.log("openDataContext", openDataContext)
            openDataContext.postMessage({
                type: type,
                value: value,
            });
        }
    }

    public static openCustomerService() {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.openCustomerServiceConversation({
                success: function (data) {
                    console.log("success =", data)
                },
                fail: function (data) {
                    console.log("fail =", data)
                },
                complete: function (data) {
                    console.log("complete =", data)
                }
            })
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            swan.openCustomerServiceConversation({
                success: function (data) {
                    console.log("success =", data)
                },
                fail: function (data) {
                    console.log("fail =", data)
                },
                complete: function (data) {
                    console.log("complete =", data)
                }
            })
        }
    }

    public static setCloudData(type: string, value: string) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.setUserCloudStorage({
                KVDataList: [{ key: type, value: value }],
                success: res => {
                    console.log(res);
                },
                fail: res => {
                    console.log(res);
                }
            });
        } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
            swan.setUserCloudStorage({
                KVDataList: [{ key: type, value: value }],
                success: res => {
                    console.log(res);
                },
                fail: res => {
                    console.log(res);
                }
            });
        }
    }

    public static CreateBannerAd(adUnitId: string, width: number = 0, left: number = 0, top: number = 0) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            let bannerAd = wx.createBannerAd({
                adUnitId: adUnitId,
                style: {
                    left: left,
                    top: top,
                    width: width
                }
            })
            bannerAd.onLoad(() => {
                bannerAd.show();
            })
            return bannerAd;
        }
    }

    public static CreateGridAd(adUnitId: string, count: number, left: number, top: number, width: number, opacity: number) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            let GridAd = wx.createGridAd({
                adUnitId: adUnitId,
                adTheme: 'white',
                gridCount: count,
                style: {
                    left: left,
                    top: top,
                    width: width,
                    opacity: opacity
                }
            })
            GridAd.show()
            return GridAd;
        }
    }

    public static CreateInterstitialAd(adUnitId: string) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            let interstitialAd = wx.createInterstitialAd({
                adUnitId: 'xxxx'
            })
            return interstitialAd;
        }
    }
}