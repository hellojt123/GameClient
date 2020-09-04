/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tree_jdt extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://kqhhvsgxpgsk1c";

	public static createInstance():tree_jdt {
		return <tree_jdt>(fgui.UIPackage.createObject("DaoLvUI","tree_jdt"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.bar = <fgui.GImage>(this.getChildAt(1));
		this.title = <fgui.GTextField>(this.getChildAt(2));
	}
}