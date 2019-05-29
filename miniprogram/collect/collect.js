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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbGxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFFakYsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO0tBQ2Y7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBR0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBUTtZQUNaLEdBQUMsS0FBSyxJQUFHLEtBQUs7Z0JB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QUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLElBQUEsYUFPTSxFQU5YLGtDQUFjLEVBQ2QsNEJBQVcsRUFDWCx3QkFBUyxFQUNULDRCQUFXLEVBQ1gsd0JBQVMsRUFDVCw4QkFDVyxDQUFDO2dCQUNiLE9BQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsY0FBYyxnQkFBQTtvQkFDZCxXQUFXLGFBQUE7b0JBQ1gsU0FBUyxXQUFBO29CQUNULFdBQVcsYUFBQTtvQkFDWCxTQUFTLFdBQUE7b0JBQ1QsWUFBWSxjQUFBO2lCQUNaLENBQUMsQ0FBQTthQUVGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXF1cGRhdGVfZ2F0aGVyaW5nX2luZm9ybWF0aW9uLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdHRva2VuOiAnJyxcclxuXHRcdGFsaXBheV9hY2NvdW50OiAnJyxcclxuXHRcdGFsaXBheV9uYW1lOiAnJyxcclxuXHRcdGJhbmtfbmFtZTogJycsXHJcblx0XHRiYW5rX251bWJlcjogJycsXHJcblx0XHRiYW5rX3R5cGU6ICcnLFxyXG5cdFx0b3BlbmluZ19iYW5rOiAnJyxcclxuXHRcdGRpc2FibGVkOiBmYWxzZVxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8g6K+75Y+WdG9rZW5cclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHR3eC5nZXRTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiAndG9rZW4nLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXHJcblx0XHRcdFx0fSwgKCkgPT4gX3RoaXMuZ2V0SW5mb3IoKSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHR9LFxyXG5cclxuXHRpbnB1dChlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcclxuXHR9LFxyXG5cclxuXHRjaG9vc2VUb3AoKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRjb3VudDogMSxcclxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IHRlbXBGaWxlUGF0aHNcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRjaG9vc2VCb3R0b20oKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRjb3VudDogMSxcclxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiB0ZW1wRmlsZVBhdGhzXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0ZG9VcGRhdGVCYXNpY0luZm9ybWF0aW9uKCkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHR0b2tlbixcclxuXHRcdFx0YWxpcGF5X2FjY291bnQsXHJcblx0XHRcdGFsaXBheV9uYW1lLFxyXG5cdFx0XHRiYW5rX25hbWUsXHJcblx0XHRcdGJhbmtfbnVtYmVyLFxyXG5cdFx0XHRiYW5rX3R5cGUsXHJcblx0XHRcdG9wZW5pbmdfYmFua1xyXG5cdFx0fSA9IHRoaXMuZGF0YTtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCF0b2tlbiB8fFxyXG5cdFx0XHQhYWxpcGF5X2FjY291bnQgfHxcclxuXHRcdFx0IWFsaXBheV9uYW1lIHx8XHJcblx0XHRcdCFiYW5rX25hbWUgfHxcclxuXHRcdFx0IWJhbmtfbnVtYmVyIHx8XHJcblx0XHRcdCFiYW5rX3R5cGUgfHxcclxuXHRcdFx0IW9wZW5pbmdfYmFua1xyXG5cdFx0KSB7XHJcblx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XooajljZUnLFxyXG5cdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm5cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmVxdXBkYXRlX2dhdGhlcmluZ19pbmZvcm1hdGlvbih0aGlzLmRhdGEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XHJcblx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRnZXRJbmZvcigpIHtcclxuXHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6ICcnLFxyXG5cdFx0XHRtYXNrOiB0cnVlXHJcblx0XHR9KVxyXG5cdFx0Y29uc3Qge3Rva2VufSA9IHRoaXMuZGF0YTtcclxuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0XHRhbGlwYXlfYWNjb3VudCxcclxuXHRcdFx0XHRcdFx0YWxpcGF5X25hbWUsXHJcblx0XHRcdFx0XHRcdGJhbmtfbmFtZSxcclxuXHRcdFx0XHRcdFx0YmFua19udW1iZXIsXHJcblx0XHRcdFx0XHRcdGJhbmtfdHlwZSxcclxuXHRcdFx0XHRcdFx0b3BlbmluZ19iYW5rXHJcblx0XHRcdFx0XHR9ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdGFsaXBheV9hY2NvdW50LFxyXG5cdFx0XHRcdFx0XHRhbGlwYXlfbmFtZSxcclxuXHRcdFx0XHRcdFx0YmFua19uYW1lLFxyXG5cdFx0XHRcdFx0XHRiYW5rX251bWJlcixcclxuXHRcdFx0XHRcdFx0YmFua190eXBlLFxyXG5cdFx0XHRcdFx0XHRvcGVuaW5nX2JhbmtcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxufSlcclxuIl19