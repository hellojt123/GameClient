/*
 * @Author: Jiangtao
 * @Date: 2019-11-25 15:45:06
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-07 10:22:01
 */
cc.Class({

    extends: cc.Component,

    properties: {
    },

    reTry: function () {
        if (Global.Life > 0) {
            Global.Life--;
        }
        cc.director.loadScene('Game');
    },


    onLoad: function () {

    },

});