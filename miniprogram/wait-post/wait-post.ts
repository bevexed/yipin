//index.js
//获取应用实例
import { orderDetail} from '../api/order'

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
  // 发货
  faHuo(){
    wx.navigateTo({
      url:'../post/post?id=' + this.data.id
    })
  },
  // 子订单
  goChild(e:any){
    wx.navigateTo({
      url: '../childOrder/childOrder?title=' + e.currentTarget.dataset.title + '&note=' + e.currentTarget.dataset.note + '&imei=' + e.currentTarget.dataset.imei + '&level=' + e.currentTarget.dataset.level + '&code=' + e.currentTarget.dataset.code + '&price=' + e.currentTarget.dataset.price
    })
  }
})
