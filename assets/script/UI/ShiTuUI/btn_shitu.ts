/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_shitu extends fgui.GButton {

	public button:fgui.Controller;
	public icon_pic:fgui.GLoader;
	public text_title:fgui.GTextField;

	public static URL:string = "ui://nyv4e8mlwx8xk";

	public static createInstance():btn_shitu {
		return <btn_shitu>(fgui.UIPackage.createObject("ShiTuUI","btn_shitu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.icon_pic = <fgui.GLoader>(this.getChildAt(0));
		this.text_title = <fgui.GTextField>(this.getChildAt(1));
	}
}