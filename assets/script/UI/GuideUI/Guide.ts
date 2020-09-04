/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import com_guide_mask from "./com_guide_mask";
import com_guide_dialog from "./com_guide_dialog";
import com_guide_finger from "./com_guide_finger";
import btn_guide_mask from "./btn_guide_mask";

export default class Guide extends fgui.GComponent {

	public mask:com_guide_mask;
	public dialog:com_guide_dialog;
	public finger:com_guide_finger;
	public btn_guide_mask:btn_guide_mask;

	public static URL:string = "ui://kf4ca5fmgedh0";

	public static createInstance():Guide {
		return <Guide>(fgui.UIPackage.createObject("GuideUI","Guide"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.mask = <com_guide_mask>(this.getChildAt(0));
		this.dialog = <com_guide_dialog>(this.getChildAt(1));
		this.finger = <com_guide_finger>(this.getChildAt(2));
		this.btn_guide_mask = <btn_guide_mask>(this.getChildAt(3));
	}
}