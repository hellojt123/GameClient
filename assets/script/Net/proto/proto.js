/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.reqLogin = (function() {

    function reqLogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqLogin.prototype.name = "";
    reqLogin.prototype.pwd = "";

    reqLogin.create = function create(properties) {
        return new reqLogin(properties);
    };

    reqLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(10).string(m.name);
        if (m.pwd != null && m.hasOwnProperty("pwd"))
            w.uint32(18).string(m.pwd);
        return w;
    };

    reqLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.pwd = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqLogin;
})();

$root.resLogin = (function() {

    function resLogin(p) {
        this.Players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resLogin.prototype.count = 0;
    resLogin.prototype.Players = $util.emptyArray;

    resLogin.create = function create(properties) {
        return new resLogin(properties);
    };

    resLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.count != null && m.hasOwnProperty("count"))
            w.uint32(8).sint32(m.count);
        if (m.Players != null && m.Players.length) {
            for (var i = 0; i < m.Players.length; ++i)
                $root.loginPlayer.encode(m.Players[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    resLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.count = r.sint32();
                break;
            case 2:
                if (!(m.Players && m.Players.length))
                    m.Players = [];
                m.Players.push($root.loginPlayer.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resLogin;
})();

$root.loginPlayer = (function() {

    function loginPlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    loginPlayer.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    loginPlayer.prototype.job = 0;
    loginPlayer.prototype.sex = 0;
    loginPlayer.prototype.name = "";
    loginPlayer.prototype.head = "";

    loginPlayer.create = function create(properties) {
        return new loginPlayer(properties);
    };

    loginPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.job != null && m.hasOwnProperty("job"))
            w.uint32(16).sint32(m.job);
        if (m.sex != null && m.hasOwnProperty("sex"))
            w.uint32(24).sint32(m.sex);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(34).string(m.name);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(42).string(m.head);
        return w;
    };

    loginPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.loginPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.job = r.sint32();
                break;
            case 3:
                m.sex = r.sint32();
                break;
            case 4:
                m.name = r.string();
                break;
            case 5:
                m.head = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return loginPlayer;
})();

$root.bagItem = (function() {

    function bagItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    bagItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    bagItem.prototype.itemid = 0;
    bagItem.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    bagItem.prototype.index = 0;
    bagItem.prototype.type = 0;
    bagItem.prototype.stats = 0;
    bagItem.prototype.playerid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    bagItem.prototype.isbook = false;
    bagItem.prototype.bookType = 0;
    bagItem.prototype.bookLastlevel = 0;
    bagItem.prototype.bookLastnum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    bagItem.prototype.bookNeednum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    bagItem.create = function create(properties) {
        return new bagItem(properties);
    };

    bagItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.itemid != null && m.hasOwnProperty("itemid"))
            w.uint32(16).sint32(m.itemid);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(24).sint64(m.num);
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(32).sint32(m.index);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(40).sint32(m.type);
        if (m.stats != null && m.hasOwnProperty("stats"))
            w.uint32(48).sint32(m.stats);
        if (m.playerid != null && m.hasOwnProperty("playerid"))
            w.uint32(56).sint64(m.playerid);
        if (m.isbook != null && m.hasOwnProperty("isbook"))
            w.uint32(64).bool(m.isbook);
        if (m.bookType != null && m.hasOwnProperty("bookType"))
            w.uint32(72).sint32(m.bookType);
        if (m.bookLastlevel != null && m.hasOwnProperty("bookLastlevel"))
            w.uint32(80).sint32(m.bookLastlevel);
        if (m.bookLastnum != null && m.hasOwnProperty("bookLastnum"))
            w.uint32(88).sint64(m.bookLastnum);
        if (m.bookNeednum != null && m.hasOwnProperty("bookNeednum"))
            w.uint32(96).sint64(m.bookNeednum);
        return w;
    };

    bagItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.bagItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.itemid = r.sint32();
                break;
            case 3:
                m.num = r.sint64();
                break;
            case 4:
                m.index = r.sint32();
                break;
            case 5:
                m.type = r.sint32();
                break;
            case 6:
                m.stats = r.sint32();
                break;
            case 7:
                m.playerid = r.sint64();
                break;
            case 8:
                m.isbook = r.bool();
                break;
            case 9:
                m.bookType = r.sint32();
                break;
            case 10:
                m.bookLastlevel = r.sint32();
                break;
            case 11:
                m.bookLastnum = r.sint64();
                break;
            case 12:
                m.bookNeednum = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return bagItem;
})();

$root.PlayerProp = (function() {

    function PlayerProp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerProp.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerProp.prototype.name = "";
    PlayerProp.prototype.sex = 0;
    PlayerProp.prototype.job = 0;
    PlayerProp.prototype.level = 0;
    PlayerProp.prototype.lastget = 0;
    PlayerProp.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerProp.prototype.stone = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerProp.prototype.fame = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerProp.prototype.forgelevel = 0;
    PlayerProp.prototype.alchemylevel = 0;
    PlayerProp.prototype.composelevel = 0;
    PlayerProp.prototype.prayerid = 0;
    PlayerProp.prototype.endprayer = 0;
    PlayerProp.prototype.layer = 0;
    PlayerProp.prototype.head = "";
    PlayerProp.prototype.heart = 0;
    PlayerProp.prototype.histroyExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerProp.prototype.histroyLevel = 0;
    PlayerProp.prototype.dftimes = 0;
    PlayerProp.prototype.qytimes = 0;
    PlayerProp.prototype.qyad = 0;
    PlayerProp.prototype.endTcdbTime = 0;
    PlayerProp.prototype.alchemyexp = 0;
    PlayerProp.prototype.endTdjhTime = 0;
    PlayerProp.prototype.endTransTime = 0;
    PlayerProp.prototype.endAlchemyTime = 0;
    PlayerProp.prototype.alchemyItem = "";
    PlayerProp.prototype.logingiftDays = 0;
    PlayerProp.prototype.xmEndTime = 0;
    PlayerProp.prototype.pastdays = 0;
    PlayerProp.prototype.enyi = 0;
    PlayerProp.prototype.addtime = 0;
    PlayerProp.prototype.choseSex = 0;
    PlayerProp.prototype.logingiftTime = 0;
    PlayerProp.prototype.forgetTimes = 0;
    PlayerProp.prototype.islevelTcdb = false;

    PlayerProp.create = function create(properties) {
        return new PlayerProp(properties);
    };

    PlayerProp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(18).string(m.name);
        if (m.sex != null && m.hasOwnProperty("sex"))
            w.uint32(24).sint32(m.sex);
        if (m.job != null && m.hasOwnProperty("job"))
            w.uint32(32).sint32(m.job);
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(40).sint32(m.level);
        if (m.lastget != null && m.hasOwnProperty("lastget"))
            w.uint32(48).sint32(m.lastget);
        if (m.exp != null && m.hasOwnProperty("exp"))
            w.uint32(56).sint64(m.exp);
        if (m.stone != null && m.hasOwnProperty("stone"))
            w.uint32(64).sint64(m.stone);
        if (m.fame != null && m.hasOwnProperty("fame"))
            w.uint32(72).sint64(m.fame);
        if (m.forgelevel != null && m.hasOwnProperty("forgelevel"))
            w.uint32(80).sint32(m.forgelevel);
        if (m.alchemylevel != null && m.hasOwnProperty("alchemylevel"))
            w.uint32(88).sint32(m.alchemylevel);
        if (m.composelevel != null && m.hasOwnProperty("composelevel"))
            w.uint32(96).sint32(m.composelevel);
        if (m.prayerid != null && m.hasOwnProperty("prayerid"))
            w.uint32(104).sint32(m.prayerid);
        if (m.endprayer != null && m.hasOwnProperty("endprayer"))
            w.uint32(112).sint32(m.endprayer);
        if (m.layer != null && m.hasOwnProperty("layer"))
            w.uint32(120).sint32(m.layer);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(130).string(m.head);
        if (m.heart != null && m.hasOwnProperty("heart"))
            w.uint32(136).sint32(m.heart);
        if (m.histroyExp != null && m.hasOwnProperty("histroyExp"))
            w.uint32(144).sint64(m.histroyExp);
        if (m.histroyLevel != null && m.hasOwnProperty("histroyLevel"))
            w.uint32(152).sint32(m.histroyLevel);
        if (m.dftimes != null && m.hasOwnProperty("dftimes"))
            w.uint32(160).sint32(m.dftimes);
        if (m.qytimes != null && m.hasOwnProperty("qytimes"))
            w.uint32(168).sint32(m.qytimes);
        if (m.qyad != null && m.hasOwnProperty("qyad"))
            w.uint32(176).sint32(m.qyad);
        if (m.endTcdbTime != null && m.hasOwnProperty("endTcdbTime"))
            w.uint32(184).sint32(m.endTcdbTime);
        if (m.alchemyexp != null && m.hasOwnProperty("alchemyexp"))
            w.uint32(192).sint32(m.alchemyexp);
        if (m.endTdjhTime != null && m.hasOwnProperty("endTdjhTime"))
            w.uint32(200).sint32(m.endTdjhTime);
        if (m.endTransTime != null && m.hasOwnProperty("endTransTime"))
            w.uint32(208).sint32(m.endTransTime);
        if (m.endAlchemyTime != null && m.hasOwnProperty("endAlchemyTime"))
            w.uint32(216).sint32(m.endAlchemyTime);
        if (m.alchemyItem != null && m.hasOwnProperty("alchemyItem"))
            w.uint32(226).string(m.alchemyItem);
        if (m.logingiftDays != null && m.hasOwnProperty("logingiftDays"))
            w.uint32(232).sint32(m.logingiftDays);
        if (m.xmEndTime != null && m.hasOwnProperty("xmEndTime"))
            w.uint32(240).sint32(m.xmEndTime);
        if (m.pastdays != null && m.hasOwnProperty("pastdays"))
            w.uint32(248).sint32(m.pastdays);
        if (m.enyi != null && m.hasOwnProperty("enyi"))
            w.uint32(256).sint32(m.enyi);
        if (m.addtime != null && m.hasOwnProperty("addtime"))
            w.uint32(264).sint32(m.addtime);
        if (m.choseSex != null && m.hasOwnProperty("choseSex"))
            w.uint32(272).sint32(m.choseSex);
        if (m.logingiftTime != null && m.hasOwnProperty("logingiftTime"))
            w.uint32(280).sint32(m.logingiftTime);
        if (m.forgetTimes != null && m.hasOwnProperty("forgetTimes"))
            w.uint32(288).sint32(m.forgetTimes);
        if (m.islevelTcdb != null && m.hasOwnProperty("islevelTcdb"))
            w.uint32(296).bool(m.islevelTcdb);
        return w;
    };

    PlayerProp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerProp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.sex = r.sint32();
                break;
            case 4:
                m.job = r.sint32();
                break;
            case 5:
                m.level = r.sint32();
                break;
            case 6:
                m.lastget = r.sint32();
                break;
            case 7:
                m.exp = r.sint64();
                break;
            case 8:
                m.stone = r.sint64();
                break;
            case 9:
                m.fame = r.sint64();
                break;
            case 10:
                m.forgelevel = r.sint32();
                break;
            case 11:
                m.alchemylevel = r.sint32();
                break;
            case 12:
                m.composelevel = r.sint32();
                break;
            case 13:
                m.prayerid = r.sint32();
                break;
            case 14:
                m.endprayer = r.sint32();
                break;
            case 15:
                m.layer = r.sint32();
                break;
            case 16:
                m.head = r.string();
                break;
            case 17:
                m.heart = r.sint32();
                break;
            case 18:
                m.histroyExp = r.sint64();
                break;
            case 19:
                m.histroyLevel = r.sint32();
                break;
            case 20:
                m.dftimes = r.sint32();
                break;
            case 21:
                m.qytimes = r.sint32();
                break;
            case 22:
                m.qyad = r.sint32();
                break;
            case 23:
                m.endTcdbTime = r.sint32();
                break;
            case 24:
                m.alchemyexp = r.sint32();
                break;
            case 25:
                m.endTdjhTime = r.sint32();
                break;
            case 26:
                m.endTransTime = r.sint32();
                break;
            case 27:
                m.endAlchemyTime = r.sint32();
                break;
            case 28:
                m.alchemyItem = r.string();
                break;
            case 29:
                m.logingiftDays = r.sint32();
                break;
            case 30:
                m.xmEndTime = r.sint32();
                break;
            case 31:
                m.pastdays = r.sint32();
                break;
            case 32:
                m.enyi = r.sint32();
                break;
            case 33:
                m.addtime = r.sint32();
                break;
            case 34:
                m.choseSex = r.sint32();
                break;
            case 35:
                m.logingiftTime = r.sint32();
                break;
            case 36:
                m.forgetTimes = r.sint32();
                break;
            case 37:
                m.islevelTcdb = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerProp;
})();

$root.PlayerRank = (function() {

    function PlayerRank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerRank.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerRank.prototype.name = "";
    PlayerRank.prototype.head = "";
    PlayerRank.prototype.level = 0;
    PlayerRank.prototype.layer = 0;

    PlayerRank.create = function create(properties) {
        return new PlayerRank(properties);
    };

    PlayerRank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(18).string(m.name);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(26).string(m.head);
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(32).sint32(m.level);
        if (m.layer != null && m.hasOwnProperty("layer"))
            w.uint32(40).sint32(m.layer);
        return w;
    };

    PlayerRank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerRank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.level = r.sint32();
                break;
            case 5:
                m.layer = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerRank;
})();

$root.PlayerMail = (function() {

    function PlayerMail(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerMail.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerMail.prototype.title = "";
    PlayerMail.prototype.text = "";
    PlayerMail.prototype.appendix = "";
    PlayerMail.prototype.addTime = 0;
    PlayerMail.prototype.expireTime = 0;
    PlayerMail.prototype.state = 0;
    PlayerMail.prototype.getState = 0;
    PlayerMail.prototype.type = 0;
    PlayerMail.prototype.fromName = "";
    PlayerMail.prototype.icon = "";

    PlayerMail.create = function create(properties) {
        return new PlayerMail(properties);
    };

    PlayerMail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.title != null && m.hasOwnProperty("title"))
            w.uint32(18).string(m.title);
        if (m.text != null && m.hasOwnProperty("text"))
            w.uint32(26).string(m.text);
        if (m.appendix != null && m.hasOwnProperty("appendix"))
            w.uint32(34).string(m.appendix);
        if (m.addTime != null && m.hasOwnProperty("addTime"))
            w.uint32(40).sint32(m.addTime);
        if (m.expireTime != null && m.hasOwnProperty("expireTime"))
            w.uint32(48).sint32(m.expireTime);
        if (m.state != null && m.hasOwnProperty("state"))
            w.uint32(56).sint32(m.state);
        if (m.getState != null && m.hasOwnProperty("getState"))
            w.uint32(64).sint32(m.getState);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(72).sint32(m.type);
        if (m.fromName != null && m.hasOwnProperty("fromName"))
            w.uint32(82).string(m.fromName);
        if (m.icon != null && m.hasOwnProperty("icon"))
            w.uint32(90).string(m.icon);
        return w;
    };

    PlayerMail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerMail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.title = r.string();
                break;
            case 3:
                m.text = r.string();
                break;
            case 4:
                m.appendix = r.string();
                break;
            case 5:
                m.addTime = r.sint32();
                break;
            case 6:
                m.expireTime = r.sint32();
                break;
            case 7:
                m.state = r.sint32();
                break;
            case 8:
                m.getState = r.sint32();
                break;
            case 9:
                m.type = r.sint32();
                break;
            case 10:
                m.fromName = r.string();
                break;
            case 11:
                m.icon = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerMail;
})();

$root.PlayerDaily = (function() {

    function PlayerDaily(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerDaily.prototype.dailyid = 0;
    PlayerDaily.prototype.num = 0;
    PlayerDaily.prototype.maxnum = 0;

    PlayerDaily.create = function create(properties) {
        return new PlayerDaily(properties);
    };

    PlayerDaily.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.dailyid != null && m.hasOwnProperty("dailyid"))
            w.uint32(8).sint32(m.dailyid);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(16).sint32(m.num);
        if (m.maxnum != null && m.hasOwnProperty("maxnum"))
            w.uint32(24).sint32(m.maxnum);
        return w;
    };

    PlayerDaily.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerDaily();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.dailyid = r.sint32();
                break;
            case 2:
                m.num = r.sint32();
                break;
            case 3:
                m.maxnum = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerDaily;
})();

$root.PlayerRelation = (function() {

    function PlayerRelation(p) {
        this.params = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerRelation.prototype.playerid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerRelation.prototype.name = "";
    PlayerRelation.prototype.head = "";
    PlayerRelation.prototype.level = 0;
    PlayerRelation.prototype.layer = 0;
    PlayerRelation.prototype.sex = 0;
    PlayerRelation.prototype.addtime = 0;
    PlayerRelation.prototype.graduate = 0;
    PlayerRelation.prototype.lastlogin = 0;
    PlayerRelation.prototype.params = $util.emptyArray;

    PlayerRelation.create = function create(properties) {
        return new PlayerRelation(properties);
    };

    PlayerRelation.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerid != null && m.hasOwnProperty("playerid"))
            w.uint32(8).sint64(m.playerid);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(18).string(m.name);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(26).string(m.head);
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(32).sint32(m.level);
        if (m.layer != null && m.hasOwnProperty("layer"))
            w.uint32(40).sint32(m.layer);
        if (m.sex != null && m.hasOwnProperty("sex"))
            w.uint32(48).sint32(m.sex);
        if (m.addtime != null && m.hasOwnProperty("addtime"))
            w.uint32(56).sint32(m.addtime);
        if (m.graduate != null && m.hasOwnProperty("graduate"))
            w.uint32(64).sint32(m.graduate);
        if (m.lastlogin != null && m.hasOwnProperty("lastlogin"))
            w.uint32(72).sint32(m.lastlogin);
        if (m.params != null && m.params.length) {
            for (var i = 0; i < m.params.length; ++i)
                $root.PlayerParam.encode(m.params[i], w.uint32(82).fork()).ldelim();
        }
        return w;
    };

    PlayerRelation.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerRelation();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerid = r.sint64();
                break;
            case 2:
                m.name = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.level = r.sint32();
                break;
            case 5:
                m.layer = r.sint32();
                break;
            case 6:
                m.sex = r.sint32();
                break;
            case 7:
                m.addtime = r.sint32();
                break;
            case 8:
                m.graduate = r.sint32();
                break;
            case 9:
                m.lastlogin = r.sint32();
                break;
            case 10:
                if (!(m.params && m.params.length))
                    m.params = [];
                m.params.push($root.PlayerParam.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerRelation;
})();

$root.PlayerParams = (function() {

    function PlayerParams(p) {
        this.params = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerParams.prototype.params = $util.emptyArray;

    PlayerParams.create = function create(properties) {
        return new PlayerParams(properties);
    };

    PlayerParams.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.params != null && m.params.length) {
            for (var i = 0; i < m.params.length; ++i)
                $root.PlayerParam.encode(m.params[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    PlayerParams.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerParams();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.params && m.params.length))
                    m.params = [];
                m.params.push($root.PlayerParam.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerParams;
})();

$root.PlayerParam = (function() {

    function PlayerParam(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerParam.prototype.ParamKey = 0;
    PlayerParam.prototype.ParamValue = 0;
    PlayerParam.prototype.aid = 0;

    PlayerParam.create = function create(properties) {
        return new PlayerParam(properties);
    };

    PlayerParam.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.ParamKey != null && m.hasOwnProperty("ParamKey"))
            w.uint32(8).sint32(m.ParamKey);
        if (m.ParamValue != null && m.hasOwnProperty("ParamValue"))
            w.uint32(16).sint32(m.ParamValue);
        if (m.aid != null && m.hasOwnProperty("aid"))
            w.uint32(24).sint32(m.aid);
        return w;
    };

    PlayerParam.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerParam();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.ParamKey = r.sint32();
                break;
            case 2:
                m.ParamValue = r.sint32();
                break;
            case 3:
                m.aid = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerParam;
})();

$root.PlayerBuff = (function() {

    function PlayerBuff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerBuff.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerBuff.prototype.type = 0;
    PlayerBuff.prototype.playerid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    PlayerBuff.prototype.level = 0;
    PlayerBuff.prototype.layer = 0;
    PlayerBuff.prototype.sex = 0;
    PlayerBuff.prototype.name = "";
    PlayerBuff.prototype.head = "";
    PlayerBuff.prototype.activeTime = 0;
    PlayerBuff.prototype.duration = 0;
    PlayerBuff.prototype.creatureType = 0;
    PlayerBuff.prototype.addTime = 0;

    PlayerBuff.create = function create(properties) {
        return new PlayerBuff(properties);
    };

    PlayerBuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(16).sint32(m.type);
        if (m.playerid != null && m.hasOwnProperty("playerid"))
            w.uint32(24).sint64(m.playerid);
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(32).sint32(m.level);
        if (m.layer != null && m.hasOwnProperty("layer"))
            w.uint32(40).sint32(m.layer);
        if (m.sex != null && m.hasOwnProperty("sex"))
            w.uint32(48).sint32(m.sex);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(58).string(m.name);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(66).string(m.head);
        if (m.activeTime != null && m.hasOwnProperty("activeTime"))
            w.uint32(72).sint32(m.activeTime);
        if (m.duration != null && m.hasOwnProperty("duration"))
            w.uint32(80).sint32(m.duration);
        if (m.creatureType != null && m.hasOwnProperty("creatureType"))
            w.uint32(88).sint32(m.creatureType);
        if (m.addTime != null && m.hasOwnProperty("addTime"))
            w.uint32(96).sint32(m.addTime);
        return w;
    };

    PlayerBuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerBuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.type = r.sint32();
                break;
            case 3:
                m.playerid = r.sint64();
                break;
            case 4:
                m.level = r.sint32();
                break;
            case 5:
                m.layer = r.sint32();
                break;
            case 6:
                m.sex = r.sint32();
                break;
            case 7:
                m.name = r.string();
                break;
            case 8:
                m.head = r.string();
                break;
            case 9:
                m.activeTime = r.sint32();
                break;
            case 10:
                m.duration = r.sint32();
                break;
            case 11:
                m.creatureType = r.sint32();
                break;
            case 12:
                m.addTime = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerBuff;
})();

$root.WeddingInfo = (function() {

    function WeddingInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    WeddingInfo.prototype.weddingid = 0;
    WeddingInfo.prototype.player1 = null;
    WeddingInfo.prototype.player2 = null;
    WeddingInfo.prototype.endtime = 0;
    WeddingInfo.prototype.playernum = 0;
    WeddingInfo.prototype.giftnum = 0;

    WeddingInfo.create = function create(properties) {
        return new WeddingInfo(properties);
    };

    WeddingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.weddingid != null && m.hasOwnProperty("weddingid"))
            w.uint32(8).sint32(m.weddingid);
        if (m.player1 != null && m.hasOwnProperty("player1"))
            $root.PlayerRank.encode(m.player1, w.uint32(18).fork()).ldelim();
        if (m.player2 != null && m.hasOwnProperty("player2"))
            $root.PlayerRank.encode(m.player2, w.uint32(26).fork()).ldelim();
        if (m.endtime != null && m.hasOwnProperty("endtime"))
            w.uint32(32).sint32(m.endtime);
        if (m.playernum != null && m.hasOwnProperty("playernum"))
            w.uint32(40).sint32(m.playernum);
        if (m.giftnum != null && m.hasOwnProperty("giftnum"))
            w.uint32(48).sint32(m.giftnum);
        return w;
    };

    WeddingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WeddingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.weddingid = r.sint32();
                break;
            case 2:
                m.player1 = $root.PlayerRank.decode(r, r.uint32());
                break;
            case 3:
                m.player2 = $root.PlayerRank.decode(r, r.uint32());
                break;
            case 4:
                m.endtime = r.sint32();
                break;
            case 5:
                m.playernum = r.sint32();
                break;
            case 6:
                m.giftnum = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return WeddingInfo;
})();

$root.WeddingAwardMsg = (function() {

    function WeddingAwardMsg(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    WeddingAwardMsg.prototype.stone = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    WeddingAwardMsg.prototype.heart = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    WeddingAwardMsg.prototype.buff = 0;
    WeddingAwardMsg.prototype.times = 0;

    WeddingAwardMsg.create = function create(properties) {
        return new WeddingAwardMsg(properties);
    };

    WeddingAwardMsg.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.stone != null && m.hasOwnProperty("stone"))
            w.uint32(8).sint64(m.stone);
        if (m.heart != null && m.hasOwnProperty("heart"))
            w.uint32(16).sint64(m.heart);
        if (m.buff != null && m.hasOwnProperty("buff"))
            w.uint32(24).sint32(m.buff);
        if (m.times != null && m.hasOwnProperty("times"))
            w.uint32(32).sint32(m.times);
        return w;
    };

    WeddingAwardMsg.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WeddingAwardMsg();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.stone = r.sint64();
                break;
            case 2:
                m.heart = r.sint64();
                break;
            case 3:
                m.buff = r.sint32();
                break;
            case 4:
                m.times = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return WeddingAwardMsg;
})();

$root.WeddingRank = (function() {

    function WeddingRank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    WeddingRank.prototype.player1 = null;
    WeddingRank.prototype.player2 = null;
    WeddingRank.prototype.rank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    WeddingRank.create = function create(properties) {
        return new WeddingRank(properties);
    };

    WeddingRank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.player1 != null && m.hasOwnProperty("player1"))
            $root.PlayerRank.encode(m.player1, w.uint32(10).fork()).ldelim();
        if (m.player2 != null && m.hasOwnProperty("player2"))
            $root.PlayerRank.encode(m.player2, w.uint32(18).fork()).ldelim();
        if (m.rank != null && m.hasOwnProperty("rank"))
            w.uint32(24).sint64(m.rank);
        return w;
    };

    WeddingRank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WeddingRank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.player1 = $root.PlayerRank.decode(r, r.uint32());
                break;
            case 2:
                m.player2 = $root.PlayerRank.decode(r, r.uint32());
                break;
            case 3:
                m.rank = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return WeddingRank;
})();

$root.WeddingFoodInfo = (function() {

    function WeddingFoodInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    WeddingFoodInfo.prototype.time = 0;
    WeddingFoodInfo.prototype.award = "";

    WeddingFoodInfo.create = function create(properties) {
        return new WeddingFoodInfo(properties);
    };

    WeddingFoodInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.time != null && m.hasOwnProperty("time"))
            w.uint32(8).sint32(m.time);
        if (m.award != null && m.hasOwnProperty("award"))
            w.uint32(18).string(m.award);
        return w;
    };

    WeddingFoodInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WeddingFoodInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.time = r.sint32();
                break;
            case 2:
                m.award = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return WeddingFoodInfo;
})();

$root.PlayerField = (function() {

    function PlayerField(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerField.prototype.type = 0;
    PlayerField.prototype.index = 0;
    PlayerField.prototype.time = 0;
    PlayerField.prototype.flowerTime = 0;

    PlayerField.create = function create(properties) {
        return new PlayerField(properties);
    };

    PlayerField.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(16).sint32(m.index);
        if (m.time != null && m.hasOwnProperty("time"))
            w.uint32(24).sint32(m.time);
        if (m.flowerTime != null && m.hasOwnProperty("flowerTime"))
            w.uint32(32).sint32(m.flowerTime);
        return w;
    };

    PlayerField.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerField();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.index = r.sint32();
                break;
            case 3:
                m.time = r.sint32();
                break;
            case 4:
                m.flowerTime = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerField;
})();

$root.PlayerFields = (function() {

    function PlayerFields(p) {
        this.fields = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    PlayerFields.prototype.fields = $util.emptyArray;

    PlayerFields.create = function create(properties) {
        return new PlayerFields(properties);
    };

    PlayerFields.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.fields != null && m.fields.length) {
            for (var i = 0; i < m.fields.length; ++i)
                $root.PlayerField.encode(m.fields[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    PlayerFields.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerFields();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.fields && m.fields.length))
                    m.fields = [];
                m.fields.push($root.PlayerField.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerFields;
})();

$root.reqQA = (function() {

    function reqQA(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqQA.prototype.id = 0;
    reqQA.prototype.answer = 0;

    reqQA.create = function create(properties) {
        return new reqQA(properties);
    };

    reqQA.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        if (m.answer != null && m.hasOwnProperty("answer"))
            w.uint32(16).sint32(m.answer);
        return w;
    };

    reqQA.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqQA();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            case 2:
                m.answer = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqQA;
})();

$root.resQA = (function() {

    function resQA(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resQA.prototype.id = 0;

    resQA.create = function create(properties) {
        return new resQA(properties);
    };

    resQA.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        return w;
    };

    resQA.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resQA();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resQA;
})();

$root.resQAReward = (function() {

    function resQAReward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resQAReward.prototype.rewards = "";

    resQAReward.create = function create(properties) {
        return new resQAReward(properties);
    };

    resQAReward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rewards != null && m.hasOwnProperty("rewards"))
            w.uint32(10).string(m.rewards);
        return w;
    };

    resQAReward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resQAReward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.rewards = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resQAReward;
})();

$root.reqActivity = (function() {

    function reqActivity(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqActivity.prototype.id = 0;
    reqActivity.prototype.playerid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqActivity.create = function create(properties) {
        return new reqActivity(properties);
    };

    reqActivity.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        if (m.playerid != null && m.hasOwnProperty("playerid"))
            w.uint32(16).sint64(m.playerid);
        return w;
    };

    reqActivity.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqActivity();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            case 2:
                m.playerid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqActivity;
})();

$root.resTcdb = (function() {

    function resTcdb(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resTcdb.prototype.endtime = 0;

    resTcdb.create = function create(properties) {
        return new resTcdb(properties);
    };

    resTcdb.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.endtime != null && m.hasOwnProperty("endtime"))
            w.uint32(8).sint32(m.endtime);
        return w;
    };

    resTcdb.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resTcdb();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.endtime = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resTcdb;
})();

$root.resActivity = (function() {

    function resActivity(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resActivity.prototype.id = 0;
    resActivity.prototype.endtime = 0;

    resActivity.create = function create(properties) {
        return new resActivity(properties);
    };

    resActivity.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        if (m.endtime != null && m.hasOwnProperty("endtime"))
            w.uint32(16).sint32(m.endtime);
        return w;
    };

    resActivity.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resActivity();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            case 2:
                m.endtime = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resActivity;
})();

$root.reqPlayerBody = (function() {

    function reqPlayerBody(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerBody.create = function create(properties) {
        return new reqPlayerBody(properties);
    };

    reqPlayerBody.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqPlayerBody.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerBody();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerBody;
})();

$root.resPlayerBody = (function() {

    function resPlayerBody(p) {
        this.playerbodys = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerBody.prototype.playerbodys = $util.emptyArray;

    resPlayerBody.create = function create(properties) {
        return new resPlayerBody(properties);
    };

    resPlayerBody.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerbodys != null && m.playerbodys.length) {
            for (var i = 0; i < m.playerbodys.length; ++i)
                $root.playerBody.encode(m.playerbodys[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resPlayerBody.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerBody();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.playerbodys && m.playerbodys.length))
                    m.playerbodys = [];
                m.playerbodys.push($root.playerBody.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerBody;
})();

$root.playerBody = (function() {

    function playerBody(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    playerBody.prototype.type = 0;
    playerBody.prototype.level = 0;
    playerBody.prototype.booklevel = 0;
    playerBody.prototype.booknum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    playerBody.prototype.layer = 0;

    playerBody.create = function create(properties) {
        return new playerBody(properties);
    };

    playerBody.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(16).sint32(m.level);
        if (m.booklevel != null && m.hasOwnProperty("booklevel"))
            w.uint32(24).sint32(m.booklevel);
        if (m.booknum != null && m.hasOwnProperty("booknum"))
            w.uint32(32).sint64(m.booknum);
        if (m.layer != null && m.hasOwnProperty("layer"))
            w.uint32(40).sint32(m.layer);
        return w;
    };

    playerBody.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.playerBody();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.level = r.sint32();
                break;
            case 3:
                m.booklevel = r.sint32();
                break;
            case 4:
                m.booknum = r.sint64();
                break;
            case 5:
                m.layer = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return playerBody;
})();

$root.reqUpLevelBody = (function() {

    function reqUpLevelBody(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqUpLevelBody.prototype.bodytype = 0;
    reqUpLevelBody.prototype.uptype = 0;

    reqUpLevelBody.create = function create(properties) {
        return new reqUpLevelBody(properties);
    };

    reqUpLevelBody.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bodytype != null && m.hasOwnProperty("bodytype"))
            w.uint32(8).sint32(m.bodytype);
        if (m.uptype != null && m.hasOwnProperty("uptype"))
            w.uint32(16).sint32(m.uptype);
        return w;
    };

    reqUpLevelBody.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqUpLevelBody();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bodytype = r.sint32();
                break;
            case 2:
                m.uptype = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqUpLevelBody;
})();

$root.reqUpLayerBody = (function() {

    function reqUpLayerBody(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqUpLayerBody.prototype.bodytype = 0;

    reqUpLayerBody.create = function create(properties) {
        return new reqUpLayerBody(properties);
    };

    reqUpLayerBody.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bodytype != null && m.hasOwnProperty("bodytype"))
            w.uint32(8).sint32(m.bodytype);
        return w;
    };

    reqUpLayerBody.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqUpLayerBody();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bodytype = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqUpLayerBody;
})();

$root.reqHome = (function() {

    function reqHome(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqHome.prototype.type = 0;
    reqHome.prototype.ad = false;

    reqHome.create = function create(properties) {
        return new reqHome(properties);
    };

    reqHome.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.ad != null && m.hasOwnProperty("ad"))
            w.uint32(16).bool(m.ad);
        return w;
    };

    reqHome.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqHome();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.ad = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqHome;
})();

$root.Frame = (function() {

    function Frame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    Frame.prototype.messageType = "";
    Frame.prototype.payload = $util.newBuffer([]);

    Frame.create = function create(properties) {
        return new Frame(properties);
    };

    Frame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.messageType != null && m.hasOwnProperty("messageType"))
            w.uint32(10).string(m.messageType);
        if (m.payload != null && m.hasOwnProperty("payload"))
            w.uint32(122).bytes(m.payload);
        return w;
    };

    Frame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Frame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.messageType = r.string();
                break;
            case 15:
                m.payload = r.bytes();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Frame;
})();

$root.reqGMCMD = (function() {

    function reqGMCMD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqGMCMD.prototype.username = "";
    reqGMCMD.prototype.password = "";
    reqGMCMD.prototype.gmtype = 0;
    reqGMCMD.prototype.title = "";
    reqGMCMD.prototype.desc = "";
    reqGMCMD.prototype.playerid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqGMCMD.prototype.items = "";

    reqGMCMD.create = function create(properties) {
        return new reqGMCMD(properties);
    };

    reqGMCMD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.username != null && m.hasOwnProperty("username"))
            w.uint32(10).string(m.username);
        if (m.password != null && m.hasOwnProperty("password"))
            w.uint32(18).string(m.password);
        if (m.gmtype != null && m.hasOwnProperty("gmtype"))
            w.uint32(24).sint32(m.gmtype);
        if (m.title != null && m.hasOwnProperty("title"))
            w.uint32(34).string(m.title);
        if (m.desc != null && m.hasOwnProperty("desc"))
            w.uint32(42).string(m.desc);
        if (m.playerid != null && m.hasOwnProperty("playerid"))
            w.uint32(48).sint64(m.playerid);
        if (m.items != null && m.hasOwnProperty("items"))
            w.uint32(58).string(m.items);
        return w;
    };

    reqGMCMD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqGMCMD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.username = r.string();
                break;
            case 2:
                m.password = r.string();
                break;
            case 3:
                m.gmtype = r.sint32();
                break;
            case 4:
                m.title = r.string();
                break;
            case 5:
                m.desc = r.string();
                break;
            case 6:
                m.playerid = r.sint64();
                break;
            case 7:
                m.items = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqGMCMD;
})();

$root.resGMCMD = (function() {

    function resGMCMD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resGMCMD.prototype.type = 0;
    resGMCMD.prototype.reslut = "";
    resGMCMD.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    resGMCMD.create = function create(properties) {
        return new resGMCMD(properties);
    };

    resGMCMD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.reslut != null && m.hasOwnProperty("reslut"))
            w.uint32(18).string(m.reslut);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(24).sint64(m.num);
        return w;
    };

    resGMCMD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resGMCMD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.reslut = r.string();
                break;
            case 3:
                m.num = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resGMCMD;
})();

$root.reqBuyItem = (function() {

    function reqBuyItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqBuyItem.prototype.itemid = 0;
    reqBuyItem.prototype.num = 0;

    reqBuyItem.create = function create(properties) {
        return new reqBuyItem(properties);
    };

    reqBuyItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemid != null && m.hasOwnProperty("itemid"))
            w.uint32(8).sint32(m.itemid);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(16).sint32(m.num);
        return w;
    };

    reqBuyItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqBuyItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemid = r.sint32();
                break;
            case 2:
                m.num = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqBuyItem;
})();

$root.resBagItems = (function() {

    function resBagItems(p) {
        this.bagitem = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resBagItems.prototype.bagitem = $util.emptyArray;

    resBagItems.create = function create(properties) {
        return new resBagItems(properties);
    };

    resBagItems.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bagitem != null && m.bagitem.length) {
            for (var i = 0; i < m.bagitem.length; ++i)
                $root.bagItem.encode(m.bagitem[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resBagItems.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resBagItems();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.bagitem && m.bagitem.length))
                    m.bagitem = [];
                m.bagitem.push($root.bagItem.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resBagItems;
})();

$root.reqPutOnEquip = (function() {

    function reqPutOnEquip(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPutOnEquip.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqPutOnEquip.create = function create(properties) {
        return new reqPutOnEquip(properties);
    };

    reqPutOnEquip.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        return w;
    };

    reqPutOnEquip.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPutOnEquip();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPutOnEquip;
})();

$root.reqTakeOffEquip = (function() {

    function reqTakeOffEquip(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTakeOffEquip.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqTakeOffEquip.create = function create(properties) {
        return new reqTakeOffEquip(properties);
    };

    reqTakeOffEquip.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        return w;
    };

    reqTakeOffEquip.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTakeOffEquip();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTakeOffEquip;
})();

$root.resEquipStatus = (function() {

    function resEquipStatus(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resEquipStatus.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    resEquipStatus.prototype.isPutOn = false;

    resEquipStatus.create = function create(properties) {
        return new resEquipStatus(properties);
    };

    resEquipStatus.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.isPutOn != null && m.hasOwnProperty("isPutOn"))
            w.uint32(16).bool(m.isPutOn);
        return w;
    };

    resEquipStatus.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resEquipStatus();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.isPutOn = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resEquipStatus;
})();

$root.reqComposeEquip = (function() {

    function reqComposeEquip(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqComposeEquip.prototype.fromId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqComposeEquip.prototype.toId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqComposeEquip.create = function create(properties) {
        return new reqComposeEquip(properties);
    };

    reqComposeEquip.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.fromId != null && m.hasOwnProperty("fromId"))
            w.uint32(8).sint64(m.fromId);
        if (m.toId != null && m.hasOwnProperty("toId"))
            w.uint32(16).sint64(m.toId);
        return w;
    };

    reqComposeEquip.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqComposeEquip();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fromId = r.sint64();
                break;
            case 2:
                m.toId = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqComposeEquip;
})();

$root.reqChangeItemPos = (function() {

    function reqChangeItemPos(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqChangeItemPos.prototype.fromPos = 0;
    reqChangeItemPos.prototype.toPos = 0;

    reqChangeItemPos.create = function create(properties) {
        return new reqChangeItemPos(properties);
    };

    reqChangeItemPos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.fromPos != null && m.hasOwnProperty("fromPos"))
            w.uint32(8).sint32(m.fromPos);
        if (m.toPos != null && m.hasOwnProperty("toPos"))
            w.uint32(16).sint32(m.toPos);
        return w;
    };

    reqChangeItemPos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqChangeItemPos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fromPos = r.sint32();
                break;
            case 2:
                m.toPos = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqChangeItemPos;
})();

$root.resChangeItemPos = (function() {

    function resChangeItemPos(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resChangeItemPos.prototype.fromPos = 0;
    resChangeItemPos.prototype.toPos = 0;

    resChangeItemPos.create = function create(properties) {
        return new resChangeItemPos(properties);
    };

    resChangeItemPos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.fromPos != null && m.hasOwnProperty("fromPos"))
            w.uint32(8).sint32(m.fromPos);
        if (m.toPos != null && m.hasOwnProperty("toPos"))
            w.uint32(16).sint32(m.toPos);
        return w;
    };

    resChangeItemPos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resChangeItemPos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fromPos = r.sint32();
                break;
            case 2:
                m.toPos = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resChangeItemPos;
})();

$root.reqForge = (function() {

    function reqForge(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqForge.create = function create(properties) {
        return new reqForge(properties);
    };

    reqForge.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqForge.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqForge();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqForge;
})();

$root.reqAlchemy = (function() {

    function reqAlchemy(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqAlchemy.prototype.index = 0;

    reqAlchemy.create = function create(properties) {
        return new reqAlchemy(properties);
    };

    reqAlchemy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(8).sint32(m.index);
        return w;
    };

    reqAlchemy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqAlchemy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqAlchemy;
})();

$root.resAlchemy = (function() {

    function resAlchemy(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resAlchemy.prototype.alchemyEndTime = 0;
    resAlchemy.prototype.alchemyItem = "";
    resAlchemy.prototype.alchemylevel = 0;
    resAlchemy.prototype.alchemyexp = 0;

    resAlchemy.create = function create(properties) {
        return new resAlchemy(properties);
    };

    resAlchemy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.alchemyEndTime != null && m.hasOwnProperty("alchemyEndTime"))
            w.uint32(8).sint32(m.alchemyEndTime);
        if (m.alchemyItem != null && m.hasOwnProperty("alchemyItem"))
            w.uint32(18).string(m.alchemyItem);
        if (m.alchemylevel != null && m.hasOwnProperty("alchemylevel"))
            w.uint32(24).sint32(m.alchemylevel);
        if (m.alchemyexp != null && m.hasOwnProperty("alchemyexp"))
            w.uint32(32).sint32(m.alchemyexp);
        return w;
    };

    resAlchemy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resAlchemy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.alchemyEndTime = r.sint32();
                break;
            case 2:
                m.alchemyItem = r.string();
                break;
            case 3:
                m.alchemylevel = r.sint32();
                break;
            case 4:
                m.alchemyexp = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resAlchemy;
})();

$root.reqAlchemyAD = (function() {

    function reqAlchemyAD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqAlchemyAD.create = function create(properties) {
        return new reqAlchemyAD(properties);
    };

    reqAlchemyAD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqAlchemyAD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqAlchemyAD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqAlchemyAD;
})();

$root.reqAlchemyAward = (function() {

    function reqAlchemyAward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqAlchemyAward.create = function create(properties) {
        return new reqAlchemyAward(properties);
    };

    reqAlchemyAward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqAlchemyAward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqAlchemyAward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqAlchemyAward;
})();

$root.reqTrashItem = (function() {

    function reqTrashItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTrashItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqTrashItem.create = function create(properties) {
        return new reqTrashItem(properties);
    };

    reqTrashItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        return w;
    };

    reqTrashItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTrashItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTrashItem;
})();

$root.reqUseItem = (function() {

    function reqUseItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqUseItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqUseItem.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqUseItem.create = function create(properties) {
        return new reqUseItem(properties);
    };

    reqUseItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(16).sint64(m.num);
        return w;
    };

    reqUseItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqUseItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.num = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqUseItem;
})();

$root.reqLianDan = (function() {

    function reqLianDan(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqLianDan.prototype.daoyan = 0;
    reqLianDan.prototype.ext = 0;

    reqLianDan.create = function create(properties) {
        return new reqLianDan(properties);
    };

    reqLianDan.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.daoyan != null && m.hasOwnProperty("daoyan"))
            w.uint32(8).sint32(m.daoyan);
        if (m.ext != null && m.hasOwnProperty("ext"))
            w.uint32(16).sint32(m.ext);
        return w;
    };

    reqLianDan.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqLianDan();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.daoyan = r.sint32();
                break;
            case 2:
                m.ext = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqLianDan;
})();

$root.resDropItems = (function() {

    function resDropItems(p) {
        this.dropitems = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resDropItems.prototype.type = 0;
    resDropItems.prototype.dropitems = $util.emptyArray;

    resDropItems.create = function create(properties) {
        return new resDropItems(properties);
    };

    resDropItems.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.dropitems != null && m.dropitems.length) {
            for (var i = 0; i < m.dropitems.length; ++i)
                $root.DropItem.encode(m.dropitems[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    resDropItems.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resDropItems();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                if (!(m.dropitems && m.dropitems.length))
                    m.dropitems = [];
                m.dropitems.push($root.DropItem.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resDropItems;
})();

$root.DropItem = (function() {

    function DropItem(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    DropItem.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    DropItem.prototype.itemid = 0;
    DropItem.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    DropItem.prototype.posX = 0;
    DropItem.prototype.posy = 0;

    DropItem.create = function create(properties) {
        return new DropItem(properties);
    };

    DropItem.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && m.hasOwnProperty("gameId"))
            w.uint32(8).sint64(m.gameId);
        if (m.itemid != null && m.hasOwnProperty("itemid"))
            w.uint32(16).sint32(m.itemid);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(24).sint64(m.num);
        if (m.posX != null && m.hasOwnProperty("posX"))
            w.uint32(32).sint32(m.posX);
        if (m.posy != null && m.hasOwnProperty("posy"))
            w.uint32(40).sint32(m.posy);
        return w;
    };

    DropItem.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DropItem();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.sint64();
                break;
            case 2:
                m.itemid = r.sint32();
                break;
            case 3:
                m.num = r.sint64();
                break;
            case 4:
                m.posX = r.sint32();
                break;
            case 5:
                m.posy = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return DropItem;
})();

$root.petProp = (function() {

    function petProp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    petProp.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    petProp.prototype.petlevel = 0;
    petProp.prototype.times = 0;
    petProp.prototype.lastTime = 0;
    petProp.prototype.type = 0;
    petProp.prototype.strength = 0;
    petProp.prototype.petid = 0;
    petProp.prototype.floor = 0;
    petProp.prototype.awardfloor = 0;
    petProp.prototype.adTimes = 0;

    petProp.create = function create(properties) {
        return new petProp(properties);
    };

    petProp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerId != null && m.hasOwnProperty("playerId"))
            w.uint32(8).sint64(m.playerId);
        if (m.petlevel != null && m.hasOwnProperty("petlevel"))
            w.uint32(16).sint32(m.petlevel);
        if (m.times != null && m.hasOwnProperty("times"))
            w.uint32(24).sint32(m.times);
        if (m.lastTime != null && m.hasOwnProperty("lastTime"))
            w.uint32(32).sint32(m.lastTime);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(40).sint32(m.type);
        if (m.strength != null && m.hasOwnProperty("strength"))
            w.uint32(48).sint32(m.strength);
        if (m.petid != null && m.hasOwnProperty("petid"))
            w.uint32(56).sint32(m.petid);
        if (m.floor != null && m.hasOwnProperty("floor"))
            w.uint32(64).sint32(m.floor);
        if (m.awardfloor != null && m.hasOwnProperty("awardfloor"))
            w.uint32(72).sint32(m.awardfloor);
        if (m.adTimes != null && m.hasOwnProperty("adTimes"))
            w.uint32(80).sint32(m.adTimes);
        return w;
    };

    petProp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.petProp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.sint64();
                break;
            case 2:
                m.petlevel = r.sint32();
                break;
            case 3:
                m.times = r.sint32();
                break;
            case 4:
                m.lastTime = r.sint32();
                break;
            case 5:
                m.type = r.sint32();
                break;
            case 6:
                m.strength = r.sint32();
                break;
            case 7:
                m.petid = r.sint32();
                break;
            case 8:
                m.floor = r.sint32();
                break;
            case 9:
                m.awardfloor = r.sint32();
                break;
            case 10:
                m.adTimes = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return petProp;
})();

$root.resPlayerPet = (function() {

    function resPlayerPet(p) {
        this.pets = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerPet.prototype.pets = $util.emptyArray;

    resPlayerPet.create = function create(properties) {
        return new resPlayerPet(properties);
    };

    resPlayerPet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.pets != null && m.pets.length) {
            for (var i = 0; i < m.pets.length; ++i)
                $root.petProp.encode(m.pets[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resPlayerPet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerPet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.pets && m.pets.length))
                    m.pets = [];
                m.pets.push($root.petProp.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerPet;
})();

$root.reqPlayerPet = (function() {

    function reqPlayerPet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerPet.create = function create(properties) {
        return new reqPlayerPet(properties);
    };

    reqPlayerPet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqPlayerPet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerPet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerPet;
})();

$root.reqUpLevelPet = (function() {

    function reqUpLevelPet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqUpLevelPet.create = function create(properties) {
        return new reqUpLevelPet(properties);
    };

    reqUpLevelPet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqUpLevelPet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqUpLevelPet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqUpLevelPet;
})();

$root.reqJuLing = (function() {

    function reqJuLing(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqJuLing.prototype.index = 0;

    reqJuLing.create = function create(properties) {
        return new reqJuLing(properties);
    };

    reqJuLing.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(8).sint32(m.index);
        return w;
    };

    reqJuLing.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqJuLing();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqJuLing;
})();

$root.reqPetExplorer = (function() {

    function reqPetExplorer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPetExplorer.create = function create(properties) {
        return new reqPetExplorer(properties);
    };

    reqPetExplorer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqPetExplorer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPetExplorer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPetExplorer;
})();

$root.reqPetMove = (function() {

    function reqPetMove(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPetMove.prototype.x = 0;
    reqPetMove.prototype.y = 0;

    reqPetMove.create = function create(properties) {
        return new reqPetMove(properties);
    };

    reqPetMove.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.x != null && m.hasOwnProperty("x"))
            w.uint32(8).sint32(m.x);
        if (m.y != null && m.hasOwnProperty("y"))
            w.uint32(16).sint32(m.y);
        return w;
    };

    reqPetMove.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPetMove();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.x = r.sint32();
                break;
            case 2:
                m.y = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPetMove;
})();

$root.reqNextFloor = (function() {

    function reqNextFloor(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqNextFloor.create = function create(properties) {
        return new reqNextFloor(properties);
    };

    reqNextFloor.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqNextFloor.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqNextFloor();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqNextFloor;
})();

$root.resNextFloor = (function() {

    function resNextFloor(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resNextFloor.create = function create(properties) {
        return new resNextFloor(properties);
    };

    resNextFloor.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    resNextFloor.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resNextFloor();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resNextFloor;
})();

$root.reqPetAD = (function() {

    function reqPetAD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPetAD.create = function create(properties) {
        return new reqPetAD(properties);
    };

    reqPetAD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqPetAD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPetAD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPetAD;
})();

$root.resPetAD = (function() {

    function resPetAD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPetAD.prototype.times = 0;
    resPetAD.prototype.addstrength = 0;

    resPetAD.create = function create(properties) {
        return new resPetAD(properties);
    };

    resPetAD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.times != null && m.hasOwnProperty("times"))
            w.uint32(8).sint32(m.times);
        if (m.addstrength != null && m.hasOwnProperty("addstrength"))
            w.uint32(16).sint32(m.addstrength);
        return w;
    };

    resPetAD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPetAD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.times = r.sint32();
                break;
            case 2:
                m.addstrength = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPetAD;
})();

$root.reqPetFloorAward = (function() {

    function reqPetFloorAward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPetFloorAward.prototype.floor = 0;

    reqPetFloorAward.create = function create(properties) {
        return new reqPetFloorAward(properties);
    };

    reqPetFloorAward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.floor != null && m.hasOwnProperty("floor"))
            w.uint32(8).sint32(m.floor);
        return w;
    };

    reqPetFloorAward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPetFloorAward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.floor = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPetFloorAward;
})();

$root.reqEndPetExplorer = (function() {

    function reqEndPetExplorer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqEndPetExplorer.create = function create(properties) {
        return new reqEndPetExplorer(properties);
    };

    reqEndPetExplorer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqEndPetExplorer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqEndPetExplorer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqEndPetExplorer;
})();

$root.reqBuyTickets = (function() {

    function reqBuyTickets(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqBuyTickets.create = function create(properties) {
        return new reqBuyTickets(properties);
    };

    reqBuyTickets.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqBuyTickets.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqBuyTickets();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqBuyTickets;
})();

$root.reqCreatePlayer = (function() {

    function reqCreatePlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqCreatePlayer.prototype.name = "";
    reqCreatePlayer.prototype.job = 0;
    reqCreatePlayer.prototype.sex = 0;
    reqCreatePlayer.prototype.head = "";
    reqCreatePlayer.prototype.inviteType = 0;
    reqCreatePlayer.prototype.inviteid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqCreatePlayer.create = function create(properties) {
        return new reqCreatePlayer(properties);
    };

    reqCreatePlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(10).string(m.name);
        if (m.job != null && m.hasOwnProperty("job"))
            w.uint32(16).sint32(m.job);
        if (m.sex != null && m.hasOwnProperty("sex"))
            w.uint32(24).sint32(m.sex);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(34).string(m.head);
        if (m.inviteType != null && m.hasOwnProperty("inviteType"))
            w.uint32(40).sint32(m.inviteType);
        if (m.inviteid != null && m.hasOwnProperty("inviteid"))
            w.uint32(48).sint64(m.inviteid);
        return w;
    };

    reqCreatePlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqCreatePlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.job = r.sint32();
                break;
            case 3:
                m.sex = r.sint32();
                break;
            case 4:
                m.head = r.string();
                break;
            case 5:
                m.inviteType = r.sint32();
                break;
            case 6:
                m.inviteid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqCreatePlayer;
})();

$root.resCreatePlayer = (function() {

    function resCreatePlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resCreatePlayer.prototype.Player = null;

    resCreatePlayer.create = function create(properties) {
        return new resCreatePlayer(properties);
    };

    resCreatePlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.Player != null && m.hasOwnProperty("Player"))
            $root.loginPlayer.encode(m.Player, w.uint32(10).fork()).ldelim();
        return w;
    };

    resCreatePlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resCreatePlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.Player = $root.loginPlayer.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resCreatePlayer;
})();

$root.reqSelectPlayer = (function() {

    function reqSelectPlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSelectPlayer.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqSelectPlayer.prototype.inviteid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqSelectPlayer.prototype.inviteType = 0;
    reqSelectPlayer.prototype.name = "";
    reqSelectPlayer.prototype.head = "";

    reqSelectPlayer.create = function create(properties) {
        return new reqSelectPlayer(properties);
    };

    reqSelectPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerId != null && m.hasOwnProperty("playerId"))
            w.uint32(8).sint64(m.playerId);
        if (m.inviteid != null && m.hasOwnProperty("inviteid"))
            w.uint32(16).sint64(m.inviteid);
        if (m.inviteType != null && m.hasOwnProperty("inviteType"))
            w.uint32(24).sint32(m.inviteType);
        if (m.name != null && m.hasOwnProperty("name"))
            w.uint32(34).string(m.name);
        if (m.head != null && m.hasOwnProperty("head"))
            w.uint32(42).string(m.head);
        return w;
    };

    reqSelectPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSelectPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.sint64();
                break;
            case 2:
                m.inviteid = r.sint64();
                break;
            case 3:
                m.inviteType = r.sint32();
                break;
            case 4:
                m.name = r.string();
                break;
            case 5:
                m.head = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSelectPlayer;
})();

$root.resSelectPlayer = (function() {

    function resSelectPlayer(p) {
        this.bagitems = [];
        this.dailys = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resSelectPlayer.prototype.props = null;
    resSelectPlayer.prototype.bagitems = $util.emptyArray;
    resSelectPlayer.prototype.dailys = $util.emptyArray;
    resSelectPlayer.prototype.offlineExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    resSelectPlayer.create = function create(properties) {
        return new resSelectPlayer(properties);
    };

    resSelectPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.props != null && m.hasOwnProperty("props"))
            $root.PlayerProp.encode(m.props, w.uint32(10).fork()).ldelim();
        if (m.bagitems != null && m.bagitems.length) {
            for (var i = 0; i < m.bagitems.length; ++i)
                $root.bagItem.encode(m.bagitems[i], w.uint32(18).fork()).ldelim();
        }
        if (m.dailys != null && m.dailys.length) {
            for (var i = 0; i < m.dailys.length; ++i)
                $root.PlayerDaily.encode(m.dailys[i], w.uint32(26).fork()).ldelim();
        }
        if (m.offlineExp != null && m.hasOwnProperty("offlineExp"))
            w.uint32(32).sint64(m.offlineExp);
        return w;
    };

    resSelectPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resSelectPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.props = $root.PlayerProp.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.bagitems && m.bagitems.length))
                    m.bagitems = [];
                m.bagitems.push($root.bagItem.decode(r, r.uint32()));
                break;
            case 3:
                if (!(m.dailys && m.dailys.length))
                    m.dailys = [];
                m.dailys.push($root.PlayerDaily.decode(r, r.uint32()));
                break;
            case 4:
                m.offlineExp = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resSelectPlayer;
})();

$root.resPerExp = (function() {

    function resPerExp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPerExp.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    resPerExp.prototype.canGet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    resPerExp.create = function create(properties) {
        return new resPerExp(properties);
    };

    resPerExp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.exp != null && m.hasOwnProperty("exp"))
            w.uint32(8).sint64(m.exp);
        if (m.canGet != null && m.hasOwnProperty("canGet"))
            w.uint32(16).sint64(m.canGet);
        return w;
    };

    resPerExp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPerExp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.exp = r.sint64();
                break;
            case 2:
                m.canGet = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPerExp;
})();

$root.reqGetExp = (function() {

    function reqGetExp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqGetExp.create = function create(properties) {
        return new reqGetExp(properties);
    };

    reqGetExp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqGetExp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqGetExp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqGetExp;
})();

$root.resPlayerProp = (function() {

    function resPlayerProp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerProp.prototype.props = null;

    resPlayerProp.create = function create(properties) {
        return new resPlayerProp(properties);
    };

    resPlayerProp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.props != null && m.hasOwnProperty("props"))
            $root.PlayerProp.encode(m.props, w.uint32(10).fork()).ldelim();
        return w;
    };

    resPlayerProp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerProp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.props = $root.PlayerProp.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerProp;
})();

$root.reqLevelUp = (function() {

    function reqLevelUp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqLevelUp.create = function create(properties) {
        return new reqLevelUp(properties);
    };

    reqLevelUp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqLevelUp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqLevelUp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqLevelUp;
})();

$root.reqPrayer = (function() {

    function reqPrayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPrayer.prototype.type = 0;

    reqPrayer.create = function create(properties) {
        return new reqPrayer(properties);
    };

    reqPrayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqPrayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPrayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPrayer;
})();

$root.reqSignInfo = (function() {

    function reqSignInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSignInfo.create = function create(properties) {
        return new reqSignInfo(properties);
    };

    reqSignInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqSignInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSignInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSignInfo;
})();

$root.reqSign = (function() {

    function reqSign(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSign.create = function create(properties) {
        return new reqSign(properties);
    };

    reqSign.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqSign.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSign();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSign;
})();

$root.resSignInfo = (function() {

    function resSignInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resSignInfo.prototype.signDays = 0;
    resSignInfo.prototype.lastSignTime = 0;

    resSignInfo.create = function create(properties) {
        return new resSignInfo(properties);
    };

    resSignInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.signDays != null && m.hasOwnProperty("signDays"))
            w.uint32(8).sint32(m.signDays);
        if (m.lastSignTime != null && m.hasOwnProperty("lastSignTime"))
            w.uint32(16).sint32(m.lastSignTime);
        return w;
    };

    resSignInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resSignInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.signDays = r.sint32();
                break;
            case 2:
                m.lastSignTime = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resSignInfo;
})();

$root.reqRank = (function() {

    function reqRank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqRank.prototype.type = 0;
    reqRank.prototype.page = 0;

    reqRank.create = function create(properties) {
        return new reqRank(properties);
    };

    reqRank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.page != null && m.hasOwnProperty("page"))
            w.uint32(16).sint32(m.page);
        return w;
    };

    reqRank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqRank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.page = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqRank;
})();

$root.resRank = (function() {

    function resRank(p) {
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resRank.prototype.type = 0;
    resRank.prototype.players = $util.emptyArray;

    resRank.create = function create(properties) {
        return new resRank(properties);
    };

    resRank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerRank.encode(m.players[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    resRank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resRank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerRank.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resRank;
})();

$root.reqTransframInfo = (function() {

    function reqTransframInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTransframInfo.create = function create(properties) {
        return new reqTransframInfo(properties);
    };

    reqTransframInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqTransframInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTransframInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTransframInfo;
})();

$root.reqTransframAD = (function() {

    function reqTransframAD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTransframAD.create = function create(properties) {
        return new reqTransframAD(properties);
    };

    reqTransframAD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqTransframAD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTransframAD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTransframAD;
})();

$root.resTransframInfo = (function() {

    function resTransframInfo(p) {
        this.friends = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resTransframInfo.prototype.endTransTime = 0;
    resTransframInfo.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    resTransframInfo.prototype.fame = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    resTransframInfo.prototype.friends = $util.emptyArray;

    resTransframInfo.create = function create(properties) {
        return new resTransframInfo(properties);
    };

    resTransframInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.endTransTime != null && m.hasOwnProperty("endTransTime"))
            w.uint32(8).sint32(m.endTransTime);
        if (m.exp != null && m.hasOwnProperty("exp"))
            w.uint32(16).sint64(m.exp);
        if (m.fame != null && m.hasOwnProperty("fame"))
            w.uint32(24).sint64(m.fame);
        if (m.friends != null && m.friends.length) {
            for (var i = 0; i < m.friends.length; ++i)
                $root.PlayerRank.encode(m.friends[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    resTransframInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resTransframInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.endTransTime = r.sint32();
                break;
            case 2:
                m.exp = r.sint64();
                break;
            case 3:
                m.fame = r.sint64();
                break;
            case 4:
                if (!(m.friends && m.friends.length))
                    m.friends = [];
                m.friends.push($root.PlayerRank.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resTransframInfo;
})();

$root.reqTransfram = (function() {

    function reqTransfram(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTransfram.create = function create(properties) {
        return new reqTransfram(properties);
    };

    reqTransfram.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqTransfram.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTransfram();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTransfram;
})();

$root.reqPlayerMail = (function() {

    function reqPlayerMail(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerMail.prototype.page = 0;

    reqPlayerMail.create = function create(properties) {
        return new reqPlayerMail(properties);
    };

    reqPlayerMail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.page != null && m.hasOwnProperty("page"))
            w.uint32(8).sint32(m.page);
        return w;
    };

    reqPlayerMail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerMail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.page = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerMail;
})();

$root.resPlayerMail = (function() {

    function resPlayerMail(p) {
        this.mails = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerMail.prototype.mails = $util.emptyArray;

    resPlayerMail.create = function create(properties) {
        return new resPlayerMail(properties);
    };

    resPlayerMail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mails != null && m.mails.length) {
            for (var i = 0; i < m.mails.length; ++i)
                $root.PlayerMail.encode(m.mails[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resPlayerMail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerMail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.mails && m.mails.length))
                    m.mails = [];
                m.mails.push($root.PlayerMail.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerMail;
})();

$root.reqPlayerMailGet = (function() {

    function reqPlayerMailGet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerMailGet.prototype.mailid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqPlayerMailGet.create = function create(properties) {
        return new reqPlayerMailGet(properties);
    };

    reqPlayerMailGet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mailid != null && m.hasOwnProperty("mailid"))
            w.uint32(8).sint64(m.mailid);
        return w;
    };

    reqPlayerMailGet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerMailGet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mailid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerMailGet;
})();

$root.reqPlayerMailRead = (function() {

    function reqPlayerMailRead(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerMailRead.prototype.mailid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqPlayerMailRead.create = function create(properties) {
        return new reqPlayerMailRead(properties);
    };

    reqPlayerMailRead.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mailid != null && m.hasOwnProperty("mailid"))
            w.uint32(8).sint64(m.mailid);
        return w;
    };

    reqPlayerMailRead.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerMailRead();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mailid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerMailRead;
})();

$root.resPlayerMailChange = (function() {

    function resPlayerMailChange(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerMailChange.prototype.mail = null;

    resPlayerMailChange.create = function create(properties) {
        return new resPlayerMailChange(properties);
    };

    resPlayerMailChange.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mail != null && m.hasOwnProperty("mail"))
            $root.PlayerMail.encode(m.mail, w.uint32(10).fork()).ldelim();
        return w;
    };

    resPlayerMailChange.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerMailChange();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mail = $root.PlayerMail.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerMailChange;
})();

$root.resPlayerNewMail = (function() {

    function resPlayerNewMail(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerNewMail.prototype.type = 0;

    resPlayerNewMail.create = function create(properties) {
        return new resPlayerNewMail(properties);
    };

    resPlayerNewMail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    resPlayerNewMail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerNewMail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerNewMail;
})();

$root.resPlayerDaily = (function() {

    function resPlayerDaily(p) {
        this.dailys = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerDaily.prototype.dailys = $util.emptyArray;

    resPlayerDaily.create = function create(properties) {
        return new resPlayerDaily(properties);
    };

    resPlayerDaily.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.dailys != null && m.dailys.length) {
            for (var i = 0; i < m.dailys.length; ++i)
                $root.PlayerDaily.encode(m.dailys[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resPlayerDaily.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerDaily();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.dailys && m.dailys.length))
                    m.dailys = [];
                m.dailys.push($root.PlayerDaily.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerDaily;
})();

$root.reqLoginGift = (function() {

    function reqLoginGift(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqLoginGift.create = function create(properties) {
        return new reqLoginGift(properties);
    };

    reqLoginGift.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqLoginGift.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqLoginGift();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqLoginGift;
})();

$root.reqLevelUpAD = (function() {

    function reqLevelUpAD(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqLevelUpAD.create = function create(properties) {
        return new reqLevelUpAD(properties);
    };

    reqLevelUpAD.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqLevelUpAD.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqLevelUpAD();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqLevelUpAD;
})();

$root.reqGMCommand = (function() {

    function reqGMCommand(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqGMCommand.prototype.command = "";

    reqGMCommand.create = function create(properties) {
        return new reqGMCommand(properties);
    };

    reqGMCommand.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.command != null && m.hasOwnProperty("command"))
            w.uint32(10).string(m.command);
        return w;
    };

    reqGMCommand.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqGMCommand();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.command = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqGMCommand;
})();

$root.reqMasterRelation = (function() {

    function reqMasterRelation(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqMasterRelation.create = function create(properties) {
        return new reqMasterRelation(properties);
    };

    reqMasterRelation.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqMasterRelation.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqMasterRelation();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqMasterRelation;
})();

$root.resMasterRelation = (function() {

    function resMasterRelation(p) {
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resMasterRelation.prototype.master = null;
    resMasterRelation.prototype.players = $util.emptyArray;

    resMasterRelation.create = function create(properties) {
        return new resMasterRelation(properties);
    };

    resMasterRelation.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.master != null && m.hasOwnProperty("master"))
            $root.PlayerRelation.encode(m.master, w.uint32(10).fork()).ldelim();
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerRelation.encode(m.players[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    resMasterRelation.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resMasterRelation();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.master = $root.PlayerRelation.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerRelation.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resMasterRelation;
})();

$root.resMasterRelationChange = (function() {

    function resMasterRelationChange(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resMasterRelationChange.prototype.player = null;

    resMasterRelationChange.create = function create(properties) {
        return new resMasterRelationChange(properties);
    };

    resMasterRelationChange.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.player != null && m.hasOwnProperty("player"))
            $root.PlayerRelation.encode(m.player, w.uint32(10).fork()).ldelim();
        return w;
    };

    resMasterRelationChange.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resMasterRelationChange();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.player = $root.PlayerRelation.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resMasterRelationChange;
})();

$root.reqKickoutRookie = (function() {

    function reqKickoutRookie(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqKickoutRookie.prototype.playerid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqKickoutRookie.create = function create(properties) {
        return new reqKickoutRookie(properties);
    };

    reqKickoutRookie.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.playerid != null && m.hasOwnProperty("playerid"))
            w.uint32(8).sint64(m.playerid);
        return w;
    };

    reqKickoutRookie.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqKickoutRookie();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqKickoutRookie;
})();

$root.reqEnyi = (function() {

    function reqEnyi(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqEnyi.create = function create(properties) {
        return new reqEnyi(properties);
    };

    reqEnyi.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqEnyi.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqEnyi();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqEnyi;
})();

$root.reqBuff = (function() {

    function reqBuff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqBuff.prototype.type = 0;

    reqBuff.create = function create(properties) {
        return new reqBuff(properties);
    };

    reqBuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqBuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqBuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqBuff;
})();

$root.resBuff = (function() {

    function resBuff(p) {
        this.buffs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resBuff.prototype.buffs = $util.emptyArray;

    resBuff.create = function create(properties) {
        return new resBuff(properties);
    };

    resBuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buffs != null && m.buffs.length) {
            for (var i = 0; i < m.buffs.length; ++i)
                $root.PlayerBuff.encode(m.buffs[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resBuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resBuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.buffs && m.buffs.length))
                    m.buffs = [];
                m.buffs.push($root.PlayerBuff.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resBuff;
})();

$root.resBuffChange = (function() {

    function resBuffChange(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resBuffChange.prototype.buffs = null;

    resBuffChange.create = function create(properties) {
        return new resBuffChange(properties);
    };

    resBuffChange.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buffs != null && m.hasOwnProperty("buffs"))
            $root.PlayerBuff.encode(m.buffs, w.uint32(10).fork()).ldelim();
        return w;
    };

    resBuffChange.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resBuffChange();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.buffs = $root.PlayerBuff.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resBuffChange;
})();

$root.reqOffLineExp = (function() {

    function reqOffLineExp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqOffLineExp.prototype.isAd = false;

    reqOffLineExp.create = function create(properties) {
        return new reqOffLineExp(properties);
    };

    reqOffLineExp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isAd != null && m.hasOwnProperty("isAd"))
            w.uint32(8).bool(m.isAd);
        return w;
    };

    reqOffLineExp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqOffLineExp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isAd = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqOffLineExp;
})();

$root.reqPlayerFields = (function() {

    function reqPlayerFields(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerFields.create = function create(properties) {
        return new reqPlayerFields(properties);
    };

    reqPlayerFields.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqPlayerFields.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerFields();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerFields;
})();

$root.resPlayerFields = (function() {

    function resPlayerFields(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerFields.prototype.level = 0;
    resPlayerFields.prototype.exp = 0;
    resPlayerFields.prototype.fields = null;

    resPlayerFields.create = function create(properties) {
        return new resPlayerFields(properties);
    };

    resPlayerFields.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(8).sint32(m.level);
        if (m.exp != null && m.hasOwnProperty("exp"))
            w.uint32(16).sint32(m.exp);
        if (m.fields != null && m.hasOwnProperty("fields"))
            $root.PlayerFields.encode(m.fields, w.uint32(26).fork()).ldelim();
        return w;
    };

    resPlayerFields.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerFields();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.level = r.sint32();
                break;
            case 2:
                m.exp = r.sint32();
                break;
            case 3:
                m.fields = $root.PlayerFields.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerFields;
})();

$root.reqSowSeed = (function() {

    function reqSowSeed(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSowSeed.prototype.type = 0;
    reqSowSeed.prototype.index = 0;

    reqSowSeed.create = function create(properties) {
        return new reqSowSeed(properties);
    };

    reqSowSeed.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(16).sint32(m.index);
        return w;
    };

    reqSowSeed.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSowSeed();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.index = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSowSeed;
})();

$root.reqHarvest = (function() {

    function reqHarvest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqHarvest.prototype.type = 0;
    reqHarvest.prototype.index = 0;

    reqHarvest.create = function create(properties) {
        return new reqHarvest(properties);
    };

    reqHarvest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(16).sint32(m.index);
        return w;
    };

    reqHarvest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqHarvest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.index = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqHarvest;
})();

$root.reqAddBuff = (function() {

    function reqAddBuff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqAddBuff.prototype.type = 0;

    reqAddBuff.create = function create(properties) {
        return new reqAddBuff(properties);
    };

    reqAddBuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqAddBuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqAddBuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqAddBuff;
})();

$root.reqXianJin = (function() {

    function reqXianJin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqXianJin.create = function create(properties) {
        return new reqXianJin(properties);
    };

    reqXianJin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqXianJin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqXianJin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqXianJin;
})();

$root.resXianJin = (function() {

    function resXianJin(p) {
        this.params = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resXianJin.prototype.params = $util.emptyArray;

    resXianJin.create = function create(properties) {
        return new resXianJin(properties);
    };

    resXianJin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.params != null && m.params.length) {
            for (var i = 0; i < m.params.length; ++i)
                $root.PlayerParam.encode(m.params[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resXianJin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resXianJin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.params && m.params.length))
                    m.params = [];
                m.params.push($root.PlayerParam.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resXianJin;
})();

$root.reqShiLian = (function() {

    function reqShiLian(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqShiLian.prototype.type = 0;

    reqShiLian.create = function create(properties) {
        return new reqShiLian(properties);
    };

    reqShiLian.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqShiLian.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqShiLian();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqShiLian;
})();

$root.reqChoseSex = (function() {

    function reqChoseSex(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqChoseSex.prototype.sex = 0;

    reqChoseSex.create = function create(properties) {
        return new reqChoseSex(properties);
    };

    reqChoseSex.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.sex != null && m.hasOwnProperty("sex"))
            w.uint32(8).sint32(m.sex);
        return w;
    };

    reqChoseSex.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqChoseSex();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.sex = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqChoseSex;
})();

$root.reqActiveBuff = (function() {

    function reqActiveBuff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqActiveBuff.prototype.buffid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqActiveBuff.create = function create(properties) {
        return new reqActiveBuff(properties);
    };

    reqActiveBuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buffid != null && m.hasOwnProperty("buffid"))
            w.uint32(8).sint64(m.buffid);
        return w;
    };

    reqActiveBuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqActiveBuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.buffid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqActiveBuff;
})();

$root.resNumChange = (function() {

    function resNumChange(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resNumChange.prototype.type = 0;
    resNumChange.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    resNumChange.create = function create(properties) {
        return new resNumChange(properties);
    };

    resNumChange.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(16).sint64(m.num);
        return w;
    };

    resNumChange.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resNumChange();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.num = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resNumChange;
})();

$root.reqInvite = (function() {

    function reqInvite(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqInvite.prototype.type = 0;
    reqInvite.prototype.inviteid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    reqInvite.create = function create(properties) {
        return new reqInvite(properties);
    };

    reqInvite.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        if (m.inviteid != null && m.hasOwnProperty("inviteid"))
            w.uint32(16).sint64(m.inviteid);
        return w;
    };

    reqInvite.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqInvite();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            case 2:
                m.inviteid = r.sint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqInvite;
})();

$root.resSystemNotice = (function() {

    function resSystemNotice(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resSystemNotice.prototype.id = 0;

    resSystemNotice.create = function create(properties) {
        return new resSystemNotice(properties);
    };

    resSystemNotice.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        return w;
    };

    resSystemNotice.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resSystemNotice();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resSystemNotice;
})();

$root.reqSystemInfo = (function() {

    function reqSystemInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSystemInfo.create = function create(properties) {
        return new reqSystemInfo(properties);
    };

    reqSystemInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqSystemInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSystemInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSystemInfo;
})();

$root.resSystemInfo = (function() {

    function resSystemInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resSystemInfo.prototype.fabaoid = 0;
    resSystemInfo.prototype.forgelevel = 0;
    resSystemInfo.prototype.petid = 0;
    resSystemInfo.prototype.petfloor = 0;
    resSystemInfo.prototype.cpname = "";
    resSystemInfo.prototype.perexp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    resSystemInfo.prototype.level = 0;
    resSystemInfo.prototype.layer = 0;

    resSystemInfo.create = function create(properties) {
        return new resSystemInfo(properties);
    };

    resSystemInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.fabaoid != null && m.hasOwnProperty("fabaoid"))
            w.uint32(8).sint32(m.fabaoid);
        if (m.forgelevel != null && m.hasOwnProperty("forgelevel"))
            w.uint32(16).sint32(m.forgelevel);
        if (m.petid != null && m.hasOwnProperty("petid"))
            w.uint32(24).sint32(m.petid);
        if (m.petfloor != null && m.hasOwnProperty("petfloor"))
            w.uint32(32).sint32(m.petfloor);
        if (m.cpname != null && m.hasOwnProperty("cpname"))
            w.uint32(42).string(m.cpname);
        if (m.perexp != null && m.hasOwnProperty("perexp"))
            w.uint32(48).sint64(m.perexp);
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(56).sint32(m.level);
        if (m.layer != null && m.hasOwnProperty("layer"))
            w.uint32(64).sint32(m.layer);
        return w;
    };

    resSystemInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resSystemInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.fabaoid = r.sint32();
                break;
            case 2:
                m.forgelevel = r.sint32();
                break;
            case 3:
                m.petid = r.sint32();
                break;
            case 4:
                m.petfloor = r.sint32();
                break;
            case 5:
                m.cpname = r.string();
                break;
            case 6:
                m.perexp = r.sint64();
                break;
            case 7:
                m.level = r.sint32();
                break;
            case 8:
                m.layer = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resSystemInfo;
})();

$root.reqHeartBeat = (function() {

    function reqHeartBeat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqHeartBeat.prototype.id = 0;

    reqHeartBeat.create = function create(properties) {
        return new reqHeartBeat(properties);
    };

    reqHeartBeat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        return w;
    };

    reqHeartBeat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqHeartBeat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqHeartBeat;
})();

$root.resHeartBeat = (function() {

    function resHeartBeat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resHeartBeat.prototype.id = 0;

    resHeartBeat.create = function create(properties) {
        return new resHeartBeat(properties);
    };

    resHeartBeat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint32(m.id);
        return w;
    };

    resHeartBeat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resHeartBeat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resHeartBeat;
})();

$root.reqPlayerTask = (function() {

    function reqPlayerTask(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqPlayerTask.create = function create(properties) {
        return new reqPlayerTask(properties);
    };

    reqPlayerTask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqPlayerTask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqPlayerTask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqPlayerTask;
})();

$root.reqWaitRefresh = (function() {

    function reqWaitRefresh(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqWaitRefresh.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqWaitRefresh.prototype.taskid = 0;

    reqWaitRefresh.create = function create(properties) {
        return new reqWaitRefresh(properties);
    };

    reqWaitRefresh.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.taskid != null && m.hasOwnProperty("taskid"))
            w.uint32(16).sint32(m.taskid);
        return w;
    };

    reqWaitRefresh.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqWaitRefresh();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.taskid = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqWaitRefresh;
})();

$root.playerTask = (function() {

    function playerTask(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    playerTask.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    playerTask.prototype.taskId = 0;
    playerTask.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    playerTask.prototype.state = 0;
    playerTask.prototype.refreshTime = 0;
    playerTask.prototype.type = 0;

    playerTask.create = function create(properties) {
        return new playerTask(properties);
    };

    playerTask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.taskId != null && m.hasOwnProperty("taskId"))
            w.uint32(16).sint32(m.taskId);
        if (m.num != null && m.hasOwnProperty("num"))
            w.uint32(24).sint64(m.num);
        if (m.state != null && m.hasOwnProperty("state"))
            w.uint32(32).sint32(m.state);
        if (m.refreshTime != null && m.hasOwnProperty("refreshTime"))
            w.uint32(40).sint32(m.refreshTime);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(48).sint32(m.type);
        return w;
    };

    playerTask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.playerTask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.taskId = r.sint32();
                break;
            case 3:
                m.num = r.sint64();
                break;
            case 4:
                m.state = r.sint32();
                break;
            case 5:
                m.refreshTime = r.sint32();
                break;
            case 6:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return playerTask;
})();

$root.resPlayerTask = (function() {

    function resPlayerTask(p) {
        this.tasks = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resPlayerTask.prototype.tasks = $util.emptyArray;

    resPlayerTask.create = function create(properties) {
        return new resPlayerTask(properties);
    };

    resPlayerTask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.tasks != null && m.tasks.length) {
            for (var i = 0; i < m.tasks.length; ++i)
                $root.playerTask.encode(m.tasks[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    resPlayerTask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resPlayerTask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 2:
                if (!(m.tasks && m.tasks.length))
                    m.tasks = [];
                m.tasks.push($root.playerTask.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resPlayerTask;
})();

$root.reqRefreshTask = (function() {

    function reqRefreshTask(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqRefreshTask.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqRefreshTask.prototype.taskid = 0;
    reqRefreshTask.prototype.isad = false;

    reqRefreshTask.create = function create(properties) {
        return new reqRefreshTask(properties);
    };

    reqRefreshTask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.taskid != null && m.hasOwnProperty("taskid"))
            w.uint32(16).sint32(m.taskid);
        if (m.isad != null && m.hasOwnProperty("isad"))
            w.uint32(24).bool(m.isad);
        return w;
    };

    reqRefreshTask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqRefreshTask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.taskid = r.sint32();
                break;
            case 3:
                m.isad = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqRefreshTask;
})();

$root.reqSubmitTask = (function() {

    function reqSubmitTask(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSubmitTask.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    reqSubmitTask.prototype.taskid = 0;

    reqSubmitTask.create = function create(properties) {
        return new reqSubmitTask(properties);
    };

    reqSubmitTask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.hasOwnProperty("id"))
            w.uint32(8).sint64(m.id);
        if (m.taskid != null && m.hasOwnProperty("taskid"))
            w.uint32(16).sint32(m.taskid);
        return w;
    };

    reqSubmitTask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSubmitTask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.sint64();
                break;
            case 2:
                m.taskid = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSubmitTask;
})();

$root.reqTaskAward = (function() {

    function reqTaskAward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTaskAward.create = function create(properties) {
        return new reqTaskAward(properties);
    };

    reqTaskAward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqTaskAward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTaskAward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTaskAward;
})();

$root.reqDaoLvInfo = (function() {

    function reqDaoLvInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqDaoLvInfo.create = function create(properties) {
        return new reqDaoLvInfo(properties);
    };

    reqDaoLvInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqDaoLvInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqDaoLvInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqDaoLvInfo;
})();

$root.resDaoLvInfo = (function() {

    function resDaoLvInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resDaoLvInfo.prototype.cpname = "";
    resDaoLvInfo.prototype.cpid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    resDaoLvInfo.prototype.cplevel = 0;
    resDaoLvInfo.prototype.cpsex = 0;
    resDaoLvInfo.prototype.treelevel = 0;
    resDaoLvInfo.prototype.treeexp = 0;
    resDaoLvInfo.prototype.waterState = 0;
    resDaoLvInfo.prototype.cpWaterState = 0;
    resDaoLvInfo.prototype.seed1end = 0;
    resDaoLvInfo.prototype.seed2end = 0;
    resDaoLvInfo.prototype.seed3end = 0;
    resDaoLvInfo.prototype.seed4end = 0;
    resDaoLvInfo.prototype.weddingid = 0;
    resDaoLvInfo.prototype.borkenend = 0;

    resDaoLvInfo.create = function create(properties) {
        return new resDaoLvInfo(properties);
    };

    resDaoLvInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cpname != null && m.hasOwnProperty("cpname"))
            w.uint32(10).string(m.cpname);
        if (m.cpid != null && m.hasOwnProperty("cpid"))
            w.uint32(16).sint64(m.cpid);
        if (m.cplevel != null && m.hasOwnProperty("cplevel"))
            w.uint32(24).sint32(m.cplevel);
        if (m.cpsex != null && m.hasOwnProperty("cpsex"))
            w.uint32(32).sint32(m.cpsex);
        if (m.treelevel != null && m.hasOwnProperty("treelevel"))
            w.uint32(40).sint32(m.treelevel);
        if (m.treeexp != null && m.hasOwnProperty("treeexp"))
            w.uint32(48).sint32(m.treeexp);
        if (m.waterState != null && m.hasOwnProperty("waterState"))
            w.uint32(56).sint32(m.waterState);
        if (m.cpWaterState != null && m.hasOwnProperty("cpWaterState"))
            w.uint32(64).sint32(m.cpWaterState);
        if (m.seed1end != null && m.hasOwnProperty("seed1end"))
            w.uint32(72).sint32(m.seed1end);
        if (m.seed2end != null && m.hasOwnProperty("seed2end"))
            w.uint32(80).sint32(m.seed2end);
        if (m.seed3end != null && m.hasOwnProperty("seed3end"))
            w.uint32(88).sint32(m.seed3end);
        if (m.seed4end != null && m.hasOwnProperty("seed4end"))
            w.uint32(96).sint32(m.seed4end);
        if (m.weddingid != null && m.hasOwnProperty("weddingid"))
            w.uint32(104).sint32(m.weddingid);
        if (m.borkenend != null && m.hasOwnProperty("borkenend"))
            w.uint32(112).sint32(m.borkenend);
        return w;
    };

    resDaoLvInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resDaoLvInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.cpname = r.string();
                break;
            case 2:
                m.cpid = r.sint64();
                break;
            case 3:
                m.cplevel = r.sint32();
                break;
            case 4:
                m.cpsex = r.sint32();
                break;
            case 5:
                m.treelevel = r.sint32();
                break;
            case 6:
                m.treeexp = r.sint32();
                break;
            case 7:
                m.waterState = r.sint32();
                break;
            case 8:
                m.cpWaterState = r.sint32();
                break;
            case 9:
                m.seed1end = r.sint32();
                break;
            case 10:
                m.seed2end = r.sint32();
                break;
            case 11:
                m.seed3end = r.sint32();
                break;
            case 12:
                m.seed4end = r.sint32();
                break;
            case 13:
                m.weddingid = r.sint32();
                break;
            case 14:
                m.borkenend = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resDaoLvInfo;
})();

$root.reqSeed = (function() {

    function reqSeed(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSeed.prototype.type = 0;

    reqSeed.create = function create(properties) {
        return new reqSeed(properties);
    };

    reqSeed.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqSeed.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSeed();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSeed;
})();

$root.reqWater = (function() {

    function reqWater(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqWater.create = function create(properties) {
        return new reqWater(properties);
    };

    reqWater.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqWater.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqWater();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqWater;
})();

$root.reqCancelMarry = (function() {

    function reqCancelMarry(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqCancelMarry.create = function create(properties) {
        return new reqCancelMarry(properties);
    };

    reqCancelMarry.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqCancelMarry.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqCancelMarry();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqCancelMarry;
})();

$root.reqTreeAward = (function() {

    function reqTreeAward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqTreeAward.create = function create(properties) {
        return new reqTreeAward(properties);
    };

    reqTreeAward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqTreeAward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqTreeAward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqTreeAward;
})();

$root.resTreeAward = (function() {

    function resTreeAward(p) {
        this.params = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resTreeAward.prototype.params = $util.emptyArray;

    resTreeAward.create = function create(properties) {
        return new resTreeAward(properties);
    };

    resTreeAward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.params != null && m.params.length) {
            for (var i = 0; i < m.params.length; ++i)
                $root.PlayerParam.encode(m.params[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resTreeAward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resTreeAward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.params && m.params.length))
                    m.params = [];
                m.params.push($root.PlayerParam.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resTreeAward;
})();

$root.reqGetTreeAward = (function() {

    function reqGetTreeAward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqGetTreeAward.prototype.level = 0;

    reqGetTreeAward.create = function create(properties) {
        return new reqGetTreeAward(properties);
    };

    reqGetTreeAward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.level != null && m.hasOwnProperty("level"))
            w.uint32(8).sint32(m.level);
        return w;
    };

    reqGetTreeAward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqGetTreeAward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.level = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqGetTreeAward;
})();

$root.reqOpenMarry = (function() {

    function reqOpenMarry(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqOpenMarry.prototype.type = 0;

    reqOpenMarry.create = function create(properties) {
        return new reqOpenMarry(properties);
    };

    reqOpenMarry.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqOpenMarry.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqOpenMarry();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqOpenMarry;
})();

$root.resOpenMarry = (function() {

    function resOpenMarry(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resOpenMarry.prototype.type = 0;

    resOpenMarry.create = function create(properties) {
        return new resOpenMarry(properties);
    };

    resOpenMarry.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    resOpenMarry.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resOpenMarry();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resOpenMarry;
})();

$root.reqWeddingInfo = (function() {

    function reqWeddingInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqWeddingInfo.create = function create(properties) {
        return new reqWeddingInfo(properties);
    };

    reqWeddingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqWeddingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqWeddingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqWeddingInfo;
})();

$root.resWeddingInfo = (function() {

    function resWeddingInfo(p) {
        this.foods = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resWeddingInfo.prototype.weddingAward = null;
    resWeddingInfo.prototype.currentWedding = null;
    resWeddingInfo.prototype.foods = $util.emptyArray;

    resWeddingInfo.create = function create(properties) {
        return new resWeddingInfo(properties);
    };

    resWeddingInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.weddingAward != null && m.hasOwnProperty("weddingAward"))
            $root.WeddingAwardMsg.encode(m.weddingAward, w.uint32(10).fork()).ldelim();
        if (m.currentWedding != null && m.hasOwnProperty("currentWedding"))
            $root.WeddingInfo.encode(m.currentWedding, w.uint32(18).fork()).ldelim();
        if (m.foods != null && m.foods.length) {
            for (var i = 0; i < m.foods.length; ++i)
                $root.WeddingFoodInfo.encode(m.foods[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    resWeddingInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resWeddingInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.weddingAward = $root.WeddingAwardMsg.decode(r, r.uint32());
                break;
            case 2:
                m.currentWedding = $root.WeddingInfo.decode(r, r.uint32());
                break;
            case 3:
                if (!(m.foods && m.foods.length))
                    m.foods = [];
                m.foods.push($root.WeddingFoodInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resWeddingInfo;
})();

$root.reqSendGift = (function() {

    function reqSendGift(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqSendGift.prototype.type = 0;

    reqSendGift.create = function create(properties) {
        return new reqSendGift(properties);
    };

    reqSendGift.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(8).sint32(m.type);
        return w;
    };

    reqSendGift.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqSendGift();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqSendGift;
})();

$root.resSendGift = (function() {

    function resSendGift(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resSendGift.prototype.result = 0;
    resSendGift.prototype.playername = "";

    resSendGift.create = function create(properties) {
        return new resSendGift(properties);
    };

    resSendGift.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && m.hasOwnProperty("result"))
            w.uint32(8).sint32(m.result);
        if (m.playername != null && m.hasOwnProperty("playername"))
            w.uint32(18).string(m.playername);
        return w;
    };

    resSendGift.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resSendGift();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.sint32();
                break;
            case 2:
                m.playername = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resSendGift;
})();

$root.reqMarryList = (function() {

    function reqMarryList(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqMarryList.create = function create(properties) {
        return new reqMarryList(properties);
    };

    reqMarryList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqMarryList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqMarryList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqMarryList;
})();

$root.resMaryyList = (function() {

    function resMaryyList(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resMaryyList.prototype.list = $util.emptyArray;

    resMaryyList.create = function create(properties) {
        return new resMaryyList(properties);
    };

    resMaryyList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.WeddingInfo.encode(m.list[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resMaryyList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resMaryyList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.WeddingInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resMaryyList;
})();

$root.reqWeddingGuests = (function() {

    function reqWeddingGuests(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqWeddingGuests.create = function create(properties) {
        return new reqWeddingGuests(properties);
    };

    reqWeddingGuests.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqWeddingGuests.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqWeddingGuests();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqWeddingGuests;
})();

$root.resWeddingGuests = (function() {

    function resWeddingGuests(p) {
        this.guests = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resWeddingGuests.prototype.guests = $util.emptyArray;

    resWeddingGuests.create = function create(properties) {
        return new resWeddingGuests(properties);
    };

    resWeddingGuests.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.guests != null && m.guests.length) {
            for (var i = 0; i < m.guests.length; ++i)
                $root.PlayerRank.encode(m.guests[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    resWeddingGuests.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resWeddingGuests();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.guests && m.guests.length))
                    m.guests = [];
                m.guests.push($root.PlayerRank.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resWeddingGuests;
})();

$root.reqHongBao = (function() {

    function reqHongBao(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqHongBao.prototype.index = 0;

    reqHongBao.create = function create(properties) {
        return new reqHongBao(properties);
    };

    reqHongBao.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.index != null && m.hasOwnProperty("index"))
            w.uint32(8).sint32(m.index);
        return w;
    };

    reqHongBao.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqHongBao();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.index = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqHongBao;
})();

$root.reqJoinWedding = (function() {

    function reqJoinWedding(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqJoinWedding.prototype.weddingid = 0;

    reqJoinWedding.create = function create(properties) {
        return new reqJoinWedding(properties);
    };

    reqJoinWedding.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.weddingid != null && m.hasOwnProperty("weddingid"))
            w.uint32(8).sint32(m.weddingid);
        return w;
    };

    reqJoinWedding.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqJoinWedding();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.weddingid = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqJoinWedding;
})();

$root.resHongBao = (function() {

    function resHongBao(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resHongBao.prototype.result = 0;
    resHongBao.prototype.hongbao1 = 0;
    resHongBao.prototype.hongbao2 = 0;
    resHongBao.prototype.hongbao3 = 0;
    resHongBao.prototype.hongbao4 = 0;

    resHongBao.create = function create(properties) {
        return new resHongBao(properties);
    };

    resHongBao.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && m.hasOwnProperty("result"))
            w.uint32(8).sint32(m.result);
        if (m.hongbao1 != null && m.hasOwnProperty("hongbao1"))
            w.uint32(16).sint32(m.hongbao1);
        if (m.hongbao2 != null && m.hasOwnProperty("hongbao2"))
            w.uint32(24).sint32(m.hongbao2);
        if (m.hongbao3 != null && m.hasOwnProperty("hongbao3"))
            w.uint32(32).sint32(m.hongbao3);
        if (m.hongbao4 != null && m.hasOwnProperty("hongbao4"))
            w.uint32(40).sint32(m.hongbao4);
        return w;
    };

    resHongBao.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resHongBao();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = r.sint32();
                break;
            case 2:
                m.hongbao1 = r.sint32();
                break;
            case 3:
                m.hongbao2 = r.sint32();
                break;
            case 4:
                m.hongbao3 = r.sint32();
                break;
            case 5:
                m.hongbao4 = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resHongBao;
})();

$root.reqWeddingRanks = (function() {

    function reqWeddingRanks(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqWeddingRanks.create = function create(properties) {
        return new reqWeddingRanks(properties);
    };

    reqWeddingRanks.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    reqWeddingRanks.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqWeddingRanks();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqWeddingRanks;
})();

$root.resWeddingRanks = (function() {

    function resWeddingRanks(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    resWeddingRanks.prototype.self = null;
    resWeddingRanks.prototype.list = $util.emptyArray;

    resWeddingRanks.create = function create(properties) {
        return new resWeddingRanks(properties);
    };

    resWeddingRanks.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.self != null && m.hasOwnProperty("self"))
            $root.WeddingRank.encode(m.self, w.uint32(10).fork()).ldelim();
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.WeddingRank.encode(m.list[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    resWeddingRanks.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.resWeddingRanks();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.self = $root.WeddingRank.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.WeddingRank.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return resWeddingRanks;
})();

$root.reqEatFood = (function() {

    function reqEatFood(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    reqEatFood.prototype.time = 0;

    reqEatFood.create = function create(properties) {
        return new reqEatFood(properties);
    };

    reqEatFood.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.time != null && m.hasOwnProperty("time"))
            w.uint32(8).sint32(m.time);
        return w;
    };

    reqEatFood.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.reqEatFood();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.time = r.sint32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return reqEatFood;
})();

module.exports = $root;
