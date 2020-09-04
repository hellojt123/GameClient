/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_bofang extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://7dihxyjjhbxc9";

	public static createInstance():btn_bofang {
		return <btn_bofang>(fgui.UIPackage.createObject("QiuQianUI","btn_bofang"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}