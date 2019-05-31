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
        consult: '',
        isModal: true
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
        this.setData({
            isModal: false
        });
    },
    hideTankuang: function () {
        this.setData({
            isModal: true
        });
    },
    hideModal: function () {
        this.setData({
            isModal: true
        }, function () {
            wx.navigateTo({
                url: '../../addOrder/index'
            });
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
    },
    toNotice: function (e) {
        console.log(e);
        var content = e.currentTarget.dataset.content;
        console.log(content);
        wx.navigateTo({
            url: '../notice/notice?content=' + content
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFVBQVUsRUFBRSxFQUFFO1FBQ2QsT0FBTyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUMsSUFBSTtLQUVkO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBdUNDO1FBdENBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNiLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQTtnQkFDSCxDQUFDO2FBQ0QsQ0FBQyxDQUFBO1NBQ0Y7UUFFRCxpQkFBUyxFQUFFLENBQUMsSUFBSSxDQUNmLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDNUIsQ0FBQyxDQUFBO2FBQ0Y7UUFDRixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7SUFFQSxLQUFLLEVBQUw7UUFDRSxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFDLEtBQUs7U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsWUFBWSxFQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFNBQVMsRUFBVDtRQUNFLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUM7WUFDQSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxzQkFBc0I7YUFDNUIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUYsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLG1CQUFtQjtTQUN4QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUscUJBQXFCO1NBQzFCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSw2QkFBNkI7U0FDbEMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGlCQUFpQjtTQUN0QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDJCQUEyQixHQUFHLE9BQU87U0FDMUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUdELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHtJTXlBcHB9IGZyb20gJy4uLy4uL2FwcCdcclxuaW1wb3J0IHtyZXFCYW5uZXJ9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG5cdFx0dXNlckluZm86IHt9LFxyXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxyXG5cdFx0Y2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG5cclxuXHRcdGJhbm5lckxpc3Q6IFtdLFxyXG5cdFx0Y29uc3VsdDogJycsXHJcbiAgICBpc01vZGFsOnRydWVcclxuXHJcblx0fSxcclxuXHQvL+S6i+S7tuWkhOeQhuWHveaVsFxyXG5cdGJpbmRWaWV3VGFwKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJ2xvZ3MvbG9ncydcclxuXHRcdH0pXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuXHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0dXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG5cdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG5cdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG5cdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcblx0XHRcdGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHR1c2VySW5mbzogcmVzLFxyXG5cdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG5cdFx0XHR3eC5nZXRVc2VySW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0dXNlckluZm86IHJlcy51c2VySW5mbyxcclxuXHRcdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHJlcUJhbm5lcigpLnRoZW4oXHJcblx0XHRcdHJlcyA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Jhbm5lcicsIHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0YmFubmVyTGlzdDogcmVzLmRhdGEuYmFubmVyLFxyXG5cdFx0XHRcdFx0XHRjb25zdWx0OiByZXMuZGF0YS5jb25zdWx0WzBdXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH0sXHJcbiAgLy8g5re75Yqg6K6i5Y2VXHJcbiAgZ29BZGQoKXtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBpc01vZGFsOmZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgaGlkZVRhbmt1YW5nKCl7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgaXNNb2RhbDogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGhpZGVNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGlzTW9kYWw6IHRydWVcclxuICAgIH0sKCkgPT57XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4uLy4uL2FkZE9yZGVyL2luZGV4J1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuXHRcdFx0aGFzVXNlckluZm86IHRydWVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0dG9Ub2RheSgpIHtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcuLi8uLi90b2RheS90b2RheSdcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0dG9GcmllbmQoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnLi4vLi4vZnJpZW5kL2ZyaWVuZCdcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0dG9TYWxlQWZ0ZXIoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnLi4vLi4vc2FsZS1hZnRlci9zYWxlLWFmdGVyJ1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHR0b0ZyZWUoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnLi4vLi4vZnJlZS9mcmVlJ1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHR0b05vdGljZShlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0Y29uc3QgY29udGVudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbnRlbnQ7XHJcblx0XHRjb25zb2xlLmxvZyhjb250ZW50KTtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcuLi9ub3RpY2Uvbm90aWNlP2NvbnRlbnQ9JyArIGNvbnRlbnRcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcbn0pXHJcbiJdfQ==