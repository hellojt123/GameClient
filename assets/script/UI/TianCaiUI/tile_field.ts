/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_field extends fgui.GButton {

	public button:fgui.Controller;
	public load_icon:fgui.GLoader;
	public border:fgui.GImage;
	public plant:fgui.GLoader;
	public flower:fgui.GImage;
	public star:fgui.GMovieClip;
	public t0:fgui.Transition;

	public static URL:string = "ui://gzd2moaj9t41e";

	public static createInstance():tile_field {
		return <tile_field>(fgui.UIPackage.createObject("TianCaiUI","tile_field"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.load_icon = <fgui.GLoader>(this.getChildAt(0));
		this.border = <fgui.GImage>(this.getChildAt(1));
		this.plant = <fgui.GLoader>(this.getChildAt(2));
		this.flower = <fgui.GImage>(this.getChildAt(3));
		this.star = <fgui.GMovieClip>(this.getChildAt(4));
		this.t0 = this.getTransitionAt(0);
	}
}