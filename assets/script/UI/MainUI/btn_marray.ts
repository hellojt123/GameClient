/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_marray extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://l2fhsbqakkwiz2p";

	public static createInstance():btn_marray {
		return <btn_marray>(fgui.UIPackage.createObject("MainUI","btn_marray"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}