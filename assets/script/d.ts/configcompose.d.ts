declare interface IConfigcomposeJson {
    configcompose: IConfigcompose[];
}

declare interface IConfigcompose {
    cost: number;
    targetid: number;
    composetype: number;
    compose_max: number;
    needitem: string;
    composelevel: number;
    itemid: number;
    times: number;
    rec_rate: number;
    rate: number;
    targetnum: number;
    compose_min: number;
    id: number;
}

