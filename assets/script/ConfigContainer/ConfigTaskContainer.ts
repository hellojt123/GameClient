/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-06 15:57:51
 */
export default class ConfigTaskContainer{
    
    private config:Map<number,IConfigtask> = new Map<number,IConfigtask>();
    
    constructor(datas:IConfigtaskJson){      
        for(let i=0;i<datas.configtask.length;i++){
            let data:IConfigtask = datas.configtask[i];
            this.config.set(data.id,data);
        }      
    }

    public getConfigById(id:number):IConfigtask{
        return this.config.get(id);
    }

    public getConfig():Map<number,IConfigtask>{
        return this.config;
    }
}