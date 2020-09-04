/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Com_daolv from "./Com_daolv";

export default class DaoLv_qingyuan extends fgui.GComponent {

	public btn_tips:fgui.GButton;
	public n14:fgui.GComponent;
	public ranklist:fgui.GList;
	public self:Com_daolv;

	public static URL:string = "ui://kqhhvsgxtyfp1t";

	public static createInstance():DaoLv_qingyuan {
		return <DaoLv_qingyuan>(fgui.UIPackage.createObject("DaoLvUI","DaoLv_qingyuan"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.btn_tips = <fgui.GButton>(this.getChildAt(0));
		this.n14 = <fgui.GComponent>(this.getChildAt(1));
		this.ranklist = <fgui.GList>(this.getChildAt(2));
		this.self = <Com_daolv>(this.getChildAt(3));
	}
}