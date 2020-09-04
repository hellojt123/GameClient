/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_zhongzi extends fgui.GComponent {

	public itemname:fgui.GTextField;
	public item:fgui.GButton;
	public num:fgui.GTextField;

	public static URL:string = "ui://gzd2moaj9t41x";

	public static createInstance():tile_zhongzi {
		return <tile_zhongzi>(fgui.UIPackage.createObject("TianCaiUI","tile_zhongzi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.itemname = <fgui.GTextField>(this.getChildAt(0));
		this.item = <fgui.GButton>(this.getChildAt(1));
		this.num = <fgui.GTextField>(this.getChildAt(2));
	}
}