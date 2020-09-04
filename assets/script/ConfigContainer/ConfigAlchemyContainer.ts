/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2019-12-30 14:06:20
 */
export default class ConfigAlchemyContainer{ 
   
    private config:Map<number,Map<number,IConfigalchemy>> = new Map<number,Map<number,IConfigalchemy>>();
    
    constructor(datas:IConfigalchemyJson){      
        for(let i=0;i<datas.configalchemy.length;i++){
        
            let data:IConfigalchemy = datas.configalchemy[i];
            if(!this.config.has(data.type)){
                let mc:Map<number,IConfigalchemy>  = new Map<number,IConfigalchemy>();               
                this.config.set(data.type,mc);
            }
            let mc:Map<number,IConfigalchemy>  = this.config.get(data.type);
            mc.set(data.level,data);       
        }      
    }

    public getConfigByTypeLevel(type:number,level:number):IConfigalchemy{
        let mc:Map<number,IConfigalchemy> = this.config.get(type);
        if(mc){
            return mc.get(level);
        }
        return null;
    }

    public getConfig():Map<number,Map<number,IConfigalchemy>>{
        return this.config;
    }
}