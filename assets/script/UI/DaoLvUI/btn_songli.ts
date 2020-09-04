/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_songli extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://kqhhvsgxtyfp1q";

	public static createInstance():btn_songli {
		return <btn_songli>(fgui.UIPackage.createObject("DaoLvUI","btn_songli"));
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