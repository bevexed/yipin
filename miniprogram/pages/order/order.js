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
    },
    handleClick: function () {
        wx.showToast({
            title: '退出成功',
            duration: 2000,
            mask: true,
            complete: function () {
                wx.navigateTo({
                    url: '/pages/login/login'
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxXQUFXO1FBS1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNaLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVE7Z0JBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBTU4sQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxU2VydmljZX0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHBob25lOiAnJ1xuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0cmVxU2VydmljZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRwaG9uZTogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cdHNob3dQaG9uZSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LnNob3dBY3Rpb25TaGVldCh7XG5cdFx0XHRpdGVtTGlzdDogWyfmi6jmiZPlrqLmnI3nlLXor50nXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdHd4Lm1ha2VQaG9uZUNhbGwoe1xuXHRcdFx0XHRcdHBob25lTnVtYmVyOiBfdGhpcy5kYXRhLnBob25lIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE55S16K+d5Y+356CBXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmVyck1zZylcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRoYW5kbGVDbGljaygpIHtcblx0XHQvLyB3eC5jbGVhclN0b3JhZ2UoXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfpgIDlh7rmiJDlip8nLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbidcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0Ly9cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXG5cdFx0Ly8gKVxuXHR9XG59KVxuIl19