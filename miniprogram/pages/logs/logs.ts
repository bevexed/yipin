//logs.js
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [] as string[],
    aaa:123
  },
  onLoad() {
    this.setData!({
      logs: (wx.getStorageSync('logs') || []).map((log: number) => {
        return formatTime(new Date(log))
      })
    })
  },
})
