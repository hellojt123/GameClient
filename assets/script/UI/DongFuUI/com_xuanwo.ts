/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_xuanwo extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n0:fgui.GMovieClip;

	public static URL:string = "ui://doxjdi1dtqmy16";

	public static createInstance():com_xuanwo {
		return <com_xuanwo>(fgui.UIPackage.createObject("DongFuUI","com_xuanwo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n0 = <fgui.GMovieClip>(this.getChildAt(1));
	}
}