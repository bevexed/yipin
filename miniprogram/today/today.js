"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        list: []
    },
    onLoad: function () {
        var _this = this;
        index_1.reqSheetList().then(function (res) {
            console.log(res);
            if (res.code === 1) {
                _this.setData({
                    list: res.data
                });
            }
        });
    },
    to: function (e) {
        wx.navigateTo({
            url: '../price-detail/price-detail?id=' + e.currentTarget.dataset.id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxJQUFJLEVBQUUsRUFBRTtLQUNSO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBV0M7UUFWQSxvQkFBWSxFQUFFLENBQUMsSUFBSSxDQUNsQixVQUFDLEdBQVE7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNkLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsRUFBRSxFQUFGLFVBQUcsQ0FBTTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsa0NBQWtDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUNwRSxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFTaGVldExpc3R9IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRsaXN0OiBbXVxuXHR9LFxuXHRvbkxvYWQoKTogdm9pZCB7XG5cdFx0cmVxU2hlZXRMaXN0KCkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdGxpc3Q6IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXHR0byhlOiBhbnkpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uL3ByaWNlLWRldGFpbC9wcmljZS1kZXRhaWw/aWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG5cdFx0fSlcblx0fVxufSk7XG4iXX0=