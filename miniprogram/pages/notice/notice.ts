//@ts-ignore
import {reqBanner} from "../../api/index";

// @ts-ignore
let WxParse = require('../../dist/wxParse/wxParse.js');

Page({
	data: {
		content: ''
	},
	onLoad(query: { type: string, id: string }): void {
		let that = this;
		console.log(query);

		let {type, id} = query;

		reqBanner().then(
			res => {
				console.log('banner', res);
				if (res.code === 1) {
					this.setData!({
						content: res.data[type].filter((item:{id:string}) => item.id == id)[0].content
					}, () => {
						console.log(that.data.content);
						WxParse.wxParse('content', 'html', that.data.content, that, 5);
					})
				}
			}
		)
	}
})
;
