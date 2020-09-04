/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import TianCai_fabao from "./TianCai_fabao";
import TianCai_kufang from "./TianCai_kufang";
import TianCai_liandan1 from "./TianCai_liandan1";

export default class TianCai extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public main:TianCai_fabao;
	public kufang:TianCai_kufang;
	public liandan1:TianCai_liandan1;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public tab_fabao:fgui.GButton;
	public tab_lianqi:fgui.GButton;
	public tab_liandan:fgui.GButton;
	public tab_liandan1:fgui.GButton;

	public static URL:string = "ui://gzd2moaj9t41g";

	public static createInstance():TianCai {
		return <TianCai>(fgui.UIPackage.createObject("TianCaiUI","TianCai"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.main = <TianCai_fabao>(this.getChildAt(2));
		this.kufang = <TianCai_kufang>(this.getChildAt(3));
		this.liandan1 = <TianCai_liandan1>(this.getChildAt(4));
		this.n21 = <fgui.GImage>(this.getChildAt(5));
		this.n22 = <fgui.GImage>(this.getChildAt(6));
		this.n23 = <fgui.GImage>(this.getChildAt(7));
		this.tab_fabao = <fgui.GButton>(this.getChildAt(8));
		this.tab_lianqi = <fgui.GButton>(this.getChildAt(9));
		this.tab_liandan = <fgui.GButton>(this.getChildAt(10));
		this.tab_liandan1 = <fgui.GButton>(this.getChildAt(11));
	}
}