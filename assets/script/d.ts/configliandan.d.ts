declare interface IConfigliandanJson {
    configliandan: IConfigliandan[];
}

declare interface IConfigliandan {
    peifang: string;
    targeItem: string;
    needitem: string;
    type: number;
    reset_time: number;
    min_time: number;
    award: number;
    ext_need: number;
    game_time: number;
    name: string;
    id: number;
    ad_time: number;
    alchemyExp: number;
}

