/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class FeiGe_dange extends fgui.GComponent {

	public answer:fgui.GTextField;
	public answer_desc1:fgui.GTextField;
	public answer_desc2:fgui.GTextField;
	public answer_desc3:fgui.GTextField;
	public answer_desc4:fgui.GTextField;
	public n29:fgui.GTextField;
	public now:fgui.GTextField;
	public n35:fgui.GRichTextField;

	public static URL:string = "ui://d2q2ojebmj53a";

	public static createInstance():FeiGe_dange {
		return <FeiGe_dange>(fgui.UIPackage.createObject("FeiGeUI","FeiGe_dange"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.answer = <fgui.GTextField>(this.getChildAt(0));
		this.answer_desc1 = <fgui.GTextField>(this.getChildAt(1));
		this.answer_desc2 = <fgui.GTextField>(this.getChildAt(2));
		this.answer_desc3 = <fgui.GTextField>(this.getChildAt(3));
		this.answer_desc4 = <fgui.GTextField>(this.getChildAt(4));
		this.n29 = <fgui.GTextField>(this.getChildAt(5));
		this.now = <fgui.GTextField>(this.getChildAt(6));
		this.n35 = <fgui.GRichTextField>(this.getChildAt(7));
	}
}