/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import ShiTu_list from "./ShiTu_list";
import ShiTu_chushi from "./ShiTu_chushi";

export default class ShiTu extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public tab_fabao:fgui.GButton;
	public tab_lianqi:fgui.GButton;
	public tile_self:ShiTu_list;
	public graduation:ShiTu_chushi;

	public static URL:string = "ui://nyv4e8mlhbxc9";

	public static createInstance():ShiTu {
		return <ShiTu>(fgui.UIPackage.createObject("ShiTuUI","ShiTu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.n21 = <fgui.GImage>(this.getChildAt(2));
		this.n22 = <fgui.GImage>(this.getChildAt(3));
		this.n23 = <fgui.GImage>(this.getChildAt(4));
		this.tab_fabao = <fgui.GButton>(this.getChildAt(5));
		this.tab_lianqi = <fgui.GButton>(this.getChildAt(6));
		this.tile_self = <ShiTu_list>(this.getChildAt(7));
		this.graduation = <ShiTu_chushi>(this.getChildAt(8));
	}
}