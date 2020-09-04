/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Component_qian from "./Component_qian";
import btn_prayer from "./btn_prayer";

export default class Component_qiantong extends fgui.GComponent {

	public guang:fgui.GMovieClip;
	public qian:Component_qian;
	public btn_qiuqian:btn_prayer;
	public t2:fgui.Transition;

	public static URL:string = "ui://7dihxyjjhbxc8";

	public static createInstance():Component_qiantong {
		return <Component_qiantong>(fgui.UIPackage.createObject("QiuQianUI","Component_qiantong"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.guang = <fgui.GMovieClip>(this.getChildAt(0));
		this.qian = <Component_qian>(this.getChildAt(1));
		this.btn_qiuqian = <btn_prayer>(this.getChildAt(2));
		this.t2 = this.getTransitionAt(0);
	}
}