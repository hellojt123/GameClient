/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-15 17:11:31
 */
export default class ConfigActivityContainer{
    
    private config:Map<number,IConfigactivity> = new Map<number,IConfigactivity>();
    private dayconfig:Map<number,Map<number,IConfigactivity>> = new Map<number,Map<number,IConfigactivity>>();
  
    
    constructor(datas:IConfigactivityJson){      
        for(let i=0;i<datas.configactivity.length;i++){
            let data:IConfigactivity = datas.configactivity[i];
            this.config.set(data.aid,data);
            if(data.daytype>0){
                if(!this.dayconfig.has(data.daytype)){
                    var map = new Map<number,IConfigactivity>();
                    this.dayconfig.set(data.daytype,map);
                }
                var map = this.dayconfig.get(data.daytype);
                map.set(data.days,data);
            }         
        }      
    }

    public getConfigById(id:number):IConfigactivity{
        return this.config.get(id);
    }

    public getDayConfigByTypeDay(type:number,day:number):IConfigactivity{
        var map = this.dayconfig.get(type);
        if(map){
            return map.get(day);
        }
        return null;
    }

    public getDayConfigsByType(type:number):Map<number,IConfigactivity>{
        return this.dayconfig.get(type);
    }

   

    public getConfig():Map<number,IConfigactivity>{
        return this.config;
    }
}