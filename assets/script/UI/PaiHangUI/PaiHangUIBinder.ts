/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Com_paihang1 from "./Com_paihang1";
import PaiHang from "./PaiHang";
import PaiHang_shijie from "./PaiHang_shijie";
import Com_paihang2 from "./Com_paihang2";
import PaiHang_haoyou from "./PaiHang_haoyou";

export default class PaiHangUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(Com_paihang1.URL, Com_paihang1);
		fgui.UIObjectFactory.setExtension(PaiHang.URL, PaiHang);
		fgui.UIObjectFactory.setExtension(PaiHang_shijie.URL, PaiHang_shijie);
		fgui.UIObjectFactory.setExtension(Com_paihang2.URL, Com_paihang2);
		fgui.UIObjectFactory.setExtension(PaiHang_haoyou.URL, PaiHang_haoyou);
	}
}