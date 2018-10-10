// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
//   wx.request({
// url: 'http://192.168.8.156:8081/api/v1/A2_TEST_TOKEN/attributes
// ',

//   })
demo:function(e){
  // console.log(e);
  wx.request({
    method:'post',
    dataType:'json',
    // header: {
    //   'Authorization': 'A1_TEST_TOKEN'
    // },
    url: 'http://192.168.8.156:8081/api/v1/A2_TEST_TOKEN/attributes',
    data:{
      "switch":'99'
    },
    header: { 'Content-Type': 'application/json' },
    success:function(res){
      console.log('success');
    },
    fail:function(){
      console.log('error');
    }
  })
}
,
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