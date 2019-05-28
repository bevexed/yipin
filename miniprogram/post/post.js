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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMEQ7QUFFMUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFDN0IsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLFlBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWMsRUFBZDtRQUFBLGlCQU1DO1FBTEMsb0JBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUMsR0FBRyxDQUFDLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQ0UsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztpQkFDM0IsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsS0FBSztRQUNILG9CQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNuRixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO2dCQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLEdBQUcsQ0FBQyxPQUFPO29CQUNqQixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUMsSUFBSTtvQkFDVCxPQUFPO3dCQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQ1osR0FBRyxFQUFFLHNCQUFzQjt5QkFDNUIsQ0FBQyxDQUFBO29CQUNKLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7aUJBQUk7Z0JBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUMsR0FBRyxDQUFDLE9BQU87aUJBQ2xCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgdHJhZGVDb21wYW55LCBjb25maXJtRmFodW8gfSBmcm9tICcuLi9hcGkvb3JkZXInO1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cbiAgICBpdGVtTGlzdDpbXSxcbiAgICBjb21wYW55OicnLFxuICAgIHRyYWNrX251bWJlcjonJyxcbiAgICBpZDonJ1xuXG4gIH0sXG4gIG9uTG9hZChlKSB7XG4gICAgdGhpcy5nZXRDb21wYW55TGlzdCgpO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpZDplLmlkXG4gICAgfSlcbiAgfSxcbiAgLy8g6I635Y+W5b+r6YCS5YWs5Y+45YiX6KGoXG4gIGdldENvbXBhbnlMaXN0KCl7XG4gICAgdHJhZGVDb21wYW55KCkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGl0ZW1MaXN0OnJlcy5kYXRhXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIC8vIOmAieaLqeeJqea1geWFrOWPuFxuICBjaG9vc2VQb3N0KCl7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgdGhpcy5kYXRhLml0ZW1MaXN0Lm1hcCgocmVmKSA9PiB7XG4gICAgICBhcnIucHVzaChyZWYubmFtZSlcbiAgICB9KVxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgaXRlbUxpc3Q6IGFycixcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xuICAgICAgICAgIGNvbXBhbnk6IGFycltyZXMudGFwSW5kZXhdXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBmYUh1bygpe1xuICAgIGNvbmZpcm1GYWh1byh0b2tlbiwgdGhpcy5kYXRhLmlkLCB0aGlzLmRhdGEuY29tcGFueSwgdGhpcy5kYXRhLnRyYWNrX251bWJlcikudGhlbihyZXMgPT4ge1xuICAgICAgaWYocmVzLmNvZGUgPT0gMCl7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6cmVzLm1lc3NhZ2UsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgIG1hc2s6dHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzKCl7XG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnLi4vc29sZC1vdXQvc29sZC1vdXQnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTpyZXMubWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=