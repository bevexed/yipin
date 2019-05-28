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
        var data = { name: name, token: token, id_card: id_card, id_card_contrary: id_card_contrary[0], id_card_positive: id_card_positive[0] };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUVwQixRQUFRLEVBQUMsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7S0FFN0I7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZCxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQ3pCLENBQUE7WUFDRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMs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QUssT0FBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQy9CLFVBQUMsR0FBUTtZQUNSLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFWCxJQUFBLGFBQXVFLEVBQXRFLGdCQUFJLEVBQUUsb0JBQU8sRUFBRSxzQ0FBZ0IsRUFBRSxzQ0FBZ0IsRUFBQyxzQkFBb0IsQ0FBQztnQkFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFJLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9ELElBQUksTUFBSSxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDNUQsT0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDYixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLFFBQUE7d0JBQ0osT0FBTyxTQUFBO3dCQUNQLGdCQUFnQixrQkFBQTt3QkFDaEIsZ0JBQWdCLGtCQUFBO3dCQUNoQixRQUFRLEVBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztxQkFDMUIsQ0FBQyxDQUFBO2lCQUNGO2FBRUQ7UUFDRixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcVVwZGF0ZUJhc2ljSW5mb3JtYXRpb24sIHJlcVVzZXJJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHRva2VuOiAnJyxcblx0XHRuYW1lOiAnJyxcblx0XHRpZF9jYXJkOiAnJyxcblx0XHRpZF9jYXJkX3Bvc2l0aXZlOiAnJyxcblx0XHRpZF9jYXJkX2NvbnRyYXJ5OiAnJyxcblxuXHRcdGlkZW50aXR5OicnLFxuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRzdGF0ZTogWyfkvpvotKfllYYnLCAn5Yqg55uf5bqXJywgJ+WMuuWfn+S7o+eQhiddXG5cdFx0Ly8gMe+8muS+m+i0p+WVhu+8mzLvvJrliqDnm5/lupfvvJsz77ya5Yy65Z+f5Luj55CGXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHQvLyDor7vlj5Z0b2tlblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSwgKCkgPT4gX3RoaXMuZ2V0SW5mb3IoKVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0aW5wdXQoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0Y29uc3QgdmFsdWUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0W2xhYmVsXTogdmFsdWVcblx0XHR9KTtcblxuXHRcdGNvbnNvbGUubG9nKGxhYmVsLCB2YWx1ZSk7XG5cdH0sXG5cblx0Y2hvb3NlVG9wKCkge1xuXHRcdGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGNob29zZUJvdHRvbSgpIHtcblx0XHRpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0ZG9VcGRhdGVCYXNpY0luZm9ybWF0aW9uKCkge1xuXHRcdGNvbnN0IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfSA9IHRoaXMuZGF0YTtcblx0XHRpZiAoIW5hbWUgfHwgIXRva2VuIHx8ICFpZF9jYXJkX3Bvc2l0aXZlIHx8ICFpZF9jYXJkX2NvbnRyYXJ5IHx8ICFpZF9jYXJkKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXG5cdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSB7bmFtZSx0b2tlbixpZF9jYXJkLGlkX2NhcmRfY29udHJhcnk6aWRfY2FyZF9jb250cmFyeVswXSxpZF9jYXJkX3Bvc2l0aXZlOmlkX2NhcmRfcG9zaXRpdmVbMF19O1xuXHRcdHJlcVVwZGF0ZUJhc2ljSW5mb3JtYXRpb24oZGF0YSkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cdGdldEluZm9yKCkge1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdG1hc2s6IHRydWVcblx0XHR9KVxuXHRcdGNvbnN0IHt0b2tlbixzdGF0ZX0gPSB0aGlzLmRhdGE7XG5cdFx0cmVxVXNlckluZm9ybWF0aW9uKHt0b2tlbn0pLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcblxuXHRcdFx0XHRcdGNvbnN0IHtuYW1lLCBpZF9jYXJkLCBpZF9jYXJkX2NvbnRyYXJ5LCBpZF9jYXJkX3Bvc2l0aXZlLGlkZW50aXR5fSA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKG5hbWUsIGlkX2NhcmQsIGlkX2NhcmRfY29udHJhcnksIGlkX2NhcmRfcG9zaXRpdmUpO1xuXHRcdFx0XHRcdGlmIChuYW1lIHx8IGlkX2NhcmQgfHwgaWRfY2FyZF9jb250cmFyeSB8fCBpZF9jYXJkX3Bvc2l0aXZlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0XHRcdGlkX2NhcmQsXG5cdFx0XHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnksXG5cdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmUsXG5cdFx0XHRcdFx0XHRcdGlkZW50aXR5IDogc3RhdGVbaWRlbnRpdHldXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KVxuIl19