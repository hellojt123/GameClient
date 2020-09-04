declare interface IConfigmailsJson {
    configmails: IConfigmail[];
}

declare interface IConfigmail {
    award: number;
    icon: string;
    expire_time: number;
    id: number;
    text: string;
    type: number;
    title: string;
}

