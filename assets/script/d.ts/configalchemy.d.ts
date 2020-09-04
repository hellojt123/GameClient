declare interface IConfigalchemyJson {
    configalchemy: IConfigalchemy[];
}

declare interface IConfigalchemy {
    level: number;
    targeItem: string;
    needitem: string;
    type: number;
    reset_time: number;
    min_time: number;
    award: number;
    game_time: number;
    name: string;
    client: number;
    id: number;
    ad_time: number;
    alchemyExp: number;
}

