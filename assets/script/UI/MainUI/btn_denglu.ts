/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_denglu extends fgui.GButton {

	public bg:fgui.GImage;
	public tomarrow_icon:fgui.GImage;
	public today_icon:fgui.GImage;
	public itemicon:fgui.GLoader;
	public itemname:fgui.GTextField;

	public static URL:string = "ui://l2fhsbqas1l0z50";

	public static createInstance():btn_denglu {
		return <btn_denglu>(fgui.UIPackage.createObject("MainUI","btn_denglu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.tomarrow_icon = <fgui.GImage>(this.getChildAt(1));
		this.today_icon = <fgui.GImage>(this.getChildAt(2));
		this.itemicon = <fgui.GLoader>(this.getChildAt(3));
		this.itemname = <fgui.GTextField>(this.getChildAt(4));
	}
}