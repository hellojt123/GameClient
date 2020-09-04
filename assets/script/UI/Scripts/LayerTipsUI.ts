/*
 * @Author: Jiangtao
 * @Date: 2019-11-12 16:35:34
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 13:29:01
 */


import  baseUI from "./baseUI";
import LayerTips from "../LayerTipsUI/LayerTips";
import LayerTipsUIBinder from "../LayerTipsUI/LayerTipsUIBinder";


const {ccclass, property} = cc._decorator;
@ccclass
export default class LayerTipsUI extends baseUI {  
    public uiname:string = "LayerTipsUI";
    public _view:LayerTips; 

    onLoad() {  
        super.onLoad();
               
    }

    show(){     
        super.show();
    }
    
    init(){
        if(this._view == null){
            LayerTipsUIBinder.bindAll();      
            this._view = LayerTips.createInstance();
            super.init();
            this.initClick();   
        }
    }

    initClick(){      
        this._view.frame.onClick(this.hide,this);     
    }
}
