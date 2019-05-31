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
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFFSixJQUFJLEVBQUU7UUFDTCxPQUFPLEVBQUUsR0FBRztRQUVaLEtBQUssRUFBRSxFQUFFO1FBRVQsV0FBVyxFQUFDLEVBQUU7UUFFZCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUU3QixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO0tBQ3BCO0lBRUQsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQztRQUdILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCLFVBQWlCLENBQUs7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNI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dCwgcmVxUGFydG5lcn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5pbXBvcnQge2Jhc2V9IGZyb20gXCIuLi9hcGkvYWpheFwiO1xyXG5cclxuUGFnZSh7XHJcblxyXG5cdGRhdGE6IHtcclxuXHRcdGN1cnJlbnQ6ICcxJyxcclxuXHJcblx0XHR0b2tlbjogJycsXHJcblxyXG5cdFx0YWRkcmVzc0xpc3Q6W10sXHJcblxyXG5cdFx0cmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXHJcblxyXG5cdFx0bmFtZTogJycsXHJcblx0XHRwaG9uZTogJycsXHJcblx0XHRhZGRyZXNzOiAnJyxcclxuXHRcdGlkZW50aXR5OiAnJyxcclxuXHRcdGlkX2NhcmQ6ICcnLFxyXG5cdFx0aWRfY2FyZF9wb3NpdGl2ZTogJycsXHJcblx0XHRpZF9jYXJkX2NvbnRyYXJ5OiAnJyxcclxuXHR9LFxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyDor7vlj5Z0b2tlblxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICd0b2tlbicsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL1xyXG5cdFx0dGhpcy5nZXRBZGRyZXNzKClcclxuXHR9LFxyXG5cclxuXHRiaW5kUmVnaW9uQ2hhbmdlKGU6YW55KSB7XHJcblx0XHRjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdHJlZ2lvbjogZS5kZXRhaWwudmFsdWVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Z2V0QWRkcmVzcygpIHtcclxuXHRcdHJlcUFkZHJlc3NMaXN0KCkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflnLDlnYAnLHJlcyk7XHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0YWRkcmVzc0xpc3Q6IHJlcy5kYXRhXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH0sXHJcblxyXG5cclxuXHRoYW5kbGVDaGFuZ2Uoe2RldGFpbH06IGFueSkge1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdGN1cnJlbnQ6IGRldGFpbC5rZXlcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGlucHV0KGU6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFtsYWJlbF06IHZhbHVlXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xyXG5cdH0sXHJcblxyXG5cdGNob29zZVRvcCgpIHtcclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHR3eC5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogdGVtcEZpbGVQYXRoc1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdHVybDogYmFzZSsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXHJcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xyXG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xyXG5cdFx0XHRcdFx0Ly8gfSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiBkYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Y2hvb3NlQm90dG9tKCkge1xyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmNob29zZUltYWdlKHtcclxuXHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdHVybDogYmFzZSsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXHJcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xyXG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xyXG5cdFx0XHRcdFx0Ly8gfSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiBkYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdGdldFBhcnRuZXIoKSB7XHJcblxyXG5cdFx0bGV0IHt0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsIHJlZ2lvbiwgaWRlbnRpdHksIGlkX2NhcmQsIGlkX2NhcmRfcG9zaXRpdmUsIGlkX2NhcmRfY29udHJhcnksIGN1cnJlbnR9ID0gdGhpcy5kYXRhO1xyXG5cclxuXHRcdGlkZW50aXR5ID0gY3VycmVudDtcclxuXHRcdGFkZHJlc3MgPSByZWdpb24uam9pbignJyk7XHJcblxyXG5cdFx0bGV0IGRhdGE6IFBhcnRuZXQ7XHJcblx0XHRpZiAoaWRlbnRpdHkgPT09ICcxJykge1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdHRva2VuLCBwaG9uZSwgbmFtZSwgYWRkcmVzcywgaWRfY2FyZCwgaWRlbnRpdHksIGlkX2NhcmRfcG9zaXRpdmUsIGlkX2NhcmRfY29udHJhcnlcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKCFuYW1lIHx8ICF0b2tlbiB8fCAhaWRfY2FyZF9wb3NpdGl2ZSB8fCAhaWRfY2FyZF9jb250cmFyeSB8fCAhaWRfY2FyZCB8fCAhcGhvbmUgfHwgIWFkZHJlc3MgfHwgIWlkZW50aXR5KSB7XHJcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2V5aGr5YaZ5piv5ZCm5a6M5pW0JyxcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdHRva2VuLCBwaG9uZSwgbmFtZSwgYWRkcmVzcyxpZGVudGl0eVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoIW5hbWUgfHwgIXRva2VuIHx8ICFwaG9uZSB8fCAhYWRkcmVzcyB8fCAhaWRlbnRpdHkpIHtcclxuXHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XooajljZXloavlhpnmmK/lkKblrozmlbQnLFxyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXFQYXJ0bmVyKGRhdGEpLnRoZW4oXHJcblx0XHRcdChyZXM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcbn0pO1xyXG4iXX0=