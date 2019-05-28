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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDQSxJQUFBLGNBQWlDLEVBQWhDLGtCQUFNLEVBQUUsZ0JBQUssRUFBRSxjQUFpQixDQUFDO1FBRXhDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtTQUNGO1FBRUQsSUFBSSxJQUFJLEdBQUc7WUFDVixNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBQTtTQUNyQyxDQUFDO1FBR0YsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3JCLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QixDQUFDLENBQUE7YUFDRjtpQkFBTTtnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztpQkFDbEIsQ0FBQyxDQUFBO2FBQ0Y7UUFHRixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBVSxDQUFLO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBSztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDUDtRQUVELGVBQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNCLFVBQUMsR0FBUTtZQUNSLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBRW5CLEtBQUssR0FBRyxXQUFXLENBQUM7b0JBQ25CLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTt3QkFDZixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2QsS0FBSyxFQUFFLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxFQUFFO3lCQUNWLENBQUMsQ0FBQzt3QkFDSCxPQUFPO3FCQUNQO29CQUNELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssQ0FBQyxPQUFRLENBQUM7d0JBQ2QsT0FBTyxFQUFFLElBQUksR0FBRyxHQUFHO3dCQUNuQixLQUFLLEVBQUUsS0FBSzt3QkFDWixNQUFNLEVBQUUsUUFBUTtxQkFDaEIsQ0FBQyxDQUFDO2dCQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNUO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFSZWdpc3Rlciwgc2VuZE1zZ30gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblx0ZGF0YToge1xyXG5cdFx0cGhvbmU6ICcnLFxyXG5cdFx0Y29kZTogJycsXHJcblx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcclxuXHRcdHRpbWU6IDYwLFxyXG5cdFx0dGltZXI6IDAsXHJcblx0XHRhY3RpdmU6ICcnLFxyXG5cdFx0b3BlbmlkOiAnJ1xyXG5cdH0sXHJcblxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICdvcGVuaWQnLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0b3BlbmlkOiByZXMuZGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0ZG9Mb2dpbigpe1xyXG5cdFx0Y29uc3Qge29wZW5pZCwgcGhvbmUsIGNvZGV9ID0gdGhpcy5kYXRhO1xyXG5cclxuXHRcdGlmICghb3BlbmlkIHx8ICFwaG9uZSB8fCAhY29kZSkge1xyXG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2VJyxcclxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRvcGVuaWQsIHBob25lLCBwYXNzd29yZDogMTIzNDU2LCBjb2RlXHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRyZXFSZWdpc3RlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fSxcclxuXHRjaGFuZ2VQaG9uZTogZnVuY3Rpb24gKGU6YW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRwaG9uZTogZS5kZXRhaWwudmFsdWVcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Y2hhbmdlQ29kZTogZnVuY3Rpb24gKGU6YW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRjb2RlOiBlLmRldGFpbC52YWx1ZVxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmRhdGEuY29kZSk7XHJcblx0fSxcclxuXHRkb1NlbmRNc2c6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgX2EgPSB0aGlzLmRhdGEsIHRpbWUgPSBfYS50aW1lLCB0aW1lciA9IF9hLnRpbWVyO1xyXG5cdFx0aWYgKHRpbWVyICE9PSAwKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBtb2JpbGUgPSB0aGlzLmRhdGEucGhvbmU7XHJcblx0XHRjb25zdCB0eXBlID0gJ1NNU18xNjYzMjAzNDgnO1xyXG5cclxuXHRcdGlmICghbW9iaWxlKSB7XHJcblx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICfor7flhYjloavlhpnmiYvmnLrlj7cnLFxyXG5cdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdH0pXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZW5kTXNnKHt0eXBlLCBtb2JpbGV9KS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHJcblx0XHRcdFx0XHR0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRpbWUgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lcjogMCxcclxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDYwLFxyXG5cdFx0XHRcdFx0XHRcdFx0bXNnRGF0YTogJ+iOt+WPlumqjOivgeeggScsXHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU6ICcnXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRpbWUtLTtcclxuXHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdG1zZ0RhdGE6IHRpbWUgKyAncycsXHJcblx0XHRcdFx0XHRcdFx0dGltZXI6IHRpbWVyLFxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZTogJ2FjdGl2ZSdcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==