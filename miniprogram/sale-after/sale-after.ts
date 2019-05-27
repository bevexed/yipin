import {reqAfterQuery} from "../api/index";

Page({
	data: {
		imei: ''
	},

	onLoad(): void {
	},

IMEI(e:any) {
	console.log(this.data.imei);
	this.setData!({
			imei: e.detail.value
		})
	},

	getAfterQuery() {
		const {imei} = this.data;
		reqAfterQuery(imei).then(
			res => {
				console.log(res);
			}
		)
	}


});
