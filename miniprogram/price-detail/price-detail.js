"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        arr: []
    },
    onLoad: function (e) {
        var _this = this;
        index_1.sheet(e.id).then(function (res) {
            var arr = [];
            arr.push(res.data);
            _this.setData({
                arr: arr
            });
        });
    },
    yulan: function () {
        wx.previewImage({
            current: this.data.arr,
            urls: this.data.arr
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJpY2UtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFDO0FBRXJDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBQyxFQUFFO0tBQ1A7SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFLO1FBQVosaUJBUUM7UUFQQyxhQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEIsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixHQUFHLEVBQUMsR0FBRzthQUNSLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGVldCB9IGZyb20gJy4uL2FwaS9pbmRleCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYXJyOltdXG4gIH0sXG4gIG9uTG9hZChlOmFueSl7XG4gICAgc2hlZXQoZS5pZCkudGhlbihyZXMgPT57XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGFyci5wdXNoKHJlcy5kYXRhKVxuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGFycjphcnJcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgeXVsYW4oKXtcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogdGhpcy5kYXRhLmFyciwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgdXJsczogdGhpcy5kYXRhLmFyciAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==