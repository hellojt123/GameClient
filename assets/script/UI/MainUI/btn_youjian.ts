/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_youjian extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public n1:fgui.GImage;

	public static URL:string = "ui://l2fhsbqaosshz3w";

	public static createInstance():btn_youjian {
		return <btn_youjian>(fgui.UIPackage.createObject("MainUI","btn_youjian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n1 = <fgui.GImage>(this.getChildAt(1));
	}
}