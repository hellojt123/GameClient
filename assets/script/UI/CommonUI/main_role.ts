/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class main_role extends fgui.GButton {

	public button:fgui.Controller;
	public holder:fgui.GTextField;
	public border1:fgui.GLoader;
	public border:fgui.GLoader;
	public bottom:fgui.GComponent;
	public main_role:fgui.GLoader;
	public front:fgui.GComponent;
	public level2:fgui.GComponent;
	public t0:fgui.Transition;

	public static URL:string = "ui://i47gvnnsgd2hz4l";

	public static createInstance():main_role {
		return <main_role>(fgui.UIPackage.createObject("CommonUI","main_role"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
		this.holder = <fgui.GTextField>(this.getChildAt(0));
		this.border1 = <fgui.GLoader>(this.getChildAt(1));
		this.border = <fgui.GLoader>(this.getChildAt(2));
		this.bottom = <fgui.GComponent>(this.getChildAt(3));
		this.main_role = <fgui.GLoader>(this.getChildAt(4));
		this.front = <fgui.GComponent>(this.getChildAt(5));
		this.level2 = <fgui.GComponent>(this.getChildAt(6));
		this.t0 = this.getTransitionAt(0);
	}
}