Page({

  /**
   * 页面的初始数据
   */
  data: {
    socket:false,
    socketText:'无执行任务',
    timeIcon: false,
    timeText:'定时',
    switchIcon:false,
    endTimeText: '倒计时',
    text2: '倒计时',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  socket: function(){
    this.data.socket = !this.data.socket;
    this.data.switchIcon = !this.data.switchIcon;
    this.setData({
      socket: this.data.socket,
      switchIcon: this.data.switchIcon
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