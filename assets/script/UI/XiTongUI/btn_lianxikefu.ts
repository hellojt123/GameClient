/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_lianxikefu extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public text:fgui.GTextField;

	public static URL:string = "ui://bmd7yty5p7cvz4a";

	public static createInstance():btn_lianxikefu {
		return <btn_lianxikefu>(fgui.UIPackage.createObject("XiTongUI","btn_lianxikefu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.text = <fgui.GTextField>(this.getChildAt(1));
	}
}