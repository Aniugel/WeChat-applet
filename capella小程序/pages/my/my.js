// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    quit:'退出登录',
    backArrown: '../../images/rightArrow.png' ,
    items:[
      {
        iconPath: '../../images/way.png',
        iconName: '用户详情',
        url: '../userdetail/userdetail'        
      },
      {
        iconPath: '../../images/help.png',
        iconName: '帮助文档',
      },
      {
        iconPath: '../../images/modify.png',
        iconName: '修改密码',  
        url: '../updatepsw/updatepsw'
        
      },
      {
        iconPath: '../../images/language.png',
        iconName: '语言选择',
        language:'中文',
        url:'language/language'
      }
    ]
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getStorage({
      key: 'userData',
      success: function (res) {
        var name = res.data.lastName + res.data.firstName;
        // console.log(res.data)
        that.setData({
          userName: name
        })
      }
    })
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