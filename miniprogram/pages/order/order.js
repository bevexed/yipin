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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxXQUFXO1FBS1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNaLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVE7Z0JBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBTU4sQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxU2VydmljZX0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblx0ZGF0YToge1xyXG5cdFx0cGhvbmU6ICcnXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHRyZXFTZXJ2aWNlKCkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0cGhvbmU6IHJlcy5kYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH0sXHJcblx0c2hvd1Bob25lKCkge1xyXG5cdFx0bGV0IF90aGlzID0gdGhpc1xyXG5cdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcclxuXHRcdFx0aXRlbUxpc3Q6IFsn5ouo5omT5a6i5pyN55S16K+dJ10sXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHR3eC5tYWtlUGhvbmVDYWxsKHtcclxuXHRcdFx0XHRcdHBob25lTnVtYmVyOiBfdGhpcy5kYXRhLnBob25lIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE55S16K+d5Y+356CBXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0aGFuZGxlQ2xpY2soKSB7XHJcblx0XHQvLyB3eC5jbGVhclN0b3JhZ2UoXHJcblx0XHQvLyBcdHtcclxuXHRcdC8vIFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6YCA5Ye65oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblxyXG5cdFx0Ly8gKVxyXG5cdH1cclxufSlcclxuIl19