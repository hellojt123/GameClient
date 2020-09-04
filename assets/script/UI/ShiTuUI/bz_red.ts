/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class bz_red extends fgui.GComponent {

	public n0:fgui.GImage;
	public n1:fgui.GTextField;

	public static URL:string = "ui://nyv4e8mlwx8xj";

	public static createInstance():bz_red {
		return <bz_red>(fgui.UIPackage.createObject("ShiTuUI","bz_red"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n1 = <fgui.GTextField>(this.getChildAt(1));
	}
}