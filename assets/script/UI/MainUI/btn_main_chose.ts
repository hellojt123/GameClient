/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_main_chose extends fgui.GButton {

	public button:fgui.Controller;
	public background:fgui.GImage;
	public head_icon:fgui.GLoader;
	public border:fgui.GImage;

	public static URL:string = "ui://l2fhsbqade8kz56";

	public static createInstance():btn_main_chose {
		return <btn_main_chose>(fgui.UIPackage.createObject("MainUI","btn_main_chose"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.background = <fgui.GImage>(this.getChildAt(0));
		this.head_icon = <fgui.GLoader>(this.getChildAt(1));
		this.border = <fgui.GImage>(this.getChildAt(2));
	}
}