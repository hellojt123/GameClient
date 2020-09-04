/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class xitong_bg extends fgui.GComponent {

	public n33:fgui.GImage;

	public static URL:string = "ui://bmd7yty5l1ggz4c";

	public static createInstance():xitong_bg {
		return <xitong_bg>(fgui.UIPackage.createObject("XiTongUI","xitong_bg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n33 = <fgui.GImage>(this.getChildAt(0));
	}
}