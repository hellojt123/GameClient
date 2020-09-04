/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_dikuai extends fgui.GButton {

	public button:fgui.Controller;
	public border:fgui.GLoader;
	public item:fgui.GButton;
	public n4:fgui.GGraph;
	public tips:fgui.GTextField;
	public n5:fgui.GGroup;
	public tanxian_mc_1:fgui.GMovieClip;
	public tanxian_mc_2:fgui.GMovieClip;
	public showtips:fgui.Transition;

	public static URL:string = "ui://wx4xqeclnpfov";

	public static createInstance():btn_dikuai {
		return <btn_dikuai>(fgui.UIPackage.createObject("XianChongUI","btn_dikuai"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.border = <fgui.GLoader>(this.getChildAt(0));
		this.item = <fgui.GButton>(this.getChildAt(1));
		this.n4 = <fgui.GGraph>(this.getChildAt(2));
		this.tips = <fgui.GTextField>(this.getChildAt(3));
		this.n5 = <fgui.GGroup>(this.getChildAt(4));
		this.tanxian_mc_1 = <fgui.GMovieClip>(this.getChildAt(5));
		this.tanxian_mc_2 = <fgui.GMovieClip>(this.getChildAt(6));
		this.showtips = this.getTransitionAt(0);
	}
}