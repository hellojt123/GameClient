declare interface IConfigshareJson {
    configshare: IConfigshare[];
}

declare interface IConfigshare {
    id: number;
    type: number;
    title: string;
    url: string;
}

