/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_danyao extends fgui.GButton {

	public button:fgui.Controller;
	public n3:fgui.GImage;
	public n4:fgui.GImage;
	public item:fgui.GButton;

	public static URL:string = "ui://gzd2moajiot6f";

	public static createInstance():tile_danyao {
		return <tile_danyao>(fgui.UIPackage.createObject("TianCaiUI","tile_danyao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n3 = <fgui.GImage>(this.getChildAt(0));
		this.n4 = <fgui.GImage>(this.getChildAt(1));
		this.item = <fgui.GButton>(this.getChildAt(2));
	}
}