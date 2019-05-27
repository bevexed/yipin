"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        info: {},
        pics: []
    },
    onLoad: function (options) {
        var token = wx.getStorageSync('token');
        this.getDetail(token, options.id);
    },
    getDetail: function (token, id) {
        var _this = this;
        order_1.orderDetail(token, id).then(function (res) {
            console.log(res);
            _this.setData({
                info: res.data
            });
        });
    },
    uploadImage: function () {
        var that = this;
        var pics = this.data.pics;
        wx.chooseImage({
            count: 3 - pics.length,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var tempFilePaths = res.tempFilePaths;
                var picAll = pics.concat(tempFilePaths);
                that.setData({
                    pics: picAll
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC1wb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FpdC1wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0NBQXdDO0FBRXhDLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDakQsSUFBSSxFQUFDLEVBQUU7UUFDUCxJQUFJLEVBQUMsRUFBRTtLQUNUO0lBQ0QsTUFBTSxZQUFDLE9BQU87UUFDWCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsU0FBUyxFQUFULFVBQVUsS0FBSyxFQUFDLEVBQUU7UUFBbEIsaUJBU0M7UUFSQyxtQkFBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzNCLFVBQUEsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7WUFDcEMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUMvQixPQUFPLFlBQUMsR0FBRztnQkFFVCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFBO2dCQUN2QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLElBQUksRUFBRSxNQUFNO2lCQUNiLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQge0lNeUFwcH0gZnJvbSAnLi4vYXBwJ1xyXG5pbXBvcnQge29yZGVyRGV0YWlsfSBmcm9tICcuLi9hcGkvb3JkZXInXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblxyXG5QYWdlKHtcclxuXHRkYXRhOiB7XHJcblx0XHRtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuXHRcdHVzZXJJbmZvOiB7fSxcclxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIGluZm86e30sXHJcbiAgICBwaWNzOltdXHJcblx0fSxcclxuXHRvbkxvYWQob3B0aW9ucykge1xyXG4gICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcclxuICAgIHRoaXMuZ2V0RGV0YWlsKHRva2VuLG9wdGlvbnMuaWQpO1xyXG4gIH0sXHJcbiAgZ2V0RGV0YWlsKHRva2VuLGlkKXtcclxuICAgIG9yZGVyRGV0YWlsKHRva2VuLCBpZCkudGhlbihcclxuICAgIHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGluZm86cmVzLmRhdGFcclxuICAgICAgfSlcclxuICAgIH1cclxuICApXHJcbiAgfSxcclxuICAvLyDkuIrkvKDlm77niYdcclxuICB1cGxvYWRJbWFnZSgpe1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICBjb25zdCBwaWNzID0gdGhpcy5kYXRhLnBpY3M7XHJcbiAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgIGNvdW50OiAzIC0gcGljcy5sZW5ndGgsXHJcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcclxuICAgICAgICBjb25zdCBwaWNBbGwgPSBwaWNzLmNvbmNhdCh0ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgcGljczogcGljQWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==