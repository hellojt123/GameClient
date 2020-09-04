/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_daoju2 extends fgui.GButton {

	public button:fgui.Controller;
	public bg:fgui.GImage;
	public day:fgui.GTextField;
	public item:fgui.GButton;
	public border:fgui.GImage;
	public n6:fgui.GTextField;

	public static URL:string = "ui://vzsviw8nossha";

	public static createInstance():btn_daoju2 {
		return <btn_daoju2>(fgui.UIPackage.createObject("FuLiUI","btn_daoju2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.day = <fgui.GTextField>(this.getChildAt(1));
		this.item = <fgui.GButton>(this.getChildAt(2));
		this.border = <fgui.GImage>(this.getChildAt(3));
		this.n6 = <fgui.GTextField>(this.getChildAt(4));
	}
}