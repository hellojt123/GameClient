/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_day extends fgui.GButton {

	public button:fgui.Controller;
	public bg:fgui.GImage;
	public day:fgui.GTextField;
	public mc_ring:fgui.GMovieClip;
	public item:fgui.GButton;
	public n6:fgui.GTextField;
	public border:fgui.GImage;

	public static URL:string = "ui://vzsviw8nossh7";

	public static createInstance():btn_day {
		return <btn_day>(fgui.UIPackage.createObject("FuLiUI","btn_day"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.day = <fgui.GTextField>(this.getChildAt(1));
		this.mc_ring = <fgui.GMovieClip>(this.getChildAt(2));
		this.item = <fgui.GButton>(this.getChildAt(3));
		this.n6 = <fgui.GTextField>(this.getChildAt(4));
		this.border = <fgui.GImage>(this.getChildAt(5));
	}
}