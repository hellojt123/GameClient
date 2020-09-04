/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_guide_mask extends fgui.GComponent {

	public bg:fgui.GGraph;
	public box_mask:fgui.GGraph;

	public static URL:string = "ui://kf4ca5fmgedh5";

	public static createInstance():com_guide_mask {
		return <com_guide_mask>(fgui.UIPackage.createObject("GuideUI","com_guide_mask"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GGraph>(this.getChildAt(0));
		this.box_mask = <fgui.GGraph>(this.getChildAt(1));
	}
}