"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var app = getApp();
var token = wx.getStorageSync('token');
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        info: {},
        pics: [],
        status: '',
        id: ''
    },
    onLoad: function (options) {
        this.getDetail(token, options.id);
        this.setData({
            status: options.status,
            id: options.id
        });
    },
    getDetail: function (token, id) {
        var _this = this;
        order_1.orderDetail(token, id).then(function (res) {
            console.log(res);
            _this.setData({
                info: res.data,
                pics: res.data.picture
            });
        });
    },
    faHuo: function () {
        wx.navigateTo({
            url: '../post/post?id=' + this.data.id
        });
    },
    goChild: function (e) {
        wx.navigateTo({
            url: '../childOrder/childOrder?title=' + e.currentTarget.dataset.title + '&note=' + e.currentTarget.dataset.note + '&imei=' + e.currentTarget.dataset.imei + '&level=' + e.currentTarget.dataset.level + '&code=' + e.currentTarget.dataset.code + '&price=' + e.currentTarget.dataset.price
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC1wb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FpdC1wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0NBQXVEO0FBRXZELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFekMsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNqRCxJQUFJLEVBQUMsRUFBRTtRQUNQLElBQUksRUFBQyxFQUFFO1FBQ1AsTUFBTSxFQUFDLEVBQUU7UUFDVCxFQUFFLEVBQUMsRUFBRTtLQUNQO0lBQ0QsTUFBTSxFQUFOLFVBQU8sT0FBVztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3JCLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRTtTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxTQUFTLEVBQVQsVUFBVSxLQUFTLEVBQUMsRUFBUztRQUE3QixpQkFVQztRQVRDLG1CQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0IsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSTtnQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQ3ZCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FDRixDQUFBO0lBQ0QsQ0FBQztJQUVELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtTQUN0QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFQLFVBQVEsQ0FBSztRQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsaUNBQWlDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUs7U0FDN1IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQge0lNeUFwcH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgb3JkZXJEZXRhaWwsIGNvbmZpcm1GYWh1b30gZnJvbSAnLi4vYXBpL29yZGVyJ1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6Jyxcblx0XHR1c2VySW5mbzoge30sXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBpbmZvOnt9LFxuICAgIHBpY3M6W10sXG4gICAgc3RhdHVzOicnLFxuICAgIGlkOicnXG5cdH0sXG5cdG9uTG9hZChvcHRpb25zOmFueSkge1xuICAgIHRoaXMuZ2V0RGV0YWlsKHRva2VuLG9wdGlvbnMuaWQpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3RhdHVzOm9wdGlvbnMuc3RhdHVzLFxuICAgICAgaWQ6b3B0aW9ucy5pZFxuICAgIH0pXG4gIH0sXG4gIGdldERldGFpbCh0b2tlbjphbnksaWQ6c3RyaW5nKXtcbiAgICBvcmRlckRldGFpbCh0b2tlbiwgaWQpLnRoZW4oXG4gICAgcmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgaW5mbzpyZXMuZGF0YSxcbiAgICAgICAgcGljczogcmVzLmRhdGEucGljdHVyZVxuICAgICAgfSlcbiAgICB9XG4gIClcbiAgfSxcbiAgLy8g5Y+R6LSnXG4gIGZhSHVvKCl7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6Jy4uL3Bvc3QvcG9zdD9pZD0nICsgdGhpcy5kYXRhLmlkXG4gICAgfSlcbiAgfSxcbiAgLy8g5a2Q6K6i5Y2VXG4gIGdvQ2hpbGQoZTphbnkpe1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vY2hpbGRPcmRlci9jaGlsZE9yZGVyP3RpdGxlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aXRsZSArICcmbm90ZT0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubm90ZSArICcmaW1laT0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW1laSArICcmbGV2ZWw9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmxldmVsICsgJyZjb2RlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2RlICsgJyZwcmljZT0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucHJpY2VcbiAgICB9KVxuICB9XG59KVxuIl19