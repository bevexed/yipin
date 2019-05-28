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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFVBQVUsRUFBRSxFQUFFO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FFWDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFdBQVc7U0FDaEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBTjtRQUFBLGlCQXVDQztRQXRDQSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzdCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQy9CLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO1FBRUQsaUJBQVMsRUFBRSxDQUFDLElBQUksQ0FDZixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNiLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzNCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLG1CQUFtQjtTQUN4QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUscUJBQXFCO1NBQzFCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSw2QkFBNkI7U0FDbEMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGlCQUFpQjtTQUN0QixDQUFDLENBQUE7SUFDSCxDQUFDO0NBR0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7SU15QXBwfSBmcm9tICcuLi8uLi9hcHAnXG5pbXBvcnQge3JlcUJhbm5lcn0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cblx0XHRiYW5uZXJMaXN0OiBbXSxcblx0XHRjb25zdWx0OiAnJ1xuXG5cdH0sXG5cdC8v5LqL5Lu25aSE55CG5Ye95pWwXG5cdGJpbmRWaWV3VGFwKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnbG9ncy9sb2dzJ1xuXHRcdH0pXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHR1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG5cdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG5cdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuXHRcdFx0YXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dXNlckluZm86IHJlcyxcblx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHR1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuXHRcdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJlcUJhbm5lcigpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnYmFubmVyJywgcmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRiYW5uZXJMaXN0OiByZXMuZGF0YS5iYW5uZXIsXG5cdFx0XHRcdFx0XHRjb25zdWx0OiByZXMuZGF0YS5jb25zdWx0WzBdXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG5cdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdH0pXG5cdH0sXG5cblx0dG9Ub2RheSgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL3RvZGF5L3RvZGF5J1xuXHRcdH0pXG5cdH0sXG5cblx0dG9GcmllbmQoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmllbmQvZnJpZW5kJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9TYWxlQWZ0ZXIoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9zYWxlLWFmdGVyL3NhbGUtYWZ0ZXInXG5cdFx0fSlcblx0fSxcblxuXHR0b0ZyZWUoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmVlL2ZyZWUnXG5cdFx0fSlcblx0fVxuXG5cbn0pXG4iXX0=