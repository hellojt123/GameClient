/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_shitu extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GImage;
	public border:fgui.GImage;
	public title_text:fgui.GTextField;
	public item1:fgui.GButton;
	public item1num:fgui.GTextField;
	public item2:fgui.GButton;
	public item2num:fgui.GTextField;
	public btn_get:fgui.GButton;
	public n78:fgui.GImage;
	public n79:fgui.GImage;

	public static URL:string = "ui://nyv4e8mlpgskq";

	public static createInstance():tile_shitu {
		return <tile_shitu>(fgui.UIPackage.createObject("ShiTuUI","tile_shitu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.border = <fgui.GImage>(this.getChildAt(1));
		this.title_text = <fgui.GTextField>(this.getChildAt(2));
		this.item1 = <fgui.GButton>(this.getChildAt(3));
		this.item1num = <fgui.GTextField>(this.getChildAt(4));
		this.item2 = <fgui.GButton>(this.getChildAt(5));
		this.item2num = <fgui.GTextField>(this.getChildAt(6));
		this.btn_get = <fgui.GButton>(this.getChildAt(7));
		this.n78 = <fgui.GImage>(this.getChildAt(8));
		this.n79 = <fgui.GImage>(this.getChildAt(9));
	}
}