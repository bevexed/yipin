"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var ajax_1 = require("../api/ajax");
Page({
    data: {
        address: {},
        information: '',
        amount: '',
        note: '',
        pics: [],
        token: '',
        baseUrl: ajax_1.base
    },
    onLoad: function () {
        this.getAddress();
        var that = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                that.setData({
                    token: res.data
                });
            }
        });
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
                that.uploadimg({
                    url: that.data.baseUrl + '/api/upload_img',
                    path: picAll
                });
            }
        });
    },
    uploadimg: function (data) {
        var that = this, i = data.i ? data.i : 0, success = data.success ? data.success : 0, fail = data.fail ? data.fail : 0;
        wx.uploadFile({
            url: data.url,
            filePath: data.path[i],
            name: 'image',
            success: function (resp) {
                success++;
                var conf = JSON.parse(resp.data);
                var arrImage = [];
                arrImage.push(conf.data);
                var picAlls = that.data.pics.concat(arrImage);
                that.setData({
                    pics: picAlls
                });
            },
            fail: function () {
                fail++;
                console.log('fail:' + i + "fail:" + fail);
            },
            complete: function () {
                console.log(i);
                i++;
                if (i == data.path.length) {
                    console.log('执行完毕');
                    console.log('成功：' + success + " 失败：" + fail);
                }
                else {
                    console.log(i);
                    data.i = i;
                    data.success = success;
                    data.fail = fail;
                    that.uploadimg(data);
                }
            }
        });
    },
    yulan: function () {
        wx.previewImage({
            current: this.data.pics,
            urls: this.data.pics
        });
    },
    tijiao: function () {
        var picture = '';
        this.data.pics.map(function (res) {
            picture += res + ',';
        });
        picture = picture.substring(0, picture.length - 1);
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
        order_1.addOrder(this.data.token, this.data.information, this.data.amount, this.data.note, picture).then(function (res) {
            if (res.code == 1) {
                wx.showModal({
                    title: res.message,
                    content: '',
                    showCancel: false,
                    success: function () {
                        wx.switchTab({
                            url: '../pages/index/index'
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFnRDtBQUNoRCxvQ0FBa0M7QUFFbEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFDLEVBQUU7UUFDVixXQUFXLEVBQUMsRUFBRTtRQUNkLE1BQU0sRUFBQyxFQUFFO1FBQ1QsSUFBSSxFQUFDLEVBQUU7UUFDUCxJQUFJLEVBQUMsRUFBRTtRQUNQLEtBQUssRUFBQyxFQUFFO1FBQ1IsT0FBTyxFQUFDLFdBQUk7S0FDYjtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLEtBQUssRUFBQyxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBTCxVQUFNLENBQUs7UUFDVixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sQ0FBSztRQUNWLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVIsVUFBUyxDQUFLO1FBQ1osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBVjtRQUFBLGlCQU1DO1FBTEMsZUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNoQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLE9BQU8sRUFBQyxHQUFHLENBQUMsSUFBSTthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7WUFDcEMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUMvQixPQUFPLFlBQUMsR0FBRztnQkFFVCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFBO2dCQUUzQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUI7b0JBQzFDLElBQUksRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUYsU0FBUyxFQUFULFVBQVUsSUFBUTtRQUNqQixJQUFJLElBQUksR0FBQyxJQUFJLEVBQ1osQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsRUFDakIsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFBLENBQUMsRUFDbkMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUU1QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBRWIsT0FBTyxFQUFFLFVBQUMsSUFBSTtnQkFDYixPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFekIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNiLElBQUksRUFBQyxPQUFPO2lCQUNaLENBQUMsQ0FBQTtZQUVILENBQUM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxHQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQ0QsUUFBUSxFQUFFO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osSUFBRyxDQUFDLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFDLE9BQU8sR0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFJO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO29CQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO1lBRUYsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFQSxLQUFLO1FBQ0gsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ3JCLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNqRixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDUjtRQUVELElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQzlCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFDLFlBQVk7Z0JBQ2xCLElBQUksRUFBQyxNQUFNO2dCQUNYLFFBQVEsRUFBQyxJQUFJO2FBQ2QsQ0FBQyxDQUFBO1lBQ0YsT0FBTztTQUNSO1FBQ0QsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2xHLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUM7Z0JBQ2YsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUMsR0FBRyxDQUFDLE9BQU87b0JBQ3RCLE9BQU8sRUFBQyxFQUFFO29CQUNMLFVBQVUsRUFBQyxLQUFLO29CQUNoQixPQUFPO3dCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsR0FBRyxFQUFFLHNCQUFzQjt5QkFDNUIsQ0FBQyxDQUFBO29CQUNKLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHsgYWRkcmVzcywgYWRkT3JkZXIgfSBmcm9tICcuLi9hcGkvb3JkZXInXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vYXBpL2FqYXgnXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYWRkcmVzczp7fSxcbiAgICBpbmZvcm1hdGlvbjonJyxcbiAgICBhbW91bnQ6JycsXG4gICAgbm90ZTonJyxcbiAgICBwaWNzOltdLFxuICAgIHRva2VuOicnLFxuICAgIGJhc2VVcmw6YmFzZVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRBZGRyZXNzKCk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd0b2tlbicsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LnNldERhdGEhKHtcbiAgICAgICAgICB0b2tlbjpyZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB3cml0ZShlOmFueSl7XG4gICB0aGlzLnNldERhdGEhKHtcbiAgICAgaW5mb3JtYXRpb246ZS5kZXRhaWwudmFsdWVcbiAgIH0pXG4gIH0sXG4gIGFtb3VudChlOmFueSl7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBhbW91bnQ6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgbm90ZVRleHQoZTphbnkpe1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbm90ZTogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuICAvLyDojrflj5blnLDlnYBcbiAgZ2V0QWRkcmVzcygpe1xuICAgIGFkZHJlc3MoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgYWRkcmVzczpyZXMuZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICAvLyDkuIrkvKDlm77niYdcbiAgdXBsb2FkSW1hZ2UoKXtcbiAgXHRjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBwaWNzID0gdGhpcy5kYXRhLnBpY3M7XG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IDMgLSBwaWNzLmxlbmd0aCxcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0Y29uc3QgcGljQWxsID0gcGljcy5jb25jYXQodGVtcEZpbGVQYXRocyk7XG4gICAgICAgIHRoYXQudXBsb2FkaW1nKHtcbiAgICAgICAgICAgIHVybDogdGhhdC5kYXRhLmJhc2VVcmwgKyAnL2FwaS91cGxvYWRfaW1nJyxcbiAgICAgICAgICAgIHBhdGg6IHBpY0FsbFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cblx0dXBsb2FkaW1nKGRhdGE6YW55KXtcblx0XHR2YXIgdGhhdD10aGlzLFxuXHRcdFx0aT1kYXRhLmk/ZGF0YS5pOjAsLy/lvZPliY3kuIrkvKDnmoTlk6rlvKDlm77niYdcblx0XHRcdHN1Y2Nlc3M9ZGF0YS5zdWNjZXNzP2RhdGEuc3VjY2VzczowLC8v5LiK5Lyg5oiQ5Yqf55qE5Liq5pWwXG5cdFx0XHRmYWlsPWRhdGEuZmFpbD9kYXRhLmZhaWw6MDsvL+S4iuS8oOWksei0peeahOS4quaVsFxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHR3eC51cGxvYWRGaWxlKHtcblx0XHRcdHVybDogZGF0YS51cmwsXG5cdFx0XHRmaWxlUGF0aDogZGF0YS5wYXRoW2ldLFxuXHRcdFx0bmFtZTogJ2ltYWdlJywvL+i/memHjOagueaNruiHquW3seeahOWunumZheaDheWGteaUuVxuXHRcdFx0Ly8gZm9ybURhdGE6bnVsbCwvL+i/memHjOaYr+S4iuS8oOWbvueJh+aXtuS4gOi1t+S4iuS8oOeahOaVsOaNrlxuXHRcdFx0c3VjY2VzczogKHJlc3ApID0+IHtcblx0XHRcdFx0c3VjY2VzcysrOy8v5Zu+54mH5LiK5Lyg5oiQ5Yqf77yM5Zu+54mH5LiK5Lyg5oiQ5Yqf55qE5Y+Y6YePKzFcblx0XHRcdFx0Y29uc3QgY29uZiA9IEpTT04ucGFyc2UocmVzcC5kYXRhKTtcblx0XHRcdFx0Y29uc3QgYXJySW1hZ2UgPSBbXTtcblx0XHRcdFx0YXJySW1hZ2UucHVzaChjb25mLmRhdGEpO1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdGNvbnN0IHBpY0FsbHMgPSB0aGF0LmRhdGEucGljcy5jb25jYXQoYXJySW1hZ2UpO1xuXHRcdFx0XHR0aGF0LnNldERhdGEhKHtcblx0XHRcdFx0XHRwaWNzOnBpY0FsbHNcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly/ov5nph4zlj6/og73mnIlCVUfvvIzlpLHotKXkuZ/kvJrmiafooYzov5nph4ws5omA5Lul6L+Z6YeM5bqU6K+l5piv5ZCO5Y+w6L+U5Zue6L+H5p2l55qE54q25oCB56CB5Li65oiQ5Yqf5pe277yM6L+Z6YeM55qEc3VjY2Vzc+aJjSsxXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogKCkgPT4ge1xuXHRcdFx0XHRmYWlsKys7Ly/lm77niYfkuIrkvKDlpLHotKXvvIzlm77niYfkuIrkvKDlpLHotKXnmoTlj5jph48rMVxuXHRcdFx0XHRjb25zb2xlLmxvZygnZmFpbDonK2krXCJmYWlsOlwiK2ZhaWwpO1xuXHRcdFx0fSxcblx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGkpO1xuXHRcdFx0XHRpKys7Ly/ov5nkuKrlm77niYfmiafooYzlrozkuIrkvKDlkI7vvIzlvIDlp4vkuIrkvKDkuIvkuIDlvKBcblx0XHRcdFx0aWYoaT09ZGF0YS5wYXRoLmxlbmd0aCl7ICAgLy/lvZPlm77niYfkvKDlrozml7bvvIzlgZzmraLosIPnlKhcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5omn6KGM5a6M5q+VJyk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aIkOWKn++8micrc3VjY2VzcytcIiDlpLHotKXvvJpcIitmYWlsKTtcblx0XHRcdFx0fWVsc2V7Ly/oi6Xlm77niYfov5jmsqHmnInkvKDlrozvvIzliJnnu6fnu63osIPnlKjlh73mlbBcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhpKTtcblx0XHRcdFx0XHRkYXRhLmk9aTtcblx0XHRcdFx0XHRkYXRhLnN1Y2Nlc3M9c3VjY2Vzcztcblx0XHRcdFx0XHRkYXRhLmZhaWw9ZmFpbDtcblx0XHRcdFx0XHR0aGF0LnVwbG9hZGltZyhkYXRhKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG4gIC8vIOmihOiniOWbvueJh1xuICB5dWxhbigpe1xuICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50OiB0aGlzLmRhdGEucGljcywgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgdXJsczogdGhpcy5kYXRhLnBpY3MgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgIH0pXG4gIH0sXG5cbiAgLy8g5o+Q5Lqk6K6i5Y2VXG4gIHRpamlhbygpe1xuICAgIGxldCBwaWN0dXJlID0gJyc7XG4gICAgdGhpcy5kYXRhLnBpY3MubWFwKChyZXMpID0+e1xuICAgICAgcGljdHVyZSArPSByZXMgKyAnLCc7XG4gICAgfSk7XG5cdFx0cGljdHVyZSA9IHBpY3R1cmUuc3Vic3RyaW5nKDAscGljdHVyZS5sZW5ndGggLSAxKTtcbiAgICBpZiAodGhpcy5kYXRhLmluZm9ybWF0aW9uID09ICcnIHx8IHRoaXMuZGF0YS5hbW91bnQgPT0gJycgfHwgdGhpcy5kYXRhLm5vdGUgPT0gJycpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5b+F5aGr5L+h5oGvJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVnID0gL15bMS05XVxcZCokLztcbiAgICBpZiAoIXJlZy50ZXN0KHRoaXMuZGF0YS5hbW91bnQpKXtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOifor7fovpPlhaXmraPnoa7nmoTkuIvljZXmlbDph48nLFxuICAgICAgICBpY29uOidub25lJyxcbiAgICAgICAgZHVyYXRpb246MjAwMFxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkT3JkZXIodGhpcy5kYXRhLnRva2VuLCB0aGlzLmRhdGEuaW5mb3JtYXRpb24sIHRoaXMuZGF0YS5hbW91bnQsIHRoaXMuZGF0YS5ub3RlLCBwaWN0dXJlKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZihyZXMuY29kZSA9PSAxKXtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTpyZXMubWVzc2FnZSxcblx0XHRcdFx0XHRjb250ZW50OicnLFxuICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXG4gICAgICAgICAgc3VjY2Vzcygpe1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiAnLi4vcGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuIl19