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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFVBQVUsRUFBRSxFQUFFO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FFWDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFdBQVc7U0FDaEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBTjtRQUFBLGlCQXVDQztRQXRDQSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzdCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQy9CLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO1FBRUQsaUJBQVMsRUFBRSxDQUFDLElBQUksQ0FDZixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNiLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzNCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUEsS0FBSztRQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsc0JBQXNCO1NBQzNCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRixXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsbUJBQW1CO1NBQ3hCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxxQkFBcUI7U0FDMUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDZCQUE2QjtTQUNsQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsaUJBQWlCO1NBQ3RCLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FHRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHtJTXlBcHB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7cmVxQmFubmVyfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6Jyxcblx0XHR1c2VySW5mbzoge30sXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcblxuXHRcdGJhbm5lckxpc3Q6IFtdLFxuXHRcdGNvbnN1bHQ6ICcnXG5cblx0fSxcblx0Ly/kuovku7blpITnkIblh73mlbBcblx0YmluZFZpZXdUYXAoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICdsb2dzL2xvZ3MnXG5cdFx0fSlcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuXHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcblx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcblx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR1c2VySW5mbzogcmVzLFxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG5cdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXG5cdFx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmVxQmFubmVyKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdiYW5uZXInLCByZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdGJhbm5lckxpc3Q6IHJlcy5kYXRhLmJhbm5lcixcblx0XHRcdFx0XHRcdGNvbnN1bHQ6IHJlcy5kYXRhLmNvbnN1bHRbMF1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuICAvLyDmt7vliqDorqLljZVcbiAgZ29BZGQoKXtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDonLi4vLi4vYWRkT3JkZXIvaW5kZXgnXG4gICAgfSlcbiAgfSxcblxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG5cdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdH0pXG5cdH0sXG5cblx0dG9Ub2RheSgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL3RvZGF5L3RvZGF5J1xuXHRcdH0pXG5cdH0sXG5cblx0dG9GcmllbmQoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmllbmQvZnJpZW5kJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9TYWxlQWZ0ZXIoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9zYWxlLWFmdGVyL3NhbGUtYWZ0ZXInXG5cdFx0fSlcblx0fSxcblxuXHR0b0ZyZWUoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmVlL2ZyZWUnXG5cdFx0fSlcblx0fVxuXG5cbn0pXG4iXX0=