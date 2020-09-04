/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_renwu extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GImage;
	public border:fgui.GImage;
	public n62:fgui.GTextField;
	public n63:fgui.GTextField;
	public n64:fgui.GButton;
	public n67:fgui.GImage;
	public n68:fgui.GButton;
	public n69:fgui.GButton;
	public n65:fgui.GGroup;
	public n73:fgui.GButton;
	public n70:fgui.GTextField;
	public n71:fgui.GTextField;
	public n74:fgui.GTextField;
	public n72:fgui.GGroup;

	public static URL:string = "ui://dr7m94fimj534";

	public static createInstance():tile_renwu {
		return <tile_renwu>(fgui.UIPackage.createObject("RenWuUI","tile_renwu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.border = <fgui.GImage>(this.getChildAt(1));
		this.n62 = <fgui.GTextField>(this.getChildAt(2));
		this.n63 = <fgui.GTextField>(this.getChildAt(3));
		this.n64 = <fgui.GButton>(this.getChildAt(4));
		this.n67 = <fgui.GImage>(this.getChildAt(5));
		this.n68 = <fgui.GButton>(this.getChildAt(6));
		this.n69 = <fgui.GButton>(this.getChildAt(7));
		this.n65 = <fgui.GGroup>(this.getChildAt(8));
		this.n73 = <fgui.GButton>(this.getChildAt(9));
		this.n70 = <fgui.GTextField>(this.getChildAt(10));
		this.n71 = <fgui.GTextField>(this.getChildAt(11));
		this.n74 = <fgui.GTextField>(this.getChildAt(12));
		this.n72 = <fgui.GGroup>(this.getChildAt(13));
	}
}