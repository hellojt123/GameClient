/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import bz_red from "./bz_red";
import btn_shitu from "./btn_shitu";

export default class tile_shifu extends fgui.GComponent {

	public n46:fgui.GImage;
	public head:fgui.GComponent;
	public playername:fgui.GTextField;
	public playerlevel:fgui.GTextField;
	public n47:bz_red;
	public btn_shitu:btn_shitu;

	public static URL:string = "ui://nyv4e8mlwx8xl";

	public static createInstance():tile_shifu {
		return <tile_shifu>(fgui.UIPackage.createObject("ShiTuUI","tile_shifu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n46 = <fgui.GImage>(this.getChildAt(0));
		this.head = <fgui.GComponent>(this.getChildAt(1));
		this.playername = <fgui.GTextField>(this.getChildAt(2));
		this.playerlevel = <fgui.GTextField>(this.getChildAt(3));
		this.n47 = <bz_red>(this.getChildAt(4));
		this.btn_shitu = <btn_shitu>(this.getChildAt(5));
	}
}