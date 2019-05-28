import { IMyApp } from '../app'
import { tradeCompany, confirmFahuo } from '../api/order';

const app = getApp<IMyApp>();
const token = wx.getStorageSync('token');
Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    itemList:[],
    company:'',
    track_number:'',
    id:''

  },
  onLoad(e) {
    this.getCompanyList();
    this.setData({
      id:e.id
    })
  },
  // 获取快递公司列表
  getCompanyList(){
    tradeCompany().then(res => {
      this.setData!({
        itemList:res.data
      })
    })
  },
  // 选择物流公司
  choosePost(){
    const arr = [];
    this.data.itemList.map((ref) => {
      arr.push(ref.name)
    })
    var that = this;
    wx.showActionSheet({
      itemList: arr,
      success(res) {
        that.setData!({
          company: arr[res.tapIndex]
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  faHuo(){
    confirmFahuo(token, this.data.id, this.data.company, this.data.track_number).then(res => {
      if(res.code == 0){
        wx.showToast({
          title:res.message,
          icon: 'success',
          duration: 3000,
          mask:true,
          success(){
            wx.redirectTo({
              url: '../sold-out/sold-out'
            })
          }
        });
      }else{
        wx.showToast({
          title:res.message
        })
      }
    })
  }
})
