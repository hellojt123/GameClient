/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_chanzi1 extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://gzd2moaj9t41c";

	public static createInstance():btn_chanzi1 {
		return <btn_chanzi1>(fgui.UIPackage.createObject("TianCaiUI","btn_chanzi1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}