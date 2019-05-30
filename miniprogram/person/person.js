"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
var ajax_1 = require("../api/ajax");
Page({
    data: {
        token: '',
        name: '',
        id_card: '',
        id_card_positive: '',
        id_card_contrary: '',
        identity: '',
        disabled: false,
        state: ['供货商', '加盟店', '区域代理']
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                console.log(res);
                _this.setData({
                    token: res.data
                }, function () { return _this.getInfor(); });
            }
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
        if (this.data.disabled) {
            return;
        }
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
    yulan: function () {
        wx.previewImage({
            current: this.data.id_card_positive,
            urls: [this.data.id_card_positive]
        });
    },
    yulanF: function () {
        wx.previewImage({
            current: this.data.id_card_contrary,
            urls: [this.data.id_card_contrary]
        });
    },
    chooseBottom: function () {
        if (this.data.disabled) {
            return;
        }
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
    doUpdateBasicInformation: function () {
        var _a = this.data, name = _a.name, token = _a.token, id_card = _a.id_card, id_card_contrary = _a.id_card_contrary, id_card_positive = _a.id_card_positive;
        if (!name || !token || !id_card_positive || !id_card_contrary || !id_card) {
            wx.showToast({
                title: '请检查表单填写是否完整',
                mask: true,
                duration: 2000,
                icon: "none"
            });
            return;
        }
        var data = { name: name, token: token, id_card: id_card, id_card_contrary: id_card_contrary, id_card_positive: id_card_positive };
        index_1.reqUpdateBasicInformation(data).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.showToast({
                    title: '修改成功',
                    mask: true,
                    duration: 2000,
                    success: function () {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    getInfor: function () {
        var _this_1 = this;
        wx.showLoading({
            title: '',
            mask: true
        });
        var _a = this.data, token = _a.token, state = _a.state;
        index_1.reqUserInformation({ token: token }).then(function (res) {
            if (res.code === 1) {
                wx.hideLoading();
                var _a = res.data, name_1 = _a.name, id_card = _a.id_card, id_card_contrary = _a.id_card_contrary, id_card_positive = _a.id_card_positive, identity = _a.identity;
                console.log(name_1, id_card, id_card_contrary, id_card_positive);
                if (name_1 || id_card || id_card_contrary || id_card_positive) {
                    _this_1.setData({
                        disabled: true,
                        name: name_1,
                        id_card: id_card,
                        id_card_contrary: id_card_contrary,
                        id_card_positive: id_card_positive,
                        identity: state[identity]
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7UUFFcEIsUUFBUSxFQUFDLEVBQUU7UUFDWCxRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0tBRTdCO0lBQ0QsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2QsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFoQixDQUFnQixDQUN6QixDQUFBO1lBQ0YsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLEVBQUwsVUFBTSxDQUFNOztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFD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QyxRQUFRLENBQUM7cUJBQzFCLENBQUMsQ0FBQTtpQkFDRjthQUVEO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFVcGRhdGVCYXNpY0luZm9ybWF0aW9uLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcbmltcG9ydCB7YmFzZX0gZnJvbSBcIi4uL2FwaS9hamF4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0dG9rZW46ICcnLFxuXHRcdG5hbWU6ICcnLFxuXHRcdGlkX2NhcmQ6ICcnLFxuXHRcdGlkX2NhcmRfcG9zaXRpdmU6ICcnLFxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxuXG5cdFx0aWRlbnRpdHk6JycsXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdHN0YXRlOiBbJ+S+m+i0p+WVhicsICfliqDnm5/lupcnLCAn5Yy65Z+f5Luj55CGJ11cblx0XHQvLyAx77ya5L6b6LSn5ZWG77ybMu+8muWKoOebn+W6l++8mzPvvJrljLrln5/ku6PnkIZcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdC8vIOivu+WPlnRva2VuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0XHR9LCAoKSA9PiBfdGhpcy5nZXRJbmZvcigpXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRpbnB1dChlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcblx0fSxcblxuXHRjaG9vc2VUb3AoKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0d3gudXBsb2FkRmlsZSh7XG5cdFx0XHRcdFx0dXJsOiBiYXNlICsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcblx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuICB5dWxhbigpe1xuICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50OiB0aGlzLmRhdGEuaWRfY2FyZF9wb3NpdGl2ZSwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgdXJsczogW3RoaXMuZGF0YS5pZF9jYXJkX3Bvc2l0aXZlXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgfSlcbiAgfSxcbiAgeXVsYW5GKCl7XG4gICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgIGN1cnJlbnQ6IHRoaXMuZGF0YS5pZF9jYXJkX2NvbnRyYXJ5LCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICB1cmxzOiBbdGhpcy5kYXRhLmlkX2NhcmRfY29udHJhcnldIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICB9KVxuICB9LFxuXG5cdGNob29zZUJvdHRvbSgpIHtcblx0XHRpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0d3gudXBsb2FkRmlsZSh7XG5cdFx0XHRcdFx0dXJsOiBiYXNlKyAnL2FwaS91cGxvYWRfaW1nJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcblx0XHRcdFx0XHRuYW1lOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdC8vIGZvcm1EYXRhOiB7XG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xuXHRcdFx0XHRcdC8vIH0sXG5cdFx0XHRcdFx0c3VjY2VzcyAocmVzKXtcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdFx0aWYgKGRhdGEuY29kZSA9PT0xKXtcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IGRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRkb1VwZGF0ZUJhc2ljSW5mb3JtYXRpb24oKSB7XG5cdFx0Y29uc3Qge25hbWUsdG9rZW4saWRfY2FyZCxpZF9jYXJkX2NvbnRyYXJ5LGlkX2NhcmRfcG9zaXRpdmV9ID0gdGhpcy5kYXRhO1xuXHRcdGlmICghbmFtZSB8fCAhdG9rZW4gfHwgIWlkX2NhcmRfcG9zaXRpdmUgfHwgIWlkX2NhcmRfY29udHJhcnkgfHwgIWlkX2NhcmQpIHtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2V5aGr5YaZ5piv5ZCm5a6M5pW0Jyxcblx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZGF0YSA9IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfTtcblx0XHRyZXFVcGRhdGVCYXNpY0luZm9ybWF0aW9uKGRhdGEpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfkv67mlLnmiJDlip8nLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdFx0XHRkZWx0YTogMVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXHRnZXRJbmZvcigpIHtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRtYXNrOiB0cnVlXG5cdFx0fSlcblx0XHRjb25zdCB7dG9rZW4sc3RhdGV9ID0gdGhpcy5kYXRhO1xuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cblx0XHRcdFx0XHRjb25zdCB7bmFtZSwgaWRfY2FyZCwgaWRfY2FyZF9jb250cmFyeSwgaWRfY2FyZF9wb3NpdGl2ZSxpZGVudGl0eX0gPSByZXMuZGF0YTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhuYW1lLCBpZF9jYXJkLCBpZF9jYXJkX2NvbnRyYXJ5LCBpZF9jYXJkX3Bvc2l0aXZlKTtcblx0XHRcdFx0XHRpZiAobmFtZSB8fCBpZF9jYXJkIHx8IGlkX2NhcmRfY29udHJhcnkgfHwgaWRfY2FyZF9wb3NpdGl2ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0XHRpZF9jYXJkLFxuXHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5LFxuXHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlLFxuXHRcdFx0XHRcdFx0XHRpZGVudGl0eSA6IHN0YXRlW2lkZW50aXR5XVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fVxufSlcbiJdfQ==