/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import xitong_bg from "./xitong_bg";
import btn_lianxikefu from "./btn_lianxikefu";
import XiTong from "./XiTong";

export default class XiTongUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(xitong_bg.URL, xitong_bg);
		fgui.UIObjectFactory.setExtension(btn_lianxikefu.URL, btn_lianxikefu);
		fgui.UIObjectFactory.setExtension(XiTong.URL, XiTong);
	}
}