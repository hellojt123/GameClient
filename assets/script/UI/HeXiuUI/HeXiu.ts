/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import com_zj from "./com_zj";
import com_taren from "./com_taren";

export default class HeXiu extends fgui.GComponent {

	public frame:fgui.GLabel;
	public bg:fgui.GLoader;
	public btn_tips:fgui.GButton;
	public page_text:fgui.GTextField;
	public self:com_zj;
	public state:fgui.GTextField;
	public character_1:com_taren;
	public character_2:com_taren;
	public character_3:com_taren;
	public character_4:com_taren;
	public character_5:com_taren;
	public desc:fgui.GTextField;
	public number:fgui.GTextField;
	public n68:fgui.GImage;
	public n70:fgui.GComponent;
	public mc_hexiu:fgui.GMovieClip;

	public static URL:string = "ui://8udvtky310dnba";

	public static createInstance():HeXiu {
		return <HeXiu>(fgui.UIPackage.createObject("HeXiuUI","HeXiu"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.frame = <fgui.GLabel>(this.getChildAt(0));
		this.bg = <fgui.GLoader>(this.getChildAt(1));
		this.btn_tips = <fgui.GButton>(this.getChildAt(2));
		this.page_text = <fgui.GTextField>(this.getChildAt(3));
		this.self = <com_zj>(this.getChildAt(4));
		this.state = <fgui.GTextField>(this.getChildAt(5));
		this.character_1 = <com_taren>(this.getChildAt(6));
		this.character_2 = <com_taren>(this.getChildAt(7));
		this.character_3 = <com_taren>(this.getChildAt(8));
		this.character_4 = <com_taren>(this.getChildAt(9));
		this.character_5 = <com_taren>(this.getChildAt(10));
		this.desc = <fgui.GTextField>(this.getChildAt(11));
		this.number = <fgui.GTextField>(this.getChildAt(12));
		this.n68 = <fgui.GImage>(this.getChildAt(13));
		this.n70 = <fgui.GComponent>(this.getChildAt(14));
		this.mc_hexiu = <fgui.GMovieClip>(this.getChildAt(15));
	}
}