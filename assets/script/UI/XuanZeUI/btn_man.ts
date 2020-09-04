/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_man extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public n1:fgui.GImage;

	public static URL:string = "ui://h8gquo0fz4qe5";

	public static createInstance():btn_man {
		return <btn_man>(fgui.UIPackage.createObject("XuanZeUI","btn_man"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n1 = <fgui.GImage>(this.getChildAt(1));
	}
}