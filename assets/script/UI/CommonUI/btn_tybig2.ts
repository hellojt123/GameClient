/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tybig2 extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsnpfoz49";

	public static createInstance():btn_tybig2 {
		return <btn_tybig2>(fgui.UIPackage.createObject("CommonUI","btn_tybig2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.title = <fgui.GTextField>(this.getChildAt(1));
	}
}