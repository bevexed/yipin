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
						if (res.code === 1) {
							wx.setStorage({
								key: 'openid',
								data: res.data.openid,
								success() {
								},
								fail() {
								}
							})
						} else {
							console.log('reqOpenid fail',);
						}
					}
				)
				// 发送 _res.code 到后台换取 openId, sessionKey, unionId
			}
		});
	},
	globalData: {}
});
