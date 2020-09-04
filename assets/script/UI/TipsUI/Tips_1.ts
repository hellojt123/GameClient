/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Tips_1 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n25:fgui.GComponent;
	public n28:fgui.GImage;
	public n27:fgui.GImage;
	public desc:fgui.GTextField;
	public tipsitem:fgui.GButton;
	public tipstitle:fgui.GComponent;
	public tipsnum:fgui.GTextField;
	public btn_cancel:fgui.GButton;
	public btn_ok:fgui.GButton;

	public static URL:string = "ui://8cvrttujp7cv6";

	public static createInstance():Tips_1 {
		return <Tips_1>(fgui.UIPackage.createObject("TipsUI","Tips_1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n25 = <fgui.GComponent>(this.getChildAt(1));
		this.n28 = <fgui.GImage>(this.getChildAt(2));
		this.n27 = <fgui.GImage>(this.getChildAt(3));
		this.desc = <fgui.GTextField>(this.getChildAt(4));
		this.tipsitem = <fgui.GButton>(this.getChildAt(5));
		this.tipstitle = <fgui.GComponent>(this.getChildAt(6));
		this.tipsnum = <fgui.GTextField>(this.getChildAt(7));
		this.btn_cancel = <fgui.GButton>(this.getChildAt(8));
		this.btn_ok = <fgui.GButton>(this.getChildAt(9));
	}
}