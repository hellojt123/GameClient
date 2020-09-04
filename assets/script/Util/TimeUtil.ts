/*
 * @Author: Jiangtao
 * @Date: 2019-11-20 08:58:49
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 11:08:46
 */
export default class TimeUtil {

    public static timetrans(date: number) {
        var d: Date = new Date(date * 1000);//如果date为13位不需要乘1000
        var Y = d.getFullYear() + '-';
        var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-';
        var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate()) + ' ';
        var h = (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':';
        var m = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) + ':';
        var s = (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
        return Y + M + D + h + m + s;
    }

    public static compareDay(timestamp: number): number {
        var newDate = new Date(timestamp * 1000);
        var nowDate = new Date();
        var lastDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0);
        var milliseconds: number = nowDate.getTime() - lastDate.getTime();
        var difValue: number = milliseconds / (1000 * 60 * 60 * 24);
        return Math.floor(difValue);
    }

    public static number2Chinese(timestamp: number) {
        var d: Date = new Date(timestamp * 1000);
        var Y = d.getFullYear() + '-';
        var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-';
        var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate()) + ' ';
        var str = Y + M + D;
        let chinese = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        let numStr = str.replace(/[^0-9]+/g, '');
        let year = chinese[numStr[0]] + chinese[numStr[1]] + chinese[numStr[2]] + chinese[numStr[3]];
        let month = numStr[4] === '0' ? chinese[numStr[5]] : chinese[10] + chinese[numStr[5]];
        let day = numStr[6] === '0' ? chinese[numStr[7]] : chinese[10] + chinese[numStr[7]];
        return year + '年' + month + '月' + day + '日';
    }

    public static timestamp(): number {
        return new Date().getTime() / 1000;
    }

    public static remainSeconds(time: number): number {
        let reamain: number = time - TimeUtil.timestamp();
        if (reamain < 0) {
            reamain = 0;
        }
        return reamain;
    }

    public static remainDateTime(endtime: number, emptystr: string = "", chinese: boolean = true): string {
        let reamain: number = endtime - TimeUtil.timestamp();
        if (reamain <= 0) {
            reamain = 0;
            if (emptystr) {
                return emptystr;
            }
            return "";
        }
        return this.dateFormat(reamain, chinese);
    }

    public static dateFormat(totalSeconds: number, chinese: boolean = true) {
        let str: string = "";
        let days: number = Math.floor(totalSeconds / (60 * 60 * 24));
        let modulo: number = totalSeconds % (60 * 60 * 24);
        let hours: number = Math.floor(modulo / (60 * 60));
        modulo = modulo % (60 * 60);
        let minutes: number = Math.floor(modulo / 60);
        let seconds: number = modulo % 60;

        if (days > 0) {
            str += Number.parseInt(days) + (chinese ? "天" : ":");
        }

        if (hours >= 0) {
            str += ((hours < 10 && !chinese) ? "0" : "") + (parseInt(hours) + (chinese ? "小时" : ":"));
        }

        if (minutes >= 0 || !chinese) {
            str += ((minutes < 10 && !chinese) ? "0" : "") + (parseInt(minutes) + (chinese ? "分" : ":"));
        }

        if (seconds >= 0) {
            str += ((seconds < 10 && !chinese) ? "0" : "") + parseInt(seconds) + (chinese ? "秒" : "");
        }
        return str;
    }

    public delay(time: number, cb: Function) {
        setTimeout(() => {
            cb();
        }, time);
    }
}
