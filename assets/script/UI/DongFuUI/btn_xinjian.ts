/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_xinjian extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public n1:fgui.GImage;
	public text_title:fgui.GTextField;

	public static URL:string = "ui://doxjdi1dm5jxx";

	public static createInstance():btn_xinjian {
		return <btn_xinjian>(fgui.UIPackage.createObject("DongFuUI","btn_xinjian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n1 = <fgui.GImage>(this.getChildAt(1));
		this.text_title = <fgui.GTextField>(this.getChildAt(2));
	}
}