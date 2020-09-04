/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_main_level extends fgui.GComponent {

	public text_level:fgui.GTextField;

	public static URL:string = "ui://l2fhsbqan4vtz5d";

	public static createInstance():com_main_level {
		return <com_main_level>(fgui.UIPackage.createObject("MainUI","com_main_level"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.text_level = <fgui.GTextField>(this.getChildAt(0));
	}
}