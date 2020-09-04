/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Slider1_grip extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://i47gvnnspggfz4g";

	public static createInstance():Slider1_grip {
		return <Slider1_grip>(fgui.UIPackage.createObject("CommonUI","Slider1_grip"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}