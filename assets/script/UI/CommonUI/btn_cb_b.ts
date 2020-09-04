/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_cb_b extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsossh2d";

	public static createInstance():btn_cb_b {
		return <btn_cb_b>(fgui.UIPackage.createObject("CommonUI","btn_cb_b"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.title = <fgui.GTextField>(this.getChildAt(1));
	}
}