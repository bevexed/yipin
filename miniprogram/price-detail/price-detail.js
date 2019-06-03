"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        arr: []
    },
    onLoad: function (e) {
        var _this = this;
        var id = e.id;
        console.log(id);
        index_1.reqSheetList().then(function (res) {
            var arr = res.data.filter(function (item) { return item.id == id; }).slice();
            _this.setData({
                arr: arr[0].content
            });
        });
    },
    yulan: function () {
        wx.previewImage({
            current: this.data.arr[0],
            urls: this.data.arr
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJpY2UtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEdBQUcsRUFBRSxFQUFFO0tBQ1A7SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFNO1FBQWIsaUJBVUM7UUFUQSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixvQkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUM1QixJQUFJLEdBQUcsR0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQyxRQUFDLENBQUE7WUFFNUQsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87YUFDbkIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsS0FBSztRQUNKLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxU2hlZXRMaXN0fSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0YXJyOiBbXVxuXHR9LFxuXHRvbkxvYWQoZTogYW55KSB7XG5cdFx0bGV0IGlkID0gZS5pZDtcblx0XHRjb25zb2xlLmxvZyhpZCk7XG5cdFx0cmVxU2hlZXRMaXN0KCkudGhlbigocmVzOiBhbnkpID0+IHtcblx0XHRcdGxldCBhcnIgPSBbLi4ucmVzLmRhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT0gaWQpXVxuXG5cdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0YXJyOiBhcnJbMF0uY29udGVudFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cdHl1bGFuKCkge1xuXHRcdHd4LnByZXZpZXdJbWFnZSh7XG5cdFx0XHRjdXJyZW50OiB0aGlzLmRhdGEuYXJyWzBdLFxuXHRcdFx0dXJsczogdGhpcy5kYXRhLmFyclxuXHRcdH0pO1xuXHR9XG59KTtcbiJdfQ==