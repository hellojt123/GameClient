/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-02-19 10:10:52
 */
export default class ConfigSeedsContainer {
    
    private config:Map<number,IConfigseed> = new Map<number,IConfigseed>();  
    
    constructor(datas:IConfigseedsJson) {      
        for(let i=0;i<datas.configseeds.length;i++) {
            let data:IConfigseed = datas.configseeds[i];
            this.config.set(data.type,data);           
        }
    }

    public getConfigByType(type:number):IConfigseed {
        return this.config.get(type);
    }

    public getConfigs():Map<number,IConfigseed> {
        return this.config;
    }
  
}