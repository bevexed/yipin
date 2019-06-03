"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
var order_1 = require("../../api/order");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        bannerList: [],
        consult: '',
        isModal: true,
        token: ''
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
                    consult: res.data.consult
                });
            }
        });
    },
    showModal: function () {
        var that = this;
        this.setData({}, function () {
            wx.getStorage({
                key: 'token',
                success: function (res) {
                    that.setData({
                        token: res.data
                    }, function () {
                        order_1.jiaoyan(that.data.token).then(function (res) {
                            if (res.code == 1) {
                                that.setData({
                                    isModal: false
                                });
                            }
                            else {
                                var url_1 = '../../friend/friend';
                                switch (res.message) {
                                    case '用户收款信息为完善，请先完善收款信息':
                                        url_1 = '../../collect/collect';
                                        break;
                                    case '用户未申请成为合作商或正在审核，不能发布订单':
                                        url_1 = '../../friend/friend';
                                        break;
                                }
                                wx.showToast({
                                    title: res.message,
                                    icon: 'none',
                                    duration: 2000,
                                    mask: true,
                                    success: function () {
                                        setTimeout(function () {
                                            wx.navigateTo({
                                                url: url_1
                                            });
                                        }, 2000);
                                    }
                                });
                            }
                        });
                    });
                }
            });
        });
    },
    hideTankuang: function () {
        this.setData({
            isModal: true
        });
    },
    getAdd: function () {
        var that = this;
        that.setData({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUN6Qyx5Q0FBdUM7QUFFdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUUsRUFBRTtLQUVUO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBdUNDO1FBdENBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFB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QVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsbUJBQW1CO1NBQ3hCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxxQkFBcUI7U0FDMUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDZCQUE2QjtTQUNsQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsaUJBQWlCO1NBQ3RCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsMkJBQTJCLEdBQUcsT0FBTztTQUMxQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBR0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7SU15QXBwfSBmcm9tICcuLi8uLi9hcHAnXG5pbXBvcnQge3JlcUJhbm5lcn0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xuaW1wb3J0IHtqaWFveWFufSBmcm9tICcuLi8uLi9hcGkvb3JkZXInXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cblx0XHRiYW5uZXJMaXN0OiBbXSxcblx0XHRjb25zdWx0OiAnJyxcblx0XHRpc01vZGFsOiB0cnVlLFxuXHRcdHRva2VuOiAnJ1xuXG5cdH0sXG5cdC8v5LqL5Lu25aSE55CG5Ye95pWwXG5cdGJpbmRWaWV3VGFwKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnbG9ncy9sb2dzJ1xuXHRcdH0pXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHR1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG5cdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG5cdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuXHRcdFx0YXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dXNlckluZm86IHJlcyxcblx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0dXNlckluZm86IHJlcy51c2VySW5mbyxcblx0XHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXFCYW5uZXIoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Jhbm5lcicsIHJlcyk7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0YmFubmVyTGlzdDogcmVzLmRhdGEuYmFubmVyLFxuXHRcdFx0XHRcdFx0Y29uc3VsdDogcmVzLmRhdGEuY29uc3VsdFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cdC8vIOa3u+WKoOiuouWNlVxuXHRzaG93TW9kYWwoKSB7XG5cdFx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdFx0a2V5OiAndG9rZW4nLFxuXHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdHRoYXQuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0amlhb3lhbih0aGF0LmRhdGEudG9rZW4pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRcdGlzTW9kYWw6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdGxldCB1cmw6IHN0cmluZyA9ICcuLi8uLi9mcmllbmQvZnJpZW5kJztcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHJlcy5tZXNzYWdlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICfnlKjmiLfmlLbmrL7kv6Hmga/kuLrlrozlloTvvIzor7flhYjlrozlloTmlLbmrL7kv6Hmga8nOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmwgPSAnLi4vLi4vY29sbGVjdC9jb2xsZWN0Jztcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICfnlKjmiLfmnKrnlLPor7fmiJDkuLrlkIjkvZzllYbmiJbmraPlnKjlrqHmoLjvvIzkuI3og73lj5HluIPorqLljZUnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmwgPSAnLi4vLi4vZnJpZW5kL2ZyaWVuZCc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMjAwMClcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0sXG5cdGhpZGVUYW5rdWFuZygpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGlzTW9kYWw6IHRydWVcblx0XHR9KVxuXHR9LFxuXHRnZXRBZGQoKSB7XG5cdFx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXREYXRhISh7XG5cdFx0XHRpc01vZGFsOiB0cnVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogJy4uLy4uL2FkZE9yZGVyL2luZGV4J1xuXHRcdFx0fSlcblx0XHR9KVxuXG5cblx0fSxcblxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0dXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuXHRcdFx0aGFzVXNlckluZm86IHRydWVcblx0XHR9KVxuXHR9LFxuXG5cdHRvVG9kYXkoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi90b2RheS90b2RheSdcblx0XHR9KVxuXHR9LFxuXG5cdHRvRnJpZW5kKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vZnJpZW5kL2ZyaWVuZCdcblx0XHR9KVxuXHR9LFxuXG5cdHRvU2FsZUFmdGVyKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vc2FsZS1hZnRlci9zYWxlLWFmdGVyJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9GcmVlKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vZnJlZS9mcmVlJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9Ob3RpY2UoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgY29udGVudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbnRlbnQ7XG5cdFx0Y29uc29sZS5sb2coY29udGVudCk7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi9ub3RpY2Uvbm90aWNlP2NvbnRlbnQ9JyArIGNvbnRlbnRcblx0XHR9KVxuXHR9XG5cblxufSk7XG4iXX0=