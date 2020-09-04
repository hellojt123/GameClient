/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class text_tile extends fgui.GComponent {

	public n0:fgui.GTextField;

	public static URL:string = "ui://7dihxyjjcm3fh";

	public static createInstance():text_tile {
		return <text_tile>(fgui.UIPackage.createObject("QiuQianUI","text_tile"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GTextField>(this.getChildAt(0));
	}
}