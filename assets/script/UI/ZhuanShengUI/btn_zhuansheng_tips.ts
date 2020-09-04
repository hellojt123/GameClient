/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_zhuansheng_tips extends fgui.GComponent {

	public btn_tips:fgui.GImage;

	public static URL:string = "ui://znqvlu8u9504z48";

	public static createInstance():btn_zhuansheng_tips {
		return <btn_zhuansheng_tips>(fgui.UIPackage.createObject("ZhuanShengUI","btn_zhuansheng_tips"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.btn_tips = <fgui.GImage>(this.getChildAt(0));
	}
}