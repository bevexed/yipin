"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        phone: ''
    },
    onLoad: function () {
        var _this_1 = this;
        index_1.reqService().then(function (res) {
            console.log(res);
            _this_1.setData({
                phone: res.data
            });
        });
    },
    showPhone: function () {
        var _this = this;
        wx.showActionSheet({
            itemList: ['拨打客服电话'],
            success: function (res) {
                console.log(res);
                wx.makePhoneCall({
                    phoneNumber: _this.data.phone
                });
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcVNlcnZpY2V9IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRwaG9uZTogJydcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHJlcVNlcnZpY2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0cGhvbmU6IHJlcy5kYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXHRzaG93UGhvbmUoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpc1xuXHRcdHd4LnNob3dBY3Rpb25TaGVldCh7XG5cdFx0XHRpdGVtTGlzdDogWyfmi6jmiZPlrqLmnI3nlLXor50nXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdHd4Lm1ha2VQaG9uZUNhbGwoe1xuXHRcdFx0XHRcdHBob25lTnVtYmVyOiBfdGhpcy5kYXRhLnBob25lIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE55S16K+d5Y+356CBXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmVyck1zZylcblx0XHRcdH1cblx0XHR9KVxuXHR9XG59KVxuIl19