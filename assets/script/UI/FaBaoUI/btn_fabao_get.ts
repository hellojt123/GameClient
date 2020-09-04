/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_fabao_get extends fgui.GButton {

	public button:fgui.Controller;

	public static URL:string = "ui://voudmmsedvcvg";

	public static createInstance():btn_fabao_get {
		return <btn_fabao_get>(fgui.UIPackage.createObject("FaBaoUI","btn_fabao_get"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
	}
}