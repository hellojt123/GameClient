/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tiiancai_get extends fgui.GButton {

	public button:fgui.Controller;

	public static URL:string = "ui://gzd2moaj9t41o";

	public static createInstance():btn_tiiancai_get {
		return <btn_tiiancai_get>(fgui.UIPackage.createObject("TianCaiUI","btn_tiiancai_get"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
	}
}