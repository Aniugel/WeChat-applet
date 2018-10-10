// pages/updatepsw/updatepsw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  updatePsw:function(e){
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token='Bearer '+res.data;
        var currentPassword=e.detail.value.oldPsw;
        var newPassword=e.detail.value.newPsw;
      wx.request({
        url: 'http://192.168.8.156:8080/api/auth/changePassword',
        method: 'POST',
        data:{
          currentPassword: currentPassword,
          newPassword: newPassword
        },
        header: {
          'Content-Type': 'application/json',
          'X-Authorization': token
        },
        success:function(res){
          if (e.detail.value.newPsw == e.detail.value.confirmPsw) {
            wx.navigateBack({
            })
            wx.showToast({
              title: '  密码修改成功',
              icon: 'success',
              mask: 'true'
            })
          }
          else {
            wx.showToast({
              title: ' 两次密码不一样请从新输入',
              icon: 'none',
              mask: 'true'
            })
          }

        }
      })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})