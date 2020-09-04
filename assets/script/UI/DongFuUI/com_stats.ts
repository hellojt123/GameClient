/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import df_bar from "./df_bar";
import com_point from "./com_point";
import btn_final from "./btn_final";

export default class com_stats extends fgui.GComponent {

	public bar:df_bar;
	public p1:com_point;
	public p2:com_point;
	public p3:com_point;
	public p4:com_point;
	public p5:com_point;
	public btn_final:btn_final;

	public static URL:string = "ui://doxjdi1dm5jxr";

	public static createInstance():com_stats {
		return <com_stats>(fgui.UIPackage.createObject("DongFuUI","com_stats"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bar = <df_bar>(this.getChildAt(0));
		this.p1 = <com_point>(this.getChildAt(1));
		this.p2 = <com_point>(this.getChildAt(2));
		this.p3 = <com_point>(this.getChildAt(3));
		this.p4 = <com_point>(this.getChildAt(4));
		this.p5 = <com_point>(this.getChildAt(5));
		this.btn_final = <btn_final>(this.getChildAt(6));
	}
}