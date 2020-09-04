/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tile_self from "./tile_self";
import ShiTu from "./ShiTu";
import tile_shitu from "./tile_shitu";
import bz_green from "./bz_green";
import tile_tudi from "./tile_tudi";
import bz_red from "./bz_red";
import btn_shitu from "./btn_shitu";
import tile_shifu from "./tile_shifu";
import ShiTu_list from "./ShiTu_list";
import btn_tianfu from "./btn_tianfu";
import ShiTu_chushi from "./ShiTu_chushi";

export default class ShiTuUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(tile_self.URL, tile_self);
		fgui.UIObjectFactory.setExtension(ShiTu.URL, ShiTu);
		fgui.UIObjectFactory.setExtension(tile_shitu.URL, tile_shitu);
		fgui.UIObjectFactory.setExtension(bz_green.URL, bz_green);
		fgui.UIObjectFactory.setExtension(tile_tudi.URL, tile_tudi);
		fgui.UIObjectFactory.setExtension(bz_red.URL, bz_red);
		fgui.UIObjectFactory.setExtension(btn_shitu.URL, btn_shitu);
		fgui.UIObjectFactory.setExtension(tile_shifu.URL, tile_shifu);
		fgui.UIObjectFactory.setExtension(ShiTu_list.URL, ShiTu_list);
		fgui.UIObjectFactory.setExtension(btn_tianfu.URL, btn_tianfu);
		fgui.UIObjectFactory.setExtension(ShiTu_chushi.URL, ShiTu_chushi);
	}
}