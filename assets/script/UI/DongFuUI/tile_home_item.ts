/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class tile_home_item extends fgui.GComponent {

	public jiangli:fgui.GMovieClip;
	public book_boder:fgui.GMovieClip;
	public showicon:fgui.GLoader;
	public itemicon:fgui.GLoader;
	public name_text:fgui.GTextField;
	public num_text:fgui.GTextField;
	public n4:fgui.GImage;
	public book_num:fgui.GTextField;
	public book:fgui.GGroup;

	public static URL:string = "ui://doxjdi1dfxnrp";

	public static createInstance():tile_home_item {
		return <tile_home_item>(fgui.UIPackage.createObject("DongFuUI","tile_home_item"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.jiangli = <fgui.GMovieClip>(this.getChildAt(0));
		this.book_boder = <fgui.GMovieClip>(this.getChildAt(1));
		this.showicon = <fgui.GLoader>(this.getChildAt(2));
		this.itemicon = <fgui.GLoader>(this.getChildAt(3));
		this.name_text = <fgui.GTextField>(this.getChildAt(4));
		this.num_text = <fgui.GTextField>(this.getChildAt(5));
		this.n4 = <fgui.GImage>(this.getChildAt(6));
		this.book_num = <fgui.GTextField>(this.getChildAt(7));
		this.book = <fgui.GGroup>(this.getChildAt(8));
	}
}