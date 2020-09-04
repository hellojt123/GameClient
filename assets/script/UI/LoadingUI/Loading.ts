/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Loading extends fgui.GComponent {

	public n1:fgui.GGraph;
	public n2:fgui.GLoader;
	public t0:fgui.Transition;

	public static URL:string = "ui://fwmbnouqi0zf0";

	public static createInstance():Loading {
		return <Loading>(fgui.UIPackage.createObject("LoadingUI","Loading"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n1 = <fgui.GGraph>(this.getChildAt(0));
		this.n2 = <fgui.GLoader>(this.getChildAt(1));
		this.t0 = this.getTransitionAt(0);
	}
}