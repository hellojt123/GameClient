/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import trash_tile from "./trash_tile";
import com_fabao_view from "./com_fabao_view";

export default class FaBao_fabao extends fgui.GComponent {

	public bg:fgui.GLoader;
	public btn_tips:fgui.GButton;
	public bg_fabao:fgui.GLoader;
	public n3:fgui.GTextField;
	public n4:fgui.GTextField;
	public n6:fgui.GTextField;
	public n7:fgui.GRichTextField;
	public n10:fgui.GButton;
	public n12:fgui.GButton;
	public mc_fabao:fgui.GMovieClip;
	public n15:fgui.GImage;
	public kuang:fgui.GGroup;
	public n26:fgui.GButton;
	public n14:fgui.GImage;
	public n16:fgui.GImage;
	public n17:fgui.GImage;
	public n18:fgui.GImage;
	public n19:fgui.GImage;
	public n20:fgui.GImage;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public n25:fgui.GList;
	public trash:trash_tile;
	public level:fgui.GTextField;
	public fabao_view:com_fabao_view;

	public static URL:string = "ui://voudmmsenpfob";

	public static createInstance():FaBao_fabao {
		return <FaBao_fabao>(fgui.UIPackage.createObject("FaBaoUI","FaBao_fabao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.bg_fabao = <fgui.GLoader>(this.getChildAt(2));
		this.n3 = <fgui.GTextField>(this.getChildAt(3));
		this.n4 = <fgui.GTextField>(this.getChildAt(4));
		this.n6 = <fgui.GTextField>(this.getChildAt(5));
		this.n7 = <fgui.GRichTextField>(this.getChildAt(6));
		this.n10 = <fgui.GButton>(this.getChildAt(7));
		this.n12 = <fgui.GButton>(this.getChildAt(8));
		this.mc_fabao = <fgui.GMovieClip>(this.getChildAt(9));
		this.n15 = <fgui.GImage>(this.getChildAt(10));
		this.kuang = <fgui.GGroup>(this.getChildAt(11));
		this.n26 = <fgui.GButton>(this.getChildAt(12));
		this.n14 = <fgui.GImage>(this.getChildAt(13));
		this.n16 = <fgui.GImage>(this.getChildAt(14));
		this.n17 = <fgui.GImage>(this.getChildAt(15));
		this.n18 = <fgui.GImage>(this.getChildAt(16));
		this.n19 = <fgui.GImage>(this.getChildAt(17));
		this.n20 = <fgui.GImage>(this.getChildAt(18));
		this.n21 = <fgui.GImage>(this.getChildAt(19));
		this.n22 = <fgui.GImage>(this.getChildAt(20));
		this.n23 = <fgui.GImage>(this.getChildAt(21));
		this.n25 = <fgui.GList>(this.getChildAt(22));
		this.trash = <trash_tile>(this.getChildAt(23));
		this.level = <fgui.GTextField>(this.getChildAt(24));
		this.fabao_view = <com_fabao_view>(this.getChildAt(25));
	}
}