/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Toptitle1 extends fgui.GComponent {

	public title:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsossh23";

	public static createInstance():Toptitle1 {
		return <Toptitle1>(fgui.UIPackage.createObject("CommonUI","Toptitle1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.title = <fgui.GTextField>(this.getChildAt(0));
	}
}