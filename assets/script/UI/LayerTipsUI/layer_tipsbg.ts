/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class layer_tipsbg extends fgui.GComponent {

	public n33:fgui.GImage;

	public static URL:string = "ui://m80zvck4l1ggz4l";

	public static createInstance():layer_tipsbg {
		return <layer_tipsbg>(fgui.UIPackage.createObject("LayerTipsUI","layer_tipsbg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n33 = <fgui.GImage>(this.getChildAt(0));
	}
}