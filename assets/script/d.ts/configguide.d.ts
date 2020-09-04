declare interface IConfigguideJson {
    configguide: IConfigguide[];
}

declare interface IConfigguide {
    posX: number;
    posY: number;
    level: number;
    name: string;
    anitype: number;
    step: number;
    id: number;
    trigger: number;
    uiname: string;
    key: number;
    layer: number;
    desc: string;
}

