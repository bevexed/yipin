"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        token: '',
        alipay_account: '',
        alipay_name: '',
        bank_name: '',
        bank_number: '',
        bank_type: '',
        opening_bank: '',
        disabled: false
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
        var _a = this.data, token = _a.token, alipay_account = _a.alipay_account, alipay_name = _a.alipay_name, bank_name = _a.bank_name, bank_number = _a.bank_number, bank_type = _a.bank_type, opening_bank = _a.opening_bank;
        if (!token ||
            !alipay_account ||
            !alipay_name ||
            !bank_name ||
            !bank_number ||
            !bank_type ||
            !opening_bank) {
            wx.showToast({
                title: '请检查表单',
                icon: "none",
                mask: true,
                duration: 2000,
            });
            return;
        }
        index_1.requpdate_gathering_information(this.data).then(function (res) {
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
        var token = this.data.token;
        index_1.reqUserInformation({ token: token }).then(function (res) {
            if (res.code === 1) {
                wx.hideLoading();
                console.log(res);
                var _a = res.data, alipay_account = _a.alipay_account, alipay_name = _a.alipay_name, bank_name = _a.bank_name, bank_number = _a.bank_number, bank_type = _a.bank_type, opening_bank = _a.opening_bank;
                _this_1.setData({
                    disabled: true,
                    alipay_account: alipay_account,
                    alipay_name: alipay_name,
                    bank_name: bank_name,
                    bank_number: bank_number,
                    bank_type: bank_type,
                    opening_bank: opening_bank
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbGxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFFakYsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO0tBQ2Y7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBR0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBUTtZQUNaLEdBQUMsS0FBSyxJQUFHLEtBQUs7Z0JB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QUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLElBQUEsYUFPTSxFQU5YLGtDQUFjLEVBQ2QsNEJBQVcsRUFDWCx3QkFBUyxFQUNULDRCQUFXLEVBQ1gsd0JBQVMsRUFDVCw4QkFDVyxDQUFDO2dCQUNiLE9BQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsY0FBYyxnQkFBQTtvQkFDZCxXQUFXLGFBQUE7b0JBQ1gsU0FBUyxXQUFBO29CQUNULFdBQVcsYUFBQTtvQkFDWCxTQUFTLFdBQUE7b0JBQ1QsWUFBWSxjQUFBO2lCQUNaLENBQUMsQ0FBQTthQUVGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXF1cGRhdGVfZ2F0aGVyaW5nX2luZm9ybWF0aW9uLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHR0b2tlbjogJycsXG5cdFx0YWxpcGF5X2FjY291bnQ6ICcnLFxuXHRcdGFsaXBheV9uYW1lOiAnJyxcblx0XHRiYW5rX25hbWU6ICcnLFxuXHRcdGJhbmtfbnVtYmVyOiAnJyxcblx0XHRiYW5rX3R5cGU6ICcnLFxuXHRcdG9wZW5pbmdfYmFuazogJycsXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHQvLyDor7vlj5Z0b2tlblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdH0sICgpID0+IF90aGlzLmdldEluZm9yKCkpXG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHR9LFxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xuXHR9LFxuXG5cdGNob29zZVRvcCgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGNob29zZUJvdHRvbSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGRvVXBkYXRlQmFzaWNJbmZvcm1hdGlvbigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHR0b2tlbixcblx0XHRcdGFsaXBheV9hY2NvdW50LFxuXHRcdFx0YWxpcGF5X25hbWUsXG5cdFx0XHRiYW5rX25hbWUsXG5cdFx0XHRiYW5rX251bWJlcixcblx0XHRcdGJhbmtfdHlwZSxcblx0XHRcdG9wZW5pbmdfYmFua1xuXHRcdH0gPSB0aGlzLmRhdGE7XG5cblx0XHRpZiAoXG5cdFx0XHQhdG9rZW4gfHxcblx0XHRcdCFhbGlwYXlfYWNjb3VudCB8fFxuXHRcdFx0IWFsaXBheV9uYW1lIHx8XG5cdFx0XHQhYmFua19uYW1lIHx8XG5cdFx0XHQhYmFua19udW1iZXIgfHxcblx0XHRcdCFiYW5rX3R5cGUgfHxcblx0XHRcdCFvcGVuaW5nX2Jhbmtcblx0XHQpIHtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2VJyxcblx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm5cblxuXHRcdH1cblxuXHRcdHJlcXVwZGF0ZV9nYXRoZXJpbmdfaW5mb3JtYXRpb24odGhpcy5kYXRhKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+S/ruaUueaIkOWKnycsXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRnZXRJbmZvcigpIHtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRtYXNrOiB0cnVlXG5cdFx0fSlcblx0XHRjb25zdCB7dG9rZW59ID0gdGhpcy5kYXRhO1xuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0XHRhbGlwYXlfYWNjb3VudCxcblx0XHRcdFx0XHRcdGFsaXBheV9uYW1lLFxuXHRcdFx0XHRcdFx0YmFua19uYW1lLFxuXHRcdFx0XHRcdFx0YmFua19udW1iZXIsXG5cdFx0XHRcdFx0XHRiYW5rX3R5cGUsXG5cdFx0XHRcdFx0XHRvcGVuaW5nX2Jhbmtcblx0XHRcdFx0XHR9ID0gcmVzLmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaXBheV9hY2NvdW50LFxuXHRcdFx0XHRcdFx0YWxpcGF5X25hbWUsXG5cdFx0XHRcdFx0XHRiYW5rX25hbWUsXG5cdFx0XHRcdFx0XHRiYW5rX251bWJlcixcblx0XHRcdFx0XHRcdGJhbmtfdHlwZSxcblx0XHRcdFx0XHRcdG9wZW5pbmdfYmFua1xuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fVxufSlcbiJdfQ==