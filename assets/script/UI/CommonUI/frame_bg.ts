/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import bottomtext1 from "./bottomtext1";

export default class frame_bg extends fgui.GComponent {

	public n0:fgui.GLoader;
	public n1:bottomtext1;

	public static URL:string = "ui://i47gvnnsdz1zz4m";

	public static createInstance():frame_bg {
		return <frame_bg>(fgui.UIPackage.createObject("CommonUI","frame_bg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.n0 = <fgui.GLoader>(this.getChildAt(0));
		this.n1 = <bottomtext1>(this.getChildAt(1));
	}
}