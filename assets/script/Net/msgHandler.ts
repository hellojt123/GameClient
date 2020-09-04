/*
 * @Author: Jiangtao
 * @Date: 2019-11-09 13:33:40
 * @LastEditTime: 2020-06-11 16:51:17
 * @LastEditors: Jiangtao
 */

import frameHandlers from './handlers/frameHandlers';
import loginHandlers from './handlers/loginHandlers';
import baseHandlers from './handlers/baseHandlers';
import NetManager from '../Manager/NetManager';
import * as proto from "../Net/proto/proto";
import playerHandlers from './handlers/playerHandlers';
import petHandlers from './handlers/petHandlers';
import mapHandlers from './handlers/mapHandlers';
import taskHandlers from './handlers/taskHandlers';
import activityHandlers from './handlers/activityHandlers';
import weddingHandlers from './handlers/weddingHandlers';

export default class msgHandler {
    private static _inst: msgHandler;
    public static get inst() {
        if (!msgHandler._inst) {
            msgHandler._inst = new msgHandler()
        }
        return msgHandler._inst;
    }

    private handlers: Array<baseHandlers> = new Array<baseHandlers>();
    private msgHandlers: Object = {};

    constructor() {
    }

    public init() {
        this.handlers.push(new playerHandlers());
        this.handlers.push(new loginHandlers());
        this.handlers.push(new frameHandlers());
        this.handlers.push(new petHandlers());
        this.handlers.push(new mapHandlers());
        this.handlers.push(new taskHandlers());
        this.handlers.push(new activityHandlers());
        this.handlers.push(new weddingHandlers());

    }

    public onHandler(msgid: string, data: any) {
        let Handler = this.msgHandlers[msgid];
        if (Handler) {
            Handler(data);
        }
    }

    public addHandler(type: string, handler: Function) {
        this.msgHandlers[type] = handler;
    }

    public onMessage(msg: any) {
        let data = proto.Frame.decode(new Uint8Array(msg));
        let msgData = this.Decode(data.messageType, data.payload);
        this.onHandler(data.messageType, msgData)
    }

    public sendmsg(name: string, data: any) {
        let encodeData = this.Encode(name, data);
        var frame = proto.Frame.create({ messageType: name, payload: encodeData })
        var buffer = proto.Frame.encode(frame).finish();
        NetManager.inst.send(buffer.slice().buffer);
    }

    public Encode(msgTypeName, data: any) {
        var msgType = proto[msgTypeName];
        var bytes = msgType.encode(data).finish();
        return bytes;
    }

    public Decode(msgTypeName, bytes) {
        var msgType = proto[msgTypeName];
        var msg = msgType.decode(bytes);
        // var data = msgType.toObject(msg, {
        // 	longs: Number,		//long默认转换为Number类型
        // 	enums: String,
        //     bytes: String,
        //     defaults:true,
        // 	// see ConversionOptions
        // });
        return msg;
    }


}