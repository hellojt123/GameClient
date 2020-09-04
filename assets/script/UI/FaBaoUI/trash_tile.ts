/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class trash_tile extends fgui.GComponent {

	public n32:fgui.GGraph;
	public n33:fgui.GTextField;

	public static URL:string = "ui://voudmmsey1rbi";

	public static createInstance():trash_tile {
		return <trash_tile>(fgui.UIPackage.createObject("FaBaoUI","trash_tile"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n32 = <fgui.GGraph>(this.getChildAt(0));
		this.n33 = <fgui.GTextField>(this.getChildAt(1));
	}
}