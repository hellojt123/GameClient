/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_guide_dialog extends fgui.GComponent {

	public bg:fgui.GImage;
	public desc:fgui.GRichTextField;

	public static URL:string = "ui://kf4ca5fmgedh3";

	public static createInstance():com_guide_dialog {
		return <com_guide_dialog>(fgui.UIPackage.createObject("GuideUI","com_guide_dialog"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.desc = <fgui.GRichTextField>(this.getChildAt(1));
	}
}