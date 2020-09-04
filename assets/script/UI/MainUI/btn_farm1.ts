/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_farm1 extends fgui.GButton {

	public button:fgui.Controller;
	public n2:fgui.GMovieClip;
	public n3:fgui.GMovieClip;
	public title:fgui.GTextField;

	public static URL:string = "ui://l2fhsbqaosshz3m";

	public static createInstance():btn_farm1 {
		return <btn_farm1>(fgui.UIPackage.createObject("MainUI","btn_farm1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n2 = <fgui.GMovieClip>(this.getChildAt(0));
		this.n3 = <fgui.GMovieClip>(this.getChildAt(1));
		this.title = <fgui.GTextField>(this.getChildAt(2));
	}
}