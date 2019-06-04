"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        openid: '',
        exist: 0,
        dian: false
    },
    onLoad: function () {
        this.setData({
            dian: false
        });
    },
    doCheck: function () {
        var _this_1 = this;
        var openid = this.data.openid;
        console.log(openid);
        wx.showLoading({
            title: '',
            mask: true
        });
        index_1.reqCheckUser(openid).then(function (res) {
            _this_1.setData({
                exist: res
            }, function () { return _this_1.check(); });
        });
    },
    getUserInfo: function (e) {
        if (e.detail.errMsg.includes('ok')) {
            this.login();
        }
        else {
        }
    },
    login: function () {
        if (this.data.dian) {
            return;
        }
        this.setData({
            dian: true
        });
        wx.showLoading({
            title: 'loading',
            mask: true,
        });
        var _this = this;
        wx.getStorage({
            key: 'openid',
            success: function (res) {
                _this.setData({
                    openid: res.data
                }, function () { return _this.doCheck(); });
            }
        });
    },
    check: function () {
        var that = this;
        console.log(this.data.openid);
        if (!this.data.openid) {
            return;
        }
        var exist = this.data.exist;
        wx.showToast({
            title: '',
            icon: "none",
            mask: true,
            success: function () {
                if (exist === 0) {
                    wx.navigateTo({
                        url: '/complete/complete',
                        success: function () {
                            setTimeout(function () {
                                return that.setData({
                                    dian: false
                                });
                            }, 1000);
                        }
                    });
                    return;
                }
                else {
                    wx.switchTab({
                        url: '/pages/index/index',
                        success: function () {
                            setTimeout(function () {
                                return that.setData({
                                    dian: false
                                });
                            }, 1000);
                        }
                    });
                }
            }
        });
        index_1.reqLogin({ type: 1, openid: this.data.openid }).then(function (res) {
            console.log('token', res);
            if (res.code === 1) {
                wx.setStorage({
                    key: 'token',
                    data: res.data,
                    success: function () {
                        if (exist === 0) {
                            wx.showLoading({
                                title: 'loading',
                                mask: true,
                            });
                            wx.navigateTo({
                                url: '/complete/complete'
                            });
                        }
                        else {
                            wx.switchTab({
                                url: '/pages/index/index'
                            });
                        }
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxFQUFFLEtBQUs7S0FDWDtJQUVELE1BQU0sRUFBTjtRQUNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixJQUFJLEVBQUUsS0FBSztTQUNYLENBQUMsQ0FBQTtJQVVILENBQUM7SUFFRCxPQUFPLEVBQVA7UUFBQSxtQkFlQztRQWRPLElBQUEseUJBQU0sQ0FBYztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUVSLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUc7YUFDVixFQUFFLGNBQU0sT0FBQSxPQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNqQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjthQUFNO1NBRU47SUFDRixDQUFDO0lBQ0QsS0FBSyxFQUFMO1FBQ0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFNO1NBQ047UUFDRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsSUFBSSxF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aW1wb3J0IHtyZXFDaGVja1VzZXIsIHJlcUxvZ2lufSBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0b3BlbmlkOiAnJyxcblx0XHRleGlzdDogMCxcblxuXHRcdGRpYW46IGZhbHNlXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0ZGlhbjogZmFsc2Vcblx0XHR9KVxuXHRcdC8vIGNvbnN0IF90aGlzID0gdGhpcztcblx0XHQvLyB3eC5nZXRTdG9yYWdlKHtcblx0XHQvLyBcdGtleTogJ29wZW5pZCcsXG5cdFx0Ly8gXHRzdWNjZXNzKHJlcykge1xuXHRcdC8vIFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0Ly8gXHRcdFx0b3BlbmlkOiByZXMuZGF0YVxuXHRcdC8vIFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0pXG5cdH0sXG5cblx0ZG9DaGVjaygpIHtcblx0XHRjb25zdCB7b3BlbmlkfSA9IHRoaXMuZGF0YTtcblx0XHRjb25zb2xlLmxvZyhvcGVuaWQpO1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdG1hc2s6IHRydWVcblx0XHR9KTtcblx0XHRyZXFDaGVja1VzZXIob3BlbmlkKS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdC8vIHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGV4aXN0OiByZXNcblx0XHRcdFx0fSwgKCkgPT4gdGhpcy5jaGVjaygpKVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRpZiAoZS5kZXRhaWwuZXJyTXNnLmluY2x1ZGVzKCdvaycpKSB7XG5cdFx0XHR0aGlzLmxvZ2luKCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdH1cblx0fSxcblx0bG9naW4oKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5kaWFuKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRkaWFuOiB0cnVlXG5cdFx0fSlcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJ2xvYWRpbmcnLFxuXHRcdFx0bWFzazogdHJ1ZSxcblx0XHR9KTtcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ29wZW5pZCcsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0b3BlbmlkOiByZXMuZGF0YVxuXHRcdFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIGNvbnN0IG9wZW5pZCA9IHd4LmdldFN0b3JhZ2UoJ29wZW5pZCcpO1xuXHRcdC8vICAgdGhpcy5zZXREYXRhISh7XG5cdFx0Ly8gICAgIG9wZW5pZDogb3BlbmlkXG5cdFx0Ly8gICB9KVxuXG5cblx0fSxcblxuXHRjaGVjaygpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0Y29uc29sZS5sb2codGhpcy5kYXRhLm9wZW5pZClcblx0XHRpZiAoIXRoaXMuZGF0YS5vcGVuaWQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHtleGlzdH0gPSB0aGlzLmRhdGE7XG5cdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdGlmIChleGlzdCA9PT0gMCkge1xuXHRcdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiAnL2NvbXBsZXRlL2NvbXBsZXRlJyxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaWFuOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQsIDEwMDApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHd4LnN3aXRjaFRhYih7XG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpYW46IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdCwgMTAwMClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXG5cdFx0cmVxTG9naW4oe3R5cGU6IDEsIG9wZW5pZDogdGhpcy5kYXRhLm9wZW5pZH0pLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndG9rZW4nLCByZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdFx0XHRcdGRhdGE6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGV4aXN0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0d3guc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdsb2FkaW5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy9jb21wbGV0ZS9jb21wbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG59KTtcbiJdfQ==