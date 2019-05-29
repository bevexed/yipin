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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS1hZnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbGUtYWZ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEVBQUU7UUFFUixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksRUFBRSxDQUFDO0tBQ1A7SUFFRCxNQUFNLEVBQU47UUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsT0FBTyxFQUFQO1FBQ0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixJQUFJLE1BQUE7U0FDSixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxFQUFKLFVBQUssQ0FBTTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNwQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxFQUFMLFVBQU0sQ0FBTTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNOLElBQUEsY0FBK0IsRUFBOUIsY0FBSSxFQUFFLGdCQUFLLEVBQUUsY0FBaUIsQ0FBQztRQUN0QyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxRQUFRLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUNILE9BQU07U0FDTjtRQUNELHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ2IsR0FBRyxFQUFFLE9BQU87b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE9BQU87d0JBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDYixHQUFHLEVBQUUsc0NBQXNDO3lCQUMzQyxDQUFDLENBQUE7b0JBQ0gsQ0FBQztpQkFDRCxDQUFDLENBQUE7YUFDRjtRQUNGLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUdELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQWZ0ZXJRdWVyeX0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblx0ZGF0YToge1xyXG5cdFx0aW1laTogJycsXHJcblxyXG5cdFx0aUNvZGU6IDAsXHJcblxyXG5cdFx0Y29kZTogMCxcclxuXHR9LFxyXG5cclxuXHRvbkxvYWQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmdldENvZGUoKVxyXG5cdH0sXHJcblxyXG5cdGdldENvZGUoKSB7XHJcblx0XHRsZXQgY29kZSA9IChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkudG9TdHJpbmcoKS5zbGljZSgwLCA0KTtcclxuXHRcdGNvbnNvbGUubG9nKGNvZGUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdGNvZGVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0SU1FSShlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5pbWVpKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRpbWVpOiBlLmRldGFpbC52YWx1ZVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRpY29kZShlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5pbWVpKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRpQ29kZTogZS5kZXRhaWwudmFsdWVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Z2V0QWZ0ZXJRdWVyeSgpIHtcclxuXHRcdGNvbnN0IHtpbWVpLCBpQ29kZSwgY29kZX0gPSB0aGlzLmRhdGE7XHJcblx0XHRpZiAoaUNvZGUgIT09IGNvZGUpIHtcclxuXHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdHRpdGxlOiAn6aqM6K+B56CB6ZSZ6K+vJyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0cmVxQWZ0ZXJRdWVyeShpbWVpKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0a2V5OiAncXVlcnknLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiByZXMuZGF0YSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9zYWxlLWFmdGVyLWRldGFpbC9zYWxlLWFmdGVyLWRldGFpbCdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG59KTtcclxuIl19