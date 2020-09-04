/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-02 15:29:31
 */
export default class ConfigPrayerContainer{
    
    private config:Map<number,IConfigprayer> = new Map<number,IConfigprayer>();
    
    constructor(datas:IConfigprayerJson){
        for(let i=0;i<datas.configprayer.length;i++){
            let data:IConfigprayer = datas.configprayer[i];
            this.config.set(data.prayerid,data);
        }      
    }

    public getConfigByPrayerId(day:number):IConfigprayer{
        return this.config.get(day);
    }

    public getConfig():Map<number,IConfigprayer>{
        return this.config;
    }
}