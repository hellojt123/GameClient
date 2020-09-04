/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Tips_2 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n25:fgui.GComponent;
	public n28:fgui.GImage;
	public n29:fgui.GRichTextField;
	public btn_ok:fgui.GButton;
	public btn_cancel:fgui.GButton;

	public static URL:string = "ui://8cvrttujp7cvd";

	public static createInstance():Tips_2 {
		return <Tips_2>(fgui.UIPackage.createObject("TipsUI","Tips_2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n25 = <fgui.GComponent>(this.getChildAt(1));
		this.n28 = <fgui.GImage>(this.getChildAt(2));
		this.n29 = <fgui.GRichTextField>(this.getChildAt(3));
		this.btn_ok = <fgui.GButton>(this.getChildAt(4));
		this.btn_cancel = <fgui.GButton>(this.getChildAt(5));
	}
}