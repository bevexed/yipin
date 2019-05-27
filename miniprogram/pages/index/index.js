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
            console.log(res);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0tBR25EO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBa0NDO1FBakNBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNiLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQTtnQkFDSCxDQUFDO2FBQ0QsQ0FBQyxDQUFBO1NBQ0Y7UUFFRCxpQkFBUyxFQUFFLENBQUMsSUFBSSxDQUNmLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakIsQ0FBQyxDQUNELENBQUE7SUFFRixDQUFDO0lBRUQsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLG1CQUFtQjtTQUN4QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUscUJBQXFCO1NBQzFCLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FHRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHtJTXlBcHB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7cmVxQmFubmVyfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6Jyxcblx0XHR1c2VySW5mbzoge30sXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcblxuXG5cdH0sXG5cdC8v5LqL5Lu25aSE55CG5Ye95pWwXG5cdGJpbmRWaWV3VGFwKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnbG9ncy9sb2dzJ1xuXHRcdH0pXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHR1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG5cdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG5cdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuXHRcdFx0YXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dXNlckluZm86IHJlcyxcblx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHR1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuXHRcdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJlcUJhbm5lcigpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHR9XG5cdFx0KVxuXG5cdH0sXG5cblx0Z2V0VXNlckluZm8oZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSlcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG5cdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdH0pXG5cdH0sXG5cblx0dG9Ub2RheSgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL3RvZGF5L3RvZGF5J1xuXHRcdH0pXG5cdH0sXG5cblx0dG9GcmllbmQoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmllbmQvZnJpZW5kJ1xuXHRcdH0pXG5cdH0sXG5cblxufSlcbiJdfQ==