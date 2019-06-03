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
        this.setData({
            isModal: false
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
            wx.getStorage({
                key: 'token',
                success: function (res) {
                    that.setData({
                        token: res.data
                    }, function () {
                        order_1.jiaoyan(that.data.token).then(function (res) {
                            if (res.code == 1) {
                                wx.navigateTo({
                                    url: '../../addOrder/index'
                                });
                            }
                            else {
                                var url_1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUN6Qyx5Q0FBdUM7QUFFdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUUsRUFBRTtLQUVUO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBdUNDO1FBdENBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFB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UUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsbUJBQW1CO1NBQ3hCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxxQkFBcUI7U0FDMUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDZCQUE2QjtTQUNsQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsaUJBQWlCO1NBQ3RCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsMkJBQTJCLEdBQUcsT0FBTztTQUMxQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBR0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7SU15QXBwfSBmcm9tICcuLi8uLi9hcHAnXG5pbXBvcnQge3JlcUJhbm5lcn0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xuaW1wb3J0IHtqaWFveWFufSBmcm9tICcuLi8uLi9hcGkvb3JkZXInXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cblx0XHRiYW5uZXJMaXN0OiBbXSxcblx0XHRjb25zdWx0OiAnJyxcblx0XHRpc01vZGFsOiB0cnVlLFxuXHRcdHRva2VuOiAnJ1xuXG5cdH0sXG5cdC8v5LqL5Lu25aSE55CG5Ye95pWwXG5cdGJpbmRWaWV3VGFwKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnbG9ncy9sb2dzJ1xuXHRcdH0pXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHR1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG5cdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG5cdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuXHRcdFx0YXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dXNlckluZm86IHJlcyxcblx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0dXNlckluZm86IHJlcy51c2VySW5mbyxcblx0XHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXFCYW5uZXIoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Jhbm5lcicsIHJlcyk7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0YmFubmVyTGlzdDogcmVzLmRhdGEuYmFubmVyLFxuXHRcdFx0XHRcdFx0Y29uc3VsdDogcmVzLmRhdGEuY29uc3VsdFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cdC8vIOa3u+WKoOiuouWNlVxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRpc01vZGFsOiBmYWxzZVxuXHRcdH0pXG5cdH0sXG5cdGhpZGVUYW5rdWFuZygpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGlzTW9kYWw6IHRydWVcblx0XHR9KVxuXHR9LFxuXHRnZXRBZGQoKSB7XG5cdFx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXREYXRhISh7XG5cdFx0XHRpc01vZGFsOiB0cnVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0XHR0aGF0LnNldERhdGEhKHtcblx0XHRcdFx0XHRcdHRva2VuOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdGppYW95YW4odGhhdC5kYXRhLnRva2VuKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICcuLi8uLi9hZGRPcmRlci9pbmRleCdcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVybDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAocmVzLm1lc3NhZ2UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ+eUqOaIt+aUtuasvuS/oeaBr+S4uuWujOWWhO+8jOivt+WFiOWujOWWhOaUtuasvuS/oeaBryc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybCA9ICcuLi8uLi9jb2xsZWN0L2NvbGxlY3QnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ+eUqOaIt+acqueUs+ivt+aIkOS4uuWQiOS9nOWVhuaIluato+WcqOWuoeaguO+8jOS4jeiDveWPkeW4g+iuouWNlSc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybCA9ICcuLi8uLi9mcmllbmQvZnJpZW5kJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAyMDAwKVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblxuXHRcdH0pXG5cdH0sXG5cblx0Z2V0VXNlckluZm8oZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcblx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXG5cdFx0fSlcblx0fSxcblxuXHR0b1RvZGF5KCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vdG9kYXkvdG9kYXknXG5cdFx0fSlcblx0fSxcblxuXHR0b0ZyaWVuZCgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL2ZyaWVuZC9mcmllbmQnXG5cdFx0fSlcblx0fSxcblxuXHR0b1NhbGVBZnRlcigpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL3NhbGUtYWZ0ZXIvc2FsZS1hZnRlcidcblx0XHR9KVxuXHR9LFxuXG5cdHRvRnJlZSgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL2ZyZWUvZnJlZSdcblx0XHR9KVxuXHR9LFxuXG5cdHRvTm90aWNlKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb250ZW50O1xuXHRcdGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vbm90aWNlL25vdGljZT9jb250ZW50PScgKyBjb250ZW50XG5cdFx0fSlcblx0fVxuXG5cbn0pO1xuIl19