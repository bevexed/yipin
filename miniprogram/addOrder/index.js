"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var token = wx.getStorageSync('token');
Page({
    data: {
        address: {},
        information: '',
        amount: '',
        note: '',
        pics: []
    },
    onLoad: function () {
        this.getAddress();
    },
    write: function (e) {
        this.setData({
            information: e.detail.value
        });
    },
    amount: function (e) {
        this.setData({
            amount: e.detail.value
        });
    },
    noteText: function (e) {
        this.setData({
            note: e.detail.value
        });
    },
    getAddress: function () {
        var _this = this;
        order_1.address().then(function (res) {
            _this.setData({
                address: res.data
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
    },
    tijiao: function () {
        var picture = '';
        this.data.pics.map(function (res) {
            picture += res + ',';
        });
        if (this.data.information == '' || this.data.amount == '' || this.data.note == '') {
            wx.showToast({
                title: '请输入必填信息',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        var reg = /^[1-9]\d*$/;
        if (!reg.test(this.data.amount)) {
            wx.showToast({
                title: '请输入正确的下单数量',
                icon: 'none',
                duration: 2000
            });
            return;
        }
        order_1.addOrder(token, this.data.information, this.data.amount, this.data.note, picture).then(function (res) {
            if (res.code == 1) {
                wx.navigateTo({
                    url: '../pages/index/index'
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFnRDtBQUVoRCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXpDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBQyxFQUFFO1FBQ1YsV0FBVyxFQUFDLEVBQUU7UUFDZCxNQUFNLEVBQUMsRUFBRTtRQUNULElBQUksRUFBQyxFQUFFO1FBQ1AsSUFBSSxFQUFDLEVBQUU7S0FDUjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELEtBQUssRUFBTCxVQUFNLENBQUs7UUFDVixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sQ0FBSztRQUNWLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVIsVUFBUyxDQUFLO1FBQ1osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBVjtRQUFBLGlCQU1DO1FBTEMsZUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNoQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBQyxHQUFHLENBQUMsSUFBSTthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXLEVBQVg7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07WUFDdEIsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBRVQsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQTtnQkFFM0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixJQUFJLEVBQUUsTUFBTTtpQkFDYixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUNyQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUU7WUFDakYsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFFRCxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQztZQUM5QixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBQyxZQUFZO2dCQUNsQixJQUFJLEVBQUMsTUFBTTtnQkFDWCxRQUFRLEVBQUMsSUFBSTthQUNkLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDUjtRQUVELGdCQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDeEYsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDZixFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNaLEdBQUcsRUFBRSxzQkFBc0I7aUJBQzVCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xyXG4vL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBhZGRyZXNzLCBhZGRPcmRlciB9IGZyb20gJy4uL2FwaS9vcmRlcidcclxuXHJcbmNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBhZGRyZXNzOnt9LFxyXG4gICAgaW5mb3JtYXRpb246JycsXHJcbiAgICBhbW91bnQ6JycsXHJcbiAgICBub3RlOicnLFxyXG4gICAgcGljczpbXVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5nZXRBZGRyZXNzKCk7XHJcbiAgfSxcclxuICB3cml0ZShlOmFueSl7XHJcbiAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgIGluZm9ybWF0aW9uOmUuZGV0YWlsLnZhbHVlXHJcbiAgIH0pXHJcbiAgfSxcclxuICBhbW91bnQoZTphbnkpe1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGFtb3VudDogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcbiAgfSxcclxuICBub3RlVGV4dChlOmFueSl7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgbm90ZTogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcbiAgfSxcclxuICAvLyDojrflj5blnLDlnYBcclxuICBnZXRBZGRyZXNzKCl7XHJcbiAgICBhZGRyZXNzKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBhZGRyZXNzOnJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgdXBsb2FkSW1hZ2UoKXtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgY29uc3QgcGljcyA9IHRoaXMuZGF0YS5waWNzO1xyXG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICBjb3VudDogMyAtIHBpY3MubGVuZ3RoLFxyXG4gICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgLy8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcbiAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdGNvbnN0IHBpY0FsbCA9IHBpY3MuY29uY2F0KHRlbXBGaWxlUGF0aHMpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgcGljczogcGljQWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOaPkOS6pOiuouWNlVxyXG4gIHRpamlhbygpe1xyXG4gICAgbGV0IHBpY3R1cmUgPSAnJztcclxuICAgIHRoaXMuZGF0YS5waWNzLm1hcCgocmVzKSA9PntcclxuICAgICAgcGljdHVyZSArPSByZXMgKyAnLCc7XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuaW5mb3JtYXRpb24gPT0gJycgfHwgdGhpcy5kYXRhLmFtb3VudCA9PSAnJyB8fCB0aGlzLmRhdGEubm90ZSA9PSAnJykge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5b+F5aGr5L+h5oGvJyxcclxuICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWcgPSAvXlsxLTldXFxkKiQvO1xyXG4gICAgaWYgKCFyZWcudGVzdCh0aGlzLmRhdGEuYW1vdW50KSl7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6J+ivt+i+k+WFpeato+ehrueahOS4i+WNleaVsOmHjycsXHJcbiAgICAgICAgaWNvbjonbm9uZScsXHJcbiAgICAgICAgZHVyYXRpb246MjAwMFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3JkZXIodG9rZW4sIHRoaXMuZGF0YS5pbmZvcm1hdGlvbiwgdGhpcy5kYXRhLmFtb3VudCwgdGhpcy5kYXRhLm5vdGUsIHBpY3R1cmUpLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYocmVzLmNvZGUgPT0gMSl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19