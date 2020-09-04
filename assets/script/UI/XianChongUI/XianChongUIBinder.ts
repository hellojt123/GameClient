/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import XianChong from "./XianChong";
import XianChong_weiyang from "./XianChong_weiyang";
import XianChong_juling from "./XianChong_juling";
import btn_teshu1 from "./btn_teshu1";
import XianChong_tanxian1 from "./XianChong_tanxian1";
import XianChong_tanxian2 from "./XianChong_tanxian2";
import btn_dikuai from "./btn_dikuai";
import tile_mubiao from "./tile_mubiao";
import XianChong_Tips1 from "./XianChong_Tips1";
import btn_mubiao from "./btn_mubiao";
import tile_xianchong_dropItem from "./tile_xianchong_dropItem";

export default class XianChongUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(XianChong.URL, XianChong);
		fgui.UIObjectFactory.setExtension(XianChong_weiyang.URL, XianChong_weiyang);
		fgui.UIObjectFactory.setExtension(XianChong_juling.URL, XianChong_juling);
		fgui.UIObjectFactory.setExtension(btn_teshu1.URL, btn_teshu1);
		fgui.UIObjectFactory.setExtension(XianChong_tanxian1.URL, XianChong_tanxian1);
		fgui.UIObjectFactory.setExtension(XianChong_tanxian2.URL, XianChong_tanxian2);
		fgui.UIObjectFactory.setExtension(btn_dikuai.URL, btn_dikuai);
		fgui.UIObjectFactory.setExtension(tile_mubiao.URL, tile_mubiao);
		fgui.UIObjectFactory.setExtension(XianChong_Tips1.URL, XianChong_Tips1);
		fgui.UIObjectFactory.setExtension(btn_mubiao.URL, btn_mubiao);
		fgui.UIObjectFactory.setExtension(tile_xianchong_dropItem.URL, tile_xianchong_dropItem);
	}
}