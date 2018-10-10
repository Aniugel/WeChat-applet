// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
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
  onShow: function (e) {
    var that = this;
    function timeChange(dateString, formdate) {
      if (dateString == null || dateString == '') {
        return '';
      }
      // new Date('');传入毫秒数,也可以得到普通的时间,再对date处理
      var date = new Date(parseInt(dateString));
      //获取年份,月份,天数,小时数,分钟数,小于10的显示01-09
      var year = date.getFullYear();
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      if (formdate == null || formdate == "yyyy-mm-dd HH:mm") {
        return year + "-" + month + "-" + currentDate + " " + hours + ":" + minutes;
      } else if (formdate == "yyyy-mm-dd") {
        return year + "-" + month + "-" + currentDate;
      } else if (formdate == "yyyy-mm") {
        return year + month;
      } else if (formdate == "mm-dd") {
        return month + "-" + currentDate;
      } else if (formdate == "HH:mm") {
        return hours + ":" + minutes;
      } else {
        return "";
      }
    }
    wx.getStorage({
      key: 'userData',
      success: function (res) {
        var customerId = res.data.customerId;
        var token =res.data.token;
        var url = "http://192.168.8.156:8080/api/customer/" + customerId + "/devices"
        wx.request({
          url: url,
          method: 'get',
          dataType: 'json',
          header: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
          },
          success: function (res) {
            var list=res.data.data
            var arr=[];
            var arr2=[];
            // console.log(res.data.data)
            for (let i = 0; i < list.length; i++) {
              var newTime=timeChange(list[i].createdTime);
              arr.push(newTime)
              var userId=res.data.data[i].id.id
              arr2.push(userId)
            }
            that.setData({
              time: arr,
              userId: arr2,
              list: list
            })
            // console.log(arr2)
          }
        })
      }
    })
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