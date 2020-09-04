/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_tianfu from "./btn_tianfu";

export default class tile_self extends fgui.GComponent {

	public tabs:fgui.Controller;
	public n60:fgui.GImage;
	public playername:fgui.GTextField;
	public btn_learn:btn_tianfu;

	public static URL:string = "ui://nyv4e8mlanx6t";

	public static createInstance():tile_self {
		return <tile_self>(fgui.UIPackage.createObject("ShiTuUI","tile_self"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.n60 = <fgui.GImage>(this.getChildAt(0));
		this.playername = <fgui.GTextField>(this.getChildAt(1));
		this.btn_learn = <btn_tianfu>(this.getChildAt(2));
	}
}