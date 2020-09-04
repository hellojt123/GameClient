/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-11 14:16:50
 */
export default class ConfigQAContainer{
    
    private config:Map<number,IConfigqa> = new Map<number,IConfigqa>();
    
    constructor(datas:IConfigqaJson){      
        for(let i=0;i<datas.configqa.length;i++){
            let data:IConfigqa = datas.configqa[i];
            this.config.set(data.id,data);
        }      
    }

    public getConfigById(id:number):IConfigqa{
        return this.config.get(id);
    }

    public getConfig():Map<number,IConfigqa>{
        return this.config;
    }
}