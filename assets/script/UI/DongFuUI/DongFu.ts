/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import DongFu_xianjin1 from "./DongFu_xianjin1";
import DongFu_xinfa from "./DongFu_xinfa";
import listitems from "./listitems";

export default class DongFu extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public tab_fabao:fgui.GButton;
	public tab_lianqi:fgui.GButton;
	public dongfu1:DongFu_xianjin1;
	public xinfa:DongFu_xinfa;
	public listitems:listitems;
	public t0:fgui.Transition;

	public static URL:string = "ui://doxjdi1dmj53f";

	public static createInstance():DongFu {
		return <DongFu>(fgui.UIPackage.createObject("DongFuUI","DongFu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.n21 = <fgui.GImage>(this.getChildAt(2));
		this.n22 = <fgui.GImage>(this.getChildAt(3));
		this.n23 = <fgui.GImage>(this.getChildAt(4));
		this.tab_fabao = <fgui.GButton>(this.getChildAt(5));
		this.tab_lianqi = <fgui.GButton>(this.getChildAt(6));
		this.dongfu1 = <DongFu_xianjin1>(this.getChildAt(7));
		this.xinfa = <DongFu_xinfa>(this.getChildAt(8));
		this.listitems = <listitems>(this.getChildAt(9));
		this.t0 = this.getTransitionAt(0);
	}
}