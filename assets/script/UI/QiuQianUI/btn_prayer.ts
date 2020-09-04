/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_bofang from "./btn_bofang";

export default class btn_prayer extends fgui.GButton {

	public n52:fgui.GImage;
	public n56:fgui.GImage;
	public n54:fgui.GImage;
	public n55:fgui.GImage;
	public qian_qiantong01:fgui.GImage;
	public n48:btn_bofang;
	public text3:fgui.GTextField;

	public static URL:string = "ui://7dihxyjjp8afe";

	public static createInstance():btn_prayer {
		return <btn_prayer>(fgui.UIPackage.createObject("QiuQianUI","btn_prayer"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n52 = <fgui.GImage>(this.getChildAt(0));
		this.n56 = <fgui.GImage>(this.getChildAt(1));
		this.n54 = <fgui.GImage>(this.getChildAt(2));
		this.n55 = <fgui.GImage>(this.getChildAt(3));
		this.qian_qiantong01 = <fgui.GImage>(this.getChildAt(4));
		this.n48 = <btn_bofang>(this.getChildAt(5));
		this.text3 = <fgui.GTextField>(this.getChildAt(6));
	}
}