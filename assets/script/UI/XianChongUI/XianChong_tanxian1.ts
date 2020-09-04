/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import XianChong_tanxian2 from "./XianChong_tanxian2";
import btn_mubiao from "./btn_mubiao";

export default class XianChong_tanxian1 extends fgui.GComponent {

	public petGame:XianChong_tanxian2;
	public n45:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public bg:fgui.GLoader;
	public n51:fgui.GTextField;
	public n63:fgui.GTextField;
	public n53:fgui.GButton;
	public n64:fgui.GTextField;
	public n65:fgui.GTextField;
	public n67:fgui.GTextField;
	public btn_mubiao:btn_mubiao;
	public n70:fgui.GGroup;

	public static URL:string = "ui://wx4xqeclnpfop";

	public static createInstance():XianChong_tanxian1 {
		return <XianChong_tanxian1>(fgui.UIPackage.createObject("XianChongUI","XianChong_tanxian1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.petGame = <XianChong_tanxian2>(this.getChildAt(0));
		this.n45 = <fgui.GTextField>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.bg = <fgui.GLoader>(this.getChildAt(3));
		this.n51 = <fgui.GTextField>(this.getChildAt(4));
		this.n63 = <fgui.GTextField>(this.getChildAt(5));
		this.n53 = <fgui.GButton>(this.getChildAt(6));
		this.n64 = <fgui.GTextField>(this.getChildAt(7));
		this.n65 = <fgui.GTextField>(this.getChildAt(8));
		this.n67 = <fgui.GTextField>(this.getChildAt(9));
		this.btn_mubiao = <btn_mubiao>(this.getChildAt(10));
		this.n70 = <fgui.GGroup>(this.getChildAt(11));
	}
}