"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var ajax_1 = require("../api/ajax");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        bannerList: [],
        consult: '',
        orderList: [],
        current_scroll: 'tab1',
        imageUrl: ajax_1.baseUrl
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
        var token = wx.getStorageSync('token');
        order_1.orderAll(token).then(function (res) {
            console.log(res.data.list);
            _this.setData({
                orderList: res.data.list
            });
        });
    },
    handleChangeScroll: function (_a) {
        var detail = _a.detail;
        this.setData({
            current_scroll: detail.key
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
    toWaitPost: function (e) {
        wx.navigateTo({
            url: '../wait-post/wait-post?id=' + e.currentTarget.dataset.id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sZC1vdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzb2xkLW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxQztBQUVyQyxvQ0FBcUM7QUFFckMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFFN0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUVuRCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsU0FBUyxFQUFDLEVBQUU7UUFDWixjQUFjLEVBQUUsTUFBTTtRQUN0QixRQUFRLEVBQUUsY0FBTztLQUNsQjtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLFdBQVc7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sRUFBTjtRQUFBLGlCQXNDQztRQXJDQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUd6QyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbEIsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTthQUN6QixDQUFDLENBQUE7UUFDSixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCxrQkFBa0IsRUFBbEIsVUFBbUIsRUFBVTtZQUFSLGtCQUFNO1FBQ3pCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixjQUFjLEVBQUUsTUFBTSxDQUFDLEdBQUc7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsRUFBWCxVQUFZLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLEVBQVYsVUFBVyxDQUFLO1FBQ2QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyw0QkFBNEIsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQzlELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxPQUFPO1FBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxtQkFBbUI7U0FDekIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHFCQUFxQjtTQUMzQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNkJBQTZCO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FHRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29yZGVyQWxsfSBmcm9tICcuLi9hcGkvb3JkZXInXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uL2FwcCdcclxuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4uL2FwaS9hamF4J1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG5cclxuICAgIGJhbm5lckxpc3Q6IFtdLFxyXG4gICAgY29uc3VsdDogJycsXHJcbiAgICBvcmRlckxpc3Q6W10sXHJcbiAgICBjdXJyZW50X3Njcm9sbDogJ3RhYjEnLFxyXG4gICAgaW1hZ2VVcmw6IGJhc2VVcmxcclxuICB9LFxyXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgYmluZFZpZXdUYXAoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnbG9ncy9sb2dzJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5cclxuLy8g5YWo6YOo6K6i5Y2VXHJcbiAgICBvcmRlckFsbCh0b2tlbikudGhlbihcclxuICAgICAgcmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIG9yZGVyTGlzdDogcmVzLmRhdGEubGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9LFxyXG4gIC8vIHRhYuWIh+aNolxyXG4gIGhhbmRsZUNoYW5nZVNjcm9sbCh7IGRldGFpbCB9KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgY3VycmVudF9zY3JvbGw6IGRldGFpbC5rZXlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxyXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRvV2FpdFBvc3QoZTphbnkpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDonLi4vd2FpdC1wb3N0L3dhaXQtcG9zdD9pZD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICB0b1RvZGF5KCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uLy4uL3RvZGF5L3RvZGF5J1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICB0b0ZyaWVuZCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi8uLi9mcmllbmQvZnJpZW5kJ1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICB0b1NhbGVBZnRlcigpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi8uLi9zYWxlLWFmdGVyL3NhbGUtYWZ0ZXInXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxufSlcclxuIl19