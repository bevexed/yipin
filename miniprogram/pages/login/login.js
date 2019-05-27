"use strict";
Page({
    data: {},
    login: function () {
        wx.getUserInfo({
            success: function (res) {
                console.log(res);
                wx.navigateTo({
                    url: '/pages/complete/complete'
                });
            },
            fail: function (err) {
                console.log(err);
            }
        });
    },
    onLoad: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFLEVBQUU7SUFFUixLQUFLO1FBQ0osRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLE9BQU8sWUFBQyxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBUWpCLEVBQUUsQ0FBQyxVQUFVLENBQ1o7b0JBQ0MsR0FBRyxFQUFFLDBCQUEwQjtpQkFDL0IsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUVILENBQUM7SUFFRCxNQUFNO0lBRU4sQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5QYWdlKHtcblx0ZGF0YToge30sXG5cblx0bG9naW4oKSB7XG5cdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0Ly8gY29uc3QgdXNlckluZm8gPSByZXMudXNlckluZm9cblx0XHRcdFx0Ly8gY29uc3Qgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZVxuXHRcdFx0XHQvLyBjb25zdCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcblx0XHRcdFx0Ly8gY29uc3QgZ2VuZGVyID0gdXNlckluZm8uZ2VuZGVyIC8vIOaAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcblx0XHRcdFx0Ly8gY29uc3QgcHJvdmluY2UgPSB1c2VySW5mby5wcm92aW5jZVxuXHRcdFx0XHQvLyBjb25zdCBjaXR5ID0gdXNlckluZm8uY2l0eVxuXHRcdFx0XHQvLyBjb25zdCBjb3VudHJ5ID0gdXNlckluZm8uY291bnRyeVxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9jb21wbGV0ZS9jb21wbGV0ZSdcblx0XHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycilcblx0XHRcdH1cblx0XHR9KVxuXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXG5cdH1cbn0pO1xuIl19