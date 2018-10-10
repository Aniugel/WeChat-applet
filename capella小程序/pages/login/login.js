// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //输入框变化 
  changeInputUser: function (e) {
    var value = e.detail.value;
    this.setData({
      userName: value,
    })
  },
  //输入框变化 
  changeInputPsw: function (e) {
    var value = e.detail.value;
    this.setData({
      password: value,
    })
  },
  loginAction: function (event) {
    var user = this.data.userName;
    var psw = this.data.password;
    // wx.showLoading({
    //   title: '加载中',
    //   mask: true
    // });
    wx.request({
      url: 'http://192.168.8.156:8080/api/auth/login',
      method: 'POST',
      data: {
        username: user,
        password: psw
      },
      header: {
        'Content-Type': 'application/json'
      },
      fail: function (res) {
        console.log('0000');
      },
      success: function (res) {
        wx.setStorage({
          key: "userInfo",
          data: res.data
        })
        // console.log(res.data.status);
        let token = res.data.token;
        let reToken=res.data.refreshToken;
        wx.setStorage({
          key: 'token',
          data: token,
        })
        if (res.data.token!=null){
          wx.reLaunch({
            url: '../home/home?token=' + token +'&reToken='+ reToken
          });
          wx.showToast({
            title: '加载中...',
            icon: 'loading',
            mask: true,
          });
        }
        else if (psw == undefined || user == undefined){
          wx.showToast({
            title: '用户或密码不能为空',
            icon: 'none',
            mask: true,
          });
        }
        else {
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none',
            mask: true,
          });
        }
        // wx.hideLoading();
        // wx.navigateBack({
        //   delta: 1
        // })
      }
    })
  },


  //  * 生命周期函数--监听页面加载
  onLoad: function () {
    
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