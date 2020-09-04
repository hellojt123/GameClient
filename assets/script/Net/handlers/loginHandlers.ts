

/*
 * @Author: Jiangtao
 * @Date: 2019-11-09 13:39:16
 * @LastEditTime: 2020-06-24 10:28:43
 * @LastEditors: Jiangtao
 */
import baseHandlers from "./baseHandlers";
import msgHandler from '../msgHandler'
import * as proto from "../../Net/proto/proto"
import { protoName } from "../../Const/protoName";

export default class loginHandlers extends baseHandlers {
  constructor() {
    super();
    this.init();
  }

  protected init() {
    msgHandler.inst.addHandler(protoName.reqLogin, this.onReqLogin);
    msgHandler.inst.addHandler(protoName.resLogin, this.onResLogin);
    msgHandler.inst.addHandler(protoName.resCreatePlayer, this.onResCreatePlayer);
    msgHandler.inst.addHandler(protoName.resSelectPlayer, this.onResSelectPlayer);
  }

  onReqLogin(data: proto.reqLogin) {

  }

  onResLogin(data: proto.resLogin) {
    if (data.count && data.count > 0) {
      let player: proto.loginPlayer = data.Players[0];
      msgHandler.inst.sendmsg(protoName.reqSelectPlayer, new proto.reqSelectPlayer({
        playerId: player.id,
        inviteType: Global.inviteType,
        inviteid: Global.inviteid,
        name: Global.userinfo.nickname,
        head: Global.userinfo.head
      }));
    } else {
      msgHandler.inst.sendmsg(protoName.reqCreatePlayer,
        new proto.reqCreatePlayer({
          name: Global.userinfo.nickname,
          job: Global.userinfo.job,
          sex: Global.userinfo.sex,
          head: Global.userinfo.head,
          inviteType: Global.inviteType,
          inviteid: Global.inviteid
        }));
    }
  }

  onResSelectPlayer(data: proto.resSelectPlayer) {
    Global.gameManager.playerManager.updatePlayerProp(data.props);
    Global.gameManager.playerManager.updatePlayerBagItem(data.bagitems);
    Global.gameManager.playerManager.updatePlayerDaily(data.dailys);
    Global.gameManager.playerManager.updatePlayerOffLineExp(data.offlineExp);
  }

  onResCreatePlayer(data: proto.resCreatePlayer) {
    let player: proto.loginPlayer = data.Player;
    msgHandler.inst.sendmsg(protoName.reqSelectPlayer, new proto.reqSelectPlayer({ playerId: player.id }));
  }
}