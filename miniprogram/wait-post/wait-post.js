"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        info: {},
        pics: [],
        status: '',
        id: '',
        token: ''
    },
    onLoad: function (options) {
        var that = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                that.setData({
                    token: res.data
                }, function () {
                    that.getDetail(that.data.token, options.id);
                });
            }
        });
        this.setData({
            status: options.status,
            id: options.id
        });
    },
    getDetail: function (token, id) {
        var _this = this;
        order_1.orderDetail(token, id).then(function (res) {
            _this.setData({
                info: res.data,
                pics: res.data.picture
            });
        });
    },
    faHuo: function () {
        wx.navigateTo({
            url: '../post/post?id=' + this.data.id
        });
    },
    goChild: function (e) {
        wx.navigateTo({
            url: '../childOrder/childOrder?title=' + e.currentTarget.dataset.title + '&note=' + e.currentTarget.dataset.note + '&imei=' + e.currentTarget.dataset.imei + '&level=' + e.currentTarget.dataset.level + '&code=' + e.currentTarget.dataset.code + '&price=' + e.currentTarget.dataset.price
        });
    },
    jieshou: function (e) {
        order_1.confirmOrder(this.data.token, e.currentTarget.dataset.id, '1').then(function (res) {
            if (res.code == 1) {
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
                    title: '操作失败'
                });
            }
        });
    },
    fouren: function (e) {
        order_1.confirmOrder(this.data.token, e.currentTarget.dataset.id, '2').then(function (res) {
            if (res.code == 1) {
                wx.navigateBack({
                    delta: 1
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC1wb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FpdC1wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQXNEO0FBRXRELElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDakQsSUFBSSxFQUFDLEVBQUU7UUFDUCxJQUFJLEVBQUMsRUFBRTtRQUNQLE1BQU0sRUFBQyxFQUFFO1FBQ1QsRUFBRSxFQUFDLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNYO0lBQ0QsTUFBTSxFQUFOLFVBQU8sT0FBVztRQUNmLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNULElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixFQUFDO29CQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3JCLEVBQUUsRUFBQyxPQUFPLENBQUMsRUFBRTtTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxTQUFTLEVBQVQsVUFBVSxLQUFTLEVBQUMsRUFBUztRQUE3QixpQkFTQztRQVJDLG1CQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0IsVUFBQSxHQUFHO1lBQ0QsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzthQUN2QixDQUFDLENBQUE7UUFDSixDQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7SUFFRCxLQUFLO1FBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7U0FDdEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE9BQU8sRUFBUCxVQUFRLENBQUs7UUFDWCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGlDQUFpQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1NBQzdSLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPLEVBQVAsVUFBUSxDQUFLO1FBQ1gsb0JBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyRSxJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUUsQ0FBQyxFQUFDO2dCQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDbEIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDZixLQUFLLEVBQUUsQ0FBQzs2QkFDUixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0Y7aUJBQUs7Z0JBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDZixLQUFLLEVBQUMsTUFBTTtpQkFDWixDQUFDLENBQUE7YUFDRjtRQUNBLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sRUFBTixVQUFPLENBQUs7UUFDVixvQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3JFLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHtjb25maXJtT3JkZXIsIG9yZGVyRGV0YWlsfSBmcm9tICcuLi9hcGkvb3JkZXInXG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgaW5mbzp7fSxcbiAgICBwaWNzOltdLFxuICAgIHN0YXR1czonJyxcbiAgICBpZDonJyxcbiAgICB0b2tlbjogJydcblx0fSxcblx0b25Mb2FkKG9wdGlvbnM6YW55KSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd0b2tlbicsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LnNldERhdGEhKHtcbiAgICAgICAgICB0b2tlbjogcmVzLmRhdGFcbiAgICAgICAgfSwoKSA9PntcbiAgICAgICAgICB0aGF0LmdldERldGFpbCh0aGF0LmRhdGEudG9rZW4sIG9wdGlvbnMuaWQpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3RhdHVzOm9wdGlvbnMuc3RhdHVzLFxuICAgICAgaWQ6b3B0aW9ucy5pZFxuICAgIH0pXG4gIH0sXG4gIGdldERldGFpbCh0b2tlbjphbnksaWQ6c3RyaW5nKXtcbiAgICBvcmRlckRldGFpbCh0b2tlbiwgaWQpLnRoZW4oXG4gICAgcmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBpbmZvOnJlcy5kYXRhLFxuICAgICAgICBwaWNzOiByZXMuZGF0YS5waWN0dXJlXG4gICAgICB9KVxuICAgIH1cbiAgKVxuICB9LFxuICAvLyDlj5HotKdcbiAgZmFIdW8oKXtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDonLi4vcG9zdC9wb3N0P2lkPScgKyB0aGlzLmRhdGEuaWRcbiAgICB9KVxuICB9LFxuICAvLyDlrZDorqLljZVcbiAgZ29DaGlsZChlOmFueSl7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9jaGlsZE9yZGVyL2NoaWxkT3JkZXI/dGl0bGU9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpdGxlICsgJyZub3RlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5ub3RlICsgJyZpbWVpPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbWVpICsgJyZsZXZlbD0nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGV2ZWwgKyAnJmNvZGU9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvZGUgKyAnJnByaWNlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wcmljZVxuICAgIH0pXG4gIH0sXG4gIC8vIOaOpeWPl+aKpeS7t1xuICBqaWVzaG91KGU6YW55KXtcbiAgICBjb25maXJtT3JkZXIodGhpcy5kYXRhLnRva2VuLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZCwgJzEnKS50aGVuKHJlcyA9PntcbiAgICAgIGlmKHJlcy5jb2RlPT0xKXtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2UsXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcblx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0sIDMwMDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fWVsc2Uge1xuICAgICAgXHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOifmk43kvZzlpLHotKUnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG4gICAgfSlcbiAgfSxcbiAgZm91cmVuKGU6YW55KXtcbiAgICBjb25maXJtT3JkZXIodGhpcy5kYXRhLnRva2VuLCBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZCwgJzInKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiJdfQ==