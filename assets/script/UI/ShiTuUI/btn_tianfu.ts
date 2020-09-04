/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tianfu extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public t:fgui.GTextField;

	public static URL:string = "ui://nyv4e8mlwx8xn";

	public static createInstance():btn_tianfu {
		return <btn_tianfu>(fgui.UIPackage.createObject("ShiTuUI","btn_tianfu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.t = <fgui.GTextField>(this.getChildAt(1));
	}
}