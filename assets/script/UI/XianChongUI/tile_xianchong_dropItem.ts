/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_xianchong_dropItem extends fgui.GComponent {

	public itemname:fgui.GTextField;
	public item:fgui.GButton;
	public itemnum:fgui.GTextField;

	public static URL:string = "ui://wx4xqecltqmy15";

	public static createInstance():tile_xianchong_dropItem {
		return <tile_xianchong_dropItem>(fgui.UIPackage.createObject("XianChongUI","tile_xianchong_dropItem"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.itemname = <fgui.GTextField>(this.getChildAt(0));
		this.item = <fgui.GButton>(this.getChildAt(1));
		this.itemnum = <fgui.GTextField>(this.getChildAt(2));
	}
}