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
                    consult: res.data.consult[0]
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
                                wx.showToast({
                                    title: res.message,
                                    icon: 'none',
                                    duration: 2000
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUN6Qyx5Q0FBdUM7QUFFdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFDLElBQUk7UUFDWixLQUFLLEVBQUUsRUFBRTtLQUVYO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBdUNDO1FBdENBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFB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UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGlCQUFpQjtTQUN0QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDJCQUEyQixHQUFHLE9BQU87U0FDMUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUdELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHtJTXlBcHB9IGZyb20gJy4uLy4uL2FwcCdcclxuaW1wb3J0IHtyZXFCYW5uZXJ9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuaW1wb3J0IHtqaWFveWFufSBmcm9tICcuLi8uLi9hcGkvb3JkZXInXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuXHRkYXRhOiB7XHJcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuXHRcdHVzZXJJbmZvOiB7fSxcclxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuXHJcblx0XHRiYW5uZXJMaXN0OiBbXSxcclxuXHRcdGNvbnN1bHQ6ICcnLFxyXG4gICAgaXNNb2RhbDp0cnVlLFxyXG4gICAgdG9rZW46ICcnXHJcblxyXG5cdH0sXHJcblx0Ly/kuovku7blpITnkIblh73mlbBcclxuXHRiaW5kVmlld1RhcCgpIHtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICdsb2dzL2xvZ3MnXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0aWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcblx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcclxuXHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuXHRcdFx0Ly8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0dXNlckluZm86IHJlcyxcclxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcblx0XHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRyZXFCYW5uZXIoKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdiYW5uZXInLCByZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdGJhbm5lckxpc3Q6IHJlcy5kYXRhLmJhbm5lcixcclxuXHRcdFx0XHRcdFx0Y29uc3VsdDogcmVzLmRhdGEuY29uc3VsdFswXVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG4gIC8vIOa3u+WKoOiuouWNlVxyXG4gIHNob3dNb2RhbCgpe1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGlzTW9kYWw6ZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBoaWRlVGFua3VhbmcoKXtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBpc01vZGFsOiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0QWRkKCl7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICBpc01vZGFsOiB0cnVlXHJcbiAgICB9LCgpID0+e1xyXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB0b2tlbjogcmVzLmRhdGFcclxuICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgamlhb3lhbih0aGF0LmRhdGEudG9rZW4pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJy4uLy4uL2FkZE9yZGVyL2luZGV4J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOnJlcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246MjAwMFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblx0Z2V0VXNlckluZm8oZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcblx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHRvVG9kYXkoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnLi4vLi4vdG9kYXkvdG9kYXknXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHRvRnJpZW5kKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy4uLy4uL2ZyaWVuZC9mcmllbmQnXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdHRvU2FsZUFmdGVyKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy4uLy4uL3NhbGUtYWZ0ZXIvc2FsZS1hZnRlcidcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0dG9GcmVlKCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy4uLy4uL2ZyZWUvZnJlZSdcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0dG9Ob3RpY2UoZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb250ZW50O1xyXG5cdFx0Y29uc29sZS5sb2coY29udGVudCk7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnLi4vbm90aWNlL25vdGljZT9jb250ZW50PScgKyBjb250ZW50XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblxyXG59KVxyXG4iXX0=