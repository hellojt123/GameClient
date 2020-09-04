/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_xiuwei extends fgui.GButton {

	public button:fgui.Controller;
	public main_mianfei:fgui.GImage;
	public n2:fgui.GTextField;
	public n5:fgui.GMovieClip;

	public static URL:string = "ui://l2fhsbqaosshz3t";

	public static createInstance():btn_xiuwei {
		return <btn_xiuwei>(fgui.UIPackage.createObject("MainUI","btn_xiuwei"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.main_mianfei = <fgui.GImage>(this.getChildAt(0));
		this.n2 = <fgui.GTextField>(this.getChildAt(1));
		this.n5 = <fgui.GMovieClip>(this.getChildAt(2));
	}
}