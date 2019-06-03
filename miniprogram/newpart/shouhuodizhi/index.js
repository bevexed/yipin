"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        token: '', partner_name: '', partner_phone: '', partner_address: ''
    },
    onLoad: function () {
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
    updateAddress: function () {
        var _a = this.data, token = _a.token, partner_address = _a.partner_address, partner_name = _a.partner_name, partner_phone = _a.partner_phone;
        if (!partner_address || !partner_name || !partner_phone) {
            wx.showToast({
                icon: "none",
                title: '请检查数据',
                mask: true,
                duration: 2000
            });
            return;
        }
        index_1.reqUpdateShippingAddress(token, partner_name, partner_phone, partner_address).then(function (res) {
            if (res.code === 1) {
                wx.showToast({
                    title: res.message,
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
                    icon: "none",
                    title: res.message,
                    mask: true,
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF5RDtBQUV6RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRTtLQUNuRTtJQUVELE1BQU0sRUFBTjtRQUNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNmLENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxFQUFMLFVBQU0sQ0FBTTs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFRO1lBQ1osR0FBQyxLQUFLLElBQUcsS0FBSztnQkFDYixDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUdELGFBQWEsRUFBYjtRQUNPLElBQUEsY0FBaUUsRUFBaEUsZ0JBQUssRUFBRSxvQ0FBZSxFQUFFLDhCQUFZLEVBQUUsZ0NBQTBCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4RCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsT0FBTTtTQUNOO1FBQ0QsZ0NBQXdCLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNqRixVQUFDLEdBQVE7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDbEIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDZixLQUFLLEVBQUUsQ0FBQzs2QkFDUixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0Y7aUJBQU07Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ2xCLElBQUksRUFBRSxJQUFJO2lCQUNWLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBRUQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFVcGRhdGVTaGlwcGluZ0FkZHJlc3N9IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHR0b2tlbjogJycsIHBhcnRuZXJfbmFtZTogJycsIHBhcnRuZXJfcGhvbmU6ICcnLCBwYXJ0bmVyX2FkZHJlc3M6ICcnXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdGNvbnN0IHRoYXQgPSB0aGlzXG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHR0aGF0LnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcblx0fSxcblxuXHQvLyBAdHMtaWdub3JlXG5cdHVwZGF0ZUFkZHJlc3MoKSB7XG5cdFx0Y29uc3Qge3Rva2VuLCBwYXJ0bmVyX2FkZHJlc3MsIHBhcnRuZXJfbmFtZSwgcGFydG5lcl9waG9uZX0gPSB0aGlzLmRhdGE7XG5cdFx0aWYgKCFwYXJ0bmVyX2FkZHJlc3MgfHwgIXBhcnRuZXJfbmFtZSB8fCAhcGFydG5lcl9waG9uZSkge1xuXHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l5pWw5o2uJyxcblx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHJlcVVwZGF0ZVNoaXBwaW5nQWRkcmVzcyh0b2tlbiwgcGFydG5lcl9uYW1lLCBwYXJ0bmVyX3Bob25lLCBwYXJ0bmVyX2FkZHJlc3MpLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZSxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWx0YTogMVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH0sIDMwMDApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH1cblxufSk7XG4iXX0=