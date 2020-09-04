/*
 * @Author: Jiangtao
 * @Date: 2020-01-15 08:03:30
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-04-02 08:51:36
 */

import ConfigUtil from "../../Util/ConfigUtil";
import MyLoader from "../Loader/MyLoader";
import TimeUtil from "../../Util/TimeUtil";
import LoadUtil from "../../Util/LoadUtil";

export default class Role extends fgui.GButton {
    public button: fgui.Controller;
    public border1: fgui.GLoader;
    public border: fgui.GLoader;
    public t0: fgui.Transition;
    public holder: fgui.GTextField;
    public main_role: MyLoader;
    public front: fgui.GComponent;
    public bottom: fgui.GComponent;
    public level2: fgui.GComponent;

    private sex: number;
    private level: string;
    private time: number;
    private cacheName: string;
    private cacheDB: dragonBones.ArmatureDisplay;
    private staticAni: string = "";
    private stopAni: boolean = false;

    public constructor() {
        super();
        this.on(fgui.Event.CLICK, this.onClicked.bind(this), this);
    }

    protected onClicked(e) {
        this.border.visible = false;
        this.time = TimeUtil.timestamp();
        this.holder.visible = false;
        if (this.cacheDB)
            this.cacheDB.playAnimation("fx_1", -1);
    }


    protected onConstruct(): void {
        this.button = this.getControllerAt(0);
        this.holder = <fgui.GTextField>(this.getChildAt(0));
        this.border1 = <fgui.GLoader>(this.getChildAt(1));
        this.border = <fgui.GLoader>(this.getChildAt(2));
        this.bottom = <fgui.GComponent>(this.getChildAt(3));
        this.main_role = <MyLoader>(this.getChildAt(4));
        this.front = <fgui.GComponent>(this.getChildAt(5));
        this.level2 = <fgui.GComponent>(this.getChildAt(6));
        this.t0 = this.getTransitionAt(0);

        this.main_role.setLoadLoadSuccess(this.onLoadSucess.bind(this));
    }

    public setStaticAni(ani: string) {
        this.staticAni = ani;
    }

    public onLoadSucess() {
        if (!this.stopAni) {
            let roleName: string = "role_0_" + this.sex + "_" + this.level;
            // this.border.url = "ui://RoleClipUI/"+name;
            if (this.cacheName != "" && this.cacheName != roleName) {
                let armature: dragonBones.ArmatureDisplay = this.holder.node.getComponent("dragonBones.ArmatureDisplay");
                if (armature) {
                    armature.armature().node.removeFromParent();
                }
                this.holder.node.removeAllChildren();
            }
            if (this.cacheName == "" || this.cacheName != roleName) {
                LoadUtil.inst.LoadDragonBones(roleName, (prefab) => {
                    this.cacheName = roleName;
                    var node = cc.instantiate(prefab);
                    node.setParent(this.holder.node);
                    node.setPosition(cc.Vec2.ZERO)
                    node.active = true;
                    this.cacheDB = node.getComponent("dragonBones.ArmatureDisplay");
                    this.cacheDB.playAnimation("fx_1", -1);
                    this.holder.visible = false;
                    this.time = TimeUtil.timestamp();
                });
            }
        }
    }

    public playLevelUp1(func: Function) {
        if (!LoadUtil.inst.getByName("Tupo1MC")) {
            LoadUtil.inst.LoadPackage("Tupo1MC", (err) => {
                let mc = fgui.UIPackage.createObject("Tupo1MC", "tupo1").asMovieClip;
                mc.setSize(418, 133)
                this.bottom.addChild(mc);
                this.stopAni = true;
                this.holder.visible = false;
                mc.setPlaySettings(0, -1, 2, 0, () => {
                    this.stopAni = false;
                    this.holder.visible = true;
                    mc.dispose();
                    this.bottom.removeChild(mc);
                    LoadUtil.inst.removePackage("Tupo1MC");
                }, null);
            });
        }

        if (!LoadUtil.inst.getByName("Tupo2MC")) {
            LoadUtil.inst.LoadPackage("Tupo2MC", (err) => {
                let mc = fgui.UIPackage.createObject("Tupo2MC", "tupo2").asMovieClip;
                mc.setSize(397, 310)
                this.front.addChild(mc);
                this.stopAni = true;
                this.holder.visible = false;
                mc.setPlaySettings(0, -1, 2, 0, () => {
                    this.stopAni = false;
                    this.holder.visible = true;
                    if (func) {
                        func();
                    }
                    mc.dispose();
                    this.front.removeChild(mc);
                    LoadUtil.inst.removePackage("Tupo2MC");
                }, null);
            });
        }
    }

    public playLevelUp2(func: Function) {
        if (!LoadUtil.inst.getByName("Tupo3MC")) {
            LoadUtil.inst.LoadPackage("Tupo3MC", (err) => {
                let mc = fgui.UIPackage.createObject("Tupo3MC", "tupo3").asMovieClip;
                mc.setSize(379, 660)
                this.level2.addChild(mc);
                this.stopAni = true;
                this.holder.visible = false;
                mc.setPlaySettings(0, -1, 1, 0, () => {
                    this.stopAni = false;
                    this.holder.visible = true;
                    if (func) {
                        func();
                    }
                    this.level2.removeChild(mc);
                    mc.dispose();
                    LoadUtil.inst.removePackage("Tupo3MC");
                }, null);
            });
        }
    }

    public playTransform(func: Function) {
        if (!LoadUtil.inst.getByName("ZhuanSheng1MC")) {
            LoadUtil.inst.LoadPackage("ZhuanSheng1MC", (err) => {
                let mc = fgui.UIPackage.createObject("ZhuanSheng1MC", "zhuansheng_1").asMovieClip;
                mc.setSize(453, 485);
                mc.setPosition(-250, -260)
                mc.setScale(2, 2);
                this.front.addChild(mc);
                mc.setPlaySettings(0, -1, 1, 0, () => {
                    if (func) {
                        func();
                    }
                    mc.dispose();
                    this.front.removeChild(mc);
                    LoadUtil.inst.removePackage("ZhuanSheng1MC");
                }, null);
            });
        }
    }

    setStopAni(stop: boolean) {
        this.stopAni = stop;
    }

    public setRole(level: number, sex: number = 0) {
        let config: IConfigplayerlevel = ConfigUtil.inst.configPlayerLevel.getConfigByLevel(level);
        if (config) {
            this.main_role.url = Global.resurl + "loader/role/role_" + sex + "_" + config.icon + ".png";
            this.sex = sex;
            this.level = config.icon;
            this.border1.visible = false;

        }
    }

    onUpdate() {
        super.onUpdate();
        let remainTime = TimeUtil.timestamp() - this.time;

        if (remainTime > 3 && this.time > 0 && remainTime < 7 && this.staticAni == "") {
            this.holder.visible = true;
            if (this.cacheDB && this.cacheDB.animationName != "fx_1" && this.staticAni == "") {
                this.cacheDB.playAnimation("fx_1", -1);
            }
        }
        if (remainTime > 7 && this.time > 7 && remainTime < 13) {
            if (this.cacheDB && this.cacheDB.animationName != "fx_2" && this.staticAni == "") {
                this.cacheDB.playAnimation("fx_2", -1);
            }
        }
        if (remainTime > 13) {
            if (this.cacheDB && this.cacheDB.animationName != "fx_3" && this.staticAni == "") {
                this.cacheDB.playAnimation("fx_3", -1);
            }
        }
        if (this.staticAni != "") {
            if (remainTime > 3 && this.time > 0 && remainTime < 5) {
                this.holder.visible = true;
                if (this.cacheDB) {
                    this.cacheDB.playAnimation(this.staticAni, -1);
                }
            }
        }
    }



}