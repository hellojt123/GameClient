/*
 * @Author: Jiangtao
 * @Date: 2019-11-26 13:44:45
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-25 15:27:08
 */
import * as proto from "../../Net/proto/proto"
import { windowModel } from "./windowModel";
import { PlayerEntity } from "../../Entity/Player/PlayerEntity";
import ConfigUtil from "../../Util/ConfigUtil";
import LoadUtil from "../../Util/LoadUtil";
/// 申明的变量允许直接 new
export default class baseUI extends cc.Component {
    public uiname: string;
    public _view: fgui.GComponent;
    public _window: windowModel;
    private config: IConfigload;
    public _interval: any;
    public _timeout: any;

    onLoad() {
        this._window = new windowModel(this._view);
        if (this.uiname) {
            this.config = ConfigUtil.inst.ConfigLoadContainer.getConfigByName(this.uiname);
            if (this.config && this.config.load == 1) {
                this.init();
            }
        }
    }

    public showUI(callback: Function = null) {
        if (this._view) {
            if (this._view.frame) {
                this._view.frame.width = 9999;
                this._view.frame.height = 9999;
            }
            if (this._window) {
                if (callback) {
                    this._window.setShowComplate(callback)
                }
                if (!this._window.isShowing) {
                    this._window.show();
                    this.show();
                }
            } else {
                this._view.visible = true;
            }
        } else {
            Global.gameManager.uiManager.mainui._window.show();
            Global.gameManager.uiManager.mainui._window.showModalWait();
            LoadUtil.inst.LoadPackage(this.uiname, () => {
                this.onLoadComplate(callback);
            });
        }
    }

    public show() {

    }

    private onLoadComplate(callback: Function = null) {
        this.init();
        Global.gameManager.uiManager.mainui._window.hideImmediately();
        Global.gameManager.uiManager.mainui._window.closeModalWait();
        this.showUI(callback);
    }


    public init(): void {
        if (this._view) {
            if (this.uiname == "MainUI") {

                fgui.GRoot.inst.addChild(this._view);
            } else {
                if (this._window) {
                    this._window.contentPane = this._view;
                }
            }
        }
    }

    public get player(): PlayerEntity {
        return Global.gameManager.playerManager.player;
    }

    public get propData(): proto.PlayerProp {
        return Global.gameManager.playerManager.player.getProp();
    }

    public get bodyData(): Map<number, proto.playerBody> {
        return Global.gameManager.playerManager.player.getBodys();
    }

    public get bagItemsData(): Map<number, proto.bagItem> {
        return Global.gameManager.playerManager.player.getBagItems();
    }

    public get Dailys(): Map<number, proto.PlayerDaily> {
        return Global.gameManager.playerManager.player.getDailys();
    }

    public get getBagEmptyPos(): number {
        return Global.gameManager.playerManager.player.getBagEmptyPos();
    }

    public get getParams(): Map<number, number> {
        return Global.gameManager.playerManager.player.getParams();
    }

    public get petData(): proto.petProp {
        return Global.gameManager.playerManager.player.getPet();
    }

    public getItemNumByItemId(itemid: number): number {
        return Global.gameManager.playerManager.getItemNumByItemId(itemid);
    }

    public get singData(): proto.resSignInfo {
        return Global.gameManager.playerManager.player.getSign();
    }

    public get getXianJin(): Map<number, proto.PlayerParam> {
        return Global.gameManager.playerManager.player.getXianJin();
    }

    public hide() {
        this._window.setHideComplate(this.onHideComplate.bind(this));
        this._window.hide();
    }

    onHideComplate() {
        if (this.config) {
            if (this.config.unload == 1) {
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
                if (this._timeout) {
                    clearTimeout(this._timeout);
                    this._timeout = null;
                }
                this._view.dispose();
                this._view = null;
                this._window.contentPane = null;
                LoadUtil.inst.removePackage(this.config.name);
            }

            if (this._view && this.config.del == 1) {
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
                if (this._timeout) {
                    clearTimeout(this._timeout);
                    this._timeout = null;
                }
                this._view.dispose();
                this._view = null;
                this._window.contentPane = null;
            }
        }
    }

}