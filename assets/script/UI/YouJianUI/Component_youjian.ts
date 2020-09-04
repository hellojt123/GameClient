/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Component_youjian extends fgui.GComponent {

	public n73:fgui.GImage;
	public n75:fgui.GImage;
	public n76:fgui.GButton;
	public n77:fgui.GTextField;
	public n78:fgui.GTextField;
	public n79:fgui.GTextField;

	public static URL:string = "ui://dty8a2v9mj531";

	public static createInstance():Component_youjian {
		return <Component_youjian>(fgui.UIPackage.createObject("YouJianUI","Component_youjian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n73 = <fgui.GImage>(this.getChildAt(0));
		this.n75 = <fgui.GImage>(this.getChildAt(1));
		this.n76 = <fgui.GButton>(this.getChildAt(2));
		this.n77 = <fgui.GTextField>(this.getChildAt(3));
		this.n78 = <fgui.GTextField>(this.getChildAt(4));
		this.n79 = <fgui.GTextField>(this.getChildAt(5));
	}
}