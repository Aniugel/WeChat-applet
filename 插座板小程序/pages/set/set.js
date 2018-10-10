var v;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addDevice:'添加设备',
    bgUrl: '../../images/devicelistBg.png',
    socketText:'插座',
    items:[
      {
        socketSrc: '../../images/socketsOff.png',
        switchBtn: false,
      },
      {
        socketSrc: '../../images/socketsOn.png',
        switchBtn: true,
      }
    ]
  },
  onLoad: function() {
  },
  switch:function(e){
    var index = e.currentTarget.dataset.index
    this.data.items[index]['switchBtn'] = !this.data.items[index]['switchBtn']
    this.setData({
      items: this.data.items
    })
  }
})