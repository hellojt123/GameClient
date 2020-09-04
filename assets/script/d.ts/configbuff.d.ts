declare interface IConfigbuffJson {
    configbuff: IConfigbuff[];
}

declare interface IConfigbuff {
    duration: number;
    add: number;
    buff_id: number;
    overlap: number;
    param: number;
    effect: number;
    limit: number;
    replace: number;
    id: number;
    autoTime: number;
    waitTime: number;
    desc: string;
}

