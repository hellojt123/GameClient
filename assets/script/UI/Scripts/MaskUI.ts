/*
 * @Author: Jiangtao
 * @Date: 2019-12-26 20:14:24
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-06-11 15:09:38
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class MaskUI extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';



    start() {

    }


}
