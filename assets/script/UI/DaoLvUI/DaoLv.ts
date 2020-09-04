/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import DaoLv_daolv1 from "./DaoLv_daolv1";
import DaoLv_daolv2 from "./DaoLv_daolv2";
import DaoLv_hunyan2 from "./DaoLv_hunyan2";
import DaoLv_hunyan3 from "./DaoLv_hunyan3";
import DaoLv_qingyuan from "./DaoLv_qingyuan";
import com_food from "./com_food";

export default class DaoLv extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public bg:fgui.GComponent;
	public dao_lv:DaoLv_daolv1;
	public marry:DaoLv_daolv2;
	public hunyan:DaoLv_hunyan2;
	public hunyan1:DaoLv_hunyan3;
	public n21:fgui.GImage;
	public n22:fgui.GImage;
	public n23:fgui.GImage;
	public tab_fabao:fgui.GButton;
	public tab_lianqi:fgui.GButton;
	public tab_liandan:fgui.GButton;
	public rank:DaoLv_qingyuan;
	public food:com_food;

	public static URL:string = "ui://kqhhvsgxpgsk13";

	public static createInstance():DaoLv {
		return <DaoLv>(fgui.UIPackage.createObject("DaoLvUI","DaoLv"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.bg = <fgui.GComponent>(this.getChildAt(1));
		this.dao_lv = <DaoLv_daolv1>(this.getChildAt(2));
		this.marry = <DaoLv_daolv2>(this.getChildAt(3));
		this.hunyan = <DaoLv_hunyan2>(this.getChildAt(4));
		this.hunyan1 = <DaoLv_hunyan3>(this.getChildAt(5));
		this.n21 = <fgui.GImage>(this.getChildAt(6));
		this.n22 = <fgui.GImage>(this.getChildAt(7));
		this.n23 = <fgui.GImage>(this.getChildAt(8));
		this.tab_fabao = <fgui.GButton>(this.getChildAt(9));
		this.tab_lianqi = <fgui.GButton>(this.getChildAt(10));
		this.tab_liandan = <fgui.GButton>(this.getChildAt(11));
		this.rank = <DaoLv_qingyuan>(this.getChildAt(12));
		this.food = <com_food>(this.getChildAt(13));
	}
}