import {reqSheetList} from "../api/index";

Page({
	data: {
		list: []
	},
	onLoad(): void {
		reqSheetList().then(
			(res: any) => {
				console.log(res);
				if (res.code === 1) {
					this.setData!({
						list: res.data
					})
				}
			}
		)
	},

	to(e: any) {
		wx.navigateTo({
			url: '../price-detail/price-detail?id=' + e.currentTarget.dataset.id
		})
	}
});
