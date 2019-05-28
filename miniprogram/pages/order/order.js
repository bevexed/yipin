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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcVNlcnZpY2V9IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdHBob25lOiAnJ1xyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0cmVxU2VydmljZSgpLnRoZW4oXHJcblx0XHRcdHJlcyA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdHBob25lOiByZXMuZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG5cdHNob3dQaG9uZSgpIHtcclxuXHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdHd4LnNob3dBY3Rpb25TaGVldCh7XHJcblx0XHRcdGl0ZW1MaXN0OiBbJ+aLqOaJk+WuouacjeeUteivnSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0d3gubWFrZVBob25lQ2FsbCh7XHJcblx0XHRcdFx0XHRwaG9uZU51bWJlcjogX3RoaXMuZGF0YS5waG9uZSAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOeUteivneWPt+eggVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmVyck1zZylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn0pXHJcbiJdfQ==