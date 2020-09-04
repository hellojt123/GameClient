/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Guide from "./Guide";
import com_guide_dialog from "./com_guide_dialog";
import com_guide_mask from "./com_guide_mask";
import btn_guide_mask from "./btn_guide_mask";
import com_guide_finger from "./com_guide_finger";

export default class GuideUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(Guide.URL, Guide);
		fgui.UIObjectFactory.setExtension(com_guide_dialog.URL, com_guide_dialog);
		fgui.UIObjectFactory.setExtension(com_guide_mask.URL, com_guide_mask);
		fgui.UIObjectFactory.setExtension(btn_guide_mask.URL, btn_guide_mask);
		fgui.UIObjectFactory.setExtension(com_guide_finger.URL, com_guide_finger);
	}
}