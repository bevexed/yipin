"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var token = wx.getStorageSync('token');
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        itemList: [],
        company: '',
        track_number: '',
        id: ''
    },
    onLoad: function (e) {
        this.getCompanyList();
        this.setData({
            id: e.id
        });
    },
    getCompanyList: function () {
        var _this = this;
        order_1.tradeCompany().then(function (res) {
            _this.setData({
                itemList: res.data
            });
        });
    },
    choosePost: function () {
        var arr = [];
        this.data.itemList.map(function (ref) {
            arr.push(ref.name);
        });
        var that = this;
        wx.showActionSheet({
            itemList: arr,
            success: function (res) {
                that.setData({
                    company: arr[res.tapIndex]
                });
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
    },
    faHuo: function () {
        order_1.confirmFahuo(token, this.data.id, this.data.company, this.data.track_number).then(function (res) {
            if (res.code == 0) {
                wx.showToast({
                    title: res.message,
                    icon: 'success',
                    duration: 3000,
                    mask: true,
                    success: function () {
                        wx.redirectTo({
                            url: '../sold-out/sold-out'
                        });
                    }
                });
            }
            else {
                wx.showToast({
                    title: res.message
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFFMUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFLO1FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDUixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxFQUFkO1FBQUEsaUJBTUM7UUFMQyxvQkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBQyxHQUFHLENBQUMsSUFBSTthQUNsQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVY7UUFDRSxJQUFNLEdBQUcsR0FBdUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFFNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNqQixRQUFRLEVBQUUsR0FBRztZQUNiLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQzNCLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN6QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxvQkFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbkYsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDZixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxHQUFHLENBQUMsT0FBTztvQkFDakIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFDLElBQUk7b0JBQ1QsT0FBTzt3QkFDTCxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxzQkFBc0I7eUJBQzVCLENBQUMsQ0FBQTtvQkFDSixDQUFDO2lCQUNGLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLEdBQUcsQ0FBQyxPQUFPO2lCQUNsQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYWRlQ29tcGFueSwgY29uZmlybUZhaHVvIH0gZnJvbSAnLi4vYXBpL29yZGVyJztcclxuXHJcbmNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxyXG4gICAgdXNlckluZm86IHt9LFxyXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG5cclxuICAgIGl0ZW1MaXN0OltdLFxyXG4gICAgY29tcGFueTonJyxcclxuICAgIHRyYWNrX251bWJlcjonJyxcclxuICAgIGlkOicnXHJcblxyXG4gIH0sXHJcbiAgb25Mb2FkKGU6YW55KSB7XHJcbiAgICB0aGlzLmdldENvbXBhbnlMaXN0KCk7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgaWQ6ZS5pZFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOiOt+WPluW/q+mAkuWFrOWPuOWIl+ihqFxyXG4gIGdldENvbXBhbnlMaXN0KCl7XHJcbiAgICB0cmFkZUNvbXBhbnkoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGl0ZW1MaXN0OnJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g6YCJ5oup54mp5rWB5YWs5Y+4XHJcbiAgY2hvb3NlUG9zdCgpe1xyXG4gICAgY29uc3QgYXJyOiBhbnlbXSB8IG5ldmVyW10gfCBzdHJpbmdbXSB8IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEuaXRlbUxpc3QubWFwKChyZWYpID0+IHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG5cdFx0XHRhcnIucHVzaChyZWYubmFtZSlcclxuICAgIH0pXHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICBpdGVtTGlzdDogYXJyLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY29tcGFueTogYXJyW3Jlcy50YXBJbmRleF1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBmYUh1bygpe1xyXG4gICAgY29uZmlybUZhaHVvKHRva2VuLCB0aGlzLmRhdGEuaWQsIHRoaXMuZGF0YS5jb21wYW55LCB0aGlzLmRhdGEudHJhY2tfbnVtYmVyKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmKHJlcy5jb2RlID09IDApe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTpyZXMubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgbWFzazp0cnVlLFxyXG4gICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcuLi9zb2xkLW91dC9zb2xkLW91dCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOnJlcy5tZXNzYWdlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==