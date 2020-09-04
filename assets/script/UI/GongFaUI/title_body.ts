/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class title_body extends fgui.GButton {

	public button:fgui.Controller;
	public up:fgui.GImage;
	public border:fgui.GMovieClip;
	public desc:fgui.GTextField;
	public n3:fgui.GButton;
	public level:fgui.GTextField;
	public success:fgui.GMovieClip;

	public static URL:string = "ui://wfxf5sjqiuol7";

	public static createInstance():title_body {
		return <title_body>(fgui.UIPackage.createObject("GongFaUI","title_body"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.up = <fgui.GImage>(this.getChildAt(0));
		this.border = <fgui.GMovieClip>(this.getChildAt(1));
		this.desc = <fgui.GTextField>(this.getChildAt(2));
		this.n3 = <fgui.GButton>(this.getChildAt(3));
		this.level = <fgui.GTextField>(this.getChildAt(4));
		this.success = <fgui.GMovieClip>(this.getChildAt(5));
	}
}