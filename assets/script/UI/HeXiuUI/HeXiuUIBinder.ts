/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_yaoqing from "./btn_yaoqing";
import ProgressBar_hx from "./ProgressBar_hx";
import HeXiu from "./HeXiu";
import com_zj from "./com_zj";
import com_taren from "./com_taren";

export default class HeXiuUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(btn_yaoqing.URL, btn_yaoqing);
		fgui.UIObjectFactory.setExtension(ProgressBar_hx.URL, ProgressBar_hx);
		fgui.UIObjectFactory.setExtension(HeXiu.URL, HeXiu);
		fgui.UIObjectFactory.setExtension(com_zj.URL, com_zj);
		fgui.UIObjectFactory.setExtension(com_taren.URL, com_taren);
	}
}