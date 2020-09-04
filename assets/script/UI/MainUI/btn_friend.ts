/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_friend extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public red:fgui.GImage;

	public static URL:string = "ui://l2fhsbqaosshz43";

	public static createInstance():btn_friend {
		return <btn_friend>(fgui.UIPackage.createObject("MainUI","btn_friend"));
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