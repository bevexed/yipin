"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    onLaunch: function () {
        wx.login({
            success: function (res) {
                console.log(res.code);
                index_1.reqOpenid(res.code).then(function (res) {
                    console.log(res);
                    wx.setStorage({
                        key: 'openid',
                        data: res.data.openid,
                        success: function () {
                            wx.getStorage({
                                key: 'token',
                                fail: function (err) {
                                    console.log('token-fail', err);
                                    wx.navigateTo({
                                        url: '/pages/login/login'
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUVDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsR0FBUTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNiLEdBQUcsRUFBRSxRQUFRO3dCQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07d0JBQ3JCLE9BQU87NEJBQ04sRUFBRSxDQUFDLFVBQVUsQ0FDWjtnQ0FDQyxHQUFHLEVBQUUsT0FBTztnQ0FDWixJQUFJLFlBQUMsR0FBRztvQ0FDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztvQ0FDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3Q0FDYixHQUFHLEVBQUMsb0JBQW9CO3FDQUN4QixDQUFDLENBQUE7Z0NBQ0gsQ0FBQzs2QkFDRCxDQUNELENBQUE7d0JBQ0YsQ0FBQztxQkFDRCxDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxDQUNELENBQUE7WUFFRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBcUJKLENBQUM7SUFDRCxVQUFVLEVBQUUsRUFBRTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxT3BlbmlkfSBmcm9tIFwiLi9hcGkvaW5kZXhcIjtcblxuLy9hcHAudHNcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcblx0Z2xvYmFsRGF0YToge1xuXHRcdHVzZXJJbmZvPzogd3guVXNlckluZm9cblx0fVxuXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWRcbn1cblxuQXBwPElNeUFwcD4oe1xuXHRvbkxhdW5jaCgpIHtcblx0XHQvLyDnmbvlvZVcblx0XHR3eC5sb2dpbih7XG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuY29kZSk7XG5cdFx0XHRcdHJlcU9wZW5pZChyZXMuY29kZSkudGhlbihcblx0XHRcdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdFx0XHRcdFx0ZGF0YTogcmVzLmRhdGEub3BlbmlkLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdHd4LmdldFN0b3JhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmFpbChlcnIpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd0b2tlbi1mYWlsJywgZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8g6I635Y+W55So5oi35L+h5oGvXG5cdFx0Ly8gd3guZ2V0U2V0dGluZyh7XG5cdFx0Ly8gXHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0Ly8gXHRcdGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcblx0XHQvLyBcdFx0XHQvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG5cdFx0Ly8gXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdC8vIFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHQvLyBcdFx0XHRcdFx0Ly8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuXHRcdC8vIFx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcblx0XHQvLyBcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0dGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzLnVzZXJJbmZvKVxuXHRcdC8vIFx0XHRcdFx0XHR9XG5cdFx0Ly8gXHRcdFx0XHR9XG5cdFx0Ly8gXHRcdFx0fSlcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIH0pXG5cdH0sXG5cdGdsb2JhbERhdGE6IHt9XG59KTtcbiJdfQ==