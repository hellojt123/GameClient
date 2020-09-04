/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 14:11:56
 */

import ConfigUtil from "../../Util/ConfigUtil";
import baseUI from "./baseUI";
import GuideUIBinder from "../GuideUI/GuideUIBinder";
import Guide from "../GuideUI/Guide";
import TimeUtil from "../../Util/TimeUtil";
import EventManager from "../../Manager/EventManager";
import { gameEvents } from "../../Const/gameEvents";
import * as proto from "../../Net/proto/proto"
import { GameUtil } from "../../Util/GameUtil";
import { guideData } from "../../ConfigContainer/ConfigGuideContainer";

const { ccclass, property } = cc._decorator;
@ccclass
export default class GuideUI extends baseUI {
    public uiname: string = "GuideUI";
    public _view: Guide;
    onLoad() {
        super.onLoad();
        this.init();
        // EventManager.inst.addEvents(gameEvents.updateProp, this.updateguide.bind(this));
        EventManager.inst.addEvents(gameEvents.updateguide, this.updateguide.bind(this));
    }
    show() {
        super.show();
        // this._window.cancalClick();    

    }

    init() {
        if (this._view == null) {
            GuideUIBinder.bindAll();
            this._view = Guide.createInstance();
            super.init();
            this.initClick();
        }
    }

    initClick() {

        //this._view.mask.onClick(this.hide,this);
    }
    test() {

    }

    reset() {
        console.log("this.propData.id", this.propData.id)
        cc.sys.localStorage.removeItem("guide" + this.propData.id);
    }

    updateguide(data: proto.PlayerProp) {
        this.findGuide(data);
    }

    findGuide(prop: proto.PlayerProp) {
        let item = cc.sys.localStorage.getItem("guide" + prop.id);
        let data: guideData = null;
        if (item) {
            let jsonData = JSON.parse(item);
            data = new guideData();
            data.key = Number.parseInt(jsonData.key);
            data.step = Number.parseInt(jsonData.step);
        }

        if (!data) {
            let configs: Map<number, Map<number, IConfigguide>> = ConfigUtil.inst.ConfigGuideContainer.getConfigs();
            for (let v of configs.values()) {
                for (let value of v.values()) {
                    if (value.layer >= prop.layer && value.level >= prop.level) {
                        if (data == null) {
                            data = new guideData();
                            data.key = value.key;
                            data.step = value.step;
                        }
                    }
                }
            }
        }

        if (data && data.key <= ConfigUtil.inst.ConfigGuideContainer.getEndStep().key) {
            let config: IConfigguide = ConfigUtil.inst.ConfigGuideContainer.getConfigByKeyByStep(data.key, data.step);
            if (config) {
                if (config.trigger == 0) {
                    if (prop.level >= config.level && prop.layer >= config.layer) {
                        let ui: baseUI = Global.gameManager.uiManager.getUI(config.uiname);
                        if (ui) {
                            if (!ui._window.isShowing) {
                                ui.showUI(() => {
                                    this.onShowComplate(ui, config);
                                });
                            } else {
                                this.onShowComplate(ui, config);
                            }
                        }
                    } else {
                        this.hide();
                    }
                } else {
                    this.checkTrigger(prop, config);
                }
            } else {
                this.hide();
            }
        } else {
            this.hide();
        }
    }

    private checkTrigger(data: proto.PlayerProp, config: IConfigguide) {
        if (config.trigger == 1) {
            if (TimeUtil.timestamp() >= data.xmEndTime) {
                this.doNext(config.key, config.step, data);
            } else {
                this.hide();
            }
        } else if (config.trigger == 2) {
            if (this.propData && data.layer != this.propData.layer) {
                this.doNext(config.key, config.step, data);
            } else {
                this.hide();
            }
        }
    }


    public doNext(key: number, step: number, prop: proto.PlayerProp) {
        let nextconfig: IConfigguide = ConfigUtil.inst.ConfigGuideContainer.getConfigByKeyByStep(key, step + 1);
        if (!nextconfig) {
            nextconfig = ConfigUtil.inst.ConfigGuideContainer.getConfigByKeyByStep(key + 1, 1);
        }
        let guide = new guideData();
        if (nextconfig) {
            guide.key = nextconfig.key;
            guide.step = nextconfig.step;
            cc.sys.localStorage.setItem("guide" + prop.id, JSON.stringify(guide));
            this.findGuide(prop);
        } else {
            guide.key = 99999;
            guide.step = 99999;
            cc.sys.localStorage.setItem("guide" + prop.id, JSON.stringify(guide));
            this.hide();
        }
    }

    public testguide(str: string) {
        let params: string[] = str.split(",");
        let config: IConfigguide = ConfigUtil.inst.ConfigGuideContainer.getConfigByKeyByStep(Number.parseInt(params[0]), Number.parseInt(params[1]));
        if (config) {

            let ui: baseUI = Global.gameManager.uiManager.getUI(config.uiname);
            if (ui) {
                ui.showUI(() => {
                    this.onTestComplate(ui, config.name, Number.parseInt(params[2]), Number.parseInt(params[3]));
                });
            }
        }
    }

    public testpath(str: string) {
        let params: string[] = str.split(",");
        if (params) {
            let ui: baseUI = Global.gameManager.uiManager.getUI(params[0]);
            if (ui) {
                ui.showUI(() => {
                    this.onTestComplate(ui, params[1], Number.parseInt(params[2]), Number.parseInt(params[3]));
                });
            }
        }
    }


