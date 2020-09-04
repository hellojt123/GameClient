/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tsjiangli extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://kqhhvsgxpgsk1e";

	public static createInstance():btn_tsjiangli {
		return <btn_tsjiangli>(fgui.UIPackage.createObject("DaoLvUI","btn_tsjiangli"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}