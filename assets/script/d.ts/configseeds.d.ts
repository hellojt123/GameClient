declare interface IConfigseedsJson {
    configseeds: IConfigseed[];
}

declare interface IConfigseed {
    harvest: number;
    seed: number;
    icon: string;
    id: number;
    type: number;
    t1: number;
    plant_desc: string;
    t2: number;
    plant_name: string;
    need_time: number;
    t3: number;
}