    onTestComplate(ui: baseUI, name: string, x: number, y: number) {
        let go: fgui.GObject = ui._view.getChildByPath(name);
        if (go) {
            this.showUI(() => {
                this._window.bringToFront();
                this._view.mask.clearClick();
                this._view.btn_guide_mask.off(fgui.Event.TOUCH_BEGIN)
                this._view.btn_guide_mask.off(fgui.Event.TOUCH_END)
                this._view.finger.t1.stop()
                this._view.finger.t2.stop()
                this._view.btn_guide_mask.on(fgui.Event.TOUCH_END, () => {
                    if (GuideUI.canClick === false) {
                        fgui.GRoot.inst.inputProcessor.simulateClick(go);
                        go.setScale(1, 1);
                        this.hide();
                    }
                })
                this._view.btn_guide_mask.on(fgui.Event.TOUCH_BEGIN, () => {
                    if (GuideUI.canClick === false) {
                        go.setScale(0.95, 0.95);
                    }
                }, this)

                let global = go.parent.localToGlobal(go.x, go.y);
                let local = this._view.mask.globalToLocal(global.x, global.y);
                let toX = local.x + x;
                let toY = local.y + y;
                fgui.GTween.to2(this._view.mask.box_mask.x, this._view.mask.box_mask.y, toX, toY, 1)
                    .setTarget(this._view.mask.box_mask, this.onTweenPos.bind(this))
                    .onComplete(() => this.onTComplate(0), this);
            });
        }
    }

    onTweenPos(x: number, y: number) {
        this._view.mask.box_mask.setPosition(x, y);
        let global = this._view.mask.localToGlobal(x, y, cc.Vec2.ZERO);
        let local = this._view.globalToLocal(global.x, global.y, cc.Vec2.ZERO);
        this._view.finger.setPosition(local.x + 50, local.y + 50);
        this._view.btn_guide_mask.setPosition(local.x - 50, local.y - 50);
    }

    public static canClick: boolean = false;
    onShowComplate(ui: baseUI, config: IConfigguide) {
        if (ui && ui._view && config) {
            let go: fgui.GObject = ui._view.getChildByPath(config.name);
            if (go) {
                let func = () => {
                    this._window.bringToFront();
                    this._view.btn_guide_mask.off(fgui.Event.TOUCH_BEGIN)
                    this._view.btn_guide_mask.off(fgui.Event.TOUCH_END)
                    this._view.finger.t1.stop()
                    this._view.finger.t2.stop()
                    if (config.anitype == 0) {
                        this._view.btn_guide_mask.on(fgui.Event.TOUCH_END, () => {
                            if (GuideUI.canClick === false) {
                                this.onClickTarget(ui, config);
                                fgui.GRoot.inst.inputProcessor.simulateClick(go);
                                this._window.bringToFront();
                                go.setScale(1, 1);
                            }
                        })
                        this._view.btn_guide_mask.on(fgui.Event.TOUCH_BEGIN, () => {
                            if (GuideUI.canClick === false) {
                                go.setScale(0.95, 0.95);
                            }
                        }, this)
                    } else {
                        this._view.btn_guide_mask.on(fgui.Event.TOUCH_BEGIN, () => {
                            if (GuideUI.canClick === false) {
                                this.onClickTarget(ui, config);
                            }
                        })
                    }

                    let global = go.parent.localToGlobal(go.x, go.y);
                    let local = this._view.mask.globalToLocal(global.x, global.y);
                    if (config.desc && config.desc != "") {
                        this._view.dialog.visible = true;
                        this._view.dialog.desc.text = config.desc;
                    } else {
                        this._view.dialog.visible = false;
                    }

                    let toX = local.x + config.posX;
                    let toY = local.y + config.posY;
                    // this._view.finger.visible = false;
                    fgui.GTween.to2(this._view.mask.box_mask.x, this._view.mask.box_mask.y, toX, toY, 0.1)
                        .setTarget(this._view, this.onTweenPos.bind(this))
                        .onComplete(() => { this.onTComplate(config.anitype) }, this);
                }
                if (this._window.isShowing) {
                    func();
                } else {
                    this.showUI(func);
                }
            } else {
                console.log("not find", config.name)
            }
        }
    }

    onTComplate(type: number = 0) {
        GuideUI.canClick = false;
        if (type > 0) {
            if (type == 1) {
                this._view.finger.t1.play();
            } else if (type == 2) {
                this._view.finger.t2.play();
            }
        } else {
            this._view.finger.visible = true;
        }
    }

    onClickTarget(ui: baseUI, data: IConfigguide) {
        let config: IConfigguide = ConfigUtil.inst.ConfigGuideContainer.getConfigByKeyByStep(data.key, data.step + 1);
        if (!config) {
            config = ConfigUtil.inst.ConfigGuideContainer.getConfigByKeyByStep(data.key + 1, 1);
        }
        let guide = new guideData();
        if (config) {
            guide.key = config.key;
            guide.step = config.step;
            cc.sys.localStorage.setItem("guide" + this.propData.id, JSON.stringify(guide));
            this.findGuide(this.propData);
        } else {
            guide.key = 99999;
            guide.step = 99999;
            cc.sys.localStorage.setItem("guide" + this.propData.id, JSON.stringify(guide));
            this.hide();
        }

    }


    // private onClickTips(){
    //     var tipsdata:TipsData = new TipsData();
    //     tipsdata.type = constAll.TipsType.NORAML;     
    //     tipsdata.text = ConfigUtil.inst.ConfigLanContainer.getConfigByTypeId("zhuangsheng",1);
    //     EventManager.inst.onEvents(constAll.gameEvents.showTips,tipsdata);
    // }
}

