declare interface IConfigprayerJson {
    configprayer: IConfigprayer[];
}

declare interface IConfigprayer {
    prob: number;
    resettime: number;
    mul: number;
    name: string;
    prayerid: number;
    id: number;
    desc: string;
}

