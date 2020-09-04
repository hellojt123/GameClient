/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Tips_3 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n28:fgui.GImage;
	public desc:fgui.GRichTextField;

	public static URL:string = "ui://8cvrttujp7cve";

	public static createInstance():Tips_3 {
		return <Tips_3>(fgui.UIPackage.createObject("TipsUI","Tips_3"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n28 = <fgui.GImage>(this.getChildAt(1));
		this.desc = <fgui.GRichTextField>(this.getChildAt(2));
	}
}