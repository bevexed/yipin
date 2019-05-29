"use strict";
Page({
    data: {
        name: '',
        phone_model: '',
        warranty_time: ''
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'query',
            success: function (res) {
                console.log(res.data);
                var _a = res.data, name = _a.name, phone_model = _a.phone_model, warranty_time = _a.warranty_time;
                _this.setData({
                    name: name,
                    phone_model: phone_model,
                    warranty_time: warranty_time
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS1hZnRlci1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYWxlLWFmdGVyLWRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEVBQUU7UUFDUixXQUFXLEVBQUUsRUFBRTtRQUNmLGFBQWEsRUFBRSxFQUFFO0tBQ2pCO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBaUJDO1FBaEJBLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUEsYUFJUSxFQUhYLGNBQUksRUFDSiw0QkFBVyxFQUNYLGdDQUNXLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLE1BQUE7b0JBQ0osV0FBVyxhQUFBO29CQUNYLGFBQWEsZUFBQTtpQkFDYixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0cGhvbmVfbW9kZWw6ICcnLFxyXG5cdFx0d2FycmFudHlfdGltZTogJydcclxuXHR9LFxyXG5cdG9uTG9hZCgpOiB2b2lkIHtcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICdxdWVyeScsXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdGxldCB7XHJcblx0XHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdFx0cGhvbmVfbW9kZWwsXHJcblx0XHRcdFx0XHR3YXJyYW50eV90aW1lXHJcblx0XHRcdFx0fSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRcdHBob25lX21vZGVsLFxyXG5cdFx0XHRcdFx0d2FycmFudHlfdGltZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcbiJdfQ==