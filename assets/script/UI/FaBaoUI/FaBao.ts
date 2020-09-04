/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import FaBao_lianqi from "./FaBao_lianqi";
import FaBao_liandan from "./FaBao_liandan";
import FaBao_fabao from "./FaBao_fabao";

export default class FaBao extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public lianqi:FaBao_lianqi;
	public liandan:FaBao_liandan;
	public fabao:FaBao_fabao;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public tab_fabao:fgui.GButton;
	public tab_lianqi:fgui.GButton;
	public tab_liandan:fgui.GButton;

	public static URL:string = "ui://voudmmseossh7";

	public static createInstance():FaBao {
		return <FaBao>(fgui.UIPackage.createObject("FaBaoUI","FaBao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.lianqi = <FaBao_lianqi>(this.getChildAt(2));
		this.liandan = <FaBao_liandan>(this.getChildAt(3));
		this.fabao = <FaBao_fabao>(this.getChildAt(4));
		this.n21 = <fgui.GImage>(this.getChildAt(5));
		this.n22 = <fgui.GImage>(this.getChildAt(6));
		this.n23 = <fgui.GImage>(this.getChildAt(7));
		this.tab_fabao = <fgui.GButton>(this.getChildAt(8));
		this.tab_lianqi = <fgui.GButton>(this.getChildAt(9));
		this.tab_liandan = <fgui.GButton>(this.getChildAt(10));
	}
}