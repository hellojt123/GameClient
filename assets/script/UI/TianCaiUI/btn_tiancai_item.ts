/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_tiancai_item extends fgui.GButton {

	public button:fgui.Controller;
	public bg:fgui.GImage;
	public border:fgui.GImage;
	public item:fgui.GButton;

	public static URL:string = "ui://gzd2moajnj78z4w";

	public static createInstance():btn_tiancai_item {
		return <btn_tiancai_item>(fgui.UIPackage.createObject("TianCaiUI","btn_tiancai_item"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.border = <fgui.GImage>(this.getChildAt(1));
		this.item = <fgui.GButton>(this.getChildAt(2));
	}
}