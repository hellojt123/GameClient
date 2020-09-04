/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class title_binke extends fgui.GComponent {

	public bg:fgui.GImage;
	public playername:fgui.GTextField;
	public level:fgui.GTextField;
	public layer:fgui.GTextField;
	public head:fgui.GComponent;

	public static URL:string = "ui://kqhhvsgxtyfpy";

	public static createInstance():title_binke {
		return <title_binke>(fgui.UIPackage.createObject("DaoLvUI","title_binke"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.playername = <fgui.GTextField>(this.getChildAt(1));
		this.level = <fgui.GTextField>(this.getChildAt(2));
		this.layer = <fgui.GTextField>(this.getChildAt(3));
		this.head = <fgui.GComponent>(this.getChildAt(4));
	}
}