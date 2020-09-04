/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Tile_head1 from "./Tile_head1";
import btn_ty2 from "./btn_ty2";

export default class com_wedding extends fgui.GComponent {

	public bg:fgui.GImage;
	public n23:fgui.GImage;
	public head1:Tile_head1;
	public player1name:fgui.GTextField;
	public head2:Tile_head1;
	public player2name:fgui.GTextField;
	public num:fgui.GTextField;
	public time_end:fgui.GTextField;
	public n26:fgui.GTextField;
	public btn_join:btn_ty2;

	public static URL:string = "ui://i47gvnnsossh4";

	public static createInstance():com_wedding {
		return <com_wedding>(fgui.UIPackage.createObject("CommonUI","com_wedding"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.n23 = <fgui.GImage>(this.getChildAt(1));
		this.head1 = <Tile_head1>(this.getChildAt(2));
		this.player1name = <fgui.GTextField>(this.getChildAt(3));
		this.head2 = <Tile_head1>(this.getChildAt(4));
		this.player2name = <fgui.GTextField>(this.getChildAt(5));
		this.num = <fgui.GTextField>(this.getChildAt(6));
		this.time_end = <fgui.GTextField>(this.getChildAt(7));
		this.n26 = <fgui.GTextField>(this.getChildAt(8));
		this.btn_join = <btn_ty2>(this.getChildAt(9));
	}
}