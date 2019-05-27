"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base = 'http://admin.tianyue0571.cn/';
var ajax;
exports.ajax = ajax;
exports.ajax = ajax = function (url, data, method) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'POST'; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLElBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUU1QyxJQUFJLElBQTZFLENBQUM7QUFrQjFFLG9CQUFJO0FBaEJaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFDdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixNQUFNLFFBQUE7WUFDTixHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUc7WUFDZixJQUFJLE1BQUE7WUFDSixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1osQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9saWIud2EuZXM2LmQudHNcIi8+XG5jb25zdCBiYXNlID0gJ2h0dHA6Ly9hZG1pbi50aWFueXVlMDU3MS5jbi8nO1xuXG5sZXQgYWpheDogKHVybDogc3RyaW5nLCBkYXRhPzogb2JqZWN0LCBtZXRob2Q/OiAoXCJQT1NUXCIgfCBcIkdFVFwiKSkgPT4gUHJvbWlzZTxhbnk+O1xuXG5hamF4ID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QgPSB7fSwgbWV0aG9kOiAnUE9TVCcgfCAnR0VUJyA9ICdQT1NUJykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiBhbnkgPT4ge1xuXHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0dXJsOiBiYXNlICsgdXJsLFxuXHRcdFx0ZGF0YSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdHJlc29sdmUocmVzKVxuXHRcdFx0fSxcblx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn07XG5cbmV4cG9ydCB7YWpheH07XG4iXX0=