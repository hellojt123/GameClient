/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_zj extends fgui.GComponent {

	public n45:fgui.GImage;
	public n48:fgui.GImage;
	public n47:fgui.GImage;
	public main_role:fgui.GButton;

	public static URL:string = "ui://8udvtky310dnbb";

	public static createInstance():com_zj {
		return <com_zj>(fgui.UIPackage.createObject("HeXiuUI","com_zj"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n45 = <fgui.GImage>(this.getChildAt(0));
		this.n48 = <fgui.GImage>(this.getChildAt(1));
		this.n47 = <fgui.GImage>(this.getChildAt(2));
		this.main_role = <fgui.GButton>(this.getChildAt(3));
	}
}