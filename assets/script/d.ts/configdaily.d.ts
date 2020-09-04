declare interface IConfigdailyJson {
    configdaily: IConfigdaily[];
}

declare interface IConfigdaily {
    times: number;
    id: number;
    dailyid: number;
    desc: string;
}

