/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tybig1 extends fgui.GButton {

	public button:fgui.Controller;
	public icon:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsnpfoz45";

	public static createInstance():btn_tybig1 {
		return <btn_tybig1>(fgui.UIPackage.createObject("CommonUI","btn_tybig1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.icon = <fgui.GImage>(this.getChildAt(0));
		this.title = <fgui.GTextField>(this.getChildAt(1));
	}
}