/*
 * @Author: Jiangtao
 * @Date: 2019-11-04 10:09:27
 * @LastEditTime: 2020-04-02 09:29:55
 * @LastEditors: Jiangtao
 */

import ConfigUtil from './ConfigUtil';
import { config } from '../Const/config';
export default class LoadUtil {

    private static _inst: LoadUtil;
    public static get inst() {
        if (!LoadUtil._inst) {
            LoadUtil._inst = new LoadUtil()
        }
        return LoadUtil._inst;
    }
    private checkLoad: Map<string, boolean> = new Map<string, boolean>();
    private onComplate: Function;
    private onCheck: Function;
    private LoadCount: number = 0;

    public loadGameRes(callback: Function, check: Function) {
        if (CC_DEBUG) {
            this.loadGameConfig(config.configload, this.loadRes.bind(this));
        } else {
            // if (!cc.sys.isBrowser) {
            //     this.loadGameConfig(config.configload, this.loadRes.bind(this));
            // } else {
            //     this.loadGameConfigHttp(config.configload, this.loadRes.bind(this));
            // }
            this.loadGameConfigHttp(config.configload, this.loadRes.bind(this));
        }
        this.onComplate = callback;
        this.onCheck = check;
    }

    private addCheckLoad(name: string) {
        this.checkLoad.set(name, false);
    }

    private loadRes(key: string, data: IConfigloadJson) {
        ConfigUtil.inst.addConfig(key, data);
        let that = this;

        data.configload.forEach((value, key) => {
            if (value.load == 1) {
                this.LoadCount++;
            }
        })

        data.configload.forEach(function (item: IConfigload, index: number) {
            if (item.load == 1) {
                that.addCheckLoad(item.name);
                if (item.type == "json") {
                    if (CC_DEBUG) {
                        LoadUtil.inst.loadGameConfig(item.name, ConfigUtil.inst.addConfig.bind(that));
                    } else {
                        if (CC_WECHATGAME) {
                            LoadUtil.inst.loadGameConfig(item.name, ConfigUtil.inst.addConfig.bind(that));
                        } else {
                            LoadUtil.inst.loadGameConfigHttp(item.name, ConfigUtil.inst.addConfig.bind(that));
                        }
                    }
                } if (item.type == "ui") {
                    that.LoadPackage(item.name, () => {
                        that.checkLoading(item.name);
                    })
                }
            }
        });
    }

    public LoadDragonBones(name: string, func: Function) {
        cc.loader.loadRes("prefab/" + name, function (err, prefab) {
            if (func) {
                func(prefab);
            }
        });
    }

    public RemoveDragonBones(name: string) {
        var deps = cc.loader.getDependsRecursively("prefab/" + name);
        cc.loader.release(deps);
    }


    public LoadPackage(name: string, callback: Function): void {
        fgui.UIPackage.loadPackage("UI/" + name, (err) => {
            if (callback) {
                callback(err)
            }
        });
    }

    public getItemURL(pkgName: string, resName: string): string {
        return fgui.UIPackage.getItemURL(pkgName, resName);
    }

    public getByName(name: string): fgui.UIPackage {
        return fgui.UIPackage.getByName(name);
    }

    public createObject(pkgName: string, resName: string, userClass?: any): fgui.GObject {
        return fgui.UIPackage.createObject(pkgName, resName, userClass);
    }

    public removePackage(name: string): void {
        fgui.UIPackage.removePackage(name);
    }

    private checkLoading(name: string) {
        if (this.checkLoad.has(name)) {
            this.checkLoad.set(name, true);
            let done: boolean = true;
            var count = 0;
            this.checkLoad.forEach((value, key) => {
                if (value === false) {
                    done = false;
                }
                if (value === true) {
                    count++;
                }
            })

            if (this.onCheck) {
                this.onCheck(count / this.LoadCount)
            }

            if (done) {
                if (this.onComplate) {
                    this.onComplate();
                }
            }
        }
    }

    public loadStageConfig(name: string, func: Function) {
        let that = this;
        cc.loader.loadRes(Global.configurl + 'stageconfig/' + name + Global.json, function (err, jsonAsset) {
            if (err) {
                cc.error(err.message || err);
            } else {
                func(jsonAsset.json);
            }
            cc.loader.releaseAsset(jsonAsset);
            that.checkLoading(name);
        });
    }


    public loadGameConfig(name: string, func: Function) {
        let that = this;
        cc.loader.loadRes(Global.configurl + "game/" + name + Global.json, function (err, jsonAsset) {
            if (err) {
                cc.error(err.message || err);
            } else {
                func(name, jsonAsset.json);
            }
            cc.loader.releaseAsset(jsonAsset);
            that.checkLoading(name);
        });
    }

    public loadGameConfigHttp(name: string, func: Function) {
        let that = this;
        cc.loader.load(Global.configurl + "game/" + name + Global.json, function (err, jsonAsset) {
            if (err) {
                cc.error(err.message || err);
            } else {
                func(name, jsonAsset);
            }
            cc.loader.releaseAsset(jsonAsset);
            that.checkLoading(name);
        });
    }

    public loadTexture(name: string, func: Function) {
        let that = this;
        if (Global.gameManager.EditorMode == false) {
            cc.loader.loadRes('texture/' + name, cc.SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    cc.error(err.message || err);
                } else {
                    func(spriteFrame);
                }
                that.checkLoading(name);
                //cc.loader.releaseRes('texture/'+name);             
            });
        } else {
            this.loadTextureLocal(name, func);
        }
    }

    public loadTextureLocal(name: string, func: Function) {
        this.localInit();
        cc.loader.load("resources/texture/" + name + ".jpg", function (err, res) {
            if (err) {
                cc.error(err.message || err);
            } else {
                let frame = new cc.SpriteFrame(res);
                func(frame);
            }
        });
    }
    public loadStageConfigLocal(name: string, func: Function) {
        this.localInit();
        var json = jsb.fileUtils.getStringFromFile("resources/config/stageconfig/" + name + ".json");
        if (json) {
            func(JSON.parse(json));
        }
    }
    private writeTextToLocal(name: string, data: any) {
        this.localInit();
        jsb.fileUtils.writeStringToFile(data, "resources/config/stageconfig/" + name + ".json");
    }
    private localInit() {
        if (!jsb.fileUtils.isDirectoryExist("resources/")) {
            jsb.fileUtils.createDirectory("resources/");
        }
        if (!jsb.fileUtils.isDirectoryExist("resources/texture/")) {
            jsb.fileUtils.createDirectory("resources/texture/");
        }
        if (!jsb.fileUtils.isDirectoryExist("resources/config/")) {
            jsb.fileUtils.createDirectory("resources/config/");
        }
        if (!jsb.fileUtils.isDirectoryExist("resources/config/stageconfig/")) {
            jsb.fileUtils.createDirectory("resources/config/stageconfig/");
        }
    }
}