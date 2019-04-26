let local_data = require('data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    haveClick:false,
    isClk:0,
    whichId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let dataArr = local_data.postList
    dataArr.forEach((item,index)=>{
        if(~~item.id === ~~id){
          this.setData({
            details: JSON.parse(JSON.stringify(item))
          }) 
        }
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
    
  },
  handleSCN () {
    this.setData({
      haveClick: true
    })
  },
  handleSCY () {
    this.setData({
      haveClick : false
    })
  },
  handleZan () {
    if(this.data.isClk === 1){
      this.setData({
        isClk: 0
      })
    }else{
      this.setData({
        isClk: 1
      })
    }
    
  },
  handleComment() { 
    
    this.setData({
      whichId:'scrollTopCom'
    })
    console.log(this.data.whichId)
  },
  handleWX () {

  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '看下新闻好吗',
      path: '/pages/index/index',
      imageUrl:'/images/lol.jpg'
    }
  }
})