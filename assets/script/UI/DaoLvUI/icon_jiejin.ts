/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class icon_jiejin extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://kqhhvsgxpgsk1f";

	public static createInstance():icon_jiejin {
		return <icon_jiejin>(fgui.UIPackage.createObject("DaoLvUI","icon_jiejin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}