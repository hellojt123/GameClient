/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Component_qian extends fgui.GComponent {

	public n0:fgui.GImage;
	public desc:fgui.GTextField;

	public static URL:string = "ui://7dihxyjjhbxca";

	public static createInstance():Component_qian {
		return <Component_qian>(fgui.UIPackage.createObject("QiuQianUI","Component_qian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GImage>(this.getChildAt(0));
		this.desc = <fgui.GTextField>(this.getChildAt(1));
	}
}