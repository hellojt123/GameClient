/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import title_body from "./title_body";
import GongFa from "./GongFa";

export default class GongFaUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(title_body.URL, title_body);
		fgui.UIObjectFactory.setExtension(GongFa.URL, GongFa);
	}
}