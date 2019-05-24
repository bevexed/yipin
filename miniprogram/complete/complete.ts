Page({
  data: {
    phone: '',
    code: '',

    msgData: '获取验证码',
    time: 60,
    timer: 0,
    active:''
  },
  changePhone(e: any) {
    console.log(e)
    this.setData!({
      phone: e.detail.value
    })
  },
  changeCode(e: any) {
    console.log(e)
    this.setData!({
      code: e.detail.value
    })

    console.log(this.data.code)
  },

  sendMsg() {
    let { time, timer } = this.data;

    if (timer !== 0) {
      return
    }


    timer = setInterval(() => {
      if (time === 0) {
        clearInterval(timer)
        this.setData!({
          timer: 0,
          time: 60,
          msgData: '获取验证码',
          active:''
        })
        return
      }

      time--;
      this.setData!({
        msgData: time + 's',
        timer,
        active:'active'
      })
    }, 1000)
  },

  toIndex(){
    wx.navigateTo({
      url:'/pages/index/index'
    })
  }


});
