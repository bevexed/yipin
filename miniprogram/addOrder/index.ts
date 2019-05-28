//index.js
//获取应用实例
import { IMyApp } from '../app'
import { address, addOrder } from '../api/order'

const app = getApp<IMyApp>();
const token = wx.getStorageSync('token');

Page({
  data: {
    address:{},
    information:'',
    amount:'',
    note:'',
    pics:[]
  },
  onLoad(options: any) {
    this.getAddress();
  },
  write(e){
   this.setData({
     information:e.detail.value
   })
  },
  amount(e){
    this.setData({
      amount: e.detail.value
    })
  },
  noteText(e){
    this.setData({
      note: e.detail.value
    })
  },
  // 获取地址
  getAddress(){
    address().then(res => {
      this.setData!({
        address:res.data
      })
    })
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
        that.setData!({
          pics: picAll
        })
      }
    })
  },
  // 提交订单
  tijiao(){
    let picture = '';
    this.data.pics.map((res) =>{
      picture += res + ',';
    }) 

    if (this.data.information == '' || this.data.amount == '' || this.data.note == '') {
      wx.showToast({
        title: '请输入必填信息',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    var reg = /^[1-9]\d*$/;
    if (!reg.test(this.data.amount)){
      wx.showToast({
        title:'请输入正确的下单数量',
        icon:'none',
        duration:2000
      })
      return;
    }
  
    addOrder(token, this.data.information, this.data.amount, this.data.note, picture).then(res => {
      if(res.code == 1){
        wx.navigateTo({
          url: '../pages/index/index'
        })
      }
    })
  }
})
