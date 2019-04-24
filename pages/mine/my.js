// pages/mine/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataListSC: [
      { id: 0, title: '比利·林恩的中场故事', imgUrl: '/images/mj1.jpg', hourBefore: '2小时前' },
      { id: 1, title: '正是虾肥蟹壮时', imgUrl: '/images/mj2.jpg', hourBefore: '3小时前' },
      { id: 2, title: '当我们在谈论经济学时，我们在谈论什么', imgUrl: '/images/mj3.jpg', hourBefore: '4小时前' }]
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
  toDetails(e) {
    wx.navigateTo({
      url: `../details/details?id=${e.currentTarget.dataset.id}`,
    })
  }
})