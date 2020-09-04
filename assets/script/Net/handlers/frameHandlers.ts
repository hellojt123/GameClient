/*
 * @Author: Jiangtao
 * @Date: 2019-11-11 10:39:10
 * @LastEditTime: 2019-12-10 14:56:00
 * @LastEditors: Jiangtao
 * @Description: In User Settings Edit
 * @FilePath: \SealRun\assets\script\Net\handlers\frameHandlers.ts
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto";
import { protoName } from "../../Const/protoName";
// const enum DFrame{
//     reqHeartBeat = "reqHeartBeat",
//     resHeartBeat = "resHeartBeat",
// }
export default class frameHandlers extends baseHandlers{   
    constructor(){
        super();
        this.init();
    }  
    protected init(){     
        msgHandler.inst.addHandler(protoName.reqHeartBeat,this.onResHeartBeat);     
        msgHandler.inst.addHandler(protoName.resHeartBeat,this.onResHeartBeat);     
    }

    onResHeartBeat(data:proto.resHeartBeat){   
      
    }   
}