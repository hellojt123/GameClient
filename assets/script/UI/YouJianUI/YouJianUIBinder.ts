/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import YouJian from "./YouJian";
import Component_youjian from "./Component_youjian";

export default class YouJianUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(YouJian.URL, YouJian);
		fgui.UIObjectFactory.setExtension(Component_youjian.URL, Component_youjian);
	}
}