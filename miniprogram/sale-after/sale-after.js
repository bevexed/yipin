"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        imei: '',
        iCode: 0,
        code: 0,
    },
    onLoad: function () {
        this.getCode();
    },
    getCode: function () {
        var code = (Math.random() * 1000000).toString().slice(0, 4);
        console.log(code);
        this.setData({
            code: code
        });
    },
    IMEI: function (e) {
        console.log(this.data.imei);
        this.setData({
            imei: e.detail.value
        });
    },
    icode: function (e) {
        console.log(this.data.imei);
        this.setData({
            iCode: e.detail.value
        });
    },
    getAfterQuery: function () {
        var _a = this.data, imei = _a.imei, iCode = _a.iCode, code = _a.code;
        if (iCode !== code) {
            wx.showToast({
                mask: true,
                icon: "none",
                title: '验证码错误',
                duration: 2000,
            });
            return;
        }
        index_1.reqAfterQuery(imei).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.setStorage({
                    key: 'query',
                    data: res.data,
                    success: function () {
                        wx.navigateTo({
                            url: '/sale-after-detail/sale-after-detail'
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS1hZnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbGUtYWZ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEVBQUU7UUFFUixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksRUFBRSxDQUFDO0tBQ1A7SUFFRCxNQUFNLEVBQU47UUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsT0FBTyxFQUFQO1FBQ0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixJQUFJLE1BQUE7U0FDSixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxFQUFKLFVBQUssQ0FBTTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNwQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxFQUFMLFVBQU0sQ0FBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNOLElBQUEsY0FBK0IsRUFBOUIsY0FBSSxFQUFFLGdCQUFLLEVBQUUsY0FBaUIsQ0FBQztRQUN0QyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxRQUFRLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUNILE9BQU07U0FDTjtRQUNELHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ2IsR0FBRyxFQUFFLE9BQU87b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE9BQU87d0JBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDYixHQUFHLEVBQUUsc0NBQXNDO3lCQUMzQyxDQUFDLENBQUE7b0JBQ0gsQ0FBQztpQkFDRCxDQUFDLENBQUE7YUFDRjtRQUNGLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUdELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQWZ0ZXJRdWVyeX0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdGltZWk6ICcnLFxuXG5cdFx0aUNvZGU6IDAsXG5cblx0XHRjb2RlOiAwLFxuXHR9LFxuXG5cdG9uTG9hZCgpOiB2b2lkIHtcblx0XHR0aGlzLmdldENvZGUoKVxuXHR9LFxuXG5cdGdldENvZGUoKSB7XG5cdFx0bGV0IGNvZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApLnRvU3RyaW5nKCkuc2xpY2UoMCwgNCk7XG5cdFx0Y29uc29sZS5sb2coY29kZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRjb2RlXG5cdFx0fSlcblx0fSxcblxuXHRJTUVJKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5pbWVpKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGltZWk6IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSlcblx0fSxcblxuXHRpY29kZShlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmRhdGEuaW1laSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRpQ29kZTogZS5kZXRhaWwudmFsdWVcblx0XHR9KVxuXHR9LFxuXG5cdGdldEFmdGVyUXVlcnkoKSB7XG5cdFx0Y29uc3Qge2ltZWksIGlDb2RlLCBjb2RlfSA9IHRoaXMuZGF0YTtcblx0XHRpZiAoaUNvZGUgIT09IGNvZGUpIHtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHR0aXRsZTogJ+mqjOivgeeggemUmeivrycsXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0cmVxQWZ0ZXJRdWVyeShpbWVpKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guc2V0U3RvcmFnZSh7XG5cdFx0XHRcdFx0XHRrZXk6ICdxdWVyeScsXG5cdFx0XHRcdFx0XHRkYXRhOiByZXMuZGF0YSxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9zYWxlLWFmdGVyLWRldGFpbC9zYWxlLWFmdGVyLWRldGFpbCdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cblxufSk7XG4iXX0=