/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_tiiancai_get from "./btn_tiiancai_get";

export default class TianCai_kufang extends fgui.GComponent {

	public tabs:fgui.Controller;
	public n3:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public btn_get:btn_tiiancai_get;
	public n64:fgui.GImage;
	public n65:fgui.GImage;
	public list1:fgui.GList;
	public list2:fgui.GList;

	public static URL:string = "ui://gzd2moaj9t41s";

	public static createInstance():TianCai_kufang {
		return <TianCai_kufang>(fgui.UIPackage.createObject("TianCaiUI","TianCai_kufang"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.n3 = <fgui.GTextField>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.btn_get = <btn_tiiancai_get>(this.getChildAt(2));
		this.n64 = <fgui.GImage>(this.getChildAt(3));
		this.n65 = <fgui.GImage>(this.getChildAt(4));
		this.list1 = <fgui.GList>(this.getChildAt(5));
		this.list2 = <fgui.GList>(this.getChildAt(6));
	}
}