declare interface IConfigtaskJson {
    configtask: IConfigtask[];
}

declare interface IConfigtask {
    targetId: number;
    submitType: number;
    refreshTime: number;
    link: string;
    icon: string;
    targetType: number;
    type: number;
    preTaskId: number;
    taskDesc: string;
    autoSubmit: number;
    award: number;
    needlevel: number;
    targetNum: number;
    subType: number;
    taskName: string;
    id: number;
    taskid: number;
    nextTask: number;
    submitid: number;
}

