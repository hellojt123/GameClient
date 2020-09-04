/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 14:09:13
 */
import * as proto from "../Net/proto/proto";
import { GameUtil } from "../Util/GameUtil";

export default class ConfigShareContainer {

    private configs: Map<number, IConfigshare[]> = new Map<number, IConfigshare[]>();


    constructor(datas: IConfigshareJson) {
        for (let i = 0; i < datas.configshare.length; i++) {
            let data: IConfigshare = datas.configshare[i];
            if (!this.configs.has(data.type)) {
                this.configs.set(data.type, []);
            }
            let list: IConfigshare[] = this.configs.get(data.type);
            list.push(data);
        }
    }

    public getConfigs(): Map<number, IConfigshare[]> {
        return this.configs;
    }

    public getConfigByType(type: number): IConfigshare {
        if (this.configs.has(type)) {
            let list: IConfigshare[] = this.configs.get(type);
            let random = GameUtil.random(0, list.length - 1)
            return list[random];
        }
        return null;
    }
}


}