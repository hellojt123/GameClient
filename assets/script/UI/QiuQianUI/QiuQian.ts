/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Component_qiantong from "./Component_qiantong";
import QiuQian_jieqian from "./QiuQian_jieqian";

export default class QiuQian extends fgui.GComponent {

	public bg:fgui.GComponent;
	public frame:fgui.GLabel;
	public yulandi:fgui.GImage;
	public n27:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public qian_small1:fgui.GImage;
	public shangshangqian:fgui.GTextField;
	public x4:fgui.GTextField;
	public qian_small2:fgui.GImage;
	public shangqian:fgui.GTextField;
	public x3:fgui.GTextField;
	public qian_small3:fgui.GImage;
	public zhongqian:fgui.GTextField;
	public x2:fgui.GTextField;
	public n53:fgui.GRichTextField;
	public n49:fgui.GTextField;
	public qian_qiantong01:Component_qiantong;
	public text1:fgui.GComponent;
	public book:QiuQian_jieqian;

	public static URL:string = "ui://7dihxyjjjzrz5";

	public static createInstance():QiuQian {
		return <QiuQian>(fgui.UIPackage.createObject("QiuQianUI","QiuQian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GComponent>(this.getChildAt(0));
		this.frame = <fgui.GLabel>(this.getChildAt(1));
		this.yulandi = <fgui.GImage>(this.getChildAt(2));
		this.n27 = <fgui.GTextField>(this.getChildAt(3));
		this.btn_tips = <fgui.GButton>(this.getChildAt(4));
		this.qian_small1 = <fgui.GImage>(this.getChildAt(5));
		this.shangshangqian = <fgui.GTextField>(this.getChildAt(6));
		this.x4 = <fgui.GTextField>(this.getChildAt(7));
		this.qian_small2 = <fgui.GImage>(this.getChildAt(8));
		this.shangqian = <fgui.GTextField>(this.getChildAt(9));
		this.x3 = <fgui.GTextField>(this.getChildAt(10));
		this.qian_small3 = <fgui.GImage>(this.getChildAt(11));
		this.zhongqian = <fgui.GTextField>(this.getChildAt(12));
		this.x2 = <fgui.GTextField>(this.getChildAt(13));
		this.n53 = <fgui.GRichTextField>(this.getChildAt(14));
		this.n49 = <fgui.GTextField>(this.getChildAt(15));
		this.qian_qiantong01 = <Component_qiantong>(this.getChildAt(16));
		this.text1 = <fgui.GComponent>(this.getChildAt(17));
		this.book = <QiuQian_jieqian>(this.getChildAt(18));
	}
}