declare interface IConfigcreatureJson {
    configcreature: IConfigcreature[];
}

declare interface IConfigcreature {
    drop: number;
    explain: string;
    canmove: number;
    defence: number;
    attack: number;
    hp: number;
    id: number;
    type: number;
    cid: number;
}

