/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Slider1_grip from "./Slider1_grip";

export default class Slider1 extends fgui.GSlider {

	public n0:fgui.GImage;
	public bar:fgui.GImage;
	public grip:Slider1_grip;

	public static URL:string = "ui://i47gvnnsp7cvz4e";

	public static createInstance():Slider1 {
		return <Slider1>(fgui.UIPackage.createObject("CommonUI","Slider1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.bar = <fgui.GImage>(this.getChildAt(1));
		this.grip = <Slider1_grip>(this.getChildAt(2));
	}
}