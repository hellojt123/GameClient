/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class com_food extends fgui.GComponent {

	public frame:fgui.GLabel;
	public n59:fgui.GTextField;
	public n61:fgui.GTextField;
	public time:fgui.GTextField;
	public btn_eat:fgui.GButton;
	public food_icon:fgui.GLoader;

	public static URL:string = "ui://kqhhvsgxpgsk2";

	public static createInstance():com_food {
		return <com_food>(fgui.UIPackage.createObject("DaoLvUI","com_food"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.n59 = <fgui.GTextField>(this.getChildAt(1));
		this.n61 = <fgui.GTextField>(this.getChildAt(2));
		this.time = <fgui.GTextField>(this.getChildAt(3));
		this.btn_eat = <fgui.GButton>(this.getChildAt(4));
		this.food_icon = <fgui.GLoader>(this.getChildAt(5));
	}
}