/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class RenWu extends fgui.GComponent {

	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public n9:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public n54:fgui.GImage;
	public n56:fgui.GTextField;
	public n57:fgui.GTextField;
	public n58:fgui.GTextField;
	public n72:fgui.GButton;
	public list:fgui.GList;
	public n71:fgui.GTextField;

	public static URL:string = "ui://dr7m94fimj533";

	public static createInstance():RenWu {
		return <RenWu>(fgui.UIPackage.createObject("RenWuUI","RenWu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.n9 = <fgui.GComponent>(this.getChildAt(2));
		this.btn_tips = <fgui.GButton>(this.getChildAt(3));
		this.n54 = <fgui.GImage>(this.getChildAt(4));
		this.n56 = <fgui.GTextField>(this.getChildAt(5));
		this.n57 = <fgui.GTextField>(this.getChildAt(6));
		this.n58 = <fgui.GTextField>(this.getChildAt(7));
		this.n72 = <fgui.GButton>(this.getChildAt(8));
		this.list = <fgui.GList>(this.getChildAt(9));
		this.n71 = <fgui.GTextField>(this.getChildAt(10));
	}
}