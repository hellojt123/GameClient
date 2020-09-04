/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class icon_hongbao1 extends fgui.GButton {

	public button:fgui.Controller;
	public n0:fgui.GImage;

	public static URL:string = "ui://kqhhvsgxtyfp1p";

	public static createInstance():icon_hongbao1 {
		return <icon_hongbao1>(fgui.UIPackage.createObject("DaoLvUI","icon_hongbao1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.n0 = <fgui.GImage>(this.getChildAt(0));
	}
}