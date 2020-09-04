/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tile_danyao2 from "./tile_danyao2";
import com_fabao_view from "./com_fabao_view";
import btn_fabao_get from "./btn_fabao_get";
import FaBao_liandan from "./FaBao_liandan";
import faba_sucess from "./faba_sucess";
import FaBao_fabao from "./FaBao_fabao";
import FaBao_lianqi from "./FaBao_lianqi";
import FaBao from "./FaBao";
import trash_tile from "./trash_tile";

export default class FaBaoUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(tile_danyao2.URL, tile_danyao2);
		fgui.UIObjectFactory.setExtension(com_fabao_view.URL, com_fabao_view);
		fgui.UIObjectFactory.setExtension(btn_fabao_get.URL, btn_fabao_get);
		fgui.UIObjectFactory.setExtension(FaBao_liandan.URL, FaBao_liandan);
		fgui.UIObjectFactory.setExtension(faba_sucess.URL, faba_sucess);
		fgui.UIObjectFactory.setExtension(FaBao_fabao.URL, FaBao_fabao);
		fgui.UIObjectFactory.setExtension(FaBao_lianqi.URL, FaBao_lianqi);
		fgui.UIObjectFactory.setExtension(FaBao.URL, FaBao);
		fgui.UIObjectFactory.setExtension(trash_tile.URL, trash_tile);
	}
}