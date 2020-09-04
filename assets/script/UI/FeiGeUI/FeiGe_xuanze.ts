/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_shu_a from "./btn_shu_a";
import btn_shu_b from "./btn_shu_b";

export default class FeiGe_xuanze extends fgui.GComponent {

	public playername:fgui.GTextField;
	public line1:fgui.GTextField;
	public line2:fgui.GTextField;
	public line3:fgui.GTextField;
	public line4:fgui.GTextField;
	public n29:fgui.GTextField;
	public now:fgui.GTextField;
	public a1:btn_shu_a;
	public a2:btn_shu_b;

	public static URL:string = "ui://d2q2ojebmj53b";

	public static createInstance():FeiGe_xuanze {
		return <FeiGe_xuanze>(fgui.UIPackage.createObject("FeiGeUI","FeiGe_xuanze"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.playername = <fgui.GTextField>(this.getChildAt(0));
		this.line1 = <fgui.GTextField>(this.getChildAt(1));
		this.line2 = <fgui.GTextField>(this.getChildAt(2));
		this.line3 = <fgui.GTextField>(this.getChildAt(3));
		this.line4 = <fgui.GTextField>(this.getChildAt(4));
		this.n29 = <fgui.GTextField>(this.getChildAt(5));
		this.now = <fgui.GTextField>(this.getChildAt(6));
		this.a1 = <btn_shu_a>(this.getChildAt(7));
		this.a2 = <btn_shu_b>(this.getChildAt(8));
	}
}