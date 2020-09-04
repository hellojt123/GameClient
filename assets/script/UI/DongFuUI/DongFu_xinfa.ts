/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class DongFu_xinfa extends fgui.GComponent {

	public n9:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public n79:fgui.GList;

	public static URL:string = "ui://doxjdi1dmj53h";

	public static createInstance():DongFu_xinfa {
		return <DongFu_xinfa>(fgui.UIPackage.createObject("DongFuUI","DongFu_xinfa"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n9 = <fgui.GComponent>(this.getChildAt(0));
		this.btn_tips = <fgui.GButton>(this.getChildAt(1));
		this.n79 = <fgui.GList>(this.getChildAt(2));
	}
}