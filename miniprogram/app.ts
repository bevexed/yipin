import {reqOpenid} from "./api/index";

//app.ts
export interface IMyApp {
	globalData: {
		userInfo?: wx.UserInfo
	}

  userInfoReadyCallback?(res: wx.UserInfo): void
}

App<IMyApp>({
	onLaunch() {
		// 登录
		wx.login({
			success(res) {
				console.log(res.code);
				reqOpenid(res.code).then(
					(res: any) => {
						console.log(res);
						wx.setStorage({
							key: 'openid',
							data: res.data.openid,
							success() {
								wx.getStorage(
									{
										key: 'token',
										fail(err){
											console.log('token-fail', err);
											wx.navigateTo({
												url:'/pages/login/login'
											})
										}
									}
								)
							}
						})
					}
				)
				// 发送 _res.code 到后台换取 openId, sessionKey, unionId
			}
		});

		// 获取用户信息
		// wx.getSetting({
		// 	success: (res) => {
		// 		if (res.authSetting['scope.userInfo']) {
		// 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
		// 			wx.getUserInfo({
		// 				success: res => {
		// 					// 可以将 res 发送给后台解码出 unionId
		// 					this.globalData.userInfo = res.userInfo;
		// 					// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
		// 					// 所以此处加入 callback 以防止这种情况
		// 					if (this.userInfoReadyCallback) {
		// 						this.userInfoReadyCallback(res.userInfo)
		// 					}
		// 				}
		// 			})
		// 		}
		// 	}
		// })
	},
	globalData: {}
});
