/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import bg3 from "./bg3";

export default class Tips_0 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n25:fgui.GComponent;
	public n28:bg3;
	public n38:fgui.GImage;
	public desc:fgui.GTextField;
	public title:fgui.GTextField;

	public static URL:string = "ui://8cvrttujp7cvf";

	public static createInstance():Tips_0 {
		return <Tips_0>(fgui.UIPackage.createObject("TipsUI","Tips_0"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n25 = <fgui.GComponent>(this.getChildAt(1));
		this.n28 = <bg3>(this.getChildAt(2));
		this.n38 = <fgui.GImage>(this.getChildAt(3));
		this.desc = <fgui.GTextField>(this.getChildAt(4));
		this.title = <fgui.GTextField>(this.getChildAt(5));
	}
}