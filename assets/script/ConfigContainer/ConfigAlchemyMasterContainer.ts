/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-11-29 10:27:03
 */
export default class ConfigAlchemyMasterContainer{
    
    private config:Map<number,IConfigalchemymaster> = new Map<number,IConfigalchemymaster>();
    
    constructor(datas:IConfigalchemymasterJson){      
        for(let i=0;i<datas.configalchemymaster.length;i++){
            let data:IConfigalchemymaster = datas.configalchemymaster[i];
            this.config.set(data.level,data);
        }      
    }

    public getConfigByLevel(level:number):IConfigalchemymaster{
        return this.config.get(level);
    }

    public getConfig():Map<number,IConfigalchemymaster>{
        return this.config;
    }
}