/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import zhuansheng_bg from "./zhuansheng_bg";
import btn_zhuansheng_tips from "./btn_zhuansheng_tips";

export default class ZhuanSheng extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n33:zhuansheng_bg;
	public n34:fgui.GImage;
	public n35:fgui.GComponent;
	public n37:fgui.GImage;
	public n25:fgui.GComponent;
	public n38:fgui.GImage;
	public n39:fgui.GImage;
	public n40:fgui.GTextField;
	public btn_tips:btn_zhuansheng_tips;
	public n42:fgui.GImage;
	public n44:fgui.GTextField;
	public n45:fgui.GButton;
	public n47:fgui.GTextField;
	public n48:fgui.GButton;
	public n49:fgui.GTextField;
	public n50:fgui.GTextField;
	public n51:fgui.GTextField;
	public n55:fgui.GTextField;
	public friend1:fgui.GComponent;
	public friend2:fgui.GComponent;
	public friend3:fgui.GComponent;
	public friend4:fgui.GComponent;
	public btn_ad:fgui.GButton;
	public btn_invite:fgui.GButton;
	public n63:fgui.GRichTextField;
	public btn_zhuan:fgui.GButton;

	public static URL:string = "ui://znqvlu8up7cvz44";

	public static createInstance():ZhuanSheng {
		return <ZhuanSheng>(fgui.UIPackage.createObject("ZhuanShengUI","ZhuanSheng"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n33 = <zhuansheng_bg>(this.getChildAt(1));
		this.n34 = <fgui.GImage>(this.getChildAt(2));
		this.n35 = <fgui.GComponent>(this.getChildAt(3));
		this.n37 = <fgui.GImage>(this.getChildAt(4));
		this.n25 = <fgui.GComponent>(this.getChildAt(5));
		this.n38 = <fgui.GImage>(this.getChildAt(6));
		this.n39 = <fgui.GImage>(this.getChildAt(7));
		this.n40 = <fgui.GTextField>(this.getChildAt(8));
		this.btn_tips = <btn_zhuansheng_tips>(this.getChildAt(9));
		this.n42 = <fgui.GImage>(this.getChildAt(10));
		this.n44 = <fgui.GTextField>(this.getChildAt(11));
		this.n45 = <fgui.GButton>(this.getChildAt(12));
		this.n47 = <fgui.GTextField>(this.getChildAt(13));
		this.n48 = <fgui.GButton>(this.getChildAt(14));
		this.n49 = <fgui.GTextField>(this.getChildAt(15));
		this.n50 = <fgui.GTextField>(this.getChildAt(16));
		this.n51 = <fgui.GTextField>(this.getChildAt(17));
		this.n55 = <fgui.GTextField>(this.getChildAt(18));
		this.friend1 = <fgui.GComponent>(this.getChildAt(19));
		this.friend2 = <fgui.GComponent>(this.getChildAt(20));
		this.friend3 = <fgui.GComponent>(this.getChildAt(21));
		this.friend4 = <fgui.GComponent>(this.getChildAt(22));
		this.btn_ad = <fgui.GButton>(this.getChildAt(23));
		this.btn_invite = <fgui.GButton>(this.getChildAt(24));
		this.n63 = <fgui.GRichTextField>(this.getChildAt(25));
		this.btn_zhuan = <fgui.GButton>(this.getChildAt(26));
	}
}