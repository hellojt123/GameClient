/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_field extends fgui.GButton {

	public n242:fgui.GImage;

	public static URL:string = "ui://l2fhsbqarj6vz5a";

	public static createInstance():btn_field {
		return <btn_field>(fgui.UIPackage.createObject("MainUI","btn_field"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n242 = <fgui.GImage>(this.getChildAt(0));
	}
}