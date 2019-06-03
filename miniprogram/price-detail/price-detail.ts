import {reqSheetList} from "../api/index";

Page({
	data: {
		arr: []
	},
	onLoad(e: any) {
		let id = e.id;
		console.log(id);
		reqSheetList().then((res: any) => {
			let arr = [...res.data.filter((item: any) => item.id == id)]

			this.setData!({
				arr: arr[0].content
			});
		});
	},
	yulan() {
		wx.previewImage({
			current: this.data.arr[0],
			urls: this.data.arr
		});
	}
});
