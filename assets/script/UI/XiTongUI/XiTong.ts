/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import xitong_bg from "./xitong_bg";
import btn_lianxikefu from "./btn_lianxikefu";

export default class XiTong extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n33:xitong_bg;
	public n37:fgui.GImage;
	public n64:fgui.GImage;
	public n25:fgui.GComponent;
	public n56:fgui.GComponent;
	public n40:fgui.GTextField;
	public n44:fgui.GTextField;
	public n65:fgui.GTextField;
	public n66:fgui.GTextField;
	public n67:btn_lianxikefu;
	public n68:fgui.GTextField;
	public n70:fgui.GTextField;
	public n71:fgui.GTextField;
	public n72:fgui.GTextField;
	public n73:fgui.GTextField;
	public n74:fgui.GTextField;
	public n76:fgui.GTextField;
	public n77:fgui.GTextField;
	public n78:fgui.GTextField;
	public button_volume:fgui.GSlider;
	public button_mute:fgui.GButton;
	public n83:fgui.GTextField;
	public bgm_volume:fgui.GSlider;
	public bgm_mute:fgui.GButton;

	public static URL:string = "ui://bmd7yty5p7cvz4b";

	public static createInstance():XiTong {
		return <XiTong>(fgui.UIPackage.createObject("XiTongUI","XiTong"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n33 = <xitong_bg>(this.getChildAt(1));
		this.n37 = <fgui.GImage>(this.getChildAt(2));
		this.n64 = <fgui.GImage>(this.getChildAt(3));
		this.n25 = <fgui.GComponent>(this.getChildAt(4));
		this.n56 = <fgui.GComponent>(this.getChildAt(5));
		this.n40 = <fgui.GTextField>(this.getChildAt(6));
		this.n44 = <fgui.GTextField>(this.getChildAt(7));
		this.n65 = <fgui.GTextField>(this.getChildAt(8));
		this.n66 = <fgui.GTextField>(this.getChildAt(9));
		this.n67 = <btn_lianxikefu>(this.getChildAt(10));
		this.n68 = <fgui.GTextField>(this.getChildAt(11));
		this.n70 = <fgui.GTextField>(this.getChildAt(12));
		this.n71 = <fgui.GTextField>(this.getChildAt(13));
		this.n72 = <fgui.GTextField>(this.getChildAt(14));
		this.n73 = <fgui.GTextField>(this.getChildAt(15));
		this.n74 = <fgui.GTextField>(this.getChildAt(16));
		this.n76 = <fgui.GTextField>(this.getChildAt(17));
		this.n77 = <fgui.GTextField>(this.getChildAt(18));
		this.n78 = <fgui.GTextField>(this.getChildAt(19));
		this.button_volume = <fgui.GSlider>(this.getChildAt(20));
		this.button_mute = <fgui.GButton>(this.getChildAt(21));
		this.n83 = <fgui.GTextField>(this.getChildAt(22));
		this.bgm_volume = <fgui.GSlider>(this.getChildAt(23));
		this.bgm_mute = <fgui.GButton>(this.getChildAt(24));
	}
}