/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tips extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://i47gvnnskkwij";

	public static createInstance():btn_tips {
		return <btn_tips>(fgui.UIPackage.createObject("CommonUI","btn_tips"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}