/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class gx_gou extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public n1:fgui.GImage;

	public static URL:string = "ui://i47gvnnsp7cvz4f";

	public static createInstance():gx_gou {
		return <gx_gou>(fgui.UIPackage.createObject("CommonUI","gx_gou"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n1 = <fgui.GImage>(this.getChildAt(1));
	}
}