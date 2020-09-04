/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_xinjian from "./btn_xinjian";
import com_stats from "./com_stats";
import com_xuanwo from "./com_xuanwo";

export default class DongFu_xianjin1 extends fgui.GComponent {

	public tab_df:fgui.Controller;
	public bg:fgui.GLoader;
	public n9:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public btn_df1:btn_xinjian;
	public btn_df2:btn_xinjian;
	public btn_df3:btn_xinjian;
	public btn_df4:btn_xinjian;
	public neednum:fgui.GTextField;
	public needitem:fgui.GButton;
	public btn_shilian:fgui.GButton;
	public btn_item_num:fgui.GButton;
	public com_stats:com_stats;
	public com_xuanwo:com_xuanwo;
	public btn_tickets:fgui.GButton;
	public n93:fgui.GImage;
	public n94:fgui.GTextField;

	public static URL:string = "ui://doxjdi1dm5jxw";

	public static createInstance():DongFu_xianjin1 {
		return <DongFu_xianjin1>(fgui.UIPackage.createObject("DongFuUI","DongFu_xianjin1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tab_df = this.getControllerAt(0);
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.n9 = <fgui.GComponent>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.btn_df1 = <btn_xinjian>(this.getChildAt(3));
		this.btn_df2 = <btn_xinjian>(this.getChildAt(4));
		this.btn_df3 = <btn_xinjian>(this.getChildAt(5));
		this.btn_df4 = <btn_xinjian>(this.getChildAt(6));
		this.neednum = <fgui.GTextField>(this.getChildAt(7));
		this.needitem = <fgui.GButton>(this.getChildAt(8));
		this.btn_shilian = <fgui.GButton>(this.getChildAt(9));
		this.btn_item_num = <fgui.GButton>(this.getChildAt(10));
		this.com_stats = <com_stats>(this.getChildAt(11));
		this.com_xuanwo = <com_xuanwo>(this.getChildAt(12));
		this.btn_tickets = <fgui.GButton>(this.getChildAt(13));
		this.n93 = <fgui.GImage>(this.getChildAt(14));
		this.n94 = <fgui.GTextField>(this.getChildAt(15));
	}
}