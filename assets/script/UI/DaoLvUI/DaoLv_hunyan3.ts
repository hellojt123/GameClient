/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import hb_jdt from "./hb_jdt";
import icon_hongbao1 from "./icon_hongbao1";
import btn_songli from "./btn_songli";
import btn_jinjiu from "./btn_jinjiu";
import btn_hongbao from "./btn_hongbao";

export default class DaoLv_hunyan3 extends fgui.GComponent {

	public btn_tips:fgui.GButton;
	public solgan:fgui.GTextField;
	public n128:fgui.GLoader;
	public n54:fgui.GTextField;
	public time:fgui.GTextField;
	public process_gift:hb_jdt;
	public n95:fgui.GImage;
	public playernum:fgui.GTextField;
	public btn_guest_list:fgui.GButton;
	public n96:fgui.GTextField;
	public gift_num:fgui.GTextField;
	public gift1_num:fgui.GTextField;
	public n101:icon_hongbao1;
	public gift2_num:fgui.GTextField;
	public n104:icon_hongbao1;
	public gift3_num:fgui.GTextField;
	public n109:icon_hongbao1;
	public gift4_num:fgui.GTextField;
	public n108:icon_hongbao1;
	public n94:fgui.GTextField;
	public award1num:fgui.GTextField;
	public award1:fgui.GButton;
	public award2num:fgui.GTextField;
	public award2:fgui.GButton;
	public n91:fgui.GImage;
	public award3num:fgui.GTextField;
	public btn_gift:btn_songli;
	public cost:fgui.GTextField;
	public item_cost:fgui.GButton;
	public btn_drink:btn_jinjiu;
	public times:fgui.GTextField;
	public di2:fgui.GGroup;
	public btn_invite:fgui.GButton;
	public box:fgui.GComponent;
	public hongbao1:btn_hongbao;
	public hongbao2:btn_hongbao;
	public hongbao3:btn_hongbao;
	public hongbao4:btn_hongbao;
	public hongbao:fgui.GGroup;

	public static URL:string = "ui://kqhhvsgxtyfp1n";

	public static createInstance():DaoLv_hunyan3 {
		return <DaoLv_hunyan3>(fgui.UIPackage.createObject("DaoLvUI","DaoLv_hunyan3"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.btn_tips = <fgui.GButton>(this.getChildAt(0));
		this.solgan = <fgui.GTextField>(this.getChildAt(1));
		this.n128 = <fgui.GLoader>(this.getChildAt(2));
		this.n54 = <fgui.GTextField>(this.getChildAt(3));
		this.time = <fgui.GTextField>(this.getChildAt(4));
		this.process_gift = <hb_jdt>(this.getChildAt(5));
		this.n95 = <fgui.GImage>(this.getChildAt(6));
		this.playernum = <fgui.GTextField>(this.getChildAt(7));
		this.btn_guest_list = <fgui.GButton>(this.getChildAt(8));
		this.n96 = <fgui.GTextField>(this.getChildAt(9));
		this.gift_num = <fgui.GTextField>(this.getChildAt(10));
		this.gift1_num = <fgui.GTextField>(this.getChildAt(11));
		this.n101 = <icon_hongbao1>(this.getChildAt(12));
		this.gift2_num = <fgui.GTextField>(this.getChildAt(13));
		this.n104 = <icon_hongbao1>(this.getChildAt(14));
		this.gift3_num = <fgui.GTextField>(this.getChildAt(15));
		this.n109 = <icon_hongbao1>(this.getChildAt(16));
		this.gift4_num = <fgui.GTextField>(this.getChildAt(17));
		this.n108 = <icon_hongbao1>(this.getChildAt(18));
		this.n94 = <fgui.GTextField>(this.getChildAt(19));
		this.award1num = <fgui.GTextField>(this.getChildAt(20));
		this.award1 = <fgui.GButton>(this.getChildAt(21));
		this.award2num = <fgui.GTextField>(this.getChildAt(22));
		this.award2 = <fgui.GButton>(this.getChildAt(23));
		this.n91 = <fgui.GImage>(this.getChildAt(24));
		this.award3num = <fgui.GTextField>(this.getChildAt(25));
		this.btn_gift = <btn_songli>(this.getChildAt(26));
		this.cost = <fgui.GTextField>(this.getChildAt(27));
		this.item_cost = <fgui.GButton>(this.getChildAt(28));
		this.btn_drink = <btn_jinjiu>(this.getChildAt(29));
		this.times = <fgui.GTextField>(this.getChildAt(30));
		this.di2 = <fgui.GGroup>(this.getChildAt(31));
		this.btn_invite = <fgui.GButton>(this.getChildAt(32));
		this.box = <fgui.GComponent>(this.getChildAt(33));
		this.hongbao1 = <btn_hongbao>(this.getChildAt(34));
		this.hongbao2 = <btn_hongbao>(this.getChildAt(35));
		this.hongbao3 = <btn_hongbao>(this.getChildAt(36));
		this.hongbao4 = <btn_hongbao>(this.getChildAt(37));
		this.hongbao = <fgui.GGroup>(this.getChildAt(38));
	}
}