"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        phone: ''
    },
    onLoad: function () {
        var _this_1 = this;
        index_1.reqService().then(function (res) {
            console.log(res);
            _this_1.setData({
                phone: res.data
            });
        });
    },
    showPhone: function () {
        var _this = this;
        wx.showActionSheet({
            itemList: ['拨打客服电话'],
            success: function (res) {
                console.log(res);
                wx.makePhoneCall({
                    phoneNumber: _this.data.phone
                });
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
    },
    handleClick: function () {
        wx.clearStorage({
            success: function (res) {
                console.log(res);
                wx.showToast({
                    title: '退出成功',
                    duration: 2000,
                    mask: true,
                    complete: function () {
                        wx.switchTab({
                            url: '/pages/index/index'
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFlBQVksQ0FDZDtZQUNDLE9BQU8sWUFBQyxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUTt3QkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNaLEdBQUcsRUFBRSxvQkFBb0I7eUJBQ3pCLENBQUMsQ0FBQTtvQkFDSCxDQUFDO2lCQUNELENBQUMsQ0FBQTtZQUVILENBQUM7U0FDRCxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0cGhvbmU6ICcnXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRyZXFTZXJ2aWNlKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdHBob25lOiByZXMuZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblx0c2hvd1Bob25lKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXNcblx0XHR3eC5zaG93QWN0aW9uU2hlZXQoe1xuXHRcdFx0aXRlbUxpc3Q6IFsn5ouo5omT5a6i5pyN55S16K+dJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHR3eC5tYWtlUGhvbmVDYWxsKHtcblx0XHRcdFx0XHRwaG9uZU51bWJlcjogX3RoaXMuZGF0YS5waG9uZSAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunueahOeUteivneWPt+eggVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGZhaWwocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0aGFuZGxlQ2xpY2soKSB7XG5cdFx0d3guY2xlYXJTdG9yYWdlKFxuXHRcdFx0e1xuXHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6YCA5Ye65oiQ5YqfJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdGNvbXBsZXRlKCkge1xuXHRcdFx0XHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH1cbn0pXG4iXX0=