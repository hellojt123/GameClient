/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Com_paihang2 from "./Com_paihang2";

export default class PaiHang_shijie extends fgui.GComponent {

	public btn_tips:fgui.GButton;
	public ranklist:fgui.GList;
	public self:Com_paihang2;
	public top_title:fgui.GComponent;

	public static URL:string = "ui://v1igor53ossh6";

	public static createInstance():PaiHang_shijie {
		return <PaiHang_shijie>(fgui.UIPackage.createObject("PaiHangUI","PaiHang_shijie"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.btn_tips = <fgui.GButton>(this.getChildAt(0));
		this.ranklist = <fgui.GList>(this.getChildAt(1));
		this.self = <Com_paihang2>(this.getChildAt(2));
		this.top_title = <fgui.GComponent>(this.getChildAt(3));
	}
}