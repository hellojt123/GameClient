/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_wave extends fgui.GComponent {

	public wave:fgui.GMovieClip;
	public n1:fgui.GImage;

	public static URL:string = "ui://l2fhsbqay0q5z5b";

	public static createInstance():com_wave {
		return <com_wave>(fgui.UIPackage.createObject("MainUI","com_wave"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.wave = <fgui.GMovieClip>(this.getChildAt(0));
		this.n1 = <fgui.GImage>(this.getChildAt(1));
	}
}