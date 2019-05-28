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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS1hZnRlci1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYWxlLWFmdGVyLWRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEVBQUU7UUFDUixXQUFXLEVBQUUsRUFBRTtRQUNmLGFBQWEsRUFBRSxFQUFFO0tBQ2pCO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBaUJDO1FBaEJBLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUEsYUFJUSxFQUhYLGNBQUksRUFDSiw0QkFBVyxFQUNYLGdDQUNXLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixJQUFJLE1BQUE7b0JBQ0osV0FBVyxhQUFBO29CQUNYLGFBQWEsZUFBQTtpQkFDYixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bmFtZTogJycsXG5cdFx0cGhvbmVfbW9kZWw6ICcnLFxuXHRcdHdhcnJhbnR5X3RpbWU6ICcnXG5cdH0sXG5cdG9uTG9hZCgpOiB2b2lkIHtcblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ3F1ZXJ5Jyxcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRcdFx0bGV0IHtcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHBob25lX21vZGVsLFxuXHRcdFx0XHRcdHdhcnJhbnR5X3RpbWVcblx0XHRcdFx0fSA9IHJlcy5kYXRhO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHBob25lX21vZGVsLFxuXHRcdFx0XHRcdHdhcnJhbnR5X3RpbWVcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG4iXX0=