/*
 * @Author: Jiangtao
 * @Date: 2019-12-18 09:19:37
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-13 11:23:33
 */
export class windowModel extends fgui.Window {
    private _view: any;
    private _layer: fgui.GGraph;
    private _hideComplate: Function;
    private _showComplate: Function;
    private _cancal_background: boolean = false;
    public constructor(view: any = null) {
        super();
        this._view = view;
    }

    protected onInit(): void {
        //弹出窗口的动效已中心为轴心   
        this.setPivot(0.5, 0.5);
        //this.modal = true; 
        if (fgui.GRoot.inst.height > 1280) {
            this.setPosition(0, (fgui.GRoot.inst.height - 1280) / 2);
        }
        if (this._view && this._view.frame && this._view.frame.layer) {
            this._layer = this._view.frame.layer;
        }
    }

    protected onShown() {
        this.setClick();
    }

    public setClick() {
        if (this._cancal_background) {
            if (this._view && this._view.frame) {
                this._view.frame.offClick(this.onClickClose);
            }
            this._cancal_background = false;
        } else {
            if (this._view && this._view.frame) {
                this._view.frame.onClick(this.onClickClose, this);
            }
        }
        if (this._showComplate) {
            this._showComplate();
            this._showComplate = null;
        }
    }

    public cancalClick() {
        this._cancal_background = true;
    }

    private onClickClose() {
        this.cancalClick();
        this.hide();
    }

    private onClickModalLayer() {

    }

    protected doShowAnimation(): void {
        this.setScale(0.1, 0.1);
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.2)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.Linear)
            .onComplete(this.doSecondAnimation, this);

        fgui.GTween.to(0, 200, 0.3)
            .setTarget(this, this.setAlpha)
            .setEase(fgui.EaseType.Linear)

    }
    setAlpha(num: number) {
        if (this._layer) {
            this._layer.color = cc.color(0, 0, 0, num);
        }
        // fgui.GRoot.inst.modalLayer.color = cc.color(0,0,0,num);       
    }

    protected doSecondAnimation(): void {
        fgui.GTween.to2(1, 1, 0.9, 0.9, 0.1)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.Linear)
            .onComplete(this.doThirdAnimation, this);
    }

    protected doThirdAnimation(): void {
        fgui.GTween.to2(0.9, 0.9, 1, 1, 0.1)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.Linear)
            .onComplete(this.onShown, this);

    }

    protected doHideAnimation(): void {
        fgui.GTween.to2(1, 1, 0.1, 0.1, 0.2)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.Linear)
            .onComplete(this.onHideComplate, this);

        fgui.GTween.to(200, 0, 0.2)
            .setTarget(this, this.setAlpha)
            .setEase(fgui.EaseType.Linear)
    }

    public setShowComplate(show: Function) {
        this._showComplate = show;
    }

    public setHideComplate(hide: Function) {
        this._hideComplate = hide;
    }

    private onHideComplate() {
        if (this._hideComplate) {
            this._hideComplate();
        }
        this._hideComplate = null;
        this.hideImmediately();
    }
}