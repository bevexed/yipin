Page({
	data: {
		content: ''
	},
	onLoad(query?: { [p: string]: string }): void {
		console.log(query);
		let content = query && query.content;
		this.setData!({
			content
		})
	}
});
