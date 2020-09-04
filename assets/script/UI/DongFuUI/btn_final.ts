/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_final extends fgui.GButton {

	public n17:fgui.GImage;

	public static URL:string = "ui://doxjdi1dnu3e11";

	public static createInstance():btn_final {
		return <btn_final>(fgui.UIPackage.createObject("DongFuUI","btn_final"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n17 = <fgui.GImage>(this.getChildAt(0));
	}
}