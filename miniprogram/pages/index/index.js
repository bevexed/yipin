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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUN6Qyx5Q0FBdUM7QUFFdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFDLElBQUk7UUFDWixLQUFLLEVBQUUsRUFBRTtLQUVYO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBdUNDO1FBdENBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFB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UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGlCQUFpQjtTQUN0QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDJCQUEyQixHQUFHLE9BQU87U0FDMUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUdELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQge0lNeUFwcH0gZnJvbSAnLi4vLi4vYXBwJ1xuaW1wb3J0IHtyZXFCYW5uZXJ9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcbmltcG9ydCB7amlhb3lhbn0gZnJvbSAnLi4vLi4vYXBpL29yZGVyJ1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cblx0XHRiYW5uZXJMaXN0OiBbXSxcblx0XHRjb25zdWx0OiAnJyxcbiAgICBpc01vZGFsOnRydWUsXG4gICAgdG9rZW46ICcnXG5cblx0fSxcblx0Ly/kuovku7blpITnkIblh73mlbBcblx0YmluZFZpZXdUYXAoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICdsb2dzL2xvZ3MnXG5cdFx0fSlcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuXHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcblx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcblx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR1c2VySW5mbzogcmVzLFxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG5cdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXG5cdFx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmVxQmFubmVyKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdiYW5uZXInLCByZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdGJhbm5lckxpc3Q6IHJlcy5kYXRhLmJhbm5lcixcblx0XHRcdFx0XHRcdGNvbnN1bHQ6IHJlcy5kYXRhLmNvbnN1bHRbMF1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuICAvLyDmt7vliqDorqLljZVcbiAgc2hvd01vZGFsKCl7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc01vZGFsOmZhbHNlXG4gICAgfSlcbiAgfSxcbiAgaGlkZVRhbmt1YW5nKCl7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc01vZGFsOiB0cnVlXG4gICAgfSlcbiAgfSxcbiAgZ2V0QWRkKCl7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zZXREYXRhISh7XG4gICAgICBpc01vZGFsOiB0cnVlXG4gICAgfSwoKSA9PntcbiAgICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd0b2tlbicsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgICB0b2tlbjogcmVzLmRhdGFcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBqaWFveWFuKHRoYXQuZGF0YS50b2tlbikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PTEpe1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vLi4vYWRkT3JkZXIvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOnJlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgaWNvbjonbm9uZScsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjoyMDAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgXG4gICAgfSlcbiAgfSxcblxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG5cdFx0XHRoYXNVc2VySW5mbzogdHJ1ZVxuXHRcdH0pXG5cdH0sXG5cblx0dG9Ub2RheSgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uLy4uL3RvZGF5L3RvZGF5J1xuXHRcdH0pXG5cdH0sXG5cblx0dG9GcmllbmQoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmllbmQvZnJpZW5kJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9TYWxlQWZ0ZXIoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9zYWxlLWFmdGVyL3NhbGUtYWZ0ZXInXG5cdFx0fSlcblx0fSxcblxuXHR0b0ZyZWUoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi9mcmVlL2ZyZWUnXG5cdFx0fSlcblx0fSxcblxuXHR0b05vdGljZShlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zdCBjb250ZW50ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29udGVudDtcblx0XHRjb25zb2xlLmxvZyhjb250ZW50KTtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uL25vdGljZS9ub3RpY2U/Y29udGVudD0nICsgY29udGVudFxuXHRcdH0pXG5cdH1cblxuXG59KVxuIl19