// pages/set/timing/timing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    repeat:'重复',
    swicth:'开关',
    open:true,
    save:'保存',
    time:'00:00',
    items:[
      { week: '周一', open: true},
      { week: '周二', open: false},
      { week: '周三', open: false},
      { week: '周四', open: false},
      { week: '周五', open: false},
      { week: '周六', open: false},
      { week: '周日', open: false},
      ]
  },
  tap:function(e){
    var index = e.currentTarget.dataset.index
    this.data.items[index]['open'] = !this.data.items[index]['open']
    this.setData({
      items:this.data.items
    })
  },
  btn:function(){
    wx.navigateTo({
      url: '../timelist/timelist',
    })
  },
  picker: function(e){
      // console.log(e.detail.value)
      // console.log(time)
      this.setData({
        time: e.detail.value
      })
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