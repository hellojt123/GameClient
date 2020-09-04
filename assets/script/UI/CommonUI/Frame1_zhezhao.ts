/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Frame1_zhezhao extends fgui.GLabel {

	public layer:fgui.GGraph;

	public static URL:string = "ui://i47gvnnsossh1z";

	public static createInstance():Frame1_zhezhao {
		return <Frame1_zhezhao>(fgui.UIPackage.createObject("CommonUI","Frame1_zhezhao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.layer = <fgui.GGraph>(this.getChildAt(0));
	}
}