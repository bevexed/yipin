"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        bannerList: [],
        consult: ''
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: 'logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
        index_1.reqBanner().then(function (res) {
            console.log('banner', res);
            if (res.code === 1) {
                _this.setData({
                    bannerList: res.data.banner,
                    consult: res.data.consult[0]
                });
            }
        });
    },
    goAdd: function () {
        wx.navigateTo({
            url: '../../addOrder/index'
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    toToday: function () {
        wx.navigateTo({
            url: '../../today/today'
        });
    },
    toFriend: function () {
        wx.navigateTo({
            url: '../../friend/friend'
        });
    },
    toSaleAfter: function () {
        wx.navigateTo({
            url: '../../sale-after/sale-after'
        });
    },
    toFree: function () {
        wx.navigateTo({
            url: '../../free/free'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFVBQVUsRUFBRSxFQUFFO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FFWDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFdBQVc7U0FDaEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBTjtRQUFBLGlCQXVDQztRQXRDQSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzdCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQy9CLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO1FBRUQsaUJBQVMsRUFBRSxDQUFDLElBQUksQ0FDZixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNiLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzNCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUEsS0FBSztRQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsc0JBQXNCO1NBQzNCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRixXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsbUJBQW1CO1NBQ3hCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxxQkFBcUI7U0FDMUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDZCQUE2QjtTQUNsQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsaUJBQWlCO1NBQ3RCLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FHRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7SU15QXBwfSBmcm9tICcuLi8uLi9hcHAnXHJcbmltcG9ydCB7cmVxQmFubmVyfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuXHRkYXRhOiB7XHJcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuXHRcdHVzZXJJbmZvOiB7fSxcclxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuXHJcblx0XHRiYW5uZXJMaXN0OiBbXSxcclxuXHRcdGNvbnN1bHQ6ICcnXHJcblxyXG5cdH0sXHJcblx0Ly/kuovku7blpITnkIblh73mlbBcclxuXHRiaW5kVmlld1RhcCgpIHtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICdsb2dzL2xvZ3MnXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0aWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcblx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuXHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuXHRcdFx0Ly8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0dXNlckluZm86IHJlcyxcclxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcblx0XHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRyZXFCYW5uZXIoKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdiYW5uZXInLCByZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdGJhbm5lckxpc3Q6IHJlcy5kYXRhLmJhbm5lcixcclxuXHRcdFx0XHRcdFx0Y29uc3VsdDogcmVzLmRhdGEuY29uc3VsdFswXVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG4gIC8vIOa3u+WKoOiuouWNlVxyXG4gIGdvQWRkKCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi8uLi9hZGRPcmRlci9pbmRleCdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblx0Z2V0VXNlckluZm8oZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcblx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHRvVG9kYXkoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnLi4vLi4vdG9kYXkvdG9kYXknXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHRvRnJpZW5kKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy4uLy4uL2ZyaWVuZC9mcmllbmQnXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHRvU2FsZUFmdGVyKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy4uLy4uL3NhbGUtYWZ0ZXIvc2FsZS1hZnRlcidcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0dG9GcmVlKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy4uLy4uL2ZyZWUvZnJlZSdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcbn0pXHJcbiJdfQ==