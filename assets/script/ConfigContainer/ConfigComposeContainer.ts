/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-07 12:22:42
 */
export default class ConfigComposeContainer{
    
    private config:Map<number,IConfigcompose> = new Map<number,IConfigcompose>();  
    
    constructor(datas:IConfigcomposeJson){      
        for(let i=0;i<datas.configcompose.length;i++){
            let data:IConfigcompose = datas.configcompose[i];
            this.config.set(data.composelevel,data);           
        }      
    }

    public getLevelComposeByLevel(level:number):IConfigcompose{
        return this.config.get(level);
    }


    public getConfig():Map<number,IConfigcompose>{
        return this.config;
    }
}