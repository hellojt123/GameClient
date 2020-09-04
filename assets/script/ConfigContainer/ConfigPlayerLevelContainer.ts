/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-02-28 14:17:57
 */
export default class ConfigPlayerLevelContainer{
    
    private config:Map<number,IConfigplayerlevel> = new Map<number,IConfigplayerlevel>();
    private names:string[] = [];
    constructor(datas:IConfigplayerlevelJson){
        for(let i=0;i<datas.configplayerlevel.length;i++){
            let data:IConfigplayerlevel = datas.configplayerlevel[i];
            this.config.set(data.level,data);
            if(!this.names.includes(data.name)){
                this.names.push(data.name);
            }
        }      
    }

    public getConfigByLevel(level:number):IConfigplayerlevel{
        return this.config.get(level);
    }

    public getConfig():Map<number,IConfigplayerlevel>{
        return this.config;
    }

    public getNames():string[] {
        return this.names;
    }
}