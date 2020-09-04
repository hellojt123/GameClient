/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_jinjiu extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://kqhhvsgxtyfp1r";

	public static createInstance():btn_jinjiu {
		return <btn_jinjiu>(fgui.UIPackage.createObject("DaoLvUI","btn_jinjiu"));
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