/*
 * @Author: Jiangtao
 * @Date: 2019-11-19 14:05:42
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 13:57:23
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";

import { protoName } from "../../Const/protoName";
import { gameEvents } from "../../Const/gameEvents";


export default class petHandlers extends baseHandlers{ 
    constructor(){
        super();
        this.init();
    }
    
    protected init(){   
        msgHandler.inst.addHandler(protoName.resPlayerPet,this.onResPetProp); 
        msgHandler.inst.addHandler(protoName.resNextFloor,this.onResNextFloor);     
        msgHandler.inst.addHandler(protoName.resPetAD,this.onResPetAD);        
    }  

    onResPetProp(data:proto.resPlayerPet){      
        Global.gameManager.playerManager.updatePlayerPet(data.pets);  
    }
    onResNextFloor(){     
        EventManager.inst.onEvents(gameEvents.updateNextFloor,true);
    }
    onResPetAD(data:proto.resPetAD){
        Global.gameManager.playerManager.updatePetAD(data);  
    }
}