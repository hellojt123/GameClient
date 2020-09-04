/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import com_fabao_ui from "./com_fabao_ui";

export default class Tile_item extends fgui.GButton {

	public border:fgui.GLoader;
	public icon:fgui.GLoader;
	public com_fabao:com_fabao_ui;
	public title:fgui.GTextField;
	public booktitle:fgui.GTextField;
	public mc:fgui.GMovieClip;

	public static URL:string = "ui://i47gvnnsossh20";

	public static createInstance():Tile_item {
		return <Tile_item>(fgui.UIPackage.createObject("CommonUI","Tile_item"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.border = <fgui.GLoader>(this.getChildAt(0));
		this.icon = <fgui.GLoader>(this.getChildAt(1));
		this.com_fabao = <com_fabao_ui>(this.getChildAt(2));
		this.title = <fgui.GTextField>(this.getChildAt(3));
		this.booktitle = <fgui.GTextField>(this.getChildAt(4));
		this.mc = <fgui.GMovieClip>(this.getChildAt(5));
	}
}