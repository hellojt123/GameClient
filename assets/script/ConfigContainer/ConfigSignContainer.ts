/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-02 15:29:23
 */
export default class ConfigSignContainer{
    
    private config:Map<number,IConfigsign> = new Map<number,IConfigsign>();
    
    constructor(datas:IConfigsignJson){      
        for(let i=0;i<datas.configsign.length;i++){
            let data:IConfigsign = datas.configsign[i];
            this.config.set(data.days,data);
        }      
    }

    public getConfigByDay(day:number):IConfigsign{
        return this.config.get(day);
    }

    public getConfig():Map<number,IConfigsign>{
        return this.config;
    }
}