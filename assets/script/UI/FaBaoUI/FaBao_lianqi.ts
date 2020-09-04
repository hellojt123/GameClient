/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class FaBao_lianqi extends fgui.GComponent {

	public bg:fgui.GLoader;
	public n28:fgui.GLoader;
	public btn_tips:fgui.GButton;
	public n3:fgui.GTextField;
	public n6:fgui.GTextField;
	public n7:fgui.GTextField;
	public n10:fgui.GButton;
	public n12:fgui.GButton;
	public n27:fgui.GTextField;

	public static URL:string = "ui://voudmmsenpfoc";

	public static createInstance():FaBao_lianqi {
		return <FaBao_lianqi>(fgui.UIPackage.createObject("FaBaoUI","FaBao_lianqi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GLoader>(this.getChildAt(0));
		this.n28 = <fgui.GLoader>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.n3 = <fgui.GTextField>(this.getChildAt(3));
		this.n6 = <fgui.GTextField>(this.getChildAt(4));
		this.n7 = <fgui.GTextField>(this.getChildAt(5));
		this.n10 = <fgui.GButton>(this.getChildAt(6));
		this.n12 = <fgui.GButton>(this.getChildAt(7));
		this.n27 = <fgui.GTextField>(this.getChildAt(8));
	}
}