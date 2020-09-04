/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-14 20:11:48
 */
export default class ConfigBuffContainer{
    
    private config:Map<number,IConfigbuff> = new Map<number,IConfigbuff>();
    
    constructor(datas:IConfigbuffJson){      
        for(let i=0;i<datas.configbuff.length;i++){
            let data:IConfigbuff = datas.configbuff[i];
            this.config.set(data.buff_id,data);
        }      
    }

    public getConfigById(id:number):IConfigbuff{
        return this.config.get(id);
    }

    public getConfig():Map<number,IConfigbuff>{
        return this.config;
    }
}