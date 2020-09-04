/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Toptitle2 extends fgui.GComponent {

	public n0:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsossh2f";

	public static createInstance():Toptitle2 {
		return <Toptitle2>(fgui.UIPackage.createObject("CommonUI","Toptitle2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GTextField>(this.getChildAt(0));
	}
}