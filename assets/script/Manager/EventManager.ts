/*
 * @Author: Jiangtao
 * @Date: 2019-11-21 12:57:43
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-03 16:50:06
 */
//事件订阅分发

import { gameEvents } from "../Const/gameEvents";
export  default class EventManager{
    private static _inst: EventManager;
    public static get inst() {
        return EventManager._inst || (EventManager._inst = new EventManager());
    }
    private events:Map<gameEvents,Function[]> = new Map<gameEvents,Function[]>();

    public addEvents(type:gameEvents,func:Function){
        let funcs:Function[] = EventManager.inst.events.get(type);
        if(!funcs) {
            funcs = [];
            EventManager.inst.events.set(type,funcs);
        }
        funcs.push(func);    
    }

    public removeEvents(type,func:Function) {
        let funcs:Function[] = EventManager.inst.events.get(type);
        if(!funcs) {
            funcs.filter(item=> item!==func );            
        }
    }

    public onEvents(type:gameEvents,data:(any)=null){     
        let funcs:Function[] = EventManager.inst.events.get(type);       
        if(funcs){
            funcs.forEach(func => {
                func(data);
            });
        }
    }
    
}