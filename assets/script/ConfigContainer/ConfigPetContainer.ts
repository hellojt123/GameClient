/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-07 13:15:13
 */
export default class ConfigPetContainer{
    
    private config:Map<number,IConfigpet> = new Map<number,IConfigpet>();
    
    constructor(datas:IConfigpetJson){      
        for(let i=0;i<datas.configpet.length;i++){
            let data:IConfigpet = datas.configpet[i];
            this.config.set(data.petid,data);
        }      
    }

    public getConfigById(id:number):IConfigpet{
        return this.config.get(id);
    }
    
    public getConfigByShowType(showtype:number):IConfigpet {    
        for(var value of this.config.values()){          
            if(value.showtype == showtype){
                return value;               
            }
        }    
        return null;
    }

    public getConfig():Map<number,IConfigpet>{
        return this.config;
    }
}