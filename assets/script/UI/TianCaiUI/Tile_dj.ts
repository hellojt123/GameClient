/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Tile_dj extends fgui.GButton {

	public button:fgui.Controller;
	public boder:fgui.GImage;
	public select:fgui.GImage;
	public item:fgui.GButton;

	public static URL:string = "ui://gzd2moaj9t41z4t";

	public static createInstance():Tile_dj {
		return <Tile_dj>(fgui.UIPackage.createObject("TianCaiUI","Tile_dj"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.boder = <fgui.GImage>(this.getChildAt(0));
		this.select = <fgui.GImage>(this.getChildAt(1));
		this.item = <fgui.GButton>(this.getChildAt(2));
	}
}