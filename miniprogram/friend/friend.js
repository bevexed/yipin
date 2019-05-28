"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
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
                    url: 'http://47.97.251.196/api/upload_img',
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
                    url: 'http://47.97.251.196/api/upload_img',
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
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLElBQUksQ0FBQztJQUVKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxHQUFHO1FBRVosS0FBSyxFQUFFLEVBQUU7UUFFVCxXQUFXLEVBQUMsRUFBRTtRQUVkLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBRTdCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7S0FDcEI7SUFFRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFVB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QVEsVUFBQSxFQUFFLGdCQUFnQixrQkFBQSxFQUFFLGdCQUFnQixrQkFBQTthQUNsRixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzdHLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLElBQUksRUFBRSxJQUFJO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLElBQUksRUFBRSxNQUFNO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1A7U0FDRDthQUFNO1lBQ04sSUFBSSxHQUFHO2dCQUNOLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLFFBQVEsVUFBQTthQUNwQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkQsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLE1BQU07aUJBQ1osQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUDtTQUNEO1FBRUQsa0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3BCLFVBQUMsR0FBUTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYXJ0bmV0LCByZXFBZGRyZXNzTGlzdCwgcmVxUGFydG5lcn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblxyXG5cdGRhdGE6IHtcclxuXHRcdGN1cnJlbnQ6ICcxJyxcclxuXHJcblx0XHR0b2tlbjogJycsXHJcblxyXG5cdFx0YWRkcmVzc0xpc3Q6W10sXHJcblxyXG5cdFx0cmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXHJcblxyXG5cdFx0bmFtZTogJycsXHJcblx0XHRwaG9uZTogJycsXHJcblx0XHRhZGRyZXNzOiAnJyxcclxuXHRcdGlkZW50aXR5OiAnJyxcclxuXHRcdGlkX2NhcmQ6ICcnLFxyXG5cdFx0aWRfY2FyZF9wb3NpdGl2ZTogJycsXHJcblx0XHRpZF9jYXJkX2NvbnRyYXJ5OiAnJyxcclxuXHR9LFxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyDor7vlj5Z0b2tlblxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICd0b2tlbicsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL1xyXG5cdFx0dGhpcy5nZXRBZGRyZXNzKClcclxuXHR9LFxyXG5cclxuXHRiaW5kUmVnaW9uQ2hhbmdlKGU6YW55KSB7XHJcblx0XHRjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdHJlZ2lvbjogZS5kZXRhaWwudmFsdWVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Z2V0QWRkcmVzcygpIHtcclxuXHRcdHJlcUFkZHJlc3NMaXN0KCkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflnLDlnYAnLHJlcyk7XHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0YWRkcmVzc0xpc3Q6IHJlcy5kYXRhXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH0sXHJcblxyXG5cclxuXHRoYW5kbGVDaGFuZ2Uoe2RldGFpbH06IGFueSkge1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdGN1cnJlbnQ6IGRldGFpbC5rZXlcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGlucHV0KGU6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFtsYWJlbF06IHZhbHVlXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xyXG5cdH0sXHJcblxyXG5cdGNob29zZVRvcCgpIHtcclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHR3eC5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogdGVtcEZpbGVQYXRoc1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdHVybDogJ2h0dHA6Ly80Ny45Ny4yNTEuMTk2L2FwaS91cGxvYWRfaW1nJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRcdC8vIGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXHJcblx0XHRcdFx0XHQvLyB9LFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuY29kZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IGRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRjaG9vc2VCb3R0b20oKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRjb3VudDogMSxcclxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiB0ZW1wRmlsZVBhdGhzXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHd4LnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0dXJsOiAnaHR0cDovLzQ3Ljk3LjI1MS4xOTYvYXBpL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcblx0XHRcdFx0XHRuYW1lOiAnaW1hZ2UnLFxyXG5cdFx0XHRcdFx0Ly8gZm9ybURhdGE6IHtcclxuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcclxuXHRcdFx0XHRcdC8vIH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRnZXRQYXJ0bmVyKCkge1xyXG5cclxuXHRcdGxldCB7dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLCByZWdpb24sIGlkZW50aXR5LCBpZF9jYXJkLCBpZF9jYXJkX3Bvc2l0aXZlLCBpZF9jYXJkX2NvbnRyYXJ5LCBjdXJyZW50fSA9IHRoaXMuZGF0YTtcclxuXHJcblx0XHRpZGVudGl0eSA9IGN1cnJlbnQ7XHJcblx0XHRhZGRyZXNzID0gcmVnaW9uLmpvaW4oJycpO1xyXG5cclxuXHRcdGxldCBkYXRhOiBQYXJ0bmV0O1xyXG5cdFx0aWYgKGlkZW50aXR5ID09PSAnMScpIHtcclxuXHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHR0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsIGlkX2NhcmQsIGlkZW50aXR5LCBpZF9jYXJkX3Bvc2l0aXZlLCBpZF9jYXJkX2NvbnRyYXJ5XHJcblx0XHRcdH07XHJcblx0XHRcdGlmICghbmFtZSB8fCAhdG9rZW4gfHwgIWlkX2NhcmRfcG9zaXRpdmUgfHwgIWlkX2NhcmRfY29udHJhcnkgfHwgIWlkX2NhcmQgfHwgIXBob25lIHx8ICFhZGRyZXNzIHx8ICFpZGVudGl0eSkge1xyXG5cdFx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHR0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsaWRlbnRpdHlcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKCFuYW1lIHx8ICF0b2tlbiB8fCAhcGhvbmUgfHwgIWFkZHJlc3MgfHwgIWlkZW50aXR5KSB7XHJcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2V5aGr5YaZ5piv5ZCm5a6M5pW0JyxcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmVxUGFydG5lcihkYXRhKS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG59KTtcclxuIl19