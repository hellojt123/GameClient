/*
 * @Author: Jiangtao
 * @Date: 2019-11-19 14:05:42
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 13:57:49
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import EventManager from "../../Manager/EventManager";

import { protoName } from "../../Const/protoName";
import { gameEvents } from "../../Const/gameEvents";


export default class mapHandlers extends baseHandlers{ 
        
    constructor(){
        super();
        this.init();
    }
    
    protected init(){      
        msgHandler.inst.addHandler(protoName.resDropItems,this.resDropItems);
    }

    private resDropItems(data:proto.resDropItems){
        Global.gameManager.playerManager.updatePlayerDropItems(data);
        EventManager.inst.onEvents(gameEvents.updateDropItem,data);         
    }

}