/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import RenWu from "./RenWu";
import tile_renwu from "./tile_renwu";

export default class RenWuUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(RenWu.URL, RenWu);
		fgui.UIObjectFactory.setExtension(tile_renwu.URL, tile_renwu);
	}
}