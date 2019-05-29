import { tradeCompany, confirmFahuo } from '../api/order';

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
  onLoad(e:any) {
    this.getCompanyList();
    this.setData!({
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
    const arr: any[] | never[] | string[] | any[] = [];
    this.data.itemList.map((ref) => {
      // @ts-ignore
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
      if(res.code == 1){
        wx.showModal({
          title:res.message,
          content:'',
          showCancel:false,
          success(){
            wx.navigateBack({
              delta: 1
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
