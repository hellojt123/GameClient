/*
 * @Author: Jiangtao
 * @Date: 2019-11-19 14:05:42
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-10 14:57:05
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import { protoName } from "../../Const/protoName";


export default class taskHandlers extends baseHandlers{ 
    constructor(){
        super();
        this.init();
    }
    
    protected init(){   
        msgHandler.inst.addHandler(protoName.resPlayerTask,this.resPlayerTask);
    }

    private resPlayerTask(data:proto.resPlayerTask){      
        Global.gameManager.playerManager.updatePlayerTask(data.tasks);
    }

   
}