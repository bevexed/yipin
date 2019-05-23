Page({
  data:{
  },

  login(){
    wx.getUserInfo({
      success(res) {
        console.log(res)
        // const userInfo = res.userInfo
        // const nickName = userInfo.nickName
        // const avatarUrl = userInfo.avatarUrl
        // const gender = userInfo.gender // 性别 0：未知、1：男、2：女
        // const province = userInfo.province
        // const city = userInfo.city
        // const country = userInfo.country
      },
      fail(err){
        console.log(err)
      }
    })

  },

  onLoad(){

  }
});
