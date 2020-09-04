/*
 * @Author: Jiangtao
 * @Date: 2019-12-19 14:56:17
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-21 10:44:55
 */
export default class PlayerHead extends fgui.GComponent {
    public n0: fgui.GImage;
    public n4: fgui.GLoader;
    public n2: fgui.GImage;
    public n3: fgui.GImage;
    private _mask: cc.Node;
    private _sp: cc.Sprite;

    public constructor() {
        super();
    }

    protected onConstruct(): void {
        this.n0 = <fgui.GImage>(this.getChildAt(0));
        this.n4 = <fgui.GLoader>(this.getChildAt(1));
        this.n2 = <fgui.GImage>(this.getChildAt(2));
        this.n3 = <fgui.GImage>(this.getChildAt(3));
        this.n4.visible = false;
        this.n4.setSize(100, 100);
    }

    public setHead(headurl: string, sex: number = 0) {
        this.n4.visible = true;
        this.n3.visible = false;
        // this.n2.visible = false;
        var me = this;
        if (headurl != null || headurl == "") {
            if (headurl != "") {
                cc.loader.load({ url: headurl, type: 'jpeg' }, function (err, texture) {
                    // if (!me._mask && !me._sp) {
                    //     var node = new cc.Node('avatar');
                    //     me._sp = node.addComponent(cc.Sprite);
                    //     me._sp.spriteFrame = new cc.SpriteFrame(texture);
                    //     var mask = new cc.Node();
                    //     me._mask = mask;
                    //     var mask_node = me._mask.addComponent(cc.Mask);
                    //     me.node.addChild(me._mask);
                    //     me._mask.addChild(node);
                    //     mask.x = 46;
                    //     mask.y = -46;
                    //     mask_node.type = cc.Mask.Type.ELLIPSE;
                    //     mask.width = 80;
                    //     mask.height = 80;
                    // } else {
                    //     me._sp.spriteFrame = new cc.SpriteFrame(texture);
                    // }

                    me.n4.texture = new cc.SpriteFrame(texture);
                });

                // this.n4.url = "ui://ItemUI/tx_woman1";
            } else {
                if (sex == 0) {
                    this.n4.url = "ui://ItemUI/tx_woman1";
                } else {
                    this.n4.url = "ui://ItemUI/tx_man1";
                }
            }

        } else {
            // this.n2.visible = true;
            this.n3.visible = true;
            this.n4.url = "";
            // if (this._mask) {
            //     this._mask.removeAllChildren();
            //     this.node.removeChild(this._mask);
            //     this._mask = null;
            //     this._sp = null;
            // }
        }
    }
}