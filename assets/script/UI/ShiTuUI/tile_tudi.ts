/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import bz_green from "./bz_green";
import btn_shitu from "./btn_shitu";

export default class tile_tudi extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GImage;
	public flash:bz_green;
	public head:fgui.GComponent;
	public playername:fgui.GTextField;
	public lastlogin:fgui.GTextField;
	public playerlevel:fgui.GTextField;
	public empty:fgui.GTextField;
	public btn_shitu:btn_shitu;
	public type0:fgui.GGroup;

	public static URL:string = "ui://nyv4e8mlwx8xh";

	public static createInstance():tile_tudi {
		return <tile_tudi>(fgui.UIPackage.createObject("ShiTuUI","tile_tudi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.flash = <bz_green>(this.getChildAt(1));
		this.head = <fgui.GComponent>(this.getChildAt(2));
		this.playername = <fgui.GTextField>(this.getChildAt(3));
		this.lastlogin = <fgui.GTextField>(this.getChildAt(4));
		this.playerlevel = <fgui.GTextField>(this.getChildAt(5));
		this.empty = <fgui.GTextField>(this.getChildAt(6));
		this.btn_shitu = <btn_shitu>(this.getChildAt(7));
		this.type0 = <fgui.GGroup>(this.getChildAt(8));
	}
}