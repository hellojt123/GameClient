/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_fabao_get from "./btn_fabao_get";
import tile_danyao2 from "./tile_danyao2";
import faba_sucess from "./faba_sucess";

export default class FaBao_liandan extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GLoader;
	public fabao:fgui.GLoader;
	public n42:fgui.GProgressBar;
	public btn_tips:fgui.GButton;
	public btn_get:btn_fabao_get;
	public n3:fgui.GTextField;
	public n7:fgui.GTextField;
	public n6:fgui.GTextField;
	public targetitem:tile_danyao2;
	public n12:fgui.GButton;
	public need_left:tile_danyao2;
	public need_right:tile_danyao2;
	public target1:tile_danyao2;
	public target2:tile_danyao2;
	public target3:tile_danyao2;
	public target4:tile_danyao2;
	public btns:fgui.GGroup;
	public bottom:fgui.GGroup;
	public btn_ad:fgui.GButton;
	public n59:fgui.GTextField;
	public ad:fgui.GGroup;
	public success:faba_sucess;

	public static URL:string = "ui://voudmmsem5jxz4u";

	public static createInstance():FaBao_liandan {
		return <FaBao_liandan>(fgui.UIPackage.createObject("FaBaoUI","FaBao_liandan"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.fabao = <fgui.GLoader>(this.getChildAt(1));
		this.n42 = <fgui.GProgressBar>(this.getChildAt(2));
		this.btn_tips = <fgui.GButton>(this.getChildAt(3));
		this.btn_get = <btn_fabao_get>(this.getChildAt(4));
		this.n3 = <fgui.GTextField>(this.getChildAt(5));
		this.n7 = <fgui.GTextField>(this.getChildAt(6));
		this.n6 = <fgui.GTextField>(this.getChildAt(7));
		this.targetitem = <tile_danyao2>(this.getChildAt(8));
		this.n12 = <fgui.GButton>(this.getChildAt(9));
		this.need_left = <tile_danyao2>(this.getChildAt(10));
		this.need_right = <tile_danyao2>(this.getChildAt(11));
		this.target1 = <tile_danyao2>(this.getChildAt(12));
		this.target2 = <tile_danyao2>(this.getChildAt(13));
		this.target3 = <tile_danyao2>(this.getChildAt(14));
		this.target4 = <tile_danyao2>(this.getChildAt(15));
		this.btns = <fgui.GGroup>(this.getChildAt(16));
		this.bottom = <fgui.GGroup>(this.getChildAt(17));
		this.btn_ad = <fgui.GButton>(this.getChildAt(18));
		this.n59 = <fgui.GTextField>(this.getChildAt(19));
		this.ad = <fgui.GGroup>(this.getChildAt(20));
		this.success = <faba_sucess>(this.getChildAt(21));
	}
}