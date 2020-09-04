/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class zhuansheng_bg extends fgui.GComponent {

	public n33:fgui.GImage;

	public static URL:string = "ui://znqvlu8ul1ggz47";

	public static createInstance():zhuansheng_bg {
		return <zhuansheng_bg>(fgui.UIPackage.createObject("ZhuanShengUI","zhuansheng_bg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n33 = <fgui.GImage>(this.getChildAt(0));
	}
}