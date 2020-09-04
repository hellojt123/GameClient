declare interface IConfigparamsJson {
    configparams: IConfigparam[];
}

declare interface IConfigparam {
    paramInt: number;
    paramStr: string;
    pid: number;
    id: number;
    desc: string;
}

