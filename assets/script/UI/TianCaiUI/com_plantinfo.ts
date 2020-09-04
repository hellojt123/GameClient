/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_plantinfo extends fgui.GComponent {

	public plant_icon:fgui.GLoader;
	public plant_name:fgui.GTextField;
	public plant_desc:fgui.GTextField;
	public plant_time:fgui.GTextField;
	public btn_harvest:fgui.GButton;

	public static URL:string = "ui://gzd2moajjxfx1w";

	public static createInstance():com_plantinfo {
		return <com_plantinfo>(fgui.UIPackage.createObject("TianCaiUI","com_plantinfo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.plant_icon = <fgui.GLoader>(this.getChildAt(0));
		this.plant_name = <fgui.GTextField>(this.getChildAt(1));
		this.plant_desc = <fgui.GTextField>(this.getChildAt(2));
		this.plant_time = <fgui.GTextField>(this.getChildAt(3));
		this.btn_harvest = <fgui.GButton>(this.getChildAt(4));
	}
}