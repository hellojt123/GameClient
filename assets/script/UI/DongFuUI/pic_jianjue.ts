/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class pic_jianjue extends fgui.GComponent {

	public showicon:fgui.GLoader;
	public name_text:fgui.GTextField;
	public num_text:fgui.GTextField;
	public n80:fgui.GImage;
	public n75:fgui.GImage;
	public n76:fgui.GTextField;
	public book:fgui.GGroup;
	public maskpic:fgui.GImage;

	public static URL:string = "ui://doxjdi1dmj53j";

	public static createInstance():pic_jianjue {
		return <pic_jianjue>(fgui.UIPackage.createObject("DongFuUI","pic_jianjue"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.showicon = <fgui.GLoader>(this.getChildAt(0));
		this.name_text = <fgui.GTextField>(this.getChildAt(1));
		this.num_text = <fgui.GTextField>(this.getChildAt(2));
		this.n80 = <fgui.GImage>(this.getChildAt(3));
		this.n75 = <fgui.GImage>(this.getChildAt(4));
		this.n76 = <fgui.GTextField>(this.getChildAt(5));
		this.book = <fgui.GGroup>(this.getChildAt(6));
		this.maskpic = <fgui.GImage>(this.getChildAt(7));
	}
}