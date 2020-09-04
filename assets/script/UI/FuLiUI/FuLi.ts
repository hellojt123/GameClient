/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_day from "./btn_day";
import btn_daoju2 from "./btn_daoju2";

export default class FuLi extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n27:fgui.GComponent;
	public n23:fgui.GTextField;
	public n24:fgui.GComponent;
	public n25:fgui.GComponent;
	public fulidi:fgui.GImage;
	public huaban1:fgui.GImage;
	public btn_tips:fgui.GButton;
	public hengliang1:fgui.GImage;
	public hengliang2:fgui.GImage;
	public btn_day1:btn_day;
	public btn_day2:btn_day;
	public btn_day3:btn_day;
	public btn_day4:btn_day;
	public btn_day5:btn_day;
	public btn_day6:btn_day;
	public btn_day7:btn_daoju2;

	public static URL:string = "ui://vzsviw8nossh5";

	public static createInstance():FuLi {
		return <FuLi>(fgui.UIPackage.createObject("FuLiUI","FuLi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n27 = <fgui.GComponent>(this.getChildAt(1));
		this.n23 = <fgui.GTextField>(this.getChildAt(2));
		this.n24 = <fgui.GComponent>(this.getChildAt(3));
		this.n25 = <fgui.GComponent>(this.getChildAt(4));
		this.fulidi = <fgui.GImage>(this.getChildAt(5));
		this.huaban1 = <fgui.GImage>(this.getChildAt(6));
		this.btn_tips = <fgui.GButton>(this.getChildAt(7));
		this.hengliang1 = <fgui.GImage>(this.getChildAt(8));
		this.hengliang2 = <fgui.GImage>(this.getChildAt(9));
		this.btn_day1 = <btn_day>(this.getChildAt(10));
		this.btn_day2 = <btn_day>(this.getChildAt(11));
		this.btn_day3 = <btn_day>(this.getChildAt(12));
		this.btn_day4 = <btn_day>(this.getChildAt(13));
		this.btn_day5 = <btn_day>(this.getChildAt(14));
		this.btn_day6 = <btn_day>(this.getChildAt(15));
		this.btn_day7 = <btn_daoju2>(this.getChildAt(16));
	}
}