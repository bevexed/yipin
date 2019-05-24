const base = 'http://machine.test'

export const ajax = (url: string, data: object = {}, method:any = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: base + url,
      data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}