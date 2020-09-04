/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_point extends fgui.GComponent {

	public stats:fgui.Controller;
	public background:fgui.GImage;
	public stat2:fgui.GImage;
	public stat0:fgui.GImage;
	public stat1:fgui.GImage;
	public t0:fgui.Transition;

	public static URL:string = "ui://doxjdi1dnu3ez";

	public static createInstance():com_point {
		return <com_point>(fgui.UIPackage.createObject("DongFuUI","com_point"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.stats = this.getControllerAt(0);
		this.background = <fgui.GImage>(this.getChildAt(0));
		this.stat2 = <fgui.GImage>(this.getChildAt(1));
		this.stat0 = <fgui.GImage>(this.getChildAt(2));
		this.stat1 = <fgui.GImage>(this.getChildAt(3));
		this.t0 = this.getTransitionAt(0);
	}
}