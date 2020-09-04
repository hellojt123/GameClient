declare interface IConfigprobJson {
    configprob: IConfigprob[];
}

declare interface IConfigprob {
    prob: number;
    award: string;
    id: number;
    type: number;
    desc: string;
}

