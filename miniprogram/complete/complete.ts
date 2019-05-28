import {sendMsg} from "../api/index";

Page({
	data: {
		phone: '',
		code: '',
		msgData: '获取验证码',
		time: 60,
		timer: 0,
		active: ''
	},
	changePhone: function (e:any) {
		console.log(e);
		this.setData!({
			phone: e.detail.value
		});
	},
	changeCode: function (e:any) {
		console.log(e);
		this.setData!({
			code: e.detail.value
		});
		console.log(this.data.code);
	},
	doSendMsg: function () {
		var _this = this;
		var _a = this.data, time = _a.time, timer = _a.timer;
		if (timer !== 0) {
			return;
		}

		const mobile = this.data.phone;
		const type = 'SMS_166320348';
		sendMsg({type, mobile}).then(
			(res: any) => {
				if (res.code === 1) {

					timer = setInterval(function () {
						if (time === 0) {
							clearInterval(timer);
							_this.setData!({
								timer: 0,
								time: 60,
								msgData: '获取验证码',
								active: ''
							});
							return;
						}
						time--;
						_this.setData!({
							msgData: time + 's',
							timer: timer,
							active: 'active'
						});
					}, 1000);
				}
			}
		);


	},
	toIndex: function () {
		wx.navigateTo({
			url: '/pages/index/index'
		});
	}
});
