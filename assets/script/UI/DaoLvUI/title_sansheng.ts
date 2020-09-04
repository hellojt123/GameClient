/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class title_sansheng extends fgui.GComponent {

	public bg:fgui.GImage;
	public border:fgui.GImage;
	public level:fgui.GTextField;
	public btn_get:fgui.GButton;
	public desc:fgui.GTextField;
	public item1:fgui.GButton;
	public item1num:fgui.GTextField;
	public item2:fgui.GButton;
	public item2num:fgui.GTextField;
	public item3:fgui.GButton;
	public item3num:fgui.GTextField;
	public n68:fgui.GGroup;

	public static URL:string = "ui://kqhhvsgxtyfpw";

	public static createInstance():title_sansheng {
		return <title_sansheng>(fgui.UIPackage.createObject("DaoLvUI","title_sansheng"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.border = <fgui.GImage>(this.getChildAt(1));
		this.level = <fgui.GTextField>(this.getChildAt(2));
		this.btn_get = <fgui.GButton>(this.getChildAt(3));
		this.desc = <fgui.GTextField>(this.getChildAt(4));
		this.item1 = <fgui.GButton>(this.getChildAt(5));
		this.item1num = <fgui.GTextField>(this.getChildAt(6));
		this.item2 = <fgui.GButton>(this.getChildAt(7));
		this.item2num = <fgui.GTextField>(this.getChildAt(8));
		this.item3 = <fgui.GButton>(this.getChildAt(9));
		this.item3num = <fgui.GTextField>(this.getChildAt(10));
		this.n68 = <fgui.GGroup>(this.getChildAt(11));
	}
}