//index.js
//获取应用实例
import {IMyApp} from '../app'
import {orderDetail} from '../api/order'

const app = getApp<IMyApp>()

Page({
	data: {
		motto: '点击 “编译” 以构建',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
    info:{},
    pics:[]
	},
	onLoad(options) {
    const token = wx.getStorageSync('token');
    this.getDetail(token,options.id);
  },
  getDetail(token,id){
    orderDetail(token, id).then(
    res => {
      console.log(res);
      this.setData!({
        info:res.data
      })
    }
  )
  },
  // 上传图片
  uploadImage(){
    const that = this;
    const pics = this.data.pics;
    wx.chooseImage({
      count: 3 - pics.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        const picAll = pics.concat(tempFilePaths);
        that.setData({
          pics: picAll
        })
      }
    })
  }
})
