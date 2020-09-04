/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_danyao2 extends fgui.GButton {

	public button:fgui.Controller;
	public n3:fgui.GImage;
	public n4:fgui.GImage;
	public item:fgui.GButton;

	public static URL:string = "ui://voudmmse9t41p";

	public static createInstance():tile_danyao2 {
		return <tile_danyao2>(fgui.UIPackage.createObject("FaBaoUI","tile_danyao2"));
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