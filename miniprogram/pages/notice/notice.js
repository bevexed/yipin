"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
var WxParse = require('../../dist/wxParse/wxParse.js');
Page({
    data: {
        content: ''
    },
    onLoad: function (query) {
        var _this = this;
        var that = this;
        console.log(query);
        var type = query.type, id = query.id;
        index_1.reqBanner().then(function (res) {
            console.log('banner', res);
            if (res.code === 1) {
                _this.setData({
                    content: res.data[type].filter(function (item) { return item.id == id; })[0].content
                }, function () {
                    console.log(that.data.content);
                    WxParse.wxParse('content', 'html', res.data[type].filter(function (item) { return item.id == id; })[0].content, that, 5);
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseUNBQTBDO0FBRzFDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRXZELElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNLEVBQU4sVUFBTyxLQUFtQztRQUExQyxpQkFtQkM7UUFsQkEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFZCxJQUFBLGlCQUFJLEVBQUUsYUFBRSxDQUFVO1FBRXZCLGlCQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2YsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztpQkFDOUUsRUFBRTtvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWdCLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuSCxDQUFDLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy9AdHMtaWdub3JlXG5pbXBvcnQge3JlcUJhbm5lcn0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG4vLyBAdHMtaWdub3JlXG5sZXQgV3hQYXJzZSA9IHJlcXVpcmUoJy4uLy4uL2Rpc3Qvd3hQYXJzZS93eFBhcnNlLmpzJyk7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0Y29udGVudDogJydcblx0fSxcblx0b25Mb2FkKHF1ZXJ5OiB7IHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB9KTogdm9pZCB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdGNvbnNvbGUubG9nKHF1ZXJ5KTtcblxuXHRcdGxldCB7dHlwZSwgaWR9ID0gcXVlcnk7XG5cblx0XHRyZXFCYW5uZXIoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Jhbm5lcicsIHJlcyk7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0Y29udGVudDogcmVzLmRhdGFbdHlwZV0uZmlsdGVyKChpdGVtOntpZDpzdHJpbmd9KSA9PiBpdGVtLmlkID09IGlkKVswXS5jb250ZW50XG5cdFx0XHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5kYXRhLmNvbnRlbnQpO1xuXHRcdFx0XHRcdFx0V3hQYXJzZS53eFBhcnNlKCdjb250ZW50JywgJ2h0bWwnLHJlcy5kYXRhW3R5cGVdLmZpbHRlcigoaXRlbTp7aWQ6c3RyaW5nfSkgPT4gaXRlbS5pZCA9PSBpZClbMF0uY29udGVudCwgdGhhdCwgNSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fVxufSlcbjtcbiJdfQ==