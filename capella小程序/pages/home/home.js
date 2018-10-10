// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this//不要漏了这句，很重要
    function Base64() {
      // private property
     var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      // public method for encoding
      this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }
          output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
      }

      // public method for decoding
      this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
          enc1 = _keyStr.indexOf(input.charAt(i++));
          enc2 = _keyStr.indexOf(input.charAt(i++));
          enc3 = _keyStr.indexOf(input.charAt(i++));
          enc4 = _keyStr.indexOf(input.charAt(i++));
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
          output = output + String.fromCharCode(chr1);
          if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
          }
        }
        output = _utf8_decode(output);
        return output;
      }
      // private method for UTF-8 encoding
     var _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
          } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
          }
        }
        return utftext;
      }
      // private method for UTF-8 decoding
     var _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c1
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
            string += String.fromCharCode(c);
            i++;
          } else if ((c > 191) && (c < 224)) {
          var  c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
          } else {
          var  c2 = utftext.charCodeAt(i + 1);
          var  c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
          }
        }
        return string;
      }
    }
    var base = new Base64();
    var data = base.decode(option.token);
    var token = "Bearer " + option.token;
    var userId= data.split(':"')[3].split(",")[0].split('"')[0];
    // console.log(option.token)
    var url = 'http://192.168.8.156:8080/api/user/'+userId;
    // console.log(url);
    
    wx.request({
      url: url,
      method:'get',
      header:{
        'Content-Type': 'application/json',
        'X-Authorization': token
      },
      success:function(res){
        var customerId = res.data.customerId.id;
        var entityType = res.data.id.entityType;
        var lastName = res.data.lastName;
        var firstName = res.data.firstName;
        var name = res.data.name;
        // console.log(entityType);
        var customerUrl = 'http://192.168.8.156:8080/api/customer/' + customerId +'/shortInfo';
        // console.log(customerUrl);
        that.setData({
          entity: entityType
        })
        wx.request({
          url: customerUrl,
          method: 'get',
          header: {
            'Content-Type': 'application/json',
            'X-Authorization': token
          },
          success:function(res){
            // console.log(res.data.title);
            that.setData({
                customer: res.data.title
            })
            var userData = {
              token: token,
              token2: option.token,
              customer: res.data.title,
              customerId: customerId,
              lastName: lastName,
              firstName: firstName,
              name: name,
              entityType: entityType,
            };
            wx.setStorage({
              key: 'userData',
              data: userData,
            })
          }
        })
      }
    })
  },

  deviceTap:function(){
    wx.reLaunch({
      url: '../device/device'
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