/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-02 11:23:40
 */
export default class ConfigbodyContainer{
    
    private config:Map<number,Map<number,IConfigbody>> = new Map<number,Map<number,IConfigbody>>();
    
    constructor(datas:IConfigbodyJson){      
        for(let i=0;i<datas.configbody.length;i++){
            let data:IConfigbody = datas.configbody[i];
            if(!this.config.has(data.type)){
                this.config.set(data.type,new Map<number,IConfigbody>());
            }
            let cb:Map<number,IConfigbody> = this.config.get(data.type);
            cb.set(data.layer,data);
        }      
    }

    public getConfigByTypeLayer(type:number,layer:number){
        let cb:Map<number,IConfigbody> = this.config.get(type);
        if(cb){
            return cb.get(layer);
        }
        return null;
    }

    public getConfig():Map<number,Map<number,IConfigbody>>{
        return this.config;
    }
}