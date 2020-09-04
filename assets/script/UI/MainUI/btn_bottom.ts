/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_bottom extends fgui.GButton {

	public button:fgui.Controller;
	public bg:fgui.GLoader;
	public light:fgui.GMovieClip;
	public red:fgui.GImage;
	public dis:fgui.GImage;

	public static URL:string = "ui://l2fhsbqadvcvz4v";

	public static createInstance():btn_bottom {
		return <btn_bottom>(fgui.UIPackage.createObject("MainUI","btn_bottom"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.light = <fgui.GMovieClip>(this.getChildAt(1));
		this.red = <fgui.GImage>(this.getChildAt(2));
		this.dis = <fgui.GImage>(this.getChildAt(3));
	}
}