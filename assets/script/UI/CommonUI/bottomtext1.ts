/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class bottomtext1 extends fgui.GComponent {

	public n0:fgui.GTextField;

	public static URL:string = "ui://i47gvnnsossh2g";

	public static createInstance():bottomtext1 {
		return <bottomtext1>(fgui.UIPackage.createObject("CommonUI","bottomtext1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GTextField>(this.getChildAt(0));
	}
}