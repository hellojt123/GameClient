/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_shu_a extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://d2q2ojebmj533";

	public static createInstance():btn_shu_a {
		return <btn_shu_a>(fgui.UIPackage.createObject("FeiGeUI","btn_shu_a"));
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