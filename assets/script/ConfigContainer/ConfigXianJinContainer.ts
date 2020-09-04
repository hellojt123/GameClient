/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 16:37:24
 */

import { ItemData } from "../Util/GameUtil";

export default class ConfigXianJinContainer {

    private configs: Map<number, Map<number, IConfigxianjin>> = new Map<number, Map<number, IConfigxianjin>>();
    private final_configs: Map<number, ItemData[]> = new Map<number, ItemData[]>();

    constructor(datas: IConfigxianjinJson) {
        for (let i = 0; i < datas.configxianjin.length; i++) {
            let data: IConfigxianjin = datas.configxianjin[i];
            if (!this.configs.has(data.type)) {
                this.configs.set(data.type, new Map<number, IConfigxianjin>());
            }
            if (data.final_award && data.needitem == 0) {
                if (!this.final_configs.has(data.type)) {
                    this.final_configs.set(data.type, []);
                }
                let list = this.final_configs.get(data.type);
                let itemstrs: string[] = data.final_award.split(";");
                for (let i = 0; i < itemstrs.length; i++) {
                    let itemstr: string[] = itemstrs[i].split(",");
                    let dp = new ItemData();
                    dp.itemid = Number.parseInt(itemstr[0]);
                    dp.itemnum = Number.parseInt(itemstr[1]);
                    list.push(dp);
                }
            }
            let map: Map<number, IConfigxianjin> = this.configs.get(data.type);
            map.set(data.level, data);
        }
    }

    public getConfigByTypeByLevel(type: number, level: number): IConfigxianjin {
        var config: IConfigxianjin = null;
        if (this.configs.has(type)) {
            config = this.configs.get(type).get(level);
        }
        return config;
    }

    public getConfigs(): Map<number, Map<number, IConfigxianjin>> {
        return this.configs;
    }

    public getFinalConfigs(): Map<number, ItemData[]> {
        return this.final_configs;
    }
}