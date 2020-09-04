/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_guide_finger extends fgui.GComponent {

	public fingerpoint:fgui.GMovieClip;
	public finger:fgui.GImage;
	public t0:fgui.Transition;
	public t1:fgui.Transition;
	public t2:fgui.Transition;

	public static URL:string = "ui://kf4ca5fmw49s7";

	public static createInstance():com_guide_finger {
		return <com_guide_finger>(fgui.UIPackage.createObject("GuideUI","com_guide_finger"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.fingerpoint = <fgui.GMovieClip>(this.getChildAt(0));
		this.finger = <fgui.GImage>(this.getChildAt(1));
		this.t0 = this.getTransitionAt(0);
		this.t1 = this.getTransitionAt(1);
		this.t2 = this.getTransitionAt(2);
	}
}