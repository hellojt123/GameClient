/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-06 15:57:51
 */
export default class ConfigMarryContainer {
    
    private config:Map<number,IConfigmarry> = new Map<number,IConfigmarry>();
    
    constructor(datas:IConfigmarryJson){      
        for(let i=0;i<datas.configmarry.length;i++){
            let data:IConfigmarry = datas.configmarry[i];
            this.config.set(data.level,data);
        }      
    }

    public getConfigByLevel(level:number):IConfigmarry{
        return this.config.get(level);
    }

    public getConfig():Map<number,IConfigmarry>{
        return this.config;
    }
}