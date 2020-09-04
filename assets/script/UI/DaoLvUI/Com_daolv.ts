/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Com_daolv extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GImage;
	public bg1:fgui.GImage;
	public player1head:fgui.GComponent;
	public player1name:fgui.GTextField;
	public top:fgui.GLoader;
	public heart:fgui.GTextField;
	public rank:fgui.GTextField;
	public player2name:fgui.GTextField;
	public player2head:fgui.GComponent;
	public inrank:fgui.GTextField;
	public n26:fgui.GImage;

	public static URL:string = "ui://kqhhvsgxfnaj1u";

	public static createInstance():Com_daolv {
		return <Com_daolv>(fgui.UIPackage.createObject("DaoLvUI","Com_daolv"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.bg1 = <fgui.GImage>(this.getChildAt(1));
		this.player1head = <fgui.GComponent>(this.getChildAt(2));
		this.player1name = <fgui.GTextField>(this.getChildAt(3));
		this.top = <fgui.GLoader>(this.getChildAt(4));
		this.heart = <fgui.GTextField>(this.getChildAt(5));
		this.rank = <fgui.GTextField>(this.getChildAt(6));
		this.player2name = <fgui.GTextField>(this.getChildAt(7));
		this.player2head = <fgui.GComponent>(this.getChildAt(8));
		this.inrank = <fgui.GTextField>(this.getChildAt(9));
		this.n26 = <fgui.GImage>(this.getChildAt(10));
	}
}