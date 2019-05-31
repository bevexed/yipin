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
                        }
                    });
                });
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUVDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsR0FBUTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNiLEdBQUcsRUFBRSxRQUFRO3dCQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07d0JBQ3JCLE9BQU87d0JBWVAsQ0FBQztxQkFDRCxDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxDQUNELENBQUE7WUFFRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBcUJKLENBQUM7SUFDRCxVQUFVLEVBQUUsRUFBRTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxT3BlbmlkfSBmcm9tIFwiLi9hcGkvaW5kZXhcIjtcclxuXHJcbi8vYXBwLnRzXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcclxuXHRnbG9iYWxEYXRhOiB7XHJcblx0XHR1c2VySW5mbz86IHd4LlVzZXJJbmZvXHJcblx0fVxyXG5cclxuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXHJcbn1cclxuXHJcbkFwcDxJTXlBcHA+KHtcclxuXHRvbkxhdW5jaCgpIHtcclxuXHRcdC8vIOeZu+W9lVxyXG5cdFx0d3gubG9naW4oe1xyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5jb2RlKTtcclxuXHRcdFx0XHRyZXFPcGVuaWQocmVzLmNvZGUpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0d3guc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRcdFx0a2V5OiAnb3BlbmlkJyxcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiByZXMuZGF0YS5vcGVuaWQsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHd4LmdldFN0b3JhZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRrZXk6ICd0b2tlbicsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0ZmFpbChlcnIpe1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ3Rva2VuLWZhaWwnLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdHVybDonL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuXHRcdC8vIHd4LmdldFNldHRpbmcoe1xyXG5cdFx0Ly8gXHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHQvLyBcdFx0aWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG5cdFx0Ly8gXHRcdFx0d3guZ2V0VXNlckluZm8oe1xyXG5cdFx0Ly8gXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcclxuXHRcdC8vIFx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcblx0XHQvLyBcdFx0XHRcdFx0Ly8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuXHRcdC8vIFx0XHRcdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcblx0XHQvLyBcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XHJcblx0XHQvLyBcdFx0XHRcdFx0XHR0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pXHJcblx0XHQvLyBcdFx0XHRcdFx0fVxyXG5cdFx0Ly8gXHRcdFx0XHR9XHJcblx0XHQvLyBcdFx0XHR9KVxyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSlcclxuXHR9LFxyXG5cdGdsb2JhbERhdGE6IHt9XHJcbn0pO1xyXG4iXX0=