/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Component_qiantong from "./Component_qiantong";
import Component_qian from "./Component_qian";

export default class QiuQian_jieqian extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n52:fgui.GImage;
	public qian_qiantong01:Component_qiantong;
	public text1:fgui.GComponent;
	public Component_qian:Component_qian;
	public list:fgui.GList;
	public n63:fgui.GImage;
	public n64:fgui.GTextField;
	public time:fgui.GTextField;
	public t0:fgui.Transition;

	public static URL:string = "ui://7dihxyjjhbxcc";

	public static createInstance():QiuQian_jieqian {
		return <QiuQian_jieqian>(fgui.UIPackage.createObject("QiuQianUI","QiuQian_jieqian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n52 = <fgui.GImage>(this.getChildAt(1));
		this.qian_qiantong01 = <Component_qiantong>(this.getChildAt(2));
		this.text1 = <fgui.GComponent>(this.getChildAt(3));
		this.Component_qian = <Component_qian>(this.getChildAt(4));
		this.list = <fgui.GList>(this.getChildAt(5));
		this.n63 = <fgui.GImage>(this.getChildAt(6));
		this.n64 = <fgui.GTextField>(this.getChildAt(7));
		this.time = <fgui.GTextField>(this.getChildAt(8));
		this.t0 = this.getTransitionAt(0);
	}
}