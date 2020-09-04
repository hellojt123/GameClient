/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_teshu1 from "./btn_teshu1";

export default class XianChong_juling extends fgui.GComponent {

	public tabs:fgui.Controller;
	public n36:fgui.GImage;
	public n45:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public bg:fgui.GLoader;
	public holder:fgui.GGraph;
	public com_pet:fgui.GComponent;
	public n50:fgui.GRichTextField;
	public n51:fgui.GTextField;
	public n53:fgui.GButton;
	public n55:fgui.GButton;
	public n58:btn_teshu1;
	public n62:btn_teshu1;
	public n63:btn_teshu1;
	public n64:fgui.GButton;

	public static URL:string = "ui://wx4xqeclnpfoj";

	public static createInstance():XianChong_juling {
		return <XianChong_juling>(fgui.UIPackage.createObject("XianChongUI","XianChong_juling"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.n36 = <fgui.GImage>(this.getChildAt(0));
		this.n45 = <fgui.GTextField>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.bg = <fgui.GLoader>(this.getChildAt(3));
		this.holder = <fgui.GGraph>(this.getChildAt(4));
		this.com_pet = <fgui.GComponent>(this.getChildAt(5));
		this.n50 = <fgui.GRichTextField>(this.getChildAt(6));
		this.n51 = <fgui.GTextField>(this.getChildAt(7));
		this.n53 = <fgui.GButton>(this.getChildAt(8));
		this.n55 = <fgui.GButton>(this.getChildAt(9));
		this.n58 = <btn_teshu1>(this.getChildAt(10));
		this.n62 = <btn_teshu1>(this.getChildAt(11));
		this.n63 = <btn_teshu1>(this.getChildAt(12));
		this.n64 = <fgui.GButton>(this.getChildAt(13));
	}
}