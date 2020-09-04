/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_yaoqing extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public iv:fgui.GTextField;

	public static URL:string = "ui://8udvtky310dnb8";

	public static createInstance():btn_yaoqing {
		return <btn_yaoqing>(fgui.UIPackage.createObject("HeXiuUI","btn_yaoqing"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.iv = <fgui.GTextField>(this.getChildAt(1));
	}
}