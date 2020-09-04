declare interface IConfigforgeJson {
    configforge: IConfigforge[];
}

declare interface IConfigforge {
    cost: number;
    level: number;
    mul: number;
    name: string;
    icon: string;
    id: number;
}

