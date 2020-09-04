/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import title_body from "./title_body";

export default class GongFa extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public bg:fgui.GLoader;
	public toptitle:fgui.GComponent;
	public com_biaoqian2:fgui.GImage;
	public n26:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public n30:fgui.GTextField;
	public n45:fgui.GTextField;
	public n46:fgui.GTextField;
	public n48:fgui.GButton;
	public n49:fgui.GButton;
	public n50:fgui.GButton;
	public n52:fgui.GButton;
	public n53:fgui.GRichTextField;
	public n54:fgui.GImage;
	public n55:fgui.GImage;
	public n56:fgui.GImage;
	public n57:fgui.GButton;
	public tile_body1:title_body;
	public tile_body2:title_body;
	public tile_body3:title_body;
	public tile_body4:title_body;
	public tile_body5:title_body;
	public tile_body6:title_body;
	public tile_body7:title_body;

	public static URL:string = "ui://wfxf5sjqnpfo5";

	public static createInstance():GongFa {
		return <GongFa>(fgui.UIPackage.createObject("GongFaUI","GongFa"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.bg = <fgui.GLoader>(this.getChildAt(2));
		this.toptitle = <fgui.GComponent>(this.getChildAt(3));
		this.com_biaoqian2 = <fgui.GImage>(this.getChildAt(4));
		this.n26 = <fgui.GTextField>(this.getChildAt(5));
		this.btn_tips = <fgui.GButton>(this.getChildAt(6));
		this.n30 = <fgui.GTextField>(this.getChildAt(7));
		this.n45 = <fgui.GTextField>(this.getChildAt(8));
		this.n46 = <fgui.GTextField>(this.getChildAt(9));
		this.n48 = <fgui.GButton>(this.getChildAt(10));
		this.n49 = <fgui.GButton>(this.getChildAt(11));
		this.n50 = <fgui.GButton>(this.getChildAt(12));
		this.n52 = <fgui.GButton>(this.getChildAt(13));
		this.n53 = <fgui.GRichTextField>(this.getChildAt(14));
		this.n54 = <fgui.GImage>(this.getChildAt(15));
		this.n55 = <fgui.GImage>(this.getChildAt(16));
		this.n56 = <fgui.GImage>(this.getChildAt(17));
		this.n57 = <fgui.GButton>(this.getChildAt(18));
		this.tile_body1 = <title_body>(this.getChildAt(19));
		this.tile_body2 = <title_body>(this.getChildAt(20));
		this.tile_body3 = <title_body>(this.getChildAt(21));
		this.tile_body4 = <title_body>(this.getChildAt(22));
		this.tile_body5 = <title_body>(this.getChildAt(23));
		this.tile_body6 = <title_body>(this.getChildAt(24));
		this.tile_body7 = <title_body>(this.getChildAt(25));
	}
}