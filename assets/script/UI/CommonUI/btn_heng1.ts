/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_heng1 extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsmj53z4c";

	public static createInstance():btn_heng1 {
		return <btn_heng1>(fgui.UIPackage.createObject("CommonUI","btn_heng1"));
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