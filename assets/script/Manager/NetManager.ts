/*
 * @Author: Jiangtao
 * @Date: 2019-11-05 11:18:11
 * @LastEditTime: 2020-06-15 14:33:36
 * @LastEditors: Jiangtao
 * @Description: In User Settings Edit
 * @FilePath: \SealRun\assets\script\Manager\NetManager.ts
 */
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// import protores from '../Net/msg'

import Socket from "../Lib/Net/socket";
import * as proto from "../Net/proto/proto";
import msgHandler from '../Net/msgHandler'
import { protoName } from "../Const/protoName";


// 是否输出日志
const LOG_ENABLED: boolean = true;
export default class NetManager {
    private static _inst: NetManager;
    public static get inst() {
        return NetManager._inst || (NetManager._inst = new NetManager());
    }

    // 连接超时时间
    private readonly timeout: number;
    // 最大重连次数
    private readonly reConnectMaxCount: number;
    // 尝试重连时间间隔
    private readonly reConnectTimeInterval: number;

    // socket
    private m_socket: Socket;
    // ip
    private m_ip: string;
    // port
    private m_port: string;
    // 重连次数
    private m_reConnectCount: number;
    // 重连Handle
    private m_reConnectHandle: any;

    private heartCheck = {
        timeout: 1000,//60ms
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function () {
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            this.start();
        },
        start: function () {
            var self = this;
            this.timeoutObj = setTimeout(function () {
                var data = proto.reqHeartBeat.create({ id: 1 });
                msgHandler.inst.sendmsg(protoName.reqHeartBeat, data);
                self.serverTimeoutObj = setTimeout(function () {
                    NetManager.inst.m_socket.close();//如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                }, self.timeout)
            }, this.timeout)
        },
    }

    private msghandler: msgHandler;

    constructor() {
        /**
         *  config
         */
        // 连接超时时间
        this.timeout = 30000;
        // 最大重连次数
        this.reConnectMaxCount = 3;
        // 尝试重连时间间隔
        this.reConnectTimeInterval = 1000;

        /**
          *  init
          */
        this.m_socket = null;
        this.m_reConnectCount = 0;
        this.msghandler = new msgHandler();
    }

    /**
     * 连接状态
     */
    public get connectState() {
        if (this.m_socket) {
            return this.m_socket.state;
        }
        return -1;
    }

    /**
     * 建立连接
     * @param ip ip
     * @param port port
     */
    public connect(ip: string, port: string) {
        if (!this.m_socket) {
            this.m_ip = ip;
            this.m_port = port;
            if (this.connectState == -1 || this.connectState == WebSocket.CLOSED) {
                if (!this.m_socket) {

                    this.m_socket = new Socket(this, this.onConnect, this.onClose, this.onMessage, this.onError, this.onTimeout);
                }
                this.m_socket.connect(ip, port, this.timeout);
            }
        }
    }

    /**
     * 重新连接
     */
    public reConnect() {
        if (LOG_ENABLED) console.log(`network -> reConnect count:${this.m_reConnectCount}`);
        if (this.m_reConnectCount <= this.reConnectMaxCount) {
            //this.m_reConnectCount++;
            this.connect(this.m_ip, this.m_port);
        }
        else {
            if (LOG_ENABLED) console.log("network -> reConnect failed");
            // 重置重连次数
            this.m_reConnectCount = 0;
        }
    }

    /**
     * 自动重连
     */
    private autoReConnect() {
        // 清理重连Handle
        if (this.m_reConnectHandle) {
            clearTimeout(this.m_reConnectHandle);
        }
        // 启动定时重连
        let self = this;
        this.m_reConnectHandle = setTimeout(() => {
            self.reConnect();
        }, this.reConnectTimeInterval);
    }

    public send(data: ArrayBufferLike): void {

        if (this.connectState == WebSocket.OPEN) {
            this.m_socket.send(data);
        }
        else {
            // 回收销毁
            this.disponse();
            // 重新连接
            this.reConnect();
        }
    }

    /**
     * 回收销毁
     */
    private disponse() {
        // 清理重连Handle
        if (this.m_reConnectHandle) {
            clearTimeout(this.m_reConnectHandle);
        }

        // 清理socket 对象
        if (this.m_socket) {
            this.m_socket.disponse();
        }
        this.m_socket = null;
    }

    private onConnect(e: Event) {
        if (LOG_ENABLED) console.log(`network -> onConnect succeed! ip:${this.m_ip} port:${this.m_port}`);
        this.heartCheck.start();
        msgHandler.inst.sendmsg(protoName.reqLogin, new proto.reqLogin({ name: Global.username, pwd: Global.password }));
        // 重置重连次数
        this.m_reConnectCount = 0;
    }

    private onReConnect(e: Event) {
        if (LOG_ENABLED) console.log(`network -> onReConnect succeed! ip:${this.m_ip} port:${this.m_port}`);

        // 重置重连次数
        this.m_reConnectCount = 0;
    }

    private onMessage(e: MessageEvent) {
        //if (LOG_ENABLED) console.log(`network -> onMessage! data:${e.data}`);
        this.heartCheck.reset();
        msgHandler.inst.onMessage(e.data);
    }

    private onClose(e: CloseEvent) {
        if (LOG_ENABLED) console.log("network -> onClose!");
        // 回收销毁
        this.disponse();

        // 自动重连
        this.autoReConnect();
    }

    private onError(e: Event) {
        if (LOG_ENABLED) console.log(`network -> onError! error:` + e);
        // 回收销毁
        this.disponse();

        // 自动重连
        this.autoReConnect();
    }

    private onTimeout() {
        if (LOG_ENABLED) console.log("network -> onTimeout!");

        // 回收销毁
        this.disponse();

        // 自动重连
        this.autoReConnect();
    }




}
