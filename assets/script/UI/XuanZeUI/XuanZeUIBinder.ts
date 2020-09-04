/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import xuanze from "./xuanze";
import btn_man from "./btn_man";
import btn_woman from "./btn_woman";
import Button1 from "./Button1";

export default class XuanZeUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(xuanze.URL, xuanze);
		fgui.UIObjectFactory.setExtension(btn_man.URL, btn_man);
		fgui.UIObjectFactory.setExtension(btn_woman.URL, btn_woman);
		fgui.UIObjectFactory.setExtension(Button1.URL, Button1);
	}
}