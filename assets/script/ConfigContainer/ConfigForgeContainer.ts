/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-11-28 15:20:47
 */
export default class ConfigForgeContainer{
    
    private config:Map<number,IConfigforge> = new Map<number,IConfigforge>();
    
    constructor(datas:IConfigforgeJson){      
        for(let i=0;i<datas.configforge.length;i++){
            let data:IConfigforge = datas.configforge[i];
            this.config.set(data.level,data);
        }      
    }

    public getConfigByLevel(level:number):IConfigforge{
        return this.config.get(level);
    }

    public getConfig():Map<number,IConfigforge>{
        return this.config;
    }
}