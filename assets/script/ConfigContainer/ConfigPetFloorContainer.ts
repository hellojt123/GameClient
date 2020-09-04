/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-02 11:04:56
 */
export default class ConfigPetFloorContainer{
    
    private config:Map<number,IConfigpetfloor> = new Map<number,IConfigpetfloor>();
    private awardConifg:IConfigpetfloor[] = [];
 
    constructor(datas:IConfigpetfloorJson){      
        for(let i=0;i<datas.configpetfloor.length;i++){
            let data:IConfigpetfloor = datas.configpetfloor[i];
            this.config.set(data.floor,data);
            if(data.award && data.award.length>0){
                this.awardConifg.push(data);            
            }
        }      
    }

    public getAwardConfig():IConfigpetfloor[]{
        return this.awardConifg;
    }

    public getConfigByFloor(floor:number):IConfigpetfloor{
        return this.config.get(floor);
    }

    public getConfig():Map<number,IConfigpetfloor>{
        return this.config;
    }
}