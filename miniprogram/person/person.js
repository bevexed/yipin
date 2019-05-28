"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUVwQixRQUFRLEVBQUMsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7S0FFN0I7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZCxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQ3pCLENBQUE7WUFDRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMs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TyxFQUFFLHNDQUFnQixFQUFFLHNDQUFnQixFQUFDLHNCQUFvQixDQUFDO2dCQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQUksRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxNQUFJLElBQUksT0FBTyxJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixFQUFFO29CQUM1RCxPQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNiLFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksUUFBQTt3QkFDSixPQUFPLFNBQUE7d0JBQ1AsZ0JBQWdCLGtCQUFBO3dCQUNoQixnQkFBZ0Isa0JBQUE7d0JBQ2hCLFFBQVEsRUFBRyxLQUFLLENBQUMsUUFBUSxDQUFDO3FCQUMxQixDQUFDLENBQUE7aUJBQ0Y7YUFFRDtRQUNGLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxVXBkYXRlQmFzaWNJbmZvcm1hdGlvbiwgcmVxVXNlckluZm9ybWF0aW9ufSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XHJcblxyXG5QYWdlKHtcclxuXHRkYXRhOiB7XHJcblx0XHR0b2tlbjogJycsXHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGlkX2NhcmQ6ICcnLFxyXG5cdFx0aWRfY2FyZF9wb3NpdGl2ZTogJycsXHJcblx0XHRpZF9jYXJkX2NvbnRyYXJ5OiAnJyxcclxuXHJcblx0XHRpZGVudGl0eTonJyxcclxuXHRcdGRpc2FibGVkOiBmYWxzZSxcclxuXHRcdHN0YXRlOiBbJ+S+m+i0p+WVhicsICfliqDnm5/lupcnLCAn5Yy65Z+f5Luj55CGJ11cclxuXHRcdC8vIDHvvJrkvpvotKfllYbvvJsy77ya5Yqg55uf5bqX77ybM++8muWMuuWfn+S7o+eQhlxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8g6K+75Y+WdG9rZW5cclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHR3eC5nZXRTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiAndG9rZW4nLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXHJcblx0XHRcdFx0XHR9LCAoKSA9PiBfdGhpcy5nZXRJbmZvcigpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHRpbnB1dChlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcclxuXHR9LFxyXG5cclxuXHRjaG9vc2VUb3AoKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmNob29zZUltYWdlKHtcclxuXHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHd4LnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0dXJsOiAnaHR0cDovLzQ3Ljk3LjI1MS4xOTYvYXBpL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcblx0XHRcdFx0XHRuYW1lOiAnaW1hZ2UnLFxyXG5cdFx0XHRcdFx0Ly8gZm9ybURhdGE6IHtcclxuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcclxuXHRcdFx0XHRcdC8vIH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzIChyZXMpe1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5jb2RlID09PTEpe1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IGRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRjaG9vc2VCb3R0b20oKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmNob29zZUltYWdlKHtcclxuXHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdHVybDogJ2h0dHA6Ly80Ny45Ny4yNTEuMTk2L2FwaS91cGxvYWRfaW1nJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRcdC8vIGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXHJcblx0XHRcdFx0XHQvLyB9LFxyXG5cdFx0XHRcdFx0c3VjY2VzcyAocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuY29kZSA9PT0xKXtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiBkYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0ZG9VcGRhdGVCYXNpY0luZm9ybWF0aW9uKCkge1xyXG5cdFx0Y29uc3Qge25hbWUsdG9rZW4saWRfY2FyZCxpZF9jYXJkX2NvbnRyYXJ5LGlkX2NhcmRfcG9zaXRpdmV9ID0gdGhpcy5kYXRhO1xyXG5cdFx0aWYgKCFuYW1lIHx8ICF0b2tlbiB8fCAhaWRfY2FyZF9wb3NpdGl2ZSB8fCAhaWRfY2FyZF9jb250cmFyeSB8fCAhaWRfY2FyZCkge1xyXG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2V5aGr5YaZ5piv5ZCm5a6M5pW0JyxcclxuXHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdGljb246IFwibm9uZVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRhID0ge25hbWUsdG9rZW4saWRfY2FyZCxpZF9jYXJkX2NvbnRyYXJ5LGlkX2NhcmRfcG9zaXRpdmV9O1xyXG5cdFx0cmVxVXBkYXRlQmFzaWNJbmZvcm1hdGlvbihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG5cclxuXHRnZXRJbmZvcigpIHtcclxuXHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6ICcnLFxyXG5cdFx0XHRtYXNrOiB0cnVlXHJcblx0XHR9KVxyXG5cdFx0Y29uc3Qge3Rva2VuLHN0YXRlfSA9IHRoaXMuZGF0YTtcclxuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qge25hbWUsIGlkX2NhcmQsIGlkX2NhcmRfY29udHJhcnksIGlkX2NhcmRfcG9zaXRpdmUsaWRlbnRpdHl9ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhuYW1lLCBpZF9jYXJkLCBpZF9jYXJkX2NvbnRyYXJ5LCBpZF9jYXJkX3Bvc2l0aXZlKTtcclxuXHRcdFx0XHRcdGlmIChuYW1lIHx8IGlkX2NhcmQgfHwgaWRfY2FyZF9jb250cmFyeSB8fCBpZF9jYXJkX3Bvc2l0aXZlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRcdFx0aWRfY2FyZCxcclxuXHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5LFxyXG5cdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0aWRlbnRpdHkgOiBzdGF0ZVtpZGVudGl0eV1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG59KVxyXG4iXX0=