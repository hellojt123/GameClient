/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-17 13:17:45
 */
export default class ConfigLoadContainer{
    
    private config:Map<string,IConfigload> = new Map<string,IConfigload>();
    
    constructor(datas:IConfigloadJson){      
        for(let i=0;i<datas.configload.length;i++){
            let data:IConfigload = datas.configload[i];
            this.config.set(data.name,data);
        }      
    }
    

    public getConfigByName(name:string):IConfigload{
        return this.config.get(name);
    }

    public getConfig():Map<string,IConfigload>{
        return this.config;
    }
}