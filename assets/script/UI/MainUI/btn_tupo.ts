/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import com_wave from "./com_wave";

export default class btn_tupo extends fgui.GButton {

	public button:fgui.Controller;
	public n2:fgui.GImage;
	public n5:fgui.GImage;
	public com_wave:com_wave;
	public state:fgui.GTextField;
	public n4:fgui.GImage;
	public time:fgui.GTextField;

	public static URL:string = "ui://l2fhsbqakkwiz2x";

	public static createInstance():btn_tupo {
		return <btn_tupo>(fgui.UIPackage.createObject("MainUI","btn_tupo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n2 = <fgui.GImage>(this.getChildAt(0));
		this.n5 = <fgui.GImage>(this.getChildAt(1));
		this.com_wave = <com_wave>(this.getChildAt(2));
		this.state = <fgui.GTextField>(this.getChildAt(3));
		this.n4 = <fgui.GImage>(this.getChildAt(4));
		this.time = <fgui.GTextField>(this.getChildAt(5));
	}
}