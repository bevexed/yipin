"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var app = getApp();
var token = wx.getStorageSync('token');
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        bannerList: [],
        consult: '',
        orderList: [],
        current_scroll: 7,
        type: 7,
        page: 1
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
        this.getOrderList(token, this.data.type, this.data.page);
    },
    getOrderList: function (token, type, page) {
        var _this = this;
        order_1.orderAll(token, type, page).then(function (res) {
            console.log(res.data.list);
            _this.setData({
                orderList: res.data.list
            });
        });
    },
    handleChangeScroll: function (_a) {
        var detail = _a.detail;
        var key = detail.key;
        this.setData({
            current_scroll: key,
            type: key
        });
        this.data.orderList = [];
        this.getOrderList(token, key, this.data.page);
    },
    onReachBottom: function () {
        wx.showLoading({
            title: '玩命加载中',
        });
        this.data.page = this.data.page + 1;
        this.getOrderList(token, this.data.type, this.data.page);
        wx.hideLoading();
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    toWaitPost: function (e) {
        wx.navigateTo({
            url: '../wait-post/wait-post?id=' + e.currentTarget.dataset.id + '&status=' + e.currentTarget.dataset.status
        });
    },
    toFahuo: function (e) {
        wx.navigateTo({
            url: '../post/post?id=' + e.currentTarget.dataset.id
        });
    },
    toFirstTrial: function (e) {
        order_1.confirmOrder(token, e.currentTarget.dataset.id, '2').then(function (res) {
            if (res.code == 1) {
                wx.showToast({
                    title: res.message
                });
            }
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sZC1vdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzb2xkLW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUdwRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUM3QixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFFbkQsVUFBVSxFQUFFLEVBQUU7UUFDZCxPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBQyxFQUFFO1FBQ1osY0FBYyxFQUFFLENBQUM7UUFDakIsSUFBSSxFQUFDLENBQUM7UUFDTixJQUFJLEVBQUMsQ0FBQztLQUNQO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsV0FBVztTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0os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RUFBRTtTQUNyRCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWSxFQUFaLFVBQWEsQ0FBSztRQUNoQixvQkFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMxRCxJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO2dCQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLEdBQUcsQ0FBQyxPQUFPO2lCQUNsQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1CQUFtQjtTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUscUJBQXFCO1NBQzNCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2QkFBNkI7U0FDbkMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUdGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9yZGVyQWxsLCBjb25maXJtT3JkZXJ9IGZyb20gJy4uL2FwaS9vcmRlcidcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uL2FwcCdcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcbmNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuXG4gICAgYmFubmVyTGlzdDogW10sXG4gICAgY29uc3VsdDogJycsXG4gICAgb3JkZXJMaXN0OltdLFxuICAgIGN1cnJlbnRfc2Nyb2xsOiA3LFxuICAgIHR5cGU6NyxcbiAgICBwYWdlOjFcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICdsb2dzL2xvZ3MnXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuZ2V0T3JkZXJMaXN0KHRva2VuLHRoaXMuZGF0YS50eXBlLHRoaXMuZGF0YS5wYWdlKTtcblxuICB9LFxuICBnZXRPcmRlckxpc3QodG9rZW46YW55LCB0eXBlOmFueSwgcGFnZTphbnkpe1xuICAgIC8vIOWFqOmDqOiuouWNlVxuICAgIG9yZGVyQWxsKHRva2VuLCB0eXBlLCBwYWdlKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEubGlzdCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIG9yZGVyTGlzdDogcmVzLmRhdGEubGlzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIClcbiAgfSxcbiAgLy8gdGFi5YiH5o2iXG4gIGhhbmRsZUNoYW5nZVNjcm9sbCh7ZGV0YWlsfTphbnkpIHtcbiAgICBjb25zdCBrZXkgPSBkZXRhaWwua2V5O1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY3VycmVudF9zY3JvbGw6IGtleSxcbiAgICAgIHR5cGU6a2V5XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhLm9yZGVyTGlzdCA9IFtdO1xuICAgIHRoaXMuZ2V0T3JkZXJMaXN0KHRva2VuLGtleSx0aGlzLmRhdGEucGFnZSlcbiAgfSxcbiAgLy8g5LiK5ouJ5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+eOqeWRveWKoOi9veS4rScsXG4gICAgfSlcbiAgICAvLyDpobXmlbArMVxuICAgIHRoaXMuZGF0YS5wYWdlID0gdGhpcy5kYXRhLnBhZ2UgKyAxO1xuICAgIHRoaXMuZ2V0T3JkZXJMaXN0KHRva2VuLCB0aGlzLmRhdGEudHlwZSwgdGhpcy5kYXRhLnBhZ2UpO1xuICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfSxcbiAgLy8g6K6i5Y2V6K+m5oOFXG4gIHRvV2FpdFBvc3QoZTphbnkpe1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vd2FpdC1wb3N0L3dhaXQtcG9zdD9pZD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQgKyAnJnN0YXR1cz0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3RhdHVzXG4gICAgfSlcbiAgfSxcbiAgLy8g5Y+R6LSnXG4gIHRvRmFodW8oZTphbnkpe1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vcG9zdC9wb3N0P2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgIH0pXG4gIH0sXG4gIC8vIOWOu+ehruiupFxuICB0b0ZpcnN0VHJpYWwoZTphbnkpe1xuICAgIGNvbmZpcm1PcmRlcih0b2tlbiwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQsJzInKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZihyZXMuY29kZSA9PSAxKXtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTpyZXMubWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHRvVG9kYXkoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi8uLi90b2RheS90b2RheSdcbiAgICB9KVxuICB9LFxuXG4gIHRvRnJpZW5kKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vLi4vZnJpZW5kL2ZyaWVuZCdcbiAgICB9KVxuICB9LFxuXG4gIHRvU2FsZUFmdGVyKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vLi4vc2FsZS1hZnRlci9zYWxlLWFmdGVyJ1xuICAgIH0pXG4gIH0sXG5cblxufSlcbiJdfQ==