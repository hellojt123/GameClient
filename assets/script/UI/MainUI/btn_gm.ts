/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_gm extends fgui.GButton {

	public button:fgui.Controller;
	public n3:fgui.GTextField;
	public n4:fgui.GTextInput;
	public btn_send:fgui.GButton;

	public static URL:string = "ui://l2fhsbqapm3sz53";

	public static createInstance():btn_gm {
		return <btn_gm>(fgui.UIPackage.createObject("MainUI","btn_gm"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n3 = <fgui.GTextField>(this.getChildAt(0));
		this.n4 = <fgui.GTextInput>(this.getChildAt(1));
		this.btn_send = <fgui.GButton>(this.getChildAt(2));
	}
}