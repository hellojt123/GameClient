declare interface IConfigloadJson {
    configload: IConfigload[];
}

declare interface IConfigload {
    load: number;
    name: string;
    unload: number;
    del: number;
    id: number;
    type: string;
}

