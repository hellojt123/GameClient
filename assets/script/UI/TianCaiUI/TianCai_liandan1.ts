/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_tiiancai_get from "./btn_tiiancai_get";
import tile_danyao from "./tile_danyao";
import com_tiancai_xuan from "./com_tiancai_xuan";
import liandan_success from "./liandan_success";

export default class TianCai_liandan1 extends fgui.GComponent {

	public bg:fgui.GLoader;
	public fabao:fgui.GLoader;
	public exp_bar:fgui.GProgressBar;
	public holder:fgui.GGraph;
	public btn_tips:fgui.GButton;
	public btn_get:btn_tiiancai_get;
	public mastername:fgui.GTextField;
	public time:fgui.GTextField;
	public target_item:tile_danyao;
	public n63:fgui.GImage;
	public n64:fgui.GImage;
	public btn_liandan:fgui.GButton;
	public need_left_item:tile_danyao;
	public need_right_item:tile_danyao;
	public ext_item:tile_danyao;
	public peifang_item:tile_danyao;
	public btns:fgui.GGroup;
	public bottom:fgui.GGroup;
	public itemname:fgui.GTextField;
	public level:fgui.GTextField;
	public n59:fgui.GImage;
	public ext:com_tiancai_xuan;
	public peifang:com_tiancai_xuan;
	public success:liandan_success;

	public static URL:string = "ui://gzd2moaj9t41n";

	public static createInstance():TianCai_liandan1 {
		return <TianCai_liandan1>(fgui.UIPackage.createObject("TianCaiUI","TianCai_liandan1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.fabao = <fgui.GLoader>(this.getChildAt(1));
		this.exp_bar = <fgui.GProgressBar>(this.getChildAt(2));
		this.holder = <fgui.GGraph>(this.getChildAt(3));
		this.btn_tips = <fgui.GButton>(this.getChildAt(4));
		this.btn_get = <btn_tiiancai_get>(this.getChildAt(5));
		this.mastername = <fgui.GTextField>(this.getChildAt(6));
		this.time = <fgui.GTextField>(this.getChildAt(7));
		this.target_item = <tile_danyao>(this.getChildAt(8));
		this.n63 = <fgui.GImage>(this.getChildAt(9));
		this.n64 = <fgui.GImage>(this.getChildAt(10));
		this.btn_liandan = <fgui.GButton>(this.getChildAt(11));
		this.need_left_item = <tile_danyao>(this.getChildAt(12));
		this.need_right_item = <tile_danyao>(this.getChildAt(13));
		this.ext_item = <tile_danyao>(this.getChildAt(14));
		this.peifang_item = <tile_danyao>(this.getChildAt(15));
		this.btns = <fgui.GGroup>(this.getChildAt(16));
		this.bottom = <fgui.GGroup>(this.getChildAt(17));
		this.itemname = <fgui.GTextField>(this.getChildAt(18));
		this.level = <fgui.GTextField>(this.getChildAt(19));
		this.n59 = <fgui.GImage>(this.getChildAt(20));
		this.ext = <com_tiancai_xuan>(this.getChildAt(21));
		this.peifang = <com_tiancai_xuan>(this.getChildAt(22));
		this.success = <liandan_success>(this.getChildAt(23));
	}
}