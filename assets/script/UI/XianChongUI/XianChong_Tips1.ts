/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class XianChong_Tips1 extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n28:fgui.GImage;
	public n27:fgui.GImage;
	public n30:fgui.GComponent;
	public n43:fgui.GImage;
	public btn_ok:fgui.GButton;
	public itemlist:fgui.GList;

	public static URL:string = "ui://wx4xqeclpgskx";

	public static createInstance():XianChong_Tips1 {
		return <XianChong_Tips1>(fgui.UIPackage.createObject("XianChongUI","XianChong_Tips1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n28 = <fgui.GImage>(this.getChildAt(1));
		this.n27 = <fgui.GImage>(this.getChildAt(2));
		this.n30 = <fgui.GComponent>(this.getChildAt(3));
		this.n43 = <fgui.GImage>(this.getChildAt(4));
		this.btn_ok = <fgui.GButton>(this.getChildAt(5));
		this.itemlist = <fgui.GList>(this.getChildAt(6));
	}
}