/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class ProgressBar_tc extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://gzd2moaj9t41w";

	public static createInstance():ProgressBar_tc {
		return <ProgressBar_tc>(fgui.UIPackage.createObject("TianCaiUI","ProgressBar_tc"));
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