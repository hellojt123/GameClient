/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_jiang extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://i47gvnnsgtwuz4i";

	public static createInstance():btn_jiang {
		return <btn_jiang>(fgui.UIPackage.createObject("CommonUI","btn_jiang"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}