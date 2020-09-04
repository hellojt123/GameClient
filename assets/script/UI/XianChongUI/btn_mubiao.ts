/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_mubiao extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://wx4xqeclqfxx13";

	public static createInstance():btn_mubiao {
		return <btn_mubiao>(fgui.UIPackage.createObject("XianChongUI","btn_mubiao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}