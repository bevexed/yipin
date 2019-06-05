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
                wx.setStorage({
                    key: "token",
                    data: res.data,
                    success: function () {
                        wx.switchTab({
                            url: '/pages/index/index'
                        });
                    }
                });
            }
            else {
                wx.showToast({
                    title: res.message,
                    icon: "none"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDQSxJQUFBLGNBQWlDLEVBQWhDLGtCQUFNLEVBQUUsZ0JBQUssRUFBRSxjQUFpQixDQUFDO1FBRXhDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtTQUNGO1FBRUQsSUFBSSxJQUFJLEdBQUc7WUFDVixNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBQTtTQUNyQyxDQUFDO1FBR0YsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENB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Z2lzdGVyLCBzZW5kTXNnfSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0cGhvbmU6ICcnLFxuXHRcdGNvZGU6ICcnLFxuXHRcdG1zZ0RhdGE6ICfojrflj5bpqozor4HnoIEnLFxuXHRcdHRpbWU6IDYwLFxuXHRcdHRpbWVyOiAwLFxuXHRcdGFjdGl2ZTogJycsXG5cdFx0b3BlbmlkOiAnJ1xuXHR9LFxuXG5cdG9uTG9hZCgpIHtcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICdvcGVuaWQnLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdG9wZW5pZDogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGRvTG9naW4oKSB7XG5cdFx0Y29uc3Qge29wZW5pZCwgcGhvbmUsIGNvZGV9ID0gdGhpcy5kYXRhO1xuXG5cdFx0aWYgKCFvcGVuaWQgfHwgIXBob25lIHx8ICFjb2RlKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNlScsXG5cdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0b3BlbmlkLCBwaG9uZSwgcGFzc3dvcmQ6IDEyMzQ1NiwgY29kZVxuXHRcdH07XG5cblxuXHRcdHJlcVJlZ2lzdGVyKGRhdGEpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcblx0XHRcdFx0XHQgIGtleTpcInRva2VuXCIsXG5cdFx0XHRcdFx0ICBkYXRhOnJlcy5kYXRhLFxuXHRcdFx0XHRcdFx0c3VjY2Vzcygpe1xuXHRcdFx0XHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fSxcblx0Y2hhbmdlUGhvbmU6IGZ1bmN0aW9uIChlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdHBob25lOiBlLmRldGFpbC52YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRjaGFuZ2VDb2RlOiBmdW5jdGlvbiAoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRjb2RlOiBlLmRldGFpbC52YWx1ZVxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jb2RlKTtcblx0fSxcblx0ZG9TZW5kTXNnOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgX2EgPSB0aGlzLmRhdGEsIHRpbWUgPSBfYS50aW1lLCB0aW1lciA9IF9hLnRpbWVyO1xuXHRcdGlmICh0aW1lciAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vYmlsZSA9IHRoaXMuZGF0YS5waG9uZTtcblx0XHRjb25zdCB0eXBlID0gJ1NNU18xNjYzMjAzNDgnO1xuXG5cdFx0aWYgKCFtb2JpbGUpIHtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiAn6K+35YWI5aGr5YaZ5omL5py65Y+3Jyxcblx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdH0pXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2VuZE1zZyh7dHlwZSwgbW9iaWxlfSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblxuXHRcdFx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKHRpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lcjogMCxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiA2MCxcblx0XHRcdFx0XHRcdFx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU6ICcnXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aW1lLS07XG5cdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdG1zZ0RhdGE6IHRpbWUgKyAncycsXG5cdFx0XHRcdFx0XHRcdHRpbWVyOiB0aW1lcixcblx0XHRcdFx0XHRcdFx0YWN0aXZlOiAnYWN0aXZlJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9LFxufSk7XG4iXX0=