Page({
	data: {
		name: '',
		phone_model: '',
		warranty_time: ''
	},
	onLoad(): void {
		wx.getStorage({
			key: 'query',
			success: res => {
				console.log(res.data);
				let {
					name,
					phone_model,
					warranty_time
				} = res.data;
				this.setData!({
					name,
					phone_model,
					warranty_time
				})
			}
		});
	}
});
