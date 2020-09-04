/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class bg3 extends fgui.GComponent {

	public n28:fgui.GImage;

	public static URL:string = "ui://8cvrttujl1ggk";

	public static createInstance():bg3 {
		return <bg3>(fgui.UIPackage.createObject("TipsUI","bg3"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n28 = <fgui.GImage>(this.getChildAt(0));
	}
}