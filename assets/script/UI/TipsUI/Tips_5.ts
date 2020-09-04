/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Tips_5 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n0:fgui.GImage;
	public n1:fgui.GImage;
	public toptile:fgui.GComponent;
	public n3:fgui.GImage;
	public vlist:fgui.GList;
	public btn_ok:fgui.GButton;

	public static URL:string = "ui://8cvrttujk95ql";

	public static createInstance():Tips_5 {
		return <Tips_5>(fgui.UIPackage.createObject("TipsUI","Tips_5"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n0 = <fgui.GImage>(this.getChildAt(1));
		this.n1 = <fgui.GImage>(this.getChildAt(2));
		this.toptile = <fgui.GComponent>(this.getChildAt(3));
		this.n3 = <fgui.GImage>(this.getChildAt(4));
		this.vlist = <fgui.GList>(this.getChildAt(5));
		this.btn_ok = <fgui.GButton>(this.getChildAt(6));
	}
}