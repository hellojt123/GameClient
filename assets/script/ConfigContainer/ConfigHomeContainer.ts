/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2019-12-24 09:36:22
 */
export default class ConfigHomeContainer{
    
    private config:Map<number,Map<number,IConfighome>> = new Map<number,Map<number,IConfighome>>();
    
    constructor(datas:IConfighomeJson){      
        for(let i=0;i<datas.confighome.length;i++){
            let data:IConfighome = datas.confighome[i];
            if(!this.config.has(data.type)){
                this.config.set(data.type,new Map<number,IConfighome>());
            }
            var map:Map<number,IConfighome> = this.config.get(data.type);
            map.set(data.playerlv,data);
        }      
    }

    public getConfigByTypeLevel(type:number,level:number):IConfighome{
        var map:Map<number,IConfighome> = this.config.get(type);
        var last:IConfighome = null;
        if(map){
            map.forEach((value,key)=>{
                if(level >= value.playerlv){
                    last = value;
                }
            })
        }        
        return last;
    }

    public getConfig():Map<number,Map<number,IConfighome>>{
        return this.config;
    }
}