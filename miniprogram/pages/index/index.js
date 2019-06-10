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
                fail: function (err) {
                    console.log('err', err);
                },
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
                                console.log(url_1);
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
        var type = e.currentTarget.dataset.type;
        var id = e.currentTarget.dataset.id;
        console.log(type, id);
        wx.navigateTo({
            url: '../notice/notice?type=' + type + '&id=' + id
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUF5QztBQUN6Qyx5Q0FBdUM7QUFFdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUUsRUFBRTtLQUVUO0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsV0FBVztTQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBdUNDO1FBdENBLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHN0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDL0IsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Q7YUFBTTtZQUVOLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDWCxHQUFHLENBQUMsVUFB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SUFBSSxHQUFHLE1BQU0sR0FBRyxFQUFFO1NBQ2xELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FFRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHtJTXlBcHB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7cmVxQmFubmVyfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnXG5pbXBvcnQge2ppYW95YW59IGZyb20gJy4uLy4uL2FwaS9vcmRlcidcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6Jyxcblx0XHR1c2VySW5mbzoge30sXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcblxuXHRcdGJhbm5lckxpc3Q6IFtdLFxuXHRcdGNvbnN1bHQ6ICcnLFxuXHRcdGlzTW9kYWw6IHRydWUsXG5cdFx0dG9rZW46ICcnXG5cblx0fSxcblx0Ly/kuovku7blpITnkIblh73mlbBcblx0YmluZFZpZXdUYXAoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICdsb2dzL2xvZ3MnXG5cdFx0fSlcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuXHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcblx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcblx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR1c2VySW5mbzogcmVzLFxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG5cdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHR1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuXHRcdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJlcUJhbm5lcigpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnYmFubmVyJywgcmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRiYW5uZXJMaXN0OiByZXMuZGF0YS5iYW5uZXIsXG5cdFx0XHRcdFx0XHRjb25zdWx0OiByZXMuZGF0YS5jb25zdWx0XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblx0Ly8g5re75Yqg6K6i5Y2VXG5cdHNob3dNb2RhbCgpIHtcblx0XHRjb25zdCB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuc2V0RGF0YSEoe30sICgpID0+IHtcblx0XHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicsIGVycik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0dGhhdC5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRqaWFveWFuKHRoYXQuZGF0YS50b2tlbikudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNNb2RhbDogZmFsc2Vcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVybDogc3RyaW5nID0gJy4uLy4uL2ZyaWVuZC9mcmllbmQnO1xuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAocmVzLm1lc3NhZ2UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ+eUqOaIt+aUtuasvuS/oeaBr+S4uuWujOWWhO+8jOivt+WFiOWujOWWhOaUtuasvuS/oeaBryc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybCA9ICcuLi8uLi9jb2xsZWN0L2NvbGxlY3QnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ+eUqOaIt+acqueUs+ivt+aIkOS4uuWQiOS9nOWVhuaIluato+WcqOWuoeaguO+8jOS4jeiDveWPkeW4g+iuouWNlSc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybCA9ICcuLi8uLi9mcmllbmQvZnJpZW5kJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh1cmwpO1xuXG5cdFx0XHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMjAwMClcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0sXG5cdGhpZGVUYW5rdWFuZygpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGlzTW9kYWw6IHRydWVcblx0XHR9KVxuXHR9LFxuXHRnZXRBZGQoKSB7XG5cdFx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXREYXRhISh7XG5cdFx0XHRpc01vZGFsOiB0cnVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogJy4uLy4uL2FkZE9yZGVyL2luZGV4J1xuXHRcdFx0fSlcblx0XHR9KVxuXG5cblx0fSxcblxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0dXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuXHRcdFx0aGFzVXNlckluZm86IHRydWVcblx0XHR9KVxuXHR9LFxuXG5cdHRvVG9kYXkoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi8uLi90b2RheS90b2RheSdcblx0XHR9KVxuXHR9LFxuXG5cdHRvRnJpZW5kKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vZnJpZW5kL2ZyaWVuZCdcblx0XHR9KVxuXHR9LFxuXG5cdHRvU2FsZUFmdGVyKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vc2FsZS1hZnRlci9zYWxlLWFmdGVyJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9GcmVlKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vLi4vZnJlZS9mcmVlJ1xuXHRcdH0pXG5cdH0sXG5cblx0dG9Ob3RpY2UoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgdHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0Y29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcblx0XHRjb25zb2xlLmxvZyh0eXBlLGlkKTtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uL25vdGljZS9ub3RpY2U/dHlwZT0nICsgdHlwZSArICcmaWQ9JyArIGlkXG5cdFx0fSlcblx0fSxcblxufSk7XG4iXX0=