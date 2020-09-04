/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import XianChong_Tips1 from "./XianChong_Tips1";

export default class XianChong_tanxian2 extends fgui.GComponent {

	public n45:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public n74:fgui.GTextField;
	public n67:fgui.GTextField;
	public n75:fgui.GProgressBar;
	public n76:fgui.GButton;
	public n77:fgui.GImage;
	public n78:fgui.GImage;
	public daoju:fgui.GList;
	public droplist:XianChong_Tips1;

	public static URL:string = "ui://wx4xqeclnpfor";

	public static createInstance():XianChong_tanxian2 {
		return <XianChong_tanxian2>(fgui.UIPackage.createObject("XianChongUI","XianChong_tanxian2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n45 = <fgui.GTextField>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.n74 = <fgui.GTextField>(this.getChildAt(2));
		this.n67 = <fgui.GTextField>(this.getChildAt(3));
		this.n75 = <fgui.GProgressBar>(this.getChildAt(4));
		this.n76 = <fgui.GButton>(this.getChildAt(5));
		this.n77 = <fgui.GImage>(this.getChildAt(6));
		this.n78 = <fgui.GImage>(this.getChildAt(7));
		this.daoju = <fgui.GList>(this.getChildAt(8));
		this.droplist = <XianChong_Tips1>(this.getChildAt(9));
	}
}