"use strict";
Page({
    data: {},
    login: function () {
        wx.getUserInfo({
            success: function (res) {
                console.log(res);
                var userInfo = res.userInfo;
                var nickName = userInfo.nickName;
                var avatarUrl = userInfo.avatarUrl;
                var gender = userInfo.gender;
                var province = userInfo.province;
                var city = userInfo.city;
                var country = userInfo.country;
            },
            fail: function (err) {
                console.log(err);
            }
        });
    },
    onLoad: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFDLEVBQ0o7SUFFRCxLQUFLO1FBQ0gsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0JBQzdCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUE7Z0JBQ2xDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUE7Z0JBQ3BDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7Z0JBQzlCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUE7Z0JBQ2xDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUE7Z0JBQzFCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUE7WUFDbEMsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFFRCxNQUFNO0lBRU4sQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOntcbiAgfSxcblxuICBsb2dpbigpe1xuICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY29uc3Qgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBjb25zdCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgY29uc3QgZ2VuZGVyID0gdXNlckluZm8uZ2VuZGVyIC8vIOaAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcbiAgICAgICAgY29uc3QgcHJvdmluY2UgPSB1c2VySW5mby5wcm92aW5jZVxuICAgICAgICBjb25zdCBjaXR5ID0gdXNlckluZm8uY2l0eVxuICAgICAgICBjb25zdCBjb3VudHJ5ID0gdXNlckluZm8uY291bnRyeVxuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIFxuICB9LFxuXG4gIG9uTG9hZCgpe1xuXG4gIH1cbn0pO1xuIl19