/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Tips_0 from "./Tips_0";
import Tips_1 from "./Tips_1";
import Tips_2 from "./Tips_2";
import Tips_3 from "./Tips_3";
import Tips_4 from "./Tips_4";
import Tips_5 from "./Tips_5";

export default class Tips extends fgui.GComponent {

	public frame:fgui.GLabel;
	public tips0:Tips_0;
	public tips1:Tips_1;
	public tips2:Tips_2;
	public tips3:Tips_3;
	public tips4:Tips_4;
	public tips5:Tips_5;

	public static URL:string = "ui://8cvrttujjn9lg";

	public static createInstance():Tips {
		return <Tips>(fgui.UIPackage.createObject("TipsUI","Tips"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.tips0 = <Tips_0>(this.getChildAt(1));
		this.tips1 = <Tips_1>(this.getChildAt(2));
		this.tips2 = <Tips_2>(this.getChildAt(3));
		this.tips3 = <Tips_3>(this.getChildAt(4));
		this.tips4 = <Tips_4>(this.getChildAt(5));
		this.tips5 = <Tips_5>(this.getChildAt(6));
	}
}