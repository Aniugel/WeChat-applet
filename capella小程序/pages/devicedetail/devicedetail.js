// pages/devicedetail/devicedetail.js
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
    var that=this;
    var userId=options.userId
    // console.log(userId);
    wx.getStorage({
      key: 'userData',
      success: function(res) {
        var token = res.data.token2
        var url = "ws://192.168.8.156:8080/api/ws/plugins/telemetry?token="+token
        wx.connectSocket({
          url: url,
          success: function (res) {
            // console.log(url);
          }
        })
        //连接成功
        wx.onSocketOpen(function (res) {
          // console.log('连接成功'); 
          // console.log(res);
          var a = {
            "tsSubCmds": [
              {
                "entityType": "DEVICE",
                "entityId": userId,

                "scope": "LATEST_TELEMETRY",
                "cmdId": 2
              }
            ],
            "historyCmds": [],
            "attrSubCmds": [
              {
                "entityType": "DEVICE",
                "entityId": userId,
                "scope": "CLIENT_SCOPE",
                "cmdId": 1
              }
            ]
          };
          var d = JSON.stringify(a);
          wx.sendSocketMessage({
            data: d
          })
        })
        wx.onSocketMessage(function (res) {
          var arr = [];
          var obj = JSON.parse(res.data);
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
          if (obj.subscriptionId == 1) {
            let key = Object.keys(obj.data)
            let value = Object.values(obj.data)
            for (let i = 0; i < key.length; i++) {
              let time = Object.values(obj.data)[i][0][0];
              let k = key[i]
              let v= i;
              let newObj={}
              newObj[k]=i
              // console.log(newObj)
              let newTime = timeChange(time);
              arr.push(newTime);
              that.setData({
                attr: key,
                value: value,
                time: arr,
              })
            }
          }
          else {
            let key = Object.keys(obj.data)
            let value = Object.values(obj.data)
            for (let i = 0; i < key.length; i++) {
              let time = Object.values(obj.data)[i][0][0];
              let newTime = timeChange(time);
              arr.push(newTime);
              that.setData({
                attr2: key,
                value2: value,
                time2: arr,
              })
            }
          }
        })
      },
    })
  },
 
// },
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
  // submit:function(e){
    
  //   // console.log(e)
  //   var l=this.data.value
  //   for (var i = 0; i <l.length;i++){
  //     console.log(this.data.value[i][0][1])
  //   }
  //     console.log(this);
  //     var k = this.data.attr2
  //     console.log();
  //   wx.request({
  //     url: 'http://192.168.8.156:8081/api/v1/A2_TEST_TOKEN/telemetry',
  //     method:'post',
  //     header: {
  //       'Content-Type': 'application/json'
  //     },
  //     data:{
  //       k: "0000"
  //     },
  //     success:function(){
  //       console.log("oooooo")
  //     }

  //   })
  // },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
   
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.closeSocket()
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