/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_fabao_ui extends fgui.GComponent {

	public fa_bao_icon:fgui.GLoader;
	public holder:fgui.GGraph;

	public static URL:string = "ui://i47gvnnshpx9z55";

	public static createInstance():com_fabao_ui {
		return <com_fabao_ui>(fgui.UIPackage.createObject("CommonUI","com_fabao_ui"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.fa_bao_icon = <fgui.GLoader>(this.getChildAt(0));
		this.holder = <fgui.GGraph>(this.getChildAt(1));
	}
}