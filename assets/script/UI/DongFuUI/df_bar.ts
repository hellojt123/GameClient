/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class df_bar extends fgui.GProgressBar {

	public n0:fgui.GImage;
	public bar:fgui.GImage;

	public static URL:string = "ui://doxjdi1dnu3ey";

	public static createInstance():df_bar {
		return <df_bar>(fgui.UIPackage.createObject("DongFuUI","df_bar"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.bar = <fgui.GImage>(this.getChildAt(1));
	}
}