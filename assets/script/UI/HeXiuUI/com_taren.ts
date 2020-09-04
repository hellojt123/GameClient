/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_yaoqing from "./btn_yaoqing";
import ProgressBar_hx from "./ProgressBar_hx";

export default class com_taren extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GImage;
	public head:fgui.GComponent;
	public playername:fgui.GTextField;
	public btn_main_role:fgui.GButton;
	public btn_taoqing:btn_yaoqing;
	public progress_bar:ProgressBar_hx;
	public time:fgui.GTextField;
	public btn_ok:fgui.GButton;

	public static URL:string = "ui://8udvtky310dnbc";

	public static createInstance():com_taren {
		return <com_taren>(fgui.UIPackage.createObject("HeXiuUI","com_taren"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.head = <fgui.GComponent>(this.getChildAt(1));
		this.playername = <fgui.GTextField>(this.getChildAt(2));
		this.btn_main_role = <fgui.GButton>(this.getChildAt(3));
		this.btn_taoqing = <btn_yaoqing>(this.getChildAt(4));
		this.progress_bar = <ProgressBar_hx>(this.getChildAt(5));
		this.time = <fgui.GTextField>(this.getChildAt(6));
		this.btn_ok = <fgui.GButton>(this.getChildAt(7));
	}
}