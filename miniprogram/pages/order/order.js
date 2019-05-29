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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxXQUFXO1FBS1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNaLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVE7Z0JBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBTU4sQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxU2VydmljZX0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHBob25lOiAnJ1xuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0cmVxU2VydmljZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRwaG9uZTogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cdHNob3dQaG9uZSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzXG5cdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdGl0ZW1MaXN0OiBbJ+aLqOaJk+WuouacjeeUteivnSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0d3gubWFrZVBob25lQ2FsbCh7XG5cdFx0XHRcdFx0cGhvbmVOdW1iZXI6IF90aGlzLmRhdGEucGhvbmUgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTnlLXor53lj7fnoIFcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRmYWlsKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cdGhhbmRsZUNsaWNrKCkge1xuXHRcdC8vIHd4LmNsZWFyU3RvcmFnZShcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHQvLyBcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+mAgOWHuuaIkOWKnycsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcblx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJ1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyB9XG5cblx0XHQvLyApXG5cdH1cbn0pXG4iXX0=