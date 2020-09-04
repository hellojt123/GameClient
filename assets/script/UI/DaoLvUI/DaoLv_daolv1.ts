/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class DaoLv_daolv1 extends fgui.GComponent {

	public btn_tips:fgui.GButton;
	public bg1:fgui.GLoader;
	public bg2:fgui.GLoader;
	public bg3:fgui.GLoader;
	public bg4:fgui.GLoader;
	public n34:fgui.GImage;
	public btn_ask:fgui.GButton;
	public n37:fgui.GImage;
	public n38:fgui.GTextField;
	public playername:fgui.GTextField;
	public n39:fgui.GTextField;
	public n33:fgui.GImage;
	public n40:fgui.GTextField;
	public n41:fgui.GTextField;
	public n45:fgui.GImage;
	public main_role:fgui.GButton;

	public static URL:string = "ui://kqhhvsgxpgsk19";

	public static createInstance():DaoLv_daolv1 {
		return <DaoLv_daolv1>(fgui.UIPackage.createObject("DaoLvUI","DaoLv_daolv1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.btn_tips = <fgui.GButton>(this.getChildAt(0));
		this.bg1 = <fgui.GLoader>(this.getChildAt(1));
		this.bg2 = <fgui.GLoader>(this.getChildAt(2));
		this.bg3 = <fgui.GLoader>(this.getChildAt(3));
		this.bg4 = <fgui.GLoader>(this.getChildAt(4));
		this.n34 = <fgui.GImage>(this.getChildAt(5));
		this.btn_ask = <fgui.GButton>(this.getChildAt(6));
		this.n37 = <fgui.GImage>(this.getChildAt(7));
		this.n38 = <fgui.GTextField>(this.getChildAt(8));
		this.playername = <fgui.GTextField>(this.getChildAt(9));
		this.n39 = <fgui.GTextField>(this.getChildAt(10));
		this.n33 = <fgui.GImage>(this.getChildAt(11));
		this.n40 = <fgui.GTextField>(this.getChildAt(12));
		this.n41 = <fgui.GTextField>(this.getChildAt(13));
		this.n45 = <fgui.GImage>(this.getChildAt(14));
		this.main_role = <fgui.GButton>(this.getChildAt(15));
	}
}