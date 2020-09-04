/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import tile_home_item from "./tile_home_item";
import tile_dropItem from "./tile_dropItem";
import listitems from "./listitems";
import com_stats from "./com_stats";
import DongFu_xianjin1 from "./DongFu_xianjin1";
import btn_xinjian from "./btn_xinjian";
import DongFu from "./DongFu";
import DongFu_xinfa from "./DongFu_xinfa";
import pic_jianjue from "./pic_jianjue";
import btn_final from "./btn_final";
import df_bar from "./df_bar";
import com_point from "./com_point";
import com_xuanwo from "./com_xuanwo";

export default class DongFuUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(tile_home_item.URL, tile_home_item);
		fgui.UIObjectFactory.setExtension(tile_dropItem.URL, tile_dropItem);
		fgui.UIObjectFactory.setExtension(listitems.URL, listitems);
		fgui.UIObjectFactory.setExtension(com_stats.URL, com_stats);
		fgui.UIObjectFactory.setExtension(DongFu_xianjin1.URL, DongFu_xianjin1);
		fgui.UIObjectFactory.setExtension(btn_xinjian.URL, btn_xinjian);
		fgui.UIObjectFactory.setExtension(DongFu.URL, DongFu);
		fgui.UIObjectFactory.setExtension(DongFu_xinfa.URL, DongFu_xinfa);
		fgui.UIObjectFactory.setExtension(pic_jianjue.URL, pic_jianjue);
		fgui.UIObjectFactory.setExtension(btn_final.URL, btn_final);
		fgui.UIObjectFactory.setExtension(df_bar.URL, df_bar);
		fgui.UIObjectFactory.setExtension(com_point.URL, com_point);
		fgui.UIObjectFactory.setExtension(com_xuanwo.URL, com_xuanwo);
	}
}