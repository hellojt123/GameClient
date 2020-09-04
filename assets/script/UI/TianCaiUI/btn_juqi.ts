/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_juqi extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://gzd2moaj9t41d";

	public static createInstance():btn_juqi {
		return <btn_juqi>(fgui.UIPackage.createObject("TianCaiUI","btn_juqi"));
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