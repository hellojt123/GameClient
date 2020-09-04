/*
 * @Author: Jiangtao
 * @Date: 2019-12-11 14:05:39
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 13:58:45
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import { protoName } from "../../Const/protoName";
import EventManager from "../../Manager/EventManager";
import { gameEvents } from "../../Const/gameEvents";



export default class activityHandlers extends baseHandlers{ 
    constructor(){
        super();
        this.init();
    }
    
    protected init(){   
        msgHandler.inst.addHandler(protoName.resQA,this.resQA);
        msgHandler.inst.addHandler(protoName.resQAReward,this.resQAReward);
        msgHandler.inst.addHandler(protoName.resActivity,this.resActivity);
    }

    private resQA(data:proto.resQA){      
        EventManager.inst.onEvents(gameEvents.updateQA,data)
    }

    private resQAReward(data:proto.resQAReward){
        EventManager.inst.onEvents(gameEvents.updateQAReward,data)
    }

    private resActivity(data:proto.resActivity){
        if(data.id == 22){
            Global.gameManager.playerManager.player.getProp().endTcdbTime = data.endtime;
        }else if(data.id == 25){
            Global.gameManager.playerManager.player.getProp().endTdjhTime = data.endtime;
        }
        EventManager.inst.onEvents(gameEvents.updateProp,Global.gameManager.playerManager.player.getProp())
    }

   
}