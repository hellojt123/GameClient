import BagItem from "../Entity/BagItem/BagItem";
import { BagType } from "../Const/BagType";


/*
 * @Author: Jiangtao
 * @Date: 2019-11-29 10:30:19
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 16:26:32
 */
export class GameUtil {

    private static _inst: GameUtil;
    public static get inst() {
        if (!GameUtil._inst) {
            GameUtil._inst = new GameUtil()
        }
        return GameUtil._inst;
    }
    public static random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    public static ConvertNum(num: number | Long | string): string {
        let _num = <number>num;
        let targetNum: string = Number.parseInt(num).toString();
        let chu: number = 10000;
        let chinese: string = "万";

        if (num > 9999) {
            chu = 10000;
            chinese = "万";
        } else {
            chinese = "";
        }
        if (num > 99999999) {
            chu = 100000000;
            chinese = "亿";
        }
        if (num > 999999999999) {
            chu = 1000000000000;
            chinese = "兆";
        }
        if (num > 9999999999999999) {
            chu = 10000000000000000;
            chinese = "京";
        }
        if (num > 99999999999999999999) {
            chu = 100000000000000000000;
            chinese = "垓";
        }
        if (num > 9999) {
            targetNum = (_num / chu).toFixed(0);
            if (targetNum.length < 2) {
                targetNum = (_num / chu).toFixed(3);
            } else if (targetNum.length < 3) {
                targetNum = (_num / chu).toFixed(2);
            } else if (targetNum.length < 4) {
                targetNum = (_num / chu).toFixed(1);
            }
        }
        targetNum = targetNum + chinese;
        return targetNum;
    }

    public static ConvertToMPPos(pos: cc.Vec2): cc.Vec2 {
        return new cc.Vec2(pos.x / cc.view.getScaleX(), (cc.winSize.height - pos.y) / cc.view.getScaleY());
    }

    public static getWeddingId(player1id: number | Long, player2id: number | Long) {
        if (player1id < player2id) {
            return player1id + "" + player2id;
        } else {
            return player2id + "" + player1id;
        }
    }

    public static addMask(node: cc.Node, width: number, height: number) {

        var mask = new cc.Node();
        var mask_node = mask.addComponent(cc.Mask);

        mask.anchorX = 0.5;
        mask.anchorY = 0.5;
        mask.width = width;
        mask.height = height;

        mask.parent = node.parent;
        node.anchorX = 0.5;
        node.anchorY = 0.5;
        mask.setPosition(node.position);
        node.parent = mask;
        node.anchorX = 0.5;
        node.anchorY = 0.5;
        node.setPosition(cc.Vec2.ZERO);
        // mask.x = width/2;
        // mask.y = -height/2;

        mask_node.type = cc.Mask.Type.ELLIPSE;

    }

    public static checkCondition(conditon: number, param: number): boolean {
        if (conditon == 1) {
            let prop = Global.gameManager.playerManager.player.getProp();
            if (prop.level >= param) {
                return true;
            }
        }
        return false;
    }

    public static getItemConfigByStr(str: string): ItemData[] {
        var items = str.split(";");
        var datas: ItemData[] = [];
        if (str) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var config = item.split(",");
                var itemdata = new ItemData();
                itemdata.itemid = Number.parseInt(config[0]);
                itemdata.itemnum = Number.parseInt(config[1]);
                datas.push(itemdata);
            }
        }
        return datas;
    }

    public static getQueryStringArgs() {
        //取得查询字符串并去掉开头的问号
        var qs = location.search.length > 0 ? location.search.substring(1) : "";
        //保存数据的对象
        var args = {};
        //取得每一项
        var items = qs.length > 0 ? qs.split('&') : [];
        var item = null, name = null, value = null;
        for (var i = 0; i < items.length; i++) {
            item = items[i].split('=');
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    }

    public static PlayItemFly(config: IConfigitem, from: fgui.GObject) {
        //重要  ../UI/CommonUI/Tile_item   "ui://i47gvnnsossh20"
        var go = fgui.UIPackage.createObjectFromURL("ui://i47gvnnsossh20", BagItem);
        var tile: BagItem = <BagItem>go;
        tile.setIconByItemId(config.itemid);
        fgui.GRoot.inst.addChild(go);

        var global = from.parent.localToGlobal(from.x, from.y, cc.Vec2.ZERO);
        var fromPos = fgui.GRoot.inst.globalToLocal(global.x, global.y, cc.Vec2.ZERO);
        var toPos = null;
        if (config.type == BagType.EXP) {
            var target = Global.gameManager.uiManager.mainui._view.icon_lingqi1;
        } else if (config.type == BagType.STONE) {
            var target = Global.gameManager.uiManager.mainui._view.n204;
        } else if (config.type == BagType.FAME) {
            var target = Global.gameManager.uiManager.mainui._view.n208;
        } else {
            var target = Global.gameManager.uiManager.mainui._view.tophead;
        }
        toPos = Global.gameManager.uiManager.mainui._view.localToGlobal(target.x, target.y, cc.Vec2.ZERO);
        toPos = fgui.GRoot.inst.globalToLocal(toPos.x, toPos.y, cc.Vec2.ZERO);
        if (toPos) {
            fgui.GTween.to2(fromPos.x, fromPos.y, toPos.x, toPos.y, 1)
                .setDelay(0)
                .setTarget(tile, tile.setPosition)
                .setEase(fgui.EaseType.QuadOut)
                .onComplete(() => (this.onFlyComplate(tile)), this);
        }

    }

    public static onFlyComplate(obj) {
        fgui.GRoot.inst.removeChild(obj);
    }

    public static copyToClipBoard(content: string, message: string = null) {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        if (message == null) {
            alert("复制成功");
        } else {
            alert(message)
        }
    }


    public static convertCurrency(money): string {
        //汉字的数字
        var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
        //基本单位
        var cnIntRadice = new Array('', '拾', '佰', '仟');
        //对应整数部分扩展单位
        var cnIntUnits = new Array('', '万', '亿', '兆');
        //对应小数部分单位
        // var cnDecUnits = new Array('角', '分', '毫', '厘');
        // //整数金额时后面跟的字符
        // var cnInteger = '整';
        // //整型完以后的单位
        // var cnIntLast = '元';
        var cnDecUnits = new Array('', '', '', '');
        //整数金额时后面跟的字符
        var cnInteger = '';
        //整型完以后的单位
        var cnIntLast = '';
        //最大处理的数字
        var maxNum = 999999999999999.9999;
        //金额整数部分
        var integerNum;
        //金额小数部分
        var decimalNum;
        //输出的中文金额字符串
        var chineseStr = '';
        //分离金额后用的数组，预定义
        var parts;
        if (money == '') { return ''; }
        money = parseFloat(money);
        if (money >= maxNum) {
            //超出最大处理数字
            return '';
        }
        if (money == 0) {
            chineseStr = cnNums[0] + cnIntLast + cnInteger;
            return chineseStr;
        }
        //转换为字符串
        money = money.toString();
        if (money.indexOf('.') == -1) {
            integerNum = money;
            decimalNum = '';
        } else {
            parts = money.split('.');
            integerNum = parts[0];
            decimalNum = parts[1].substr(0, 4);
        }
        //获取整型部分转换
        if (parseInt(integerNum, 10) > 0) {
            var zeroCount = 0;
            var IntLen = integerNum.length;
            for (var i = 0; i < IntLen; i++) {
                var n = integerNum.substr(i, 1);
                var p = IntLen - i - 1;
                var q = p / 4;
                var m = p % 4;
                if (n == '0') {
                    zeroCount++;
                } else {
                    if (zeroCount > 0) {
                        chineseStr += cnNums[0];
                    }
                    //归零
                    zeroCount = 0;
                    chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
                }
                if (m == 0 && zeroCount < 4) {
                    chineseStr += cnIntUnits[q];
                }
            }
            chineseStr += cnIntLast;
        }
        //小数部分
        if (decimalNum != '') {
            var decLen = decimalNum.length;
            for (var i = 0; i < decLen; i++) {
                var n = decimalNum.substr(i, 1);
                if (n != '0') {
                    chineseStr += cnNums[Number(n)] + cnDecUnits[i];
                }
            }
        }
        if (chineseStr == '') {
            chineseStr += cnNums[0] + cnIntLast + cnInteger;
        } else if (decimalNum == '') {
            chineseStr += cnInteger;
        }
        return chineseStr;
    }

}

export class ItemData {
    public itemid: number;
    public itemnum: number;
}

export class Point {

    public x: number;
    public y: number;

    constructor(posx: number, posy: number) {
        this.x = posx;
        this.y = posy;
    }

    public getDistance(p: Point): number {
        let _x: number = Math.abs(this.x - p.x);
        let _y: number = Math.abs(this.y - p.y);
        return Math.sqrt(_x * _x + _y * _y);
    }

    public getDistanceXY(x: number, y: number): number {
        let _x: number = Math.abs(this.x - x);
        let _y: number = Math.abs(this.y - y);
        return Math.sqrt(_x * _x + _y * _y);
    }


}