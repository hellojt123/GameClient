/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tree_jdt from "./tree_jdt";
import btn_tsjiangli from "./btn_tsjiangli";
import btn_jiechu from "./btn_jiechu";
import icon_jiejin from "./icon_jiejin";
import btn_guoshi from "./btn_guoshi";

export default class DaoLv_daolv2 extends fgui.GComponent {

	public tree:fgui.GLoader;
	public n37:fgui.GImage;
	public btn_tips:fgui.GButton;
	public n38:fgui.GTextField;
	public process_bar:tree_jdt;
	public n53:fgui.GImage;
	public level_text:fgui.GTextField;
	public btn_awrards:btn_tsjiangli;
	public btn_cancel:btn_jiechu;
	public main_role:fgui.GButton;
	public n34:fgui.GImage;
	public playername:fgui.GTextField;
	public water_state:fgui.GRichTextField;
	public cp_role:fgui.GButton;
	public n59:fgui.GImage;
	public cp_name:fgui.GTextField;
	public cp_water_state:fgui.GRichTextField;
	public n39:fgui.GTextField;
	public cost:fgui.GTextField;
	public needitem:fgui.GButton;
	public award1num:fgui.GTextField;
	public award1item:fgui.GButton;
	public award2num:fgui.GTextField;
	public award2item:fgui.GButton;
	public btn_water:fgui.GButton;
	public btn_seed_0:icon_jiejin;
	public mc_seed:fgui.GMovieClip;
	public btn_seed_1:btn_guoshi;
	public btn_seed_2:btn_guoshi;
	public btn_seed_3:btn_guoshi;
	public btn_seed_4:btn_guoshi;
	public bufftime:fgui.GTextField;

	public static URL:string = "ui://kqhhvsgxpgsk18";

	public static createInstance():DaoLv_daolv2 {
		return <DaoLv_daolv2>(fgui.UIPackage.createObject("DaoLvUI","DaoLv_daolv2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tree = <fgui.GLoader>(this.getChildAt(0));
		this.n37 = <fgui.GImage>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.n38 = <fgui.GTextField>(this.getChildAt(3));
		this.process_bar = <tree_jdt>(this.getChildAt(4));
		this.n53 = <fgui.GImage>(this.getChildAt(5));
		this.level_text = <fgui.GTextField>(this.getChildAt(6));
		this.btn_awrards = <btn_tsjiangli>(this.getChildAt(7));
		this.btn_cancel = <btn_jiechu>(this.getChildAt(8));
		this.main_role = <fgui.GButton>(this.getChildAt(9));
		this.n34 = <fgui.GImage>(this.getChildAt(10));
		this.playername = <fgui.GTextField>(this.getChildAt(11));
		this.water_state = <fgui.GRichTextField>(this.getChildAt(12));
		this.cp_role = <fgui.GButton>(this.getChildAt(13));
		this.n59 = <fgui.GImage>(this.getChildAt(14));
		this.cp_name = <fgui.GTextField>(this.getChildAt(15));
		this.cp_water_state = <fgui.GRichTextField>(this.getChildAt(16));
		this.n39 = <fgui.GTextField>(this.getChildAt(17));
		this.cost = <fgui.GTextField>(this.getChildAt(18));
		this.needitem = <fgui.GButton>(this.getChildAt(19));
		this.award1num = <fgui.GTextField>(this.getChildAt(20));
		this.award1item = <fgui.GButton>(this.getChildAt(21));
		this.award2num = <fgui.GTextField>(this.getChildAt(22));
		this.award2item = <fgui.GButton>(this.getChildAt(23));
		this.btn_water = <fgui.GButton>(this.getChildAt(24));
		this.btn_seed_0 = <icon_jiejin>(this.getChildAt(25));
		this.mc_seed = <fgui.GMovieClip>(this.getChildAt(26));
		this.btn_seed_1 = <btn_guoshi>(this.getChildAt(27));
		this.btn_seed_2 = <btn_guoshi>(this.getChildAt(28));
		this.btn_seed_3 = <btn_guoshi>(this.getChildAt(29));
		this.btn_seed_4 = <btn_guoshi>(this.getChildAt(30));
		this.bufftime = <fgui.GTextField>(this.getChildAt(31));
	}
}