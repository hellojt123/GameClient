/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class ProgressBar2 extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsnpfoe";

	public static createInstance():ProgressBar2 {
		return <ProgressBar2>(fgui.UIPackage.createObject("CommonUI","ProgressBar2"));
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