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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC1wb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FpdC1wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0NBQXVEO0FBRXZELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFekMsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNqRCxJQUFJLEVBQUMsRUFBRTtRQUNQLElBQUksRUFBQyxFQUFFO1FBQ1AsTUFBTSxFQUFDLEVBQUU7UUFDVCxFQUFFLEVBQUMsRUFBRTtLQUNQO0lBQ0QsTUFBTSxFQUFOLFVBQU8sT0FBVztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3JCLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRTtTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxTQUFTLEVBQVQsVUFBVSxLQUFTLEVBQUMsRUFBUztRQUE3QixpQkFVQztRQVRDLG1CQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0IsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSTtnQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQ3ZCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FDRixDQUFBO0lBQ0QsQ0FBQztJQUVELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtTQUN0QyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFQLFVBQVEsQ0FBSztRQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsaUNBQWlDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUs7U0FDN1IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHtJTXlBcHB9IGZyb20gJy4uL2FwcCdcclxuaW1wb3J0IHsgb3JkZXJEZXRhaWwsIGNvbmZpcm1GYWh1b30gZnJvbSAnLi4vYXBpL29yZGVyJ1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcclxuY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG5cdFx0dXNlckluZm86IHt9LFxyXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxyXG5cdFx0Y2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgaW5mbzp7fSxcclxuICAgIHBpY3M6W10sXHJcbiAgICBzdGF0dXM6JycsXHJcbiAgICBpZDonJ1xyXG5cdH0sXHJcblx0b25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICB0aGlzLmdldERldGFpbCh0b2tlbixvcHRpb25zLmlkKTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBzdGF0dXM6b3B0aW9ucy5zdGF0dXMsXHJcbiAgICAgIGlkOm9wdGlvbnMuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXREZXRhaWwodG9rZW46YW55LGlkOnN0cmluZyl7XHJcbiAgICBvcmRlckRldGFpbCh0b2tlbiwgaWQpLnRoZW4oXHJcbiAgICByZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBpbmZvOnJlcy5kYXRhLFxyXG4gICAgICAgIHBpY3M6IHJlcy5kYXRhLnBpY3R1cmVcclxuICAgICAgfSlcclxuICAgIH1cclxuICApXHJcbiAgfSxcclxuICAvLyDlj5HotKdcclxuICBmYUh1bygpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vcG9zdC9wb3N0P2lkPScgKyB0aGlzLmRhdGEuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICAvLyDlrZDorqLljZVcclxuICBnb0NoaWxkKGU6YW55KXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9jaGlsZE9yZGVyL2NoaWxkT3JkZXI/dGl0bGU9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlICsgJyZub3RlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5ub3RlICsgJyZpbWVpPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbWVpICsgJyZsZXZlbD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGV2ZWwgKyAnJmNvZGU9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvZGUgKyAnJnByaWNlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wcmljZVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==