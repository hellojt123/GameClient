/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_cb_a extends fgui.GButton {

	public button:fgui.Controller;
	public n2:fgui.GImage;
	public n0:fgui.GImage;
	public n3:fgui.GImage;
	public n4:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsossh2c";

	public static createInstance():btn_cb_a {
		return <btn_cb_a>(fgui.UIPackage.createObject("CommonUI","btn_cb_a"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n2 = <fgui.GImage>(this.getChildAt(0));
		this.n0 = <fgui.GImage>(this.getChildAt(1));
		this.n3 = <fgui.GImage>(this.getChildAt(2));
		this.n4 = <fgui.GImage>(this.getChildAt(3));
		this.title = <fgui.GTextField>(this.getChildAt(4));
	}
}