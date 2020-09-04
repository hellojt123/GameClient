/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tile_home_item from "./tile_home_item";

export default class listitems extends fgui.GComponent {

	public item1:tile_home_item;
	public item2:tile_home_item;
	public item3:tile_home_item;

	public static URL:string = "ui://doxjdi1diot6m";

	public static createInstance():listitems {
		return <listitems>(fgui.UIPackage.createObject("DongFuUI","listitems"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.item1 = <tile_home_item>(this.getChildAt(0));
		this.item2 = <tile_home_item>(this.getChildAt(1));
		this.item3 = <tile_home_item>(this.getChildAt(2));
	}
}