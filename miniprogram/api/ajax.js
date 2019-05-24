"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base = 'http://machine.test';
exports.ajax = function (url, data, method) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'GET'; }
    return new Promise(function (resolve, reject) {
        wx.request({
            method: method,
            url: base + url,
            data: data,
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQTtBQUVyQixRQUFBLElBQUksR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUFpQixFQUFFLE1BQWtCO0lBQXJDLHFCQUFBLEVBQUEsU0FBaUI7SUFBRSx1QkFBQSxFQUFBLGNBQWtCO0lBQ3JFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsTUFBTSxRQUFBO1lBQ04sR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHO1lBQ2YsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2UgPSAnaHR0cDovL21hY2hpbmUudGVzdCdcblxuZXhwb3J0IGNvbnN0IGFqYXggPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9LCBtZXRob2Q6YW55ID0gJ0dFVCcpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybDogYmFzZSArIHVybCxcbiAgICAgIGRhdGEsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH0sXG4gICAgICBmYWlsKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59Il19