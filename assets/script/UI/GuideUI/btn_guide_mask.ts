/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_guide_mask extends fgui.GButton {

	public button:fgui.Controller;

	public static URL:string = "ui://kf4ca5fmgxe26";

	public static createInstance():btn_guide_mask {
		return <btn_guide_mask>(fgui.UIPackage.createObject("GuideUI","btn_guide_mask"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.button = this.getControllerAt(0);
	}
}