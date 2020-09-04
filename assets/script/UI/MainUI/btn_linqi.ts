/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_linqi extends fgui.GButton {

	public button:fgui.Controller;

	public static URL:string = "ui://l2fhsbqaje9uz58";

	public static createInstance():btn_linqi {
		return <btn_linqi>(fgui.UIPackage.createObject("MainUI","btn_linqi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
	}
}