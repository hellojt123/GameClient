/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_mubiao extends fgui.GComponent {

	public tabs:fgui.Controller;
	public bg:fgui.GImage;
	public border:fgui.GImage;
	public n62:fgui.GTextField;
	public n63:fgui.GTextField;
	public n68:fgui.GButton;
	public n75:fgui.GTextField;
	public n76:fgui.GButton;
	public n77:fgui.GTextField;
	public n69:fgui.GButton;

	public static URL:string = "ui://wx4xqeclpgsk11";

	public static createInstance():tile_mubiao {
		return <tile_mubiao>(fgui.UIPackage.createObject("XianChongUI","tile_mubiao"));
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
		this.n68 = <fgui.GButton>(this.getChildAt(4));
		this.n75 = <fgui.GTextField>(this.getChildAt(5));
		this.n76 = <fgui.GButton>(this.getChildAt(6));
		this.n77 = <fgui.GTextField>(this.getChildAt(7));
		this.n69 = <fgui.GButton>(this.getChildAt(8));
	}
}