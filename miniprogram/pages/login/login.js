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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFLEVBQUU7SUFFUixLQUFLO1FBQ0osRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLE9BQU8sWUFBQyxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBUWpCLEVBQUUsQ0FBQyxVQUFVLENBQ1o7b0JBQ0MsR0FBRyxFQUFFLDBCQUEwQjtpQkFDL0IsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUVILENBQUM7SUFFRCxNQUFNO0lBRU4sQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuXHRkYXRhOiB7fSxcblxuXHRsb2dpbigpIHtcblx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHQvLyBjb25zdCB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXHRcdFx0XHQvLyBjb25zdCBuaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lXG5cdFx0XHRcdC8vIGNvbnN0IGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybFxuXHRcdFx0XHQvLyBjb25zdCBnZW5kZXIgPSB1c2VySW5mby5nZW5kZXIgLy8g5oCn5YirIDDvvJrmnKrnn6XjgIEx77ya55S344CBMu+8muWls1xuXHRcdFx0XHQvLyBjb25zdCBwcm92aW5jZSA9IHVzZXJJbmZvLnByb3ZpbmNlXG5cdFx0XHRcdC8vIGNvbnN0IGNpdHkgPSB1c2VySW5mby5jaXR5XG5cdFx0XHRcdC8vIGNvbnN0IGNvdW50cnkgPSB1c2VySW5mby5jb3VudHJ5XG5cdFx0XHRcdHd4Lm5hdmlnYXRlVG8oXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NvbXBsZXRlL2NvbXBsZXRlJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cblx0fVxufSk7XG4iXX0=