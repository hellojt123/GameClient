/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_sign extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public red:fgui.GImage;

	public static URL:string = "ui://l2fhsbqacxxxz2j";

	public static createInstance():btn_sign {
		return <btn_sign>(fgui.UIPackage.createObject("MainUI","btn_sign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.red = <fgui.GImage>(this.getChildAt(1));
	}
}