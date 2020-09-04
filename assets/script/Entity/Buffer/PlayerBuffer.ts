/*
 * @Author: Jiangtao
 * @Date: 2020-01-14 20:04:49
 * @LastEditors  : Jiangtao
 * @LastEditTime : 2020-01-15 10:23:28
 */
import { baseEntity } from "../Base/baseEntity";
import * as proto from "../../Net/proto/proto";

export class PlayerBuffer extends baseEntity {
    private _data:proto.PlayerBuff;
    private _config:IConfigbuff;
    constructor(data:proto.PlayerBuff) {
        super();
        this._data = data;
    }

}