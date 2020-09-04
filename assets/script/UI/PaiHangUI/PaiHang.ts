/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import PaiHang_shijie from "./PaiHang_shijie";
import PaiHang_haoyou from "./PaiHang_haoyou";

export default class PaiHang extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public n19:fgui.GTextField;
	public shijie:PaiHang_shijie;
	public haoyou:PaiHang_haoyou;
	public n20:fgui.GImage;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GButton;
	public n26:fgui.GButton;

	public static URL:string = "ui://v1igor53ossh0";

	public static createInstance():PaiHang {
		return <PaiHang>(fgui.UIPackage.createObject("PaiHangUI","PaiHang"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.n19 = <fgui.GTextField>(this.getChildAt(2));
		this.shijie = <PaiHang_shijie>(this.getChildAt(3));
		this.haoyou = <PaiHang_haoyou>(this.getChildAt(4));
		this.n20 = <fgui.GImage>(this.getChildAt(5));
		this.n21 = <fgui.GImage>(this.getChildAt(6));
		this.n22 = <fgui.GImage>(this.getChildAt(7));
		this.n23 = <fgui.GButton>(this.getChildAt(8));
		this.n26 = <fgui.GButton>(this.getChildAt(9));
	}
}