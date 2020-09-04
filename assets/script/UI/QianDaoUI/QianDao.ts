/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class QianDao extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n25:fgui.GComponent;
	public bg:fgui.GLoader;
	public solgan:fgui.GTextField;
	public n28:fgui.GImage;
	public award_title:fgui.GTextField;
	public award_item:fgui.GTextField;
	public award_desc:fgui.GTextField;
	public item:fgui.GButton;
	public load_icon:fgui.GLoader;
	public btn_get:fgui.GButton;
	public holder:fgui.GGraph;

	public static URL:string = "ui://8lw0e34np7cv2";

	public static createInstance():QianDao {
		return <QianDao>(fgui.UIPackage.createObject("QianDaoUI","QianDao"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n25 = <fgui.GComponent>(this.getChildAt(1));
		this.bg = <fgui.GLoader>(this.getChildAt(2));
		this.solgan = <fgui.GTextField>(this.getChildAt(3));
		this.n28 = <fgui.GImage>(this.getChildAt(4));
		this.award_title = <fgui.GTextField>(this.getChildAt(5));
		this.award_item = <fgui.GTextField>(this.getChildAt(6));
		this.award_desc = <fgui.GTextField>(this.getChildAt(7));
		this.item = <fgui.GButton>(this.getChildAt(8));
		this.load_icon = <fgui.GLoader>(this.getChildAt(9));
		this.btn_get = <fgui.GButton>(this.getChildAt(10));
		this.holder = <fgui.GGraph>(this.getChildAt(11));
	}
}