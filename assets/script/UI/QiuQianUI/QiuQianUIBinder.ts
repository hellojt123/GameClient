/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import text_tile from "./text_tile";
import Component_qiantong from "./Component_qiantong";
import btn_bofang from "./btn_bofang";
import Component_qian from "./Component_qian";
import QiuQian_jieqian from "./QiuQian_jieqian";
import QiuQian from "./QiuQian";
import btn_prayer from "./btn_prayer";

export default class QiuQianUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(text_tile.URL, text_tile);
		fgui.UIObjectFactory.setExtension(Component_qiantong.URL, Component_qiantong);
		fgui.UIObjectFactory.setExtension(btn_bofang.URL, btn_bofang);
		fgui.UIObjectFactory.setExtension(Component_qian.URL, Component_qian);
		fgui.UIObjectFactory.setExtension(QiuQian_jieqian.URL, QiuQian_jieqian);
		fgui.UIObjectFactory.setExtension(QiuQian.URL, QiuQian);
		fgui.UIObjectFactory.setExtension(btn_prayer.URL, btn_prayer);
	}
}