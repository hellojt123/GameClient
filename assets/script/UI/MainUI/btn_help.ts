/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_help extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://l2fhsbqaosshz3x";

	public static createInstance():btn_help {
		return <btn_help>(fgui.UIPackage.createObject("MainUI","btn_help"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}