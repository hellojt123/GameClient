/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import FeiGe_xuanze from "./FeiGe_xuanze";
import FeiGe_dange from "./FeiGe_dange";

export default class FeiGe extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public n25:fgui.GComponent;
	public bg:fgui.GLoader;
	public wenda:FeiGe_xuanze;
	public daan:FeiGe_dange;

	public static URL:string = "ui://d2q2ojebmj535";

	public static createInstance():FeiGe {
		return <FeiGe>(fgui.UIPackage.createObject("FeiGeUI","FeiGe"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n25 = <fgui.GComponent>(this.getChildAt(1));
		this.bg = <fgui.GLoader>(this.getChildAt(2));
		this.wenda = <FeiGe_xuanze>(this.getChildAt(3));
		this.daan = <FeiGe_dange>(this.getChildAt(4));
	}
}