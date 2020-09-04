/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-02-21 17:13:05
 */
export default class ConfigItemContainer{
    
    private config:Map<number,IConfigitem> = new Map<number,IConfigitem>();
    
    constructor(datas:IConfigitemJson){     
        for(let i=0;i<datas.configitem.length;i++){
            let data:IConfigitem = datas.configitem[i];         
            this.config.set(data.itemid,data);
        }      
    }

    public getConfigByItemId(itemid:number):IConfigitem{     
        return this.config.get(itemid);
    }

    public getItemByStr(str:string):IConfigitem {
        let config:IConfigitem = null;
        let item:string[] = str.split(",");
        if(item.length==2){
            let itemid:number = Number.parseInt(item[0]);        
            config = this.getConfigByItemId(itemid);
        }
        return config;
    }

    public getConfig():Map<number,IConfigitem>{
        return this.config;
    }
}