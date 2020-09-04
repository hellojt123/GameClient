/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class liandan_success extends fgui.GComponent {

	public frame:fgui.GLabel;
	public itemname:fgui.GTextField;
	public desc:fgui.GTextField;
	public n62:fgui.GTextField;
	public n65:fgui.GTextField;
	public btn_use:fgui.GButton;
	public itemicon:fgui.GLoader;
	public starlist:fgui.GList;

	public static URL:string = "ui://gzd2moajpgsk9";

	public static createInstance():liandan_success {
		return <liandan_success>(fgui.UIPackage.createObject("TianCaiUI","liandan_success"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.itemname = <fgui.GTextField>(this.getChildAt(1));
		this.desc = <fgui.GTextField>(this.getChildAt(2));
		this.n62 = <fgui.GTextField>(this.getChildAt(3));
		this.n65 = <fgui.GTextField>(this.getChildAt(4));
		this.btn_use = <fgui.GButton>(this.getChildAt(5));
		this.itemicon = <fgui.GLoader>(this.getChildAt(6));
		this.starlist = <fgui.GList>(this.getChildAt(7));
	}
}