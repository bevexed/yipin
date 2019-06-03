import {requpdate_gathering_information, reqUserInformation} from "../api/index";

Page({
	data: {
		token: '',
		alipay_account: '',
		alipay_name: '',
		bank_name: '',
		bank_number: '',
		bank_type: '',
		opening_bank: '',
		disabled: false
	},
	onLoad() {
		// 读取token
		let _this = this;
		wx.getStorage({
			key: 'token',
			success(res) {
				console.log(res);
				_this.setData!({
					token: res.data
				}, () => _this.getInfor())
			}
		});


	},

	input(e: any) {
		console.log(e);
		const label = e.target.dataset.type;
		const value = e.detail.detail.value;
		console.log(value);
		this.setData!({
			[label]: value
		});

		console.log(label, value);
	},

	chooseTop() {
		let _this = this;
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				// tempFilePath可以作为img标签的src属性显示图片
				console.log(res);
				const tempFilePaths = res.tempFilePaths;
				_this.setData!({
					id_card_positive: tempFilePaths
				});
				console.log(tempFilePaths);
			}
		})
	},

	chooseBottom() {
		let _this = this;
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				// tempFilePath可以作为img标签的src属性显示图片
				const tempFilePaths = res.tempFilePaths;
				_this.setData!({
					id_card_contrary: tempFilePaths
				});
				console.log(tempFilePaths);
			}
		})
	},

	doUpdateBasicInformation() {
		const {
			token,
			alipay_account,
			alipay_name,
			bank_name,
			bank_number,
			bank_type,
			opening_bank
		} = this.data;

		if (
			!token ||
			!alipay_account ||
			!alipay_name ||
			!bank_name ||
			!bank_number ||
			!bank_type ||
			!opening_bank
		) {
			wx.showToast({
				title: '请检查表单',
				icon: "none",
				mask: true,
				duration: 2000,
			});
			return

		}

		requpdate_gathering_information(this.data).then(res => {
			if (res.code === 1) {
				wx.showToast({
					title: '修改成功',
					mask: true,
					duration: 2000,
					success() {
						setTimeout(() => {
							wx.switchTab({
								url: '../pages/index/index'
							})
						}, 2000)
					}
				})

			}
		})
	},

	getInfor() {
		wx.showLoading({
			title: '',
			mask: true
		})
		const {token} = this.data;
		reqUserInformation({token}).then(
			(res: any) => {
				if (res.code === 1) {
					wx.hideLoading();
					console.log(res);
					const {
						alipay_account,
						alipay_name,
						bank_name,
						bank_number,
						bank_type,
						opening_bank
					} = res.data;
					this.setData!({
						disabled: true,
						alipay_account,
						alipay_name,
						bank_name,
						bank_number,
						bank_type,
						opening_bank
					})

				}
			}
		)
	}
})
