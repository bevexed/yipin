//@ts-ignore
let WxParse = require('../../dist/wxParse/wxParse.js');
// import WxParse  from '../../dist/wxParse/wxParse.js';

Page({
	data: {
		content: ''
	},
	onLoad(query?: { [p: string]: string }): void {
		console.log(query);
		let content = query && query.content;
		// this.setData!({
		// 	content
		// })
		let that = this;
		WxParse.wxParse('content', 'html', content, that, 5);
	}
});
