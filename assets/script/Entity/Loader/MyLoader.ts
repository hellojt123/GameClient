/*
 * @Author: Jiangtao
 * @Date: 2020-02-28 10:13:27
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-21 10:41:06
 */
export default class MyLoader extends fgui.GLoader {
    private successCallBack: Function;
    loadContent(): void {
        if (this.url) {
            this.url = this.url.replace(".png", "")
        }
        super.loadContent();
    }
    LoadExternal(): void {
        super.loadExternal();
    }

    freeExternal(texture: cc.SpriteFrame): void {
        super.freeExternal(texture);
    }

    onExternalLoadSuccess(texture: cc.SpriteFrame): void {
        super.onExternalLoadSuccess(texture);
        if (this.successCallBack) {
            this.successCallBack();
        }
    }


    public setLoadLoadSuccess(callback: Function) {
        this.successCallBack = callback;
    }
}