/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-02-24 11:08:57
 */
export default class ConfigLanContainer{
    
    private config:Map<string,Map<number,IConfiglan>> = new Map<string,Map<number,IConfiglan>>();    
    constructor(datas:IConfiglanJson){      
        for(let i=0;i<datas.configlan.length;i++){
            let data:IConfiglan = datas.configlan[i];
            if(data.textType){
                if(!this.config.has(data.textType)){
                    this.config.set(data.textType,new Map<number,IConfiglan>());
                }              
                var map:Map<number,IConfiglan> = this.config.get(data.textType);
                map.set(data.textid,data);
            }     
        }      
    }

    public getConfigByTypeId(type:string,id:number):string{
        var data = this.config.get(type);
        if(data != null){
            if(data.has(id)){
                return data.get(id).textdetail;
            }
            return "";
        }
        return "";
    }

    public getConfig():Map<string,Map<number,IConfiglan>>{
        return this.config;
    }
}