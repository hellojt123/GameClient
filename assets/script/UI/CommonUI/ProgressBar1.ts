/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class ProgressBar1 extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;

	public static URL:string = "ui://i47gvnnss829z32";

	public static createInstance():ProgressBar1 {
		return <ProgressBar1>(fgui.UIPackage.createObject("CommonUI","ProgressBar1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.bar = <fgui.GImage>(this.getChildAt(1));
	}
}