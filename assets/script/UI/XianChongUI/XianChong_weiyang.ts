/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class XianChong_weiyang extends fgui.GComponent {

	public tabs:fgui.Controller;
	public n36:fgui.GImage;
	public xianchongname:fgui.GTextField;
	public btn_tips:fgui.GButton;
	public n54:fgui.GTextField;
	public com_pet:fgui.GComponent;
	public n49:fgui.GTextField;
	public n60:fgui.GButton;
	public yulan:fgui.GGroup;
	public jiewei2:fgui.GImage;
	public btn_weiyang:fgui.GButton;
	public n51:fgui.GTextField;
	public jiewei1:fgui.GImage;
	public n50:fgui.GRichTextField;
	public n55:fgui.GButton;
	public xinji1:fgui.GImage;
	public xinji2:fgui.GImage;
	public xinji3:fgui.GImage;
	public xinji4:fgui.GImage;
	public xinji5:fgui.GImage;
	public xinji6:fgui.GImage;
	public xinji7:fgui.GImage;
	public xinji8:fgui.GImage;
	public xinji9:fgui.GImage;
	public xinji10:fgui.GImage;
	public jiewei3:fgui.GImage;
	public n57:fgui.GButton;
	public n66:fgui.GImage;
	public weiyang:fgui.GGroup;

	public static URL:string = "ui://wx4xqeclnpfog";

	public static createInstance():XianChong_weiyang {
		return <XianChong_weiyang>(fgui.UIPackage.createObject("XianChongUI","XianChong_weiyang"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.n36 = <fgui.GImage>(this.getChildAt(0));
		this.xianchongname = <fgui.GTextField>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.n54 = <fgui.GTextField>(this.getChildAt(3));
		this.com_pet = <fgui.GComponent>(this.getChildAt(4));
		this.n49 = <fgui.GTextField>(this.getChildAt(5));
		this.n60 = <fgui.GButton>(this.getChildAt(6));
		this.yulan = <fgui.GGroup>(this.getChildAt(7));
		this.jiewei2 = <fgui.GImage>(this.getChildAt(8));
		this.btn_weiyang = <fgui.GButton>(this.getChildAt(9));
		this.n51 = <fgui.GTextField>(this.getChildAt(10));
		this.jiewei1 = <fgui.GImage>(this.getChildAt(11));
		this.n50 = <fgui.GRichTextField>(this.getChildAt(12));
		this.n55 = <fgui.GButton>(this.getChildAt(13));
		this.xinji1 = <fgui.GImage>(this.getChildAt(14));
		this.xinji2 = <fgui.GImage>(this.getChildAt(15));
		this.xinji3 = <fgui.GImage>(this.getChildAt(16));
		this.xinji4 = <fgui.GImage>(this.getChildAt(17));
		this.xinji5 = <fgui.GImage>(this.getChildAt(18));
		this.xinji6 = <fgui.GImage>(this.getChildAt(19));
		this.xinji7 = <fgui.GImage>(this.getChildAt(20));
		this.xinji8 = <fgui.GImage>(this.getChildAt(21));
		this.xinji9 = <fgui.GImage>(this.getChildAt(22));
		this.xinji10 = <fgui.GImage>(this.getChildAt(23));
		this.jiewei3 = <fgui.GImage>(this.getChildAt(24));
		this.n57 = <fgui.GButton>(this.getChildAt(25));
		this.n66 = <fgui.GImage>(this.getChildAt(26));
		this.weiyang = <fgui.GGroup>(this.getChildAt(27));
	}
}