/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class PaiHang_haoyou extends fgui.GComponent {

	public top_title:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public btn_right:fgui.GButton;
	public btn_left:fgui.GButton;
	public holder:fgui.GGraph;
	public holder1:fgui.GLoader;

	public static URL:string = "ui://v1igor53ossh8";

	public static createInstance():PaiHang_haoyou {
		return <PaiHang_haoyou>(fgui.UIPackage.createObject("PaiHangUI","PaiHang_haoyou"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.top_title = <fgui.GComponent>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.btn_right = <fgui.GButton>(this.getChildAt(2));
		this.btn_left = <fgui.GButton>(this.getChildAt(3));
		this.holder = <fgui.GGraph>(this.getChildAt(4));
		this.holder1 = <fgui.GLoader>(this.getChildAt(5));
	}
}