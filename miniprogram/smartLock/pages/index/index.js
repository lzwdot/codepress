//index.js
//获取应用实例
const app = getApp()

Page({ 
  toMiniProgram:function(e){
    let appid = e.currentTarget.dataset.appid;    
    wx.navigateToMiniProgram({
      appId: appid,
      envVersion: 'develop',
      complete(res){ 
        console.log(res)  
      } 
    })
  }
})
