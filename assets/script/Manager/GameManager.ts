/*
 * @Author: Jiangtao
 * @Date: 2019-10-22 17:30:53
 * @LastEditTime: 2020-06-11 16:26:17
 * @LastEditors: Jiangtao
 */

import UIManager from './UIManager'
import PlayerManager from './PlayerManager';
import AudioManager from './AudioManager';
import NetManager from './NetManager';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameManager extends cc.Component {

    @property(cc.ParticleSystem)
    expball: cc.ParticleSystem = null;

    @property(cc.MotionStreak)
    point: cc.MotionStreak = null;

    @property(cc.Node)
    uiroot: cc.Node = null;

    @property(PlayerManager)
    playerManager: PlayerManager = null;

    @property(UIManager)
    uiManager: UIManager = null;

    @property(AudioManager)
    audioManager: AudioManager = null;

    @property(cc.Font)
    font: cc.Font = null;

    public onLoad() {
        Global.gameManager = this;
        //socket连接  
        NetManager.inst.connect(Global.host, Global.getPort());
    }
}