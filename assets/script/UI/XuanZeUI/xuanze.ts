/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Button1 from "./Button1";
import btn_woman from "./btn_woman";
import btn_man from "./btn_man";

export default class xuanze extends fgui.GComponent {

	public tab_sex:fgui.Controller;
	public bg:fgui.GLoader;
	public btn_ok:Button1;
	public btn_woman:btn_woman;
	public btn_man:btn_man;
	public main_role:fgui.GButton;

	public static URL:string = "ui://h8gquo0fnj788";

	public static createInstance():xuanze {
		return <xuanze>(fgui.UIPackage.createObject("XuanZeUI","xuanze"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tab_sex = this.getControllerAt(0);
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.btn_ok = <Button1>(this.getChildAt(1));
		this.btn_woman = <btn_woman>(this.getChildAt(2));
		this.btn_man = <btn_man>(this.getChildAt(3));
		this.main_role = <fgui.GButton>(this.getChildAt(4));
	}
}