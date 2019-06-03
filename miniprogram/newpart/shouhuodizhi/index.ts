import {reqUpdateShippingAddress, reqUserInformation} from "../../api/index";

Page({
	data: {
		token: '', partner_name: '', partner_phone: '', partner_address: ''
	},

	onLoad() {
		const that = this
		wx.getStorage({
			key: 'token',
			success(res) {
				that.setData!({
					token: res.data
				}, () => {
					reqUserInformation({token: res.data}).then(
						(res: any) => {
							console.log(res);
							that.setData!({
								partner_name: res.data.partner_name,
								partner_phone: res.data.partner_phone,
								partner_address: res.data.partner_address
							})
						}
					)
				})
			}
		})
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

	// @ts-ignore
	updateAddress() {
		const {token, partner_address, partner_name, partner_phone} = this.data;
		if (!partner_address || !partner_name || !partner_phone) {
			wx.showToast({
				icon: "none",
				title: '请检查数据',
				mask: true,
				duration: 2000
			});
			return
		}
		reqUpdateShippingAddress(token, partner_name, partner_phone, partner_address).then(
			(res: any) => {
				if (res.code === 1) {
					wx.showToast({
						title: res.message,
						mask: true,
						duration: 3000,
						success() {
							setTimeout(() => {
								wx.navigateBack({
									delta: 1
								})
							}, 3000)
						}
					})
				} else {
					wx.showToast({
						icon: "none",
						title: res.message,
						mask: true,
					})
				}
			}
		)
	}

});
