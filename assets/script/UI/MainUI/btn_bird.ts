/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_bird extends fgui.GButton {

	public button:fgui.Controller;
	public n3:fgui.GMovieClip;

	public static URL:string = "ui://l2fhsbqagd2hz4m";

	public static createInstance():btn_bird {
		return <btn_bird>(fgui.UIPackage.createObject("MainUI","btn_bird"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n3 = <fgui.GMovieClip>(this.getChildAt(0));
	}
}