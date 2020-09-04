/*
 * @Author: Jiangtao
 * @Date: 2019-11-04 17:18:24
 * @LastEditTime: 2020-06-11 13:21:14
 * @LastEditors: Jiangtao
 * @Description: In User Settings Edit
 * @FilePath: \SealRun\assets\script\Const\Global.js
 */
// import config  from '../d.ts/config';
// window.config = config;

if (CC_DEBUG) {
    console.log("debug")
} else {
    console.log("no debug")
}


window.Global = {
    isQQ: true,
    Buffers: {},
    BombTypes: {},
    BomBPosition: {},
    GameManager: {},
    LoginManager: {},
    Settings: {},
    pbjs6: {},
    stageName: "test",
    Life: 3,
    GameSettings: {
        Mode: 2,
    },
    SignSettings: {
        period: 15,
        repeat: true
    },
    //host:CC_DEBUG?"localhost":"192.168.1.188",
    //resurl:CC_DEBUG?"config/":"http://192.168.1.188/res/",
    host: CC_DEBUG ? "localhost" : cc.sys.isBrowser ? "172.16.0.188" : "gametest.qianmo.info",
    configurl: CC_DEBUG ? "config/" : cc.sys.isBrowser ? "http://172.16.0.188/res/" : "config/",
    resurl: "",
    port: cc.sys.platform == cc.sys.WECHAT_GAME ? "8989" : cc.sys.platform == cc.sys.BAIDU_GAME ? "8990" : "8989",
    webport: cc.sys.platform == cc.sys.WECHAT_GAME ? "9001" : cc.sys.platform == cc.sys.BAIDU_GAME ? "9002" : "9001",
    json: CC_DEBUG ? "" : ".json",
    username: "hellojt1234",
    password: "123456",
    userinfo: {
        nickname: "test",
        job: 0,
        sex: 0,
        head: "",
    }
}

window.Global.getPort = function () {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        if (Global.isQQ) {
            return "8991";
        } else {
            return "8989"
        }
    } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
        return "8990"
    }
    return "8989"
}

window.Global.getWebPort = function () {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        if (Global.isQQ) {
            return "9003";
        } else {
            return "9001"
        }
    } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
        return "9002"
    }
    return "9001"
}

window.Global.Settings = cc.Enum({
    NORMAL: 1,
    RANDOMGAME: 2,
})
window.Global.Buffers = cc.Enum({
    NORMAL: 1,
    SPEED: 2,
    INVINCIBLE: 3,
    SCALE: 4,
})

window.Global.BombTypes = cc.Enum({
    NORMAL: 1,
    BOMB: 2,
    ITEM: 3,
    GOLD: 4,
    END: 5,
})
window.Global.BomBPosition = cc.Enum({
    LOW: 1,
    HIGHT: 2,
})