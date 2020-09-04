/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Com_paihang1 extends fgui.GComponent {

	public bg:fgui.GImage;
	public head:fgui.GComponent;
	public playername:fgui.GTextField;
	public layer:fgui.GTextField;
	public top:fgui.GLoader;
	public rank:fgui.GTextField;
	public level:fgui.GTextField;

	public static URL:string = "ui://v1igor53i1kr1u";

	public static createInstance():Com_paihang1 {
		return <Com_paihang1>(fgui.UIPackage.createObject("PaiHangUI","Com_paihang1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.head = <fgui.GComponent>(this.getChildAt(1));
		this.playername = <fgui.GTextField>(this.getChildAt(2));
		this.layer = <fgui.GTextField>(this.getChildAt(3));
		this.top = <fgui.GLoader>(this.getChildAt(4));
		this.rank = <fgui.GTextField>(this.getChildAt(5));
		this.level = <fgui.GTextField>(this.getChildAt(6));
	}
}