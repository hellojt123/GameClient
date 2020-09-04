/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_teshu1 extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public n2:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://wx4xqeclnpfom";

	public static createInstance():btn_teshu1 {
		return <btn_teshu1>(fgui.UIPackage.createObject("XianChongUI","btn_teshu1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n2 = <fgui.GImage>(this.getChildAt(1));
		this.title = <fgui.GTextField>(this.getChildAt(2));
	}
}