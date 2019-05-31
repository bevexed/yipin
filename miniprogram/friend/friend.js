"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
var ajax_1 = require("../api/ajax");
Page({
    data: {
        current: '1',
        token: '',
        addressList: [],
        region: ['广东省', '广州市', '海珠区'],
        name: '',
        phone: '',
        address: '',
        identity: '',
        id_card: '',
        id_card_positive: '',
        id_card_contrary: '',
        img: ''
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                console.log(res);
                _this.setData({
                    token: res.data
                });
            }
        });
        this.getAddress();
        this.getImg();
    },
    getImg: function () {
        var _this_1 = this;
        index_1.reqActivityShow(2).then(function (res) {
            if (res.code === 1) {
                _this_1.setData({
                    img: res.data
                });
            }
        });
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            region: e.detail.value
        });
    },
    getAddress: function () {
        var _this_1 = this;
        index_1.reqAddressList().then(function (res) {
            if (res.code === 1) {
                console.log('地址', res);
                _this_1.setData({
                    addressList: res.data
                });
            }
        });
    },
    handleChange: function (_a) {
        var detail = _a.detail;
        this.setData({
            current: detail.key
        });
    },
    input: function (e) {
        var _a;
        console.log(e);
        var label = e.target.dataset.type;
        var value = e.detail.detail.value;
        console.log(value);
        this.setData((_a = {},
            _a[label] = value,
            _a));
        console.log(label, value);
    },
    chooseTop: function () {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                console.log(res);
                var tempFilePaths = res.tempFilePaths;
                _this.setData({
                    id_card_positive: tempFilePaths
                });
                wx.uploadFile({
                    url: ajax_1.base + '/api/upload_img',
                    filePath: tempFilePaths[0],
                    name: 'image',
                    success: function (res) {
                        var data = JSON.parse(res.data);
                        console.log(data);
                        if (data.code === 1) {
                            _this.setData({
                                id_card_positive: data.data
                            });
                        }
                    }
                });
                console.log(tempFilePaths);
            }
        });
    },
    chooseBottom: function () {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var tempFilePaths = res.tempFilePaths;
                _this.setData({
                    id_card_contrary: tempFilePaths
                });
                wx.uploadFile({
                    url: ajax_1.base + '/api/upload_img',
                    filePath: tempFilePaths[0],
                    name: 'image',
                    success: function (res) {
                        var data = JSON.parse(res.data);
                        console.log(data);
                        if (data.code === 1) {
                            _this.setData({
                                id_card_contrary: data.data
                            });
                        }
                    }
                });
                console.log(tempFilePaths);
            }
        });
    },
    getPartner: function () {
        var _a = this.data, token = _a.token, phone = _a.phone, name = _a.name, address = _a.address, region = _a.region, identity = _a.identity, id_card = _a.id_card, id_card_positive = _a.id_card_positive, id_card_contrary = _a.id_card_contrary, current = _a.current;
        identity = current;
        address = region.join('');
        var data;
        if (identity === '1') {
            data = {
                token: token, phone: phone, name: name, address: address, id_card: id_card, identity: identity, id_card_positive: id_card_positive, id_card_contrary: id_card_contrary
            };
            if (!name || !token || !id_card_positive || !id_card_contrary || !id_card || !phone || !address || !identity) {
                wx.showToast({
                    title: '请检查表单填写是否完整',
                    mask: true,
                    duration: 2000,
                    icon: "none"
                });
                return;
            }
        }
        else {
            data = {
                token: token, phone: phone, name: name, address: address, identity: identity
            };
            if (!name || !token || !phone || !address || !identity) {
                wx.showToast({
                    title: '请检查表单填写是否完整',
                    mask: true,
                    duration: 2000,
                    icon: "none"
                });
                return;
            }
        }
        index_1.reqPartner(data).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.showToast({
                    title: '提交完成',
                    mask: true,
                    duration: 3000,
                    success: function () {
                        setTimeout(function () {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 3000);
                    }
                });
            }
            else {
                wx.showToast({
                    mask: true,
                    duration: 3000,
                    title: res['0']
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtGO0FBQ2xGLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFFSixJQUFJLEVBQUU7UUFDTCxPQUFPLEVBQUUsR0FBRztRQUVaLEtBQUssRUFBRSxFQUFFO1FBRVQsV0FBVyxFQUFDLEVBQUU7UUFFZCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUU3QixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1FBRXBCLEdBQUcsRUFBQyxFQUFFO0tBQ047SUFFRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxNQUFNLEVBQU47UUFBQSxtQkFVQztRQVRBLHVCQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN0QixVQUFDLEdBQVE7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFJLENBQUMsT0FB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RUFBRSxJQUFJO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLElBQUksRUFBRSxNQUFNO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1A7U0FDRDtRQUVELGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwQixVQUFDLEdBQVE7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDZixLQUFLLEVBQUUsQ0FBQzs2QkFDUixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0Y7aUJBQU07Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsSUFBSTtvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDZixDQUFDLENBQUE7YUFDRjtRQUNGLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFydG5ldCwgcmVxQWN0aXZpdHlTaG93LCByZXFBZGRyZXNzTGlzdCwgcmVxUGFydG5lcn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuaW1wb3J0IHtiYXNlfSBmcm9tIFwiLi4vYXBpL2FqYXhcIjtcblxuUGFnZSh7XG5cblx0ZGF0YToge1xuXHRcdGN1cnJlbnQ6ICcxJyxcblxuXHRcdHRva2VuOiAnJyxcblxuXHRcdGFkZHJlc3NMaXN0OltdLFxuXG5cdFx0cmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXG5cblx0XHRuYW1lOiAnJyxcblx0XHRwaG9uZTogJycsXG5cdFx0YWRkcmVzczogJycsXG5cdFx0aWRlbnRpdHk6ICcnLFxuXHRcdGlkX2NhcmQ6ICcnLFxuXHRcdGlkX2NhcmRfcG9zaXRpdmU6ICcnLFxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxuXG5cdFx0aW1nOicnXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdC8vIOivu+WPlnRva2VuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vXG5cdFx0dGhpcy5nZXRBZGRyZXNzKClcblx0XHR0aGlzLmdldEltZygpXG5cdH0sXG5cblx0Z2V0SW1nKCkge1xuXHRcdHJlcUFjdGl2aXR5U2hvdygyKS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0aW1nOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cblx0YmluZFJlZ2lvbkNoYW5nZShlOmFueSkge1xuXHRcdGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRyZWdpb246IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSlcblx0fSxcblxuXHRnZXRBZGRyZXNzKCkge1xuXHRcdHJlcUFkZHJlc3NMaXN0KCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflnLDlnYAnLHJlcyk7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRhZGRyZXNzTGlzdDogcmVzLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cblx0aGFuZGxlQ2hhbmdlKHtkZXRhaWx9OiBhbnkpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGN1cnJlbnQ6IGRldGFpbC5rZXlcblx0XHR9KTtcblx0fSxcblxuXHRpbnB1dChlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcblx0fSxcblxuXHRjaG9vc2VUb3AoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHR1cmw6IGJhc2UrICcvYXBpL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXG5cdFx0XHRcdFx0Ly8gZm9ybURhdGE6IHtcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXG5cdFx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cblx0Y2hvb3NlQm90dG9tKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0d3gudXBsb2FkRmlsZSh7XG5cdFx0XHRcdFx0dXJsOiBiYXNlKyAnL2FwaS91cGxvYWRfaW1nJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcblx0XHRcdFx0XHRuYW1lOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdC8vIGZvcm1EYXRhOiB7XG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xuXHRcdFx0XHRcdC8vIH0sXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdFx0aWYgKGRhdGEuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogZGF0YS5kYXRhXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0Z2V0UGFydG5lcigpIHtcblxuXHRcdGxldCB7dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLCByZWdpb24sIGlkZW50aXR5LCBpZF9jYXJkLCBpZF9jYXJkX3Bvc2l0aXZlLCBpZF9jYXJkX2NvbnRyYXJ5LCBjdXJyZW50fSA9IHRoaXMuZGF0YTtcblxuXHRcdGlkZW50aXR5ID0gY3VycmVudDtcblx0XHRhZGRyZXNzID0gcmVnaW9uLmpvaW4oJycpO1xuXG5cdFx0bGV0IGRhdGE6IFBhcnRuZXQ7XG5cdFx0aWYgKGlkZW50aXR5ID09PSAnMScpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHRva2VuLCBwaG9uZSwgbmFtZSwgYWRkcmVzcywgaWRfY2FyZCwgaWRlbnRpdHksIGlkX2NhcmRfcG9zaXRpdmUsIGlkX2NhcmRfY29udHJhcnlcblx0XHRcdH07XG5cdFx0XHRpZiAoIW5hbWUgfHwgIXRva2VuIHx8ICFpZF9jYXJkX3Bvc2l0aXZlIHx8ICFpZF9jYXJkX2NvbnRyYXJ5IHx8ICFpZF9jYXJkIHx8ICFwaG9uZSB8fCAhYWRkcmVzcyB8fCAhaWRlbnRpdHkpIHtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsaWRlbnRpdHlcblx0XHRcdH07XG5cdFx0XHRpZiAoIW5hbWUgfHwgIXRva2VuIHx8ICFwaG9uZSB8fCAhYWRkcmVzcyB8fCAhaWRlbnRpdHkpIHtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJlcVBhcnRuZXIoZGF0YSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DkuqTlrozmiJAnLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbHRhOiAxXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSwgMzAwMClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzWycwJ11cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KTtcbiJdfQ==