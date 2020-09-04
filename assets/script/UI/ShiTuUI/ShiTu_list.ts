/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tile_self from "./tile_self";
import tile_shifu from "./tile_shifu";

export default class ShiTu_list extends fgui.GComponent {

	public tabs:fgui.Controller;
	public top_tile:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public shitulist:fgui.GList;
	public tile_self:tile_self;
	public tile_shifu:tile_shifu;

	public static URL:string = "ui://nyv4e8mlwx8xm";

	public static createInstance():ShiTu_list {
		return <ShiTu_list>(fgui.UIPackage.createObject("ShiTuUI","ShiTu_list"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.tabs = this.getControllerAt(0);
		this.top_tile = <fgui.GComponent>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.shitulist = <fgui.GList>(this.getChildAt(2));
		this.tile_self = <tile_self>(this.getChildAt(3));
		this.tile_shifu = <tile_shifu>(this.getChildAt(4));
	}
}