/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_tiancai_xuan extends fgui.GComponent {

	public tabs:fgui.Controller;
	public frame:fgui.GLabel;
	public bg:fgui.GImage;
	public bg1:fgui.GImage;
	public com_name:fgui.GTextField;
	public itemlist:fgui.GList;
	public desc:fgui.GTextField;
	public n7:fgui.GComponent;

	public static URL:string = "ui://gzd2moajnj78z4u";

	public static createInstance():com_tiancai_xuan {
		return <com_tiancai_xuan>(fgui.UIPackage.createObject("TianCaiUI","com_tiancai_xuan"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.bg = <fgui.GImage>(this.getChildAt(1));
		this.bg1 = <fgui.GImage>(this.getChildAt(2));
		this.com_name = <fgui.GTextField>(this.getChildAt(3));
		this.itemlist = <fgui.GList>(this.getChildAt(4));
		this.desc = <fgui.GTextField>(this.getChildAt(5));
		this.n7 = <fgui.GComponent>(this.getChildAt(6));
	}
}