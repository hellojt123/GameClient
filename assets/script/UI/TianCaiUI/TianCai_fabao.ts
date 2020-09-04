/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tile_field from "./tile_field";
import btn_juqi from "./btn_juqi";
import ProgressBar_tc from "./ProgressBar_tc";
import btn_chanzi1 from "./btn_chanzi1";
import com_plantinfo from "./com_plantinfo";

export default class TianCai_fabao extends fgui.GComponent {

	public tabs:fgui.Controller;
	public tileIndex:fgui.Controller;
	public bg:fgui.GLoader;
	public tile_1:tile_field;
	public tile_2:tile_field;
	public tile_3:tile_field;
	public tile_4:tile_field;
	public tile_5:tile_field;
	public tile_6:tile_field;
	public tile_7:tile_field;
	public tile_8:tile_field;
	public tile_9:tile_field;
	public n90:fgui.GGroup;
	public n3:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public n70:fgui.GImage;
	public level:fgui.GTextField;
	public buff_time:fgui.GTextField;
	public btn_juqi:btn_juqi;
	public exp_progress_bar:ProgressBar_tc;
	public btn_dig:btn_chanzi1;
	public seeds:fgui.GList;
	public seedinfo:com_plantinfo;

	public static URL:string = "ui://gzd2moaj9t41u";

	public static createInstance():TianCai_fabao {
		return <TianCai_fabao>(fgui.UIPackage.createObject("TianCaiUI","TianCai_fabao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.tileIndex = this.getControllerAt(1);
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.tile_1 = <tile_field>(this.getChildAt(1));
		this.tile_2 = <tile_field>(this.getChildAt(2));
		this.tile_3 = <tile_field>(this.getChildAt(3));
		this.tile_4 = <tile_field>(this.getChildAt(4));
		this.tile_5 = <tile_field>(this.getChildAt(5));
		this.tile_6 = <tile_field>(this.getChildAt(6));
		this.tile_7 = <tile_field>(this.getChildAt(7));
		this.tile_8 = <tile_field>(this.getChildAt(8));
		this.tile_9 = <tile_field>(this.getChildAt(9));
		this.n90 = <fgui.GGroup>(this.getChildAt(10));
		this.n3 = <fgui.GTextField>(this.getChildAt(11));
		this.btn_tips = <fgui.GButton>(this.getChildAt(12));
		this.n70 = <fgui.GImage>(this.getChildAt(13));
		this.level = <fgui.GTextField>(this.getChildAt(14));
		this.buff_time = <fgui.GTextField>(this.getChildAt(15));
		this.btn_juqi = <btn_juqi>(this.getChildAt(16));
		this.exp_progress_bar = <ProgressBar_tc>(this.getChildAt(17));
		this.btn_dig = <btn_chanzi1>(this.getChildAt(18));
		this.seeds = <fgui.GList>(this.getChildAt(19));
		this.seedinfo = <com_plantinfo>(this.getChildAt(20));
	}
}