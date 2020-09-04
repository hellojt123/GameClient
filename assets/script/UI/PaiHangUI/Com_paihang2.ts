/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Com_paihang2 extends fgui.GComponent {

	public bg:fgui.GImage;
	public rank:fgui.GTextField;
	public head:fgui.GComponent;
	public playername:fgui.GTextField;
	public layer:fgui.GTextField;
	public level:fgui.GTextField;

	public static URL:string = "ui://v1igor53ossh7";

	public static createInstance():Com_paihang2 {
		return <Com_paihang2>(fgui.UIPackage.createObject("PaiHangUI","Com_paihang2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.rank = <fgui.GTextField>(this.getChildAt(1));
		this.head = <fgui.GComponent>(this.getChildAt(2));
		this.playername = <fgui.GTextField>(this.getChildAt(3));
		this.layer = <fgui.GTextField>(this.getChildAt(4));
		this.level = <fgui.GTextField>(this.getChildAt(5));
	}
}