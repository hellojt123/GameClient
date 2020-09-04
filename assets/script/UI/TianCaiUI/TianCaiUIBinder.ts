/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import btn_chanzi1 from "./btn_chanzi1";
import btn_juqi from "./btn_juqi";
import tile_field from "./tile_field";
import TianCai from "./TianCai";
import TianCai_liandan1 from "./TianCai_liandan1";
import btn_tiiancai_get from "./btn_tiiancai_get";
import TianCai_kufang from "./TianCai_kufang";
import TianCai_fabao from "./TianCai_fabao";
import ProgressBar_tc from "./ProgressBar_tc";
import tile_zhongzi from "./tile_zhongzi";
import Tile_dj from "./Tile_dj";
import tile_danyao from "./tile_danyao";
import com_plantinfo from "./com_plantinfo";
import com_tiancai_xuan from "./com_tiancai_xuan";
import btn_tiancai_item from "./btn_tiancai_item";
import liandan_success from "./liandan_success";

export default class TianCaiUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(btn_chanzi1.URL, btn_chanzi1);
		fgui.UIObjectFactory.setExtension(btn_juqi.URL, btn_juqi);
		fgui.UIObjectFactory.setExtension(tile_field.URL, tile_field);
		fgui.UIObjectFactory.setExtension(TianCai.URL, TianCai);
		fgui.UIObjectFactory.setExtension(TianCai_liandan1.URL, TianCai_liandan1);
		fgui.UIObjectFactory.setExtension(btn_tiiancai_get.URL, btn_tiiancai_get);
		fgui.UIObjectFactory.setExtension(TianCai_kufang.URL, TianCai_kufang);
		fgui.UIObjectFactory.setExtension(TianCai_fabao.URL, TianCai_fabao);
		fgui.UIObjectFactory.setExtension(ProgressBar_tc.URL, ProgressBar_tc);
		fgui.UIObjectFactory.setExtension(tile_zhongzi.URL, tile_zhongzi);
		fgui.UIObjectFactory.setExtension(Tile_dj.URL, Tile_dj);
		fgui.UIObjectFactory.setExtension(tile_danyao.URL, tile_danyao);
		fgui.UIObjectFactory.setExtension(com_plantinfo.URL, com_plantinfo);
		fgui.UIObjectFactory.setExtension(com_tiancai_xuan.URL, com_tiancai_xuan);
		fgui.UIObjectFactory.setExtension(btn_tiancai_item.URL, btn_tiancai_item);
		fgui.UIObjectFactory.setExtension(liandan_success.URL, liandan_success);
	}
}