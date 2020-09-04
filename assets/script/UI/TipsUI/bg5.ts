/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class bg5 extends fgui.GComponent {

	public n28:fgui.GImage;

	public static URL:string = "ui://8cvrttujl1ggj";

	public static createInstance():bg5 {
		return <bg5>(fgui.UIPackage.createObject("TipsUI","bg5"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n28 = <fgui.GImage>(this.getChildAt(0));
	}
}