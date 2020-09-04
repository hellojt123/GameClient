/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Tile_head1 extends fgui.GComponent {

	public n0:fgui.GImage;
	public n4:fgui.GLoader;
	public n2:fgui.GImage;
	public n3:fgui.GImage;

	public static URL:string = "ui://i47gvnnsossh29";

	public static createInstance():Tile_head1 {
		return <Tile_head1>(fgui.UIPackage.createObject("CommonUI","Tile_head1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.n4 = <fgui.GLoader>(this.getChildAt(1));
		this.n2 = <fgui.GImage>(this.getChildAt(2));
		this.n3 = <fgui.GImage>(this.getChildAt(3));
	}
}