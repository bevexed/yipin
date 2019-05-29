"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        phone: '',
        code: '',
        msgData: '获取验证码',
        time: 60,
        timer: 0,
        active: '',
        openid: ''
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'openid',
            success: function (res) {
                console.log(res);
                _this.setData({
                    openid: res.data
                });
            }
        });
    },
    doLogin: function () {
        var _b = this.data, openid = _b.openid, phone = _b.phone, code = _b.code;
        if (!openid || !phone || !code) {
            wx.showToast({
                title: '请检查表单',
                icon: "none"
            });
        }
        var data = {
            openid: openid, phone: phone, password: 123456, code: code
        };
        index_1.reqRegister(data).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.switchTab({
                    url: '/pages/index/index'
                });
            }
            else {
                wx.showToast({
                    title: res.message
                });
            }
        });
    },
    changePhone: function (e) {
        console.log(e);
        this.setData({
            phone: e.detail.value
        });
    },
    changeCode: function (e) {
        console.log(e);
        this.setData({
            code: e.detail.value
        });
        console.log(this.data.code);
    },
    doSendMsg: function () {
        var _this = this;
        var _a = this.data, time = _a.time, timer = _a.timer;
        if (timer !== 0) {
            return;
        }
        var mobile = this.data.phone;
        var type = 'SMS_166320348';
        if (!mobile) {
            wx.showToast({
                title: '请先填写手机号',
                icon: "none"
            });
            return;
        }
        index_1.sendMsg({ type: type, mobile: mobile }).then(function (res) {
            if (res.code === 1) {
                timer = setInterval(function () {
                    if (time === 0) {
                        clearInterval(timer);
                        _this.setData({
                            timer: 0,
                            time: 60,
                            msgData: '获取验证码',
                            active: ''
                        });
                        return;
                    }
                    time--;
                    _this.setData({
                        msgData: time + 's',
                        timer: timer,
                        active: 'active'
                    });
                }, 1000);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDQSxJQUFBLGNBQWlDLEVBQWhDLGtCQUFNLEVBQUUsZ0JBQUssRUFBRSxjQUFpQixDQUFDO1FBRXhDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtTQUNGO1FBRUQsSUFBSSxJQUFJLEdBQUc7WUFDVixNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBQTtTQUNyQyxDQUFDO1FBR0YsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3JCLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QixDQUFDLENBQUE7YUFDRjtpQkFBTTtnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztpQkFDbEIsQ0FBQyxDQUFBO2FBQ0Y7UUFHRixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBVSxDQUFLO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBSztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDUDtRQUVELGVBQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNCLFVBQUMsR0FBUTtZQUNSLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBRW5CLEtBQUssR0FBRyxXQUFXLENBQUM7b0JBQ25CLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTt3QkFDZixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2QsS0FBSyxFQUFFLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxFQUFFO3lCQUNWLENBQUMsQ0FBQzt3QkFDSCxPQUFPO3FCQUNQO29CQUNELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssQ0FBQyxPQUFRLENBQUM7d0JBQ2QsT0FBTyxFQUFFLElBQUksR0FBRyxHQUFHO3dCQUNuQixLQUFLLEVBQUUsS0FBSzt3QkFDWixNQUFNLEVBQUUsUUFBUTtxQkFDaEIsQ0FBQyxDQUFDO2dCQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNUO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFSZWdpc3Rlciwgc2VuZE1zZ30gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHBob25lOiAnJyxcblx0XHRjb2RlOiAnJyxcblx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHR0aW1lOiA2MCxcblx0XHR0aW1lcjogMCxcblx0XHRhY3RpdmU6ICcnLFxuXHRcdG9wZW5pZDogJydcblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRvcGVuaWQ6IHJlcy5kYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRkb0xvZ2luKCl7XG5cdFx0Y29uc3Qge29wZW5pZCwgcGhvbmUsIGNvZGV9ID0gdGhpcy5kYXRhO1xuXG5cdFx0aWYgKCFvcGVuaWQgfHwgIXBob25lIHx8ICFjb2RlKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNlScsXG5cdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0b3BlbmlkLCBwaG9uZSwgcGFzc3dvcmQ6IDEyMzQ1NiwgY29kZVxuXHRcdH07XG5cblxuXHRcdHJlcVJlZ2lzdGVyKGRhdGEpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXG5cdFx0XHR9XG5cdFx0KTtcblx0fSxcblx0Y2hhbmdlUGhvbmU6IGZ1bmN0aW9uIChlOmFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0cGhvbmU6IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSk7XG5cdH0sXG5cdGNoYW5nZUNvZGU6IGZ1bmN0aW9uIChlOmFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0Y29kZTogZS5kZXRhaWwudmFsdWVcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmRhdGEuY29kZSk7XG5cdH0sXG5cdGRvU2VuZE1zZzogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIF9hID0gdGhpcy5kYXRhLCB0aW1lID0gX2EudGltZSwgdGltZXIgPSBfYS50aW1lcjtcblx0XHRpZiAodGltZXIgIT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBtb2JpbGUgPSB0aGlzLmRhdGEucGhvbmU7XG5cdFx0Y29uc3QgdHlwZSA9ICdTTVNfMTY2MzIwMzQ4JztcblxuXHRcdGlmICghbW9iaWxlKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+WFiOWhq+WGmeaJi+acuuWPtycsXG5cdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHR9KVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNlbmRNc2coe3R5cGUsIG1vYmlsZX0pLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cblx0XHRcdFx0XHR0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmICh0aW1lID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdFx0dGltZXI6IDAsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogNjAsXG5cdFx0XHRcdFx0XHRcdFx0bXNnRGF0YTogJ+iOt+WPlumqjOivgeeggScsXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlOiAnJ1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGltZS0tO1xuXHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRtc2dEYXRhOiB0aW1lICsgJ3MnLFxuXHRcdFx0XHRcdFx0XHR0aW1lcjogdGltZXIsXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZTogJ2FjdGl2ZSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fSxcbn0pO1xuIl19