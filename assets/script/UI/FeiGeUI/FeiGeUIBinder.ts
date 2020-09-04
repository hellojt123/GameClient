/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_shu_a from "./btn_shu_a";
import btn_shu_b from "./btn_shu_b";
import FeiGe from "./FeiGe";
import FeiGe_dange from "./FeiGe_dange";
import FeiGe_xuanze from "./FeiGe_xuanze";

export default class FeiGeUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(btn_shu_a.URL, btn_shu_a);
		fgui.UIObjectFactory.setExtension(btn_shu_b.URL, btn_shu_b);
		fgui.UIObjectFactory.setExtension(FeiGe.URL, FeiGe);
		fgui.UIObjectFactory.setExtension(FeiGe_dange.URL, FeiGe_dange);
		fgui.UIObjectFactory.setExtension(FeiGe_xuanze.URL, FeiGe_xuanze);
	}
}