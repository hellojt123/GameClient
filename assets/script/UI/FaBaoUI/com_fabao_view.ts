/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_fabao_view extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n3:fgui.GImage;
	public n2:fgui.GImage;
	public bg:fgui.GLoader;
	public itemname:fgui.GTextField;
	public n8:fgui.GComponent;
	public n9:fgui.GTextField;
	public com_fabao_ui:fgui.GComponent;

	public static URL:string = "ui://voudmmsecdaez4x";

	public static createInstance():com_fabao_view {
		return <com_fabao_view>(fgui.UIPackage.createObject("FaBaoUI","com_fabao_view"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n3 = <fgui.GImage>(this.getChildAt(1));
		this.n2 = <fgui.GImage>(this.getChildAt(2));
		this.bg = <fgui.GLoader>(this.getChildAt(3));
		this.itemname = <fgui.GTextField>(this.getChildAt(4));
		this.n8 = <fgui.GComponent>(this.getChildAt(5));
		this.n9 = <fgui.GTextField>(this.getChildAt(6));
		this.com_fabao_ui = <fgui.GComponent>(this.getChildAt(7));
	}
}