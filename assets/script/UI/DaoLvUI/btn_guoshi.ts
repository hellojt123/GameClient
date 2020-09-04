/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_guoshi extends fgui.GButton {

	public border:fgui.GImage;
	public time:fgui.GTextField;
	public seedicon:fgui.GLoader;

	public static URL:string = "ui://kqhhvsgxpgsk1h";

	public static createInstance():btn_guoshi {
		return <btn_guoshi>(fgui.UIPackage.createObject("DaoLvUI","btn_guoshi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.border = <fgui.GImage>(this.getChildAt(0));
		this.time = <fgui.GTextField>(this.getChildAt(1));
		this.seedicon = <fgui.GLoader>(this.getChildAt(2));
	}
}