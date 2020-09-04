/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Button1 extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;
	public title:fgui.GTextField;

	public static URL:string = "ui://h8gquo0fz4qe7";

	public static createInstance():Button1 {
		return <Button1>(fgui.UIPackage.createObject("XuanZeUI","Button1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.title = <fgui.GTextField>(this.getChildAt(1));
	}
}