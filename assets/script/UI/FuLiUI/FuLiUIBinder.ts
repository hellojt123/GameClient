/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import FuLi from "./FuLi";
import btn_day from "./btn_day";
import btn_daoju2 from "./btn_daoju2";

export default class FuLiUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(FuLi.URL, FuLi);
		fgui.UIObjectFactory.setExtension(btn_day.URL, btn_day);
		fgui.UIObjectFactory.setExtension(btn_daoju2.URL, btn_daoju2);
	}
}