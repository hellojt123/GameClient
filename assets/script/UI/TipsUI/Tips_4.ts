/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import bg5 from "./bg5";

export default class Tips_4 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n25:fgui.GComponent;
	public n28:bg5;
	public n38:fgui.GImage;
	public text_title:fgui.GTextField;
	public desclist:fgui.GList;
	public btn_ok:fgui.GButton;
	public itemlist:fgui.GList;

	public static URL:string = "ui://8cvrttujhk76h";

	public static createInstance():Tips_4 {
		return <Tips_4>(fgui.UIPackage.createObject("TipsUI","Tips_4"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n25 = <fgui.GComponent>(this.getChildAt(1));
		this.n28 = <bg5>(this.getChildAt(2));
		this.n38 = <fgui.GImage>(this.getChildAt(3));
		this.text_title = <fgui.GTextField>(this.getChildAt(4));
		this.desclist = <fgui.GList>(this.getChildAt(5));
		this.btn_ok = <fgui.GButton>(this.getChildAt(6));
		this.itemlist = <fgui.GList>(this.getChildAt(7));
	}
}