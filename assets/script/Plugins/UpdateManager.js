/*
 * @Author: Jiangtao
 * @Date: 2019-11-25 15:45:06
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-31 15:59:23
 */
if (cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.browser == cc.sys.BROWSER_TYPE_WECHAT) {
  const updateManager = wx.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate)
  })

  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        } else {
          wx.exitMiniProgram({
            success: function () {
              console.log("退出成功！");

            }
          })
        }
      }
    })
  })
  updateManager.onUpdateFailed(function () {
    // 新版本下载失败
    wx.showToast({
      title: '更新失败,请重新运行',
      duration: 2000
    })
  })

} else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
  const updateManager = swan.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate)
  })

  updateManager.onUpdateReady(function () {
    swan.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        } else {
          swan.exitMiniProgram({
            success: function () {
              console.log("退出成功！");

            }
          })
        }
      }
    })
  })
  updateManager.onUpdateFailed(function () {
    // 新版本下载失败
    wx.showToast({
      title: '更新失败,请重新运行',
      duration: 2000
    })
  })
}
