//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: [
       {id:0, title: '97岁抗战老兵走进兰州纪念馆', imgUrl: '/images/mj1.jpg', hourBefore:'2小时前' },
       {id:1, title: '大学生乘顺风车死亡，四级私下取消订单', imgUrl: '/images/mj2.jpg',hourBefore:'3小时前'},
       {id:2, title: '关爱自闭儿童，让他们不孤单', imgUrl: '/images/mj3.jpg',hourBefore:'4小时前'},
       {id:3, title: '加入特别项目组，苹果聘前特斯拉高管', imgUrl: '/images/mj4.jpg',hourBefore:'6小时前'},
       {id:4, title: '中国车企的电动化优势，能走向世界吗', imgUrl: '/images/mj2.jpg',hourBefore:'8小时前' },
       {id:5, title: '广东一拳击手醉驾后挥拳', imgUrl: '/images/mj3.jpg',hourBefore:'10小时前' },
       {id:6, title: '关爱自闭儿童，让他们不孤单', imgUrl: '/images/mj1.jpg',hourBefore:'12小时前' },
       {id:7, title: '广东一拳击手醉驾后挥拳', imgUrl: '/images/mj2.jpg',hourBefore:'13小时前' }]
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
    
  },
  toDetails (e) {
    wx.navigateTo({
      url: `../details/details?id=${e.currentTarget.dataset.id}`,
    })
  }
})