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
        if (this.data.information == '' || this.data.amount == '') {
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
                console.log(res);
                console.log(res.data);
                wx.navigateTo({
                    url: '../post/post?id=' + res.data
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUE4QztBQUM5QyxvQ0FBZ0M7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFDLEVBQUU7UUFDVixXQUFXLEVBQUMsRUFBRTtRQUNkLE1BQU0sRUFBQyxFQUFFO1FBQ1QsSUFBSSxFQUFDLEVBQUU7UUFDUCxJQUFJLEVBQUMsRUFBRTtRQUNQLEtBQUssRUFBQyxFQUFFO1FBQ1IsT0FBTyxFQUFDLFdBQUk7S0FDYjtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLEtBQUssRUFBQyxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBTCxVQUFNLENBQUs7UUFDVixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sQ0FBSztRQUNWLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVIsVUFBUyxDQUFLO1FBQ1osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJ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QUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUMsWUFBWTtnQkFDbEIsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsUUFBUSxFQUFDLElBQUk7YUFDZCxDQUFDLENBQUE7WUFDRixPQUFPO1NBQ1I7UUFDRCxnQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEcsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQztnQkFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ2IsR0FBRyxFQUFFLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxJQUFJO2lCQUNsQyxDQUFDLENBQUE7YUFVQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHthZGRPcmRlciwgYWRkcmVzc30gZnJvbSAnLi4vYXBpL29yZGVyJ1xyXG5pbXBvcnQge2Jhc2V9IGZyb20gJy4uL2FwaS9hamF4J1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgYWRkcmVzczp7fSxcclxuICAgIGluZm9ybWF0aW9uOicnLFxyXG4gICAgYW1vdW50OicnLFxyXG4gICAgbm90ZTonJyxcclxuICAgIHBpY3M6W10sXHJcbiAgICB0b2tlbjonJyxcclxuICAgIGJhc2VVcmw6YmFzZVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5nZXRBZGRyZXNzKCk7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICB0b2tlbjpyZXMuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgd3JpdGUoZTphbnkpe1xyXG4gICB0aGlzLnNldERhdGEhKHtcclxuICAgICBpbmZvcm1hdGlvbjplLmRldGFpbC52YWx1ZVxyXG4gICB9KVxyXG4gIH0sXHJcbiAgYW1vdW50KGU6YW55KXtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBhbW91bnQ6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgbm90ZVRleHQoZTphbnkpe1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIG5vdGU6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W5Zyw5Z2AXHJcbiAgZ2V0QWRkcmVzcygpe1xyXG4gICAgYWRkcmVzcygpLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgYWRkcmVzczpyZXMuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOS4iuS8oOWbvueJh1xyXG4gIHVwbG9hZEltYWdlKCl7XHJcbiAgXHRjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIGNvbnN0IHBpY3MgPSB0aGlzLmRhdGEucGljcztcclxuICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgY291bnQ6IDMgLSBwaWNzLmxlbmd0aCxcclxuICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG4gICAgICAgIGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0XHRjb25zdCBwaWNBbGwgPSBwaWNzLmNvbmNhdCh0ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICB0aGF0LnVwbG9hZGltZyh7XHJcbiAgICAgICAgICAgIHVybDogdGhhdC5kYXRhLmJhc2VVcmwgKyAnL2FwaS91cGxvYWRfaW1nJyxcclxuICAgICAgICAgICAgcGF0aDogcGljQWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHR1cGxvYWRpbWcoZGF0YTphbnkpe1xyXG5cdFx0dmFyIHRoYXQ9dGhpcyxcclxuXHRcdFx0aT1kYXRhLmk/ZGF0YS5pOjAsLy/lvZPliY3kuIrkvKDnmoTlk6rlvKDlm77niYdcclxuXHRcdFx0c3VjY2Vzcz1kYXRhLnN1Y2Nlc3M/ZGF0YS5zdWNjZXNzOjAsLy/kuIrkvKDmiJDlip/nmoTkuKrmlbBcclxuXHRcdFx0ZmFpbD1kYXRhLmZhaWw/ZGF0YS5mYWlsOjA7Ly/kuIrkvKDlpLHotKXnmoTkuKrmlbBcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHd4LnVwbG9hZEZpbGUoe1xyXG5cdFx0XHR1cmw6IGRhdGEudXJsLFxyXG5cdFx0XHRmaWxlUGF0aDogZGF0YS5wYXRoW2ldLFxyXG5cdFx0XHRuYW1lOiAnaW1hZ2UnLC8v6L+Z6YeM5qC55o2u6Ieq5bex55qE5a6e6ZmF5oOF5Ya15pS5XHJcblx0XHRcdC8vIGZvcm1EYXRhOm51bGwsLy/ov5nph4zmmK/kuIrkvKDlm77niYfml7bkuIDotbfkuIrkvKDnmoTmlbDmja5cclxuXHRcdFx0c3VjY2VzczogKHJlc3ApID0+IHtcclxuXHRcdFx0XHRzdWNjZXNzKys7Ly/lm77niYfkuIrkvKDmiJDlip/vvIzlm77niYfkuIrkvKDmiJDlip/nmoTlj5jph48rMVxyXG5cdFx0XHRcdGNvbnN0IGNvbmYgPSBKU09OLnBhcnNlKHJlc3AuZGF0YSk7XHJcblx0XHRcdFx0Y29uc3QgYXJySW1hZ2UgPSBbXTtcclxuXHRcdFx0XHRhcnJJbWFnZS5wdXNoKGNvbmYuZGF0YSk7XHJcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdGNvbnN0IHBpY0FsbHMgPSB0aGF0LmRhdGEucGljcy5jb25jYXQoYXJySW1hZ2UpO1xyXG5cdFx0XHRcdHRoYXQuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0cGljczpwaWNBbGxzXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvL+i/memHjOWPr+iDveaciUJVR++8jOWksei0peS5n+S8muaJp+ihjOi/memHjCzmiYDku6Xov5nph4zlupTor6XmmK/lkI7lj7Dov5Tlm57ov4fmnaXnmoTnirbmgIHnoIHkuLrmiJDlip/ml7bvvIzov5nph4znmoRzdWNjZXNz5omNKzFcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogKCkgPT4ge1xyXG5cdFx0XHRcdGZhaWwrKzsvL+WbvueJh+S4iuS8oOWksei0pe+8jOWbvueJh+S4iuS8oOWksei0peeahOWPmOmHjysxXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWw6JytpK1wiZmFpbDpcIitmYWlsKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpKTtcclxuXHRcdFx0XHRpKys7Ly/ov5nkuKrlm77niYfmiafooYzlrozkuIrkvKDlkI7vvIzlvIDlp4vkuIrkvKDkuIvkuIDlvKBcclxuXHRcdFx0XHRpZihpPT1kYXRhLnBhdGgubGVuZ3RoKXsgICAvL+W9k+WbvueJh+S8oOWujOaXtu+8jOWBnOatouiwg+eUqFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aJp+ihjOWujOavlScpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aIkOWKn++8micrc3VjY2VzcytcIiDlpLHotKXvvJpcIitmYWlsKTtcclxuXHRcdFx0XHR9ZWxzZXsvL+iLpeWbvueJh+i/mOayoeacieS8oOWujO+8jOWImee7p+e7reiwg+eUqOWHveaVsFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaSk7XHJcblx0XHRcdFx0XHRkYXRhLmk9aTtcclxuXHRcdFx0XHRcdGRhdGEuc3VjY2Vzcz1zdWNjZXNzO1xyXG5cdFx0XHRcdFx0ZGF0YS5mYWlsPWZhaWw7XHJcblx0XHRcdFx0XHR0aGF0LnVwbG9hZGltZyhkYXRhKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG4gIC8vIOmihOiniOWbvueJh1xyXG4gIHl1bGFuKCl7XHJcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHQvL0B0cy1pZ25vcmVcclxuICAgICAgY3VycmVudDogdGhpcy5kYXRhLnBpY3MsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJsczogdGhpcy5kYXRhLnBpY3MgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvLyDmj5DkuqTorqLljZVcclxuICB0aWppYW8oKXtcclxuICAgIGxldCBwaWN0dXJlID0gJyc7XHJcbiAgICB0aGlzLmRhdGEucGljcy5tYXAoKHJlcykgPT57XHJcbiAgICAgIHBpY3R1cmUgKz0gcmVzICsgJywnO1xyXG4gICAgfSk7XHJcblx0XHRwaWN0dXJlID0gcGljdHVyZS5zdWJzdHJpbmcoMCxwaWN0dXJlLmxlbmd0aCAtIDEpO1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5pbmZvcm1hdGlvbiA9PSAnJyB8fCB0aGlzLmRhdGEuYW1vdW50ID09ICcnKSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfor7fovpPlhaXlv4Xloavkv6Hmga8nLFxyXG4gICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlZyA9IC9eWzEtOV1cXGQqJC87XHJcbiAgICBpZiAoIXJlZy50ZXN0KHRoaXMuZGF0YS5hbW91bnQpKXtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTon6K+36L6T5YWl5q2j56Gu55qE5LiL5Y2V5pWw6YePJyxcclxuICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICBkdXJhdGlvbjoyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGFkZE9yZGVyKHRoaXMuZGF0YS50b2tlbiwgdGhpcy5kYXRhLmluZm9ybWF0aW9uLCB0aGlzLmRhdGEuYW1vdW50LCB0aGlzLmRhdGEubm90ZSwgcGljdHVyZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZihyZXMuY29kZSA9PSAxKXtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblxyXG5cdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vcG9zdC9wb3N0P2lkPScgKyByZXMuZGF0YVxyXG5cdFx0XHRcdH0pXHJcblxyXG4gICAgICAgIC8vIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgLy8gICB0aXRsZTpyZXMubWVzc2FnZSxcclxuXHRcdFx0XHQvLyBcdGNvbnRlbnQ6JycsXHJcbiAgICAgICAgLy8gICBzaG93Q2FuY2VsOmZhbHNlLFxyXG4gICAgICAgIC8vICAgc3VjY2Vzcygpe1xyXG5cdFx0XHRcdC8vXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==