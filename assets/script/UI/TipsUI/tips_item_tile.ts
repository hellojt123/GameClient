/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tips_item_tile extends fgui.GComponent {

	public n0:fgui.GButton;
	public n1:fgui.GTextField;

	public static URL:string = "ui://8cvrttujhk762";

	public static createInstance():tips_item_tile {
		return <tips_item_tile>(fgui.UIPackage.createObject("TipsUI","tips_item_tile"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GButton>(this.getChildAt(0));
		this.n1 = <fgui.GTextField>(this.getChildAt(1));
	}
}