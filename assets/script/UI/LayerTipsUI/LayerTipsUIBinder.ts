/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import layer_tipsbg from "./layer_tipsbg";
import LayerTips from "./LayerTips";

export default class LayerTipsUIBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(layer_tipsbg.URL, layer_tipsbg);
		fgui.UIObjectFactory.setExtension(LayerTips.URL, LayerTips);
	}
}