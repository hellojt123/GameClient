declare interface IConfigqaJson {
    configqa: IConfigqa[];
}

declare interface IConfigqa {
    answer: number;
    wrong_award: number;
    options: string;
    id: number;
    title: string;
    qid: number;
    right_award: number;
    desc: string;
}

