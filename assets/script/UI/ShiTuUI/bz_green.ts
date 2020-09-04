/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class bz_green extends fgui.GComponent {

	public n36:fgui.GImage;
	public n37:fgui.GTextField;

	public static URL:string = "ui://nyv4e8mlwx8xg";

	public static createInstance():bz_green {
		return <bz_green>(fgui.UIPackage.createObject("ShiTuUI","bz_green"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n36 = <fgui.GImage>(this.getChildAt(0));
		this.n37 = <fgui.GTextField>(this.getChildAt(1));
	}
}