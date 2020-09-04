/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_zhuan extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://l2fhsbqaerjzz2y";

	public static createInstance():btn_zhuan {
		return <btn_zhuan>(fgui.UIPackage.createObject("MainUI","btn_zhuan"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}