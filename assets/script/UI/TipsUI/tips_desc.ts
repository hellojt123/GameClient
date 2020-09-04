/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tips_desc extends fgui.GComponent {

	public desc:fgui.GTextField;

	public static URL:string = "ui://8cvrttujhk76i";

	public static createInstance():tips_desc {
		return <tips_desc>(fgui.UIPackage.createObject("TipsUI","tips_desc"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.desc = <fgui.GTextField>(this.getChildAt(0));
	}
}