/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_hongbao extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://kqhhvsgxtyfp1o";

	public static createInstance():btn_hongbao {
		return <btn_hongbao>(fgui.UIPackage.createObject("DaoLvUI","btn_hongbao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}