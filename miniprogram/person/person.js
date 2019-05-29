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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUVwQixRQUFRLEVBQUMsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7S0FFN0I7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZCxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQ3pCLENBQUE7WUFDRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMs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RjthQUVEO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFVcGRhdGVCYXNpY0luZm9ybWF0aW9uLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdHRva2VuOiAnJyxcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0aWRfY2FyZDogJycsXHJcblx0XHRpZF9jYXJkX3Bvc2l0aXZlOiAnJyxcclxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxyXG5cclxuXHRcdGlkZW50aXR5OicnLFxyXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdFx0c3RhdGU6IFsn5L6b6LSn5ZWGJywgJ+WKoOebn+W6lycsICfljLrln5/ku6PnkIYnXVxyXG5cdFx0Ly8gMe+8muS+m+i0p+WVhu+8mzLvvJrliqDnm5/lupfvvJsz77ya5Yy65Z+f5Luj55CGXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyDor7vlj5Z0b2tlblxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICd0b2tlbicsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcclxuXHRcdFx0XHRcdH0sICgpID0+IF90aGlzLmdldEluZm9yKClcclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGlucHV0KGU6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFtsYWJlbF06IHZhbHVlXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xyXG5cdH0sXHJcblxyXG5cdGNob29zZVRvcCgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRjb3VudDogMSxcclxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IHRlbXBGaWxlUGF0aHNcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0d3gudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6ICdodHRwOi8vNDcuOTcuMjUxLjE5Ni9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXHJcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xyXG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xyXG5cdFx0XHRcdFx0Ly8gfSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcbiAgeXVsYW4oKXtcclxuICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgIGN1cnJlbnQ6IHRoaXMuZGF0YS5pZF9jYXJkX3Bvc2l0aXZlLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcbiAgICAgIHVybHM6IFt0aGlzLmRhdGEuaWRfY2FyZF9wb3NpdGl2ZV0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHl1bGFuRigpe1xyXG4gICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgY3VycmVudDogdGhpcy5kYXRhLmlkX2NhcmRfY29udHJhcnksIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJsczogW3RoaXMuZGF0YS5pZF9jYXJkX2NvbnRyYXJ5XSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG5cdGNob29zZUJvdHRvbSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRjb3VudDogMSxcclxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiB0ZW1wRmlsZVBhdGhzXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0d3gudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6ICdodHRwOi8vNDcuOTcuMjUxLjE5Ni9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXHJcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xyXG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xyXG5cdFx0XHRcdFx0Ly8gfSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdGRvVXBkYXRlQmFzaWNJbmZvcm1hdGlvbigpIHtcclxuXHRcdGNvbnN0IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfSA9IHRoaXMuZGF0YTtcclxuXHRcdGlmICghbmFtZSB8fCAhdG9rZW4gfHwgIWlkX2NhcmRfcG9zaXRpdmUgfHwgIWlkX2NhcmRfY29udHJhcnkgfHwgIWlkX2NhcmQpIHtcclxuXHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXHJcblx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZGF0YSA9IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfTtcclxuXHRcdHJlcVVwZGF0ZUJhc2ljSW5mb3JtYXRpb24oZGF0YSkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfkv67mlLnmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG5cclxuXHRnZXRJbmZvcigpIHtcclxuXHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6ICcnLFxyXG5cdFx0XHRtYXNrOiB0cnVlXHJcblx0XHR9KVxyXG5cdFx0Y29uc3Qge3Rva2VuLHN0YXRlfSA9IHRoaXMuZGF0YTtcclxuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qge25hbWUsIGlkX2NhcmQsIGlkX2NhcmRfY29udHJhcnksIGlkX2NhcmRfcG9zaXRpdmUsaWRlbnRpdHl9ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhuYW1lLCBpZF9jYXJkLCBpZF9jYXJkX2NvbnRyYXJ5LCBpZF9jYXJkX3Bvc2l0aXZlKTtcclxuXHRcdFx0XHRcdGlmIChuYW1lIHx8IGlkX2NhcmQgfHwgaWRfY2FyZF9jb250cmFyeSB8fCBpZF9jYXJkX3Bvc2l0aXZlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRcdFx0aWRfY2FyZCxcclxuXHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5LFxyXG5cdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0aWRlbnRpdHkgOiBzdGF0ZVtpZGVudGl0eV1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG59KVxyXG4iXX0=