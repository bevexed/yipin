//index.js
//获取应用实例
import {IMyApp} from '../app'
import { orderDetail, confirmFahuo} from '../api/order'

const app = getApp<IMyApp>();
const token = wx.getStorageSync('token');

Page({
	data: {
		motto: '点击 “编译” 以构建',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
    info:{},
    pics:[],
    status:'',
    id:''
	},
	onLoad(options:any) {
    this.getDetail(token,options.id);
    this.setData!({
      status:options.status,
      id:options.id
    })
  },
  getDetail(token:any,id:string){
    orderDetail(token, id).then(
    res => {
      console.log(res);
      this.setData!({
        info:res.data,
        pics: res.data.picture
      })
    }
  )
  },
  // 上传图片
  // uploadImage(){
  //   const that = this;
  //   const pics = this.data.pics;
  //   console.log(pics);
  //   wx.chooseImage({
  //     count: 3 - pics.length,
  //     sizeType: ['original', 'compressed'],
  //     sourceType: ['album', 'camera'],
  //     success(res) {
  //       // tempFilePath可以作为img标签的src属性显示图片
  //       const tempFilePaths = res.tempFilePaths
  //       const picAll = pics.concat(tempFilePaths);
  //       console.log(picAll);
  //       that.setData!({
  //         pics: picAll
  //       })
  //     }
  //   })
  // },
  faHuo(){
    wx.navigateTo({
      url:'../post/post?id=' + this.data.id
    })
  }
})
