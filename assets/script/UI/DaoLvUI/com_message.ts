/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_message extends fgui.GComponent {

	public bg:fgui.GImage;
	public playername:fgui.GTextField;
	public word:fgui.GTextField;

	public static URL:string = "ui://kqhhvsgxfnaj1v";

	public static createInstance():com_message {
		return <com_message>(fgui.UIPackage.createObject("DaoLvUI","com_message"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.playername = <fgui.GTextField>(this.getChildAt(1));
		this.word = <fgui.GTextField>(this.getChildAt(2));
	}
}