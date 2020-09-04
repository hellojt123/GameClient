/*
 * @Author: Jiangtao
 * @Date: 2019-12-23 11:34:04
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 15:18:42
 */
export enum TipsType {
    NORAML = 0,
    ITEMSHOW = 1,
    CHOICE = 2,
    POPUP = 3,
    MAIL = 4,
    LIST = 5,
}



export class TipsData {
    type: TipsType;
    title: string = "提示";
    text: string;
    itemid: number;
    itemnum: number;
    award: string;
    state: number;
    ok_text: string = "确认";
    cancel_text: string = "取消";
    ok_callback: Function;
    cancel_callback: Function;
    itemRenderer: (index: number, item: fgui.GObject) => void;
    itemProvider: (index: number) => string;
    listtype: string;
    numItems: number;
    cancal_background: boolean = false;
}
