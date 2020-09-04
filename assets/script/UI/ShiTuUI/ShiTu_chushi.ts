/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class ShiTu_chushi extends fgui.GComponent {

	public top_title:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public bg:fgui.GLoader;
	public n53:fgui.GTextField;
	public n54:fgui.GTextField;
	public n57:fgui.GButton;
	public n55:fgui.GTextField;
	public n58:fgui.GButton;
	public n59:fgui.GTextField;
	public btn_get:fgui.GButton;
	public list:fgui.GList;

	public static URL:string = "ui://nyv4e8mlwx8xo";

	public static createInstance():ShiTu_chushi {
		return <ShiTu_chushi>(fgui.UIPackage.createObject("ShiTuUI","ShiTu_chushi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.top_title = <fgui.GComponent>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.bg = <fgui.GLoader>(this.getChildAt(2));
		this.n53 = <fgui.GTextField>(this.getChildAt(3));
		this.n54 = <fgui.GTextField>(this.getChildAt(4));
		this.n57 = <fgui.GButton>(this.getChildAt(5));
		this.n55 = <fgui.GTextField>(this.getChildAt(6));
		this.n58 = <fgui.GButton>(this.getChildAt(7));
		this.n59 = <fgui.GTextField>(this.getChildAt(8));
		this.btn_get = <fgui.GButton>(this.getChildAt(9));
		this.list = <fgui.GList>(this.getChildAt(10));
	}
}