/*
 * @Author: Jiangtao
 * @Date: 2019-11-29 10:38:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-24 10:36:53
 */

import { Point } from "../../Util/GameUtil";
import ConfigUtil from "../../Util/ConfigUtil";
import Long = require("long");
import { BagType } from "../../Const/BagType";
import LoadUtil from "../../Util/LoadUtil";

import com_fabao from "../Fabao/com_fabao";
export default class BagItem extends fgui.GButton {

    public border: fgui.GLoader;
    private config: IConfigitem;
    public holder: fgui.GGraph;
    private num: number;
    private pos: Point = new Point(0, 0);
    public mc: fgui.GMovieClip;
    public loader: fgui.GLoader;
    public com_fabao: com_fabao;

    private cacheName: string;
    public constructor() {
        super();
    }
    protected onConstruct(): void {
        this.border = <fgui.GLoader>(this.getChildAt(0));
        this.loader = <fgui.GLoader>(this.getChildAt(1));
        this.com_fabao = <com_fabao>(this.getChildAt(2));
        this.mc = <fgui.GMovieClip>(this.getChildAt(5));
    }

    public setIconByItemId(itemid: number) {
        if (itemid) {
            var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(itemid);
            this.setConfig(config)
        } else {
            this.setIcon(null);
        }
    }
    public setIcon(url: string) {
        if (url !== null) {
            if (url.startsWith("ui://")) {
                this.icon = url;
            } else {
                if (this.config) {
                    this.com_fabao.setIconPackage(this.config.icon, this.config.icon2)
                    this.com_fabao.setscale(0.5);
                }
            }
        } else {
            this.border.url = "";
            this.icon = "";
            this.com_fabao.setIconPackage(null, null)
        }
    }

    public seturl(url: string) {
        this.icon = url;
    }

    public setConfig(config: IConfigitem, num: number = null) {
        this.config = config;
        if (config != null) {
            this.setIcon(config.icon);
            if (num) {
                this.setNum(num);
            }

            if (config.type == BagType.BOOK) {
                this.setNum(1);
                var booktitle = this.getChild("booktitle");
                booktitle.text = config.name + num + "层";
            }
        } else {
            this.setNum(0);
            this.setIcon(null);
            this.title = "";
        }
    }

    public setPos(pos: Point) {
        this.pos = pos;
    }

    public setPosXY(x: number, y: number) {
        this.pos.x = x;
        this.pos.y = y;
    }

    public getPos(): Point {
        return this.pos;
    }

    public addNum(num: number) {
        this.num += num;
        this.updateNum();
    }

    public setNum(num: number) {
        this.num = num;
        this.updateNum();
    }


    public getNum(): number {
        return this.num;
    }

    public updateNum() {
        if (this.num == 0 || this.num == 1) {
            this.title = "";
        } else {
            if (this.config.showNum == 1) {
                this.title = this.num + "";
            } else {
                this.title = "";
            }
        }
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getConfig(): IConfigitem {
        return this.config;
    }

    public setItem(str: string) {
        if (str) {
            var configs: string[] = str.split(",");
            if (configs) {
                var itemid: number = Number.parseInt(configs[0]);
                var config: IConfigitem = ConfigUtil.inst.configItem.getConfigByItemId(itemid);
                if (config) {
                    this.setConfig(config, Number.parseInt(configs[1]));
                }
            }
        }
    }

    public playmc() {
        if (this.mc) {
            this.mc.visible = true;
            this.mc.setPlaySettings(0, -1, 1, 0, this.playComplate.bind(this), null);
        }
    }

    public playComplate() {
        this.mc.visible = false;
    }

    public setBorder(url: string) {
        this.border.visible = true;
        this.border.url = url;
    }


}