/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class YouJian extends fgui.GComponent {

	public frame:fgui.GLabel;
	public frame_wk1:fgui.GComponent;
	public top_title:fgui.GComponent;
	public btn_tips:fgui.GButton;
	public n51:fgui.GComponent;
	public n72:fgui.GImage;
	public maillist:fgui.GList;

	public static URL:string = "ui://dty8a2v9mj530";

	public static createInstance():YouJian {
		return <YouJian>(fgui.UIPackage.createObject("YouJianUI","YouJian"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.frame_wk1 = <fgui.GComponent>(this.getChildAt(1));
		this.top_title = <fgui.GComponent>(this.getChildAt(2));
		this.btn_tips = <fgui.GButton>(this.getChildAt(3));
		this.n51 = <fgui.GComponent>(this.getChildAt(4));
		this.n72 = <fgui.GImage>(this.getChildAt(5));
		this.maillist = <fgui.GList>(this.getChildAt(6));
	}
}