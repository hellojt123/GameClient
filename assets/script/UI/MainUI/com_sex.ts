/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_main_chose from "./btn_main_chose";

export default class com_sex extends fgui.GComponent {

	public tab_sex:fgui.Controller;
	public frame:fgui.GLabel;
	public n0:fgui.GImage;
	public n1:fgui.GTextField;
	public btn_chose:fgui.GButton;
	public btn_woman:btn_main_chose;
	public btn_man:btn_main_chose;

	public static URL:string = "ui://l2fhsbqade8kz55";

	public static createInstance():com_sex {
		return <com_sex>(fgui.UIPackage.createObject("MainUI","com_sex"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tab_sex = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n0 = <fgui.GImage>(this.getChildAt(1));
		this.n1 = <fgui.GTextField>(this.getChildAt(2));
		this.btn_chose = <fgui.GButton>(this.getChildAt(3));
		this.btn_woman = <btn_main_chose>(this.getChildAt(4));
		this.btn_man = <btn_main_chose>(this.getChildAt(5));
	}
}