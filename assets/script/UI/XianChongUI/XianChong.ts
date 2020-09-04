/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import XianChong_weiyang from "./XianChong_weiyang";
import XianChong_juling from "./XianChong_juling";
import XianChong_tanxian1 from "./XianChong_tanxian1";

export default class XianChong extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public n11:fgui.GComponent;
	public top_title:fgui.GComponent;
	public weiyang:XianChong_weiyang;
	public juling:XianChong_juling;
	public tanxian:XianChong_tanxian1;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public n24:fgui.GImage;
	public n25:fgui.GButton;
	public n28:fgui.GButton;
	public n29:fgui.GButton;
	public n33:fgui.GImage;

	public static URL:string = "ui://wx4xqeclnpfod";

	public static createInstance():XianChong {
		return <XianChong>(fgui.UIPackage.createObject("XianChongUI","XianChong"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.n11 = <fgui.GComponent>(this.getChildAt(2));
		this.top_title = <fgui.GComponent>(this.getChildAt(3));
		this.weiyang = <XianChong_weiyang>(this.getChildAt(4));
		this.juling = <XianChong_juling>(this.getChildAt(5));
		this.tanxian = <XianChong_tanxian1>(this.getChildAt(6));
		this.n22 = <fgui.GImage>(this.getChildAt(7));
		this.n23 = <fgui.GImage>(this.getChildAt(8));
		this.n24 = <fgui.GImage>(this.getChildAt(9));
		this.n25 = <fgui.GButton>(this.getChildAt(10));
		this.n28 = <fgui.GButton>(this.getChildAt(11));
		this.n29 = <fgui.GButton>(this.getChildAt(12));
		this.n33 = <fgui.GImage>(this.getChildAt(13));
	}
}