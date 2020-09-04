/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class QA extends fgui.GComponent {

	public m_n6:fgui.GLabel;
	public m_n0:fgui.GTextField;
	public m_n1:fgui.GTextField;
	public m_n5:fgui.GList;

	public static URL:string = "ui://gg9p0azrl2r50";

	public static createInstance():QA {
		return <QA>(fgui.UIPackage.createObject("QAUI","QA"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_n6 = <fgui.GLabel>(this.getChildAt(0));
		this.m_n0 = <fgui.GTextField>(this.getChildAt(1));
		this.m_n1 = <fgui.GTextField>(this.getChildAt(2));
		this.m_n5 = <fgui.GList>(this.getChildAt(3));
	}
}