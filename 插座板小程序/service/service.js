wx.request({
  url: 'https://www.dmall.com',
  header: {
    'Content-Type': 'application/json'
  },
  success: function (e) {
    console.log(e);
  },
  complete: function () {
    console.log('kkkkk');
  }
})