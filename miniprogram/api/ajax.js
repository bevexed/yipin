const base = 'http://admin.tianyue0571.cn/'

export const ajax = (url, data, method) => {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: base + url,
      data,
      success(res) {
        res && res.data && resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}