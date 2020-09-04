/*
 * @Author: Jiangtao
 * @Date: 2019-11-27 15:49:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 14:11:44
 */
export default class ConfigGuideContainer {

    private configs: Map<number, Map<number, IConfigguide>> = new Map<number, Map<number, IConfigguide>>();
    private endStep: guideData = new guideData();
    constructor(datas: IConfigguideJson) {
        for (let i = 0; i < datas.configguide.length; i++) {
            let data: IConfigguide = datas.configguide[i];
            if (!this.configs.has(data.key)) {
                this.configs.set(data.key, new Map<number, IConfigguide>());
            }
            let map: Map<number, IConfigguide> = this.configs.get(data.key);
            map.set(data.step, data);
            this.endStep.key = data.key;
            this.endStep.step = data.step;
        }
    }

    public getConfigByKeyByStep(key: number, step: number): IConfigguide {
        let config: IConfigguide = null;
        if (this.configs.has(key)) {
            config = this.configs.get(key).get(step);
        }
        return config;
    }

    public getConfigs(): Map<number, Map<number, IConfigguide>> {
        return this.configs;
    }

    public getEndStep(): guideData {
        return this.endStep;
    }

}

export class guideData {
    public key: number = 0;
    public step: number = 0;;
}
