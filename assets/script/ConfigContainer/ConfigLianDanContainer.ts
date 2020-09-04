/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-04 08:37:16
 */


export default class ConfigLianDanContainer {
    
    private configs:Map<number,IConfigliandan> = new Map<number,IConfigliandan>();  
    
    constructor(datas:IConfigliandanJson) {      
        for(let i=0;i<datas.configliandan.length;i++) {
            let data:IConfigliandan = datas.configliandan[i];
            if(!this.configs.has(data.type)) {
                this.configs.set(data.type,data);
            }               
        }      
    }

    public getConfigs():Map<number,IConfigliandan> {
        return this.configs;
    }

    public getConfigByType(type:number) {
        return this.configs.get(type);
    }
}