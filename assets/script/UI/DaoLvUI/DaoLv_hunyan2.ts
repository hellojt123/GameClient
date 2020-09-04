/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_zhankai from "./btn_zhankai";

export default class DaoLv_hunyan2 extends fgui.GComponent {

	public n87:fgui.GLoader;
	public n88:fgui.GLoader;
	public n70:fgui.GTextField;
	public n74:fgui.GTextField;
	public n75:fgui.GImage;
	public playername:fgui.GTextField;
	public n77:fgui.GImage;
	public cpname:fgui.GTextField;
	public n37:fgui.GImage;
	public btn_tips:fgui.GButton;
	public n38:fgui.GTextField;
	public n54:fgui.GTextField;
	public n39:fgui.GTextField;
	public btn_open_marry:fgui.GButton;
	public btn_marry_list:btn_zhankai;
	public cp_role:fgui.GButton;
	public player:fgui.GButton;

	public static URL:string = "ui://kqhhvsgxtyfp1k";

	public static createInstance():DaoLv_hunyan2 {
		return <DaoLv_hunyan2>(fgui.UIPackage.createObject("DaoLvUI","DaoLv_hunyan2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n87 = <fgui.GLoader>(this.getChildAt(0));
		this.n88 = <fgui.GLoader>(this.getChildAt(1));
		this.n70 = <fgui.GTextField>(this.getChildAt(2));
		this.n74 = <fgui.GTextField>(this.getChildAt(3));
		this.n75 = <fgui.GImage>(this.getChildAt(4));
		this.playername = <fgui.GTextField>(this.getChildAt(5));
		this.n77 = <fgui.GImage>(this.getChildAt(6));
		this.cpname = <fgui.GTextField>(this.getChildAt(7));
		this.n37 = <fgui.GImage>(this.getChildAt(8));
		this.btn_tips = <fgui.GButton>(this.getChildAt(9));
		this.n38 = <fgui.GTextField>(this.getChildAt(10));
		this.n54 = <fgui.GTextField>(this.getChildAt(11));
		this.n39 = <fgui.GTextField>(this.getChildAt(12));
		this.btn_open_marry = <fgui.GButton>(this.getChildAt(13));
		this.btn_marry_list = <btn_zhankai>(this.getChildAt(14));
		this.cp_role = <fgui.GButton>(this.getChildAt(15));
		this.player = <fgui.GButton>(this.getChildAt(16));
	}
}