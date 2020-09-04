/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-23 13:28:42
 */
export default class ConfigWeddingContainer {

    private config: Map<number, IConfigwedding> = new Map<number, IConfigwedding>();
    private giftconfig: Map<number, IConfigwedding> = new Map<number, IConfigwedding>();

    constructor(datas: IConfigweddingJson) {
        for (let i = 0; i < datas.configwedding.length; i++) {
            let data: IConfigwedding = datas.configwedding[i];
            this.config.set(data.index, data);
            if (data.hongbao > 0) {
                this.giftconfig.set(data.index, data);
            }
        }
    }

    public getConfigById(id: number): IConfigwedding {
        return this.config.get(id);
    }

    public getConfig(): Map<number, IConfigwedding> {
        return this.config;
    }

    public getGiftConfig(): Map<number, IConfigwedding> {
        return this.giftconfig;
    }
}