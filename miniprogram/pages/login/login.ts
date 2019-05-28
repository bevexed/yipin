import {reqCheckUser, reqLogin} from "../../api/index";

Page({
	data: {
		openid: '',
		exist: 0
	},

	onLoad() {
		// const _this = this;
		// wx.getStorage({
		// 	key: 'openid',
		// 	success(res) {
		// 		_this.setData!({
		// 			openid: res.data
		// 		}, () => _this.doCheck());
		// 	}
		// })
	},

	doCheck() {
		const {openid} = this.data;
		console.log(openid);
		wx.showLoading({
			title:''
		});
		reqCheckUser(openid).then(
			(res: any) => {
				wx.hideLoading();
				this.setData!({
					exist: res
				},()=>this.check())
			}
		)
	},

  getUserInfo(e){
    if(e.detail.errMsg.includes('ok')){
      this.login();
    }else{
      
    }
  },
	login() {

		const _this = this;

		wx.getStorage({
			key: 'openid',
			success(res) {
				_this.setData!({
					openid: res.data
				}, () => _this.doCheck());
			}
		});
    // const openid = wx.getStorage('openid');
    //   this.setData!({
    //     openid: openid
    //   })
 

	},

  check(){
    console.log(this.data.openid)
    if (!this.data.openid) {
      return
    }

    const { exist } = this.data;

    if (exist === 0) {
      wx.navigateTo({
        url: '/complete/complete'
      });
      return;
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }

    reqLogin({ type: 1, openid: this.data.openid }).then(
      res => {
        console.log('token', res);
        if (res.code === 1) {
          wx.setStorage({
            key: 'token',
            data: res.data,
            success() {
              if (exist === 0) {
                wx.navigateTo({
                  url: '/complete/complete'
                });
              } else {
                wx.switchTab({
                  url: '/pages/index/index'
                })
              }
            }
          })
        }
      }
    );
  }

});
