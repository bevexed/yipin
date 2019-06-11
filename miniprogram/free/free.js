"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        token: '',
        serial_number: '',
        phone: '',
        code: '',
        phone_model: '',
        list: [],
        array: [],
        list2: [],
        array2: [],
        multiArray: [[], []],
        multiIndex: [0, 0],
        index: 0,
        msgData: '获取验证码',
        time: 60,
        timer: 0,
        active: '',
        img: ''
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                console.log(res);
                _this.setData({
                    token: res.data
                });
            }
        });
        this.getPhoneModels();
        this.getImg();
    },
    getImg: function () {
        var _this_1 = this;
        index_1.reqActivityShow(1).then(function (res) {
            if (res.code === 1) {
                _this_1.setData({
                    img: res.data
                });
            }
        });
    },
    input: function (e) {
        var _b;
        console.log(e);
        var label = e.currentTarget.dataset.type;
        var value = e.detail.detail.value;
        console.log(value);
        this.setData((_b = {},
            _b[label] = value,
            _b));
        console.log(label, value);
    },
    doMerchantExist: function (e) {
        var _this_1 = this;
        var _b;
        console.log(e);
        var label = e.currentTarget.dataset.type;
        var value = e.detail.detail.value;
        console.log(value);
        this.setData((_b = {},
            _b[label] = value,
            _b), function () {
            if (_this_1.data.serial_number.length < 5) {
                return;
            }
            index_1.reqMerchantExist(_this_1.data.serial_number).then(function (res) {
                console.log(res);
                wx.showToast({
                    icon: "none",
                    title: res === 0 ? '商家编号不存在' : '商家存在'
                });
            });
        });
    },
    getPhoneModels: function () {
        var _this_1 = this;
        index_1.reqPhoneModels().then(function (res) {
            if (res.code === 1) {
                console.log('get-phone-models', res);
                _this_1.setData({
                    list: res.data,
                    array: res.data.map(function (item) { return item.name; }),
                    list2: res.data[0].subclass,
                    array2: res.data[0].subclass.map(function (item) { return item.name; }),
                    multiArray: [res.data.map(function (item) { return item.name; }), res.data[0].subclass.map(function (item) { return item.name; })]
                });
            }
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
    getFreeFilm: function () {
        var _b = this.data, token = _b.token, serial_number = _b.serial_number, phone = _b.phone, code = _b.code, phone_model = _b.phone_model;
        console.log(phone_model);
        index_1.reqGetFreeFilm({ token: token, phone_model: phone_model, serial_number: serial_number, phone: phone, code: code }).then(function (res) {
            wx.showToast({
                title: res.message,
                icon: 'none',
                duration: 2000,
                success: function () {
                    setTimeout(function () {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 2000);
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0c7QUFFeEcsSUFBSSxDQUFDO0lBRUosSUFBSSxFQUFFO1FBRUwsS0FBSyxFQUFFLEVBQUU7UUFDVCxhQUFhLEVBQUUsRUFBRTtRQUNqQixLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsV0FBVyxFQUFFLEVBQUU7UUFFZixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUVWLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDcEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsQixLQUFLLEVBQUUsQ0FBQztRQUVSLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsRUFBRTtRQUVWLEdBQUcsRUFBRSxFQUFFO0tBRVA7SUFFRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxNQUFNLEVBQU47UUFBQSxtQkFVQztRQVRBLHVCQUFlLENBQUMsQ0FBQyxD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dHlTaG93LCByZXFHZXRGcmVlRmlsbSwgcmVxTWVyY2hhbnRFeGlzdCwgcmVxUGhvbmVNb2RlbHMsIHNlbmRNc2d9IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cblx0ZGF0YToge1xuXG5cdFx0dG9rZW46ICcnLFxuXHRcdHNlcmlhbF9udW1iZXI6ICcnLFxuXHRcdHBob25lOiAnJyxcblx0XHRjb2RlOiAnJyxcblx0XHRwaG9uZV9tb2RlbDogJycsXG5cblx0XHRsaXN0OiBbXSxcblx0XHRhcnJheTogW10sXG5cdFx0bGlzdDI6IFtdLFxuXHRcdGFycmF5MjogW10sXG5cblx0XHRtdWx0aUFycmF5OiBbW10sIFtdXSxcblx0XHRtdWx0aUluZGV4OiBbMCwgMF0sXG5cblx0XHRpbmRleDogMCxcblxuXHRcdG1zZ0RhdGE6ICfojrflj5bpqozor4HnoIEnLFxuXHRcdHRpbWU6IDYwLFxuXHRcdHRpbWVyOiAwLFxuXHRcdGFjdGl2ZTogJycsXG5cblx0XHRpbWc6ICcnXG5cblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cdFx0Ly8g6K+75Y+WdG9rZW5cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAndG9rZW4nLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdHRva2VuOiByZXMuZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5nZXRQaG9uZU1vZGVscygpO1xuXHRcdHRoaXMuZ2V0SW1nKClcblx0fSxcblxuXHRnZXRJbWcoKSB7XG5cdFx0cmVxQWN0aXZpdHlTaG93KDEpLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRpbWc6IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcblx0fSxcblxuXHRkb01lcmNoYW50RXhpc3QoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgbGFiZWwgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuZGF0YS5zZXJpYWxfbnVtYmVyLmxlbmd0aCA8IDUpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRyZXFNZXJjaGFudEV4aXN0KHRoaXMuZGF0YS5zZXJpYWxfbnVtYmVyKS50aGVuKFxuXHRcdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMgPT09IDAgPyAn5ZWG5a6257yW5Y+35LiN5a2Y5ZyoJyA6ICfllYblrrblrZjlnKgnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH0pO1xuXHR9LFxuXG5cdGdldFBob25lTW9kZWxzKCkge1xuXHRcdHJlcVBob25lTW9kZWxzKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnZXQtcGhvbmUtbW9kZWxzJywgcmVzKTtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdGxpc3Q6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdFx0YXJyYXk6IHJlcy5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLm5hbWUpLFxuXHRcdFx0XHRcdFx0bGlzdDI6IHJlcy5kYXRhWzBdLnN1YmNsYXNzLFxuXHRcdFx0XHRcdFx0YXJyYXkyOiByZXMuZGF0YVswXS5zdWJjbGFzcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5uYW1lKSxcblx0XHRcdFx0XHRcdG11bHRpQXJyYXk6IFtyZXMuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5uYW1lKSwgcmVzLmRhdGFbMF0uc3ViY2xhc3MubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0ubmFtZSldXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXHRjaGFuZ2VDb2RlOiBmdW5jdGlvbiAoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRjb2RlOiBlLmRldGFpbC52YWx1ZVxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jb2RlKTtcblx0fSxcblx0ZG9TZW5kTXNnOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgX2EgPSB0aGlzLmRhdGEsIHRpbWUgPSBfYS50aW1lLCB0aW1lciA9IF9hLnRpbWVyO1xuXHRcdGlmICh0aW1lciAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIHRvZG86IOa3u+WKoOWunuaXtuebkeaOp1xuXG5cdFx0Y29uc3QgbW9iaWxlID0gdGhpcy5kYXRhLnBob25lO1xuXHRcdGNvbnN0IHR5cGUgPSAnU01TXzE2NjMyMDM0OCc7XG5cdFx0c2VuZE1zZyh7dHlwZSwgbW9iaWxlfSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblxuXHRcdFx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKHRpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lcjogMCxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiA2MCxcblx0XHRcdFx0XHRcdFx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU6ICcnXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aW1lLS07XG5cdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdG1zZ0RhdGE6IHRpbWUgKyAncycsXG5cdFx0XHRcdFx0XHRcdHRpbWVyOiB0aW1lcixcblx0XHRcdFx0XHRcdFx0YWN0aXZlOiAnYWN0aXZlJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cblx0fSxcblxuXHRnZXRGcmVlRmlsbSgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHR0b2tlbixcblx0XHRcdC8vIG11bHRpQXJyYXksbXVsdGlJbmRleCxcblx0XHRcdHNlcmlhbF9udW1iZXIsIHBob25lLCBjb2RlLCBwaG9uZV9tb2RlbFxuXHRcdH0gPSB0aGlzLmRhdGE7XG5cblx0XHQvLyBsZXQgcGhvbmVfbW9kZWwgPSBtdWx0aUFycmF5WzFdW211bHRpSW5kZXhbMV1dO1xuXHRcdGNvbnNvbGUubG9nKHBob25lX21vZGVsKTtcblx0XHRyZXFHZXRGcmVlRmlsbSh7dG9rZW4sIHBob25lX21vZGVsLCBzZXJpYWxfbnVtYmVyLCBwaG9uZSwgY29kZX0pLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2UsXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdFx0XHRkZWx0YTogMVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fSwgMjAwMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cbn0pO1xuIl19