/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_menturm extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://l2fhsbqakkwiz2s";

	public static createInstance():btn_menturm {
		return <btn_menturm>(fgui.UIPackage.createObject("MainUI","btn_menturm"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}