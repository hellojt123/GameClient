/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_zhuansheng_tips from "./btn_zhuansheng_tips";
import zhuansheng_bg from "./zhuansheng_bg";
import ZhuanSheng from "./ZhuanSheng";

export default class ZhuanShengUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(btn_zhuansheng_tips.URL, btn_zhuansheng_tips);
		fgui.UIObjectFactory.setExtension(zhuansheng_bg.URL, zhuansheng_bg);
		fgui.UIObjectFactory.setExtension(ZhuanSheng.URL, ZhuanSheng);
	}
}