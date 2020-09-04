/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_pet_ui extends fgui.GComponent {

	public pet_icon:fgui.GLoader;

	public static URL:string = "ui://i47gvnnss829z31";

	public static createInstance():com_pet_ui {
		return <com_pet_ui>(fgui.UIPackage.createObject("CommonUI","com_pet_ui"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.pet_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}