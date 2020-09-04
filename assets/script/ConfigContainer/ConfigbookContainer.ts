/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-05 16:21:12
 */
export default class ConfigbookContainer{
    
    private config:Map<number,Map<number,IConfigbook>> = new Map<number,Map<number,IConfigbook>>();
    
    constructor(datas:IConfigbookJson){      
        for(let i=0;i<datas.configbook.length;i++){
            let data:IConfigbook = datas.configbook[i];
            if(!this.config.has(data.type)){
                this.config.set(data.type,new Map<number,IConfigbook>());
            }
            let cb:Map<number,IConfigbook> = this.config.get(data.type);
            cb.set(data.booklevel,data);
        }      
    }

    public getConfigByTypeLevel(type:number,level:number):IConfigbook{
        let cb:Map<number,IConfigbook> = this.config.get(type);
        if(cb){
            return cb.get(level);
        }
        return null;
    }

    public getConfig():Map<number,Map<number,IConfigbook>>{
        return this.config;
    }
}