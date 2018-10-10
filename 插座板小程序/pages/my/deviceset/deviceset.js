var app = getApp();
Page({
  modalDelete: function () {
    wx.showModal({
      title: '是否删除设备',
      content: '设备删除后无法恢复，是否确认删除？',
    })
  },
  modalRecover: function () {
    wx.showModal({
      title: '是否恢复出产设置',
      content: '确认恢复出厂设置将清除所有已设定功能，是否清除?',
    })
  },
  data: {
    backArrown: '../../../images/rightArrow.png',
    iconPath: '../../../images/share.png',
    iconName: '设备分享',
    url: '../deviceshare/deviceshare',
    items: [
      {
        iconPath: '../../../images/delete.png',
        iconName: '删除设备',
        tap: 'modalDelete',
      },
      {
        iconPath: '../../../images/recover.png',
        iconName: '恢复出产设置',
        tap: 'modalRecover',
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