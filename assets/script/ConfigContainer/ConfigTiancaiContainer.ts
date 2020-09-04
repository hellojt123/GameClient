/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-02-18 10:32:21
 */
export default class ConfigTiancaiContainer {
    
    private config:Map<number,IConfigtiancai> = new Map<number,IConfigtiancai>();   
    
    constructor(datas:IConfigtiancaiJson){      
        for(let i=0;i<datas.configtiancai.length;i++){
            let data:IConfigtiancai = datas.configtiancai[i];
            this.config.set(data.level,data);          
        }      
    }

    public getConfigByLevel(level:number):IConfigtiancai{
        return this.config.get(level);
    }

    public getConfig():Map<number,IConfigtiancai>{
        return this.config;
    }

}