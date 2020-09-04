/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class hb_jdt extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;

	public static URL:string = "ui://kqhhvsgxpgsk1b";

	public static createInstance():hb_jdt {
		return <hb_jdt>(fgui.UIPackage.createObject("DaoLvUI","hb_jdt"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.bar = <fgui.GImage>(this.getChildAt(1));
	}
}