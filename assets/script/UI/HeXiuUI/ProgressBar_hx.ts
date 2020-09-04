/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class ProgressBar_hx extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;

	public static URL:string = "ui://8udvtky310dnb9";

	public static createInstance():ProgressBar_hx {
		return <ProgressBar_hx>(fgui.UIPackage.createObject("HeXiuUI","ProgressBar_hx"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.bar = <fgui.GImage>(this.getChildAt(1));
	}
}