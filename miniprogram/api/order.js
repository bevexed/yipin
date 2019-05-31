"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = require("./ajax");
exports.orderAll = function (token, type, page) { return ajax_1.ajax('/api/order_list', { token: token, type: type, page: page }); };
exports.orderDetail = function (token, id) { return ajax_1.ajax('/api/order_detail', { token: token, id: id }); };
exports.tradeCompany = function () { return ajax_1.ajax('/api/logistics_list', {}); };
exports.confirmFahuo = function (token, id, logistics_company, tracking_number) { return ajax_1.ajax('/api/order_shipments', { token: token, id: id, logistics_company: logistics_company, tracking_number: tracking_number }); };
exports.confirmOrder = function (token, op_id, type) { return ajax_1.ajax('/api/order_offer', { token: token, op_id: op_id, type: type }); };
exports.address = function () { return ajax_1.ajax('/api/address', {}); };
exports.addOrder = function (token, information, amount, note, picture) { return ajax_1.ajax('/api/add_order', { token: token, information: information, amount: amount, note: note, picture: picture }); };
exports.jiaoyan = function (token) { return ajax_1.ajax('/api/check_user_aptitude', { token: token }); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUdmLFFBQUEsUUFBUSxHQUFHLFVBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxJQUFZLElBQUssT0FBQSxXQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLEVBQTNDLENBQTJDLENBQUM7QUFHdEcsUUFBQSxXQUFXLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBVSxJQUFLLE9BQUEsV0FBSSxDQUFDLG1CQUFtQixFQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsRUFBRSxJQUFBLEVBQUMsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDO0FBR2xGLFFBQUEsWUFBWSxHQUFHLGNBQU0sT0FBQSxXQUFJLENBQUMscUJBQXFCLEVBQUMsRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUM7QUFHcEQsUUFBQSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBVSxFQUFFLGlCQUF5QixFQUFFLGVBQXVCLElBQUssT0FBQSxXQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxpQkFBaUIsbUJBQUEsRUFBRSxlQUFlLGlCQUFBLEVBQUMsQ0FBQyxFQUE5RSxDQUE4RSxDQUFDO0FBR2pMLFFBQUEsWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFZLElBQUssT0FBQSxXQUFJLENBQUMsa0JBQWtCLEVBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxLQUFLLE9BQUEsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLEVBQTNDLENBQTJDLENBQUM7QUFHM0csUUFBQSxPQUFPLEdBQUcsY0FBTSxPQUFBLFdBQUksQ0FBQyxjQUFjLEVBQUMsRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUM7QUFHeEMsUUFBQSxRQUFRLEdBQUcsVUFBQyxLQUFhLEVBQUUsV0FBbUIsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLE9BQWUsSUFBSyxPQUFBLFdBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUMsRUFBcEUsQ0FBb0UsQ0FBQztBQUd2SyxRQUFBLE9BQU8sR0FBRyxVQUFDLEtBQWEsSUFBSyxPQUFBLFdBQUksQ0FBQywwQkFBMEIsRUFBQyxFQUFDLEtBQUssT0FBQSxFQUFDLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWpheH0gZnJvbSAnLi9hamF4JztcblxuLy8g5YWo6YOo6K6i5Y2VXG5leHBvcnQgY29uc3Qgb3JkZXJBbGwgPSAodG9rZW46IHN0cmluZywgdHlwZTogc3RyaW5nLCBwYWdlOiBudW1iZXIpID0+IGFqYXgoJy9hcGkvb3JkZXJfbGlzdCcsIHt0b2tlbiwgdHlwZSxwYWdlfSk7XG5cbi8vIOiuouWNleivpuaDhVxuZXhwb3J0IGNvbnN0IG9yZGVyRGV0YWlsID0gKHRva2VuOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IGFqYXgoJy9hcGkvb3JkZXJfZGV0YWlsJyx7dG9rZW4saWR9KTtcblxuLy8g5b+r6YCS5YWs5Y+45YiX6KGoXG5leHBvcnQgY29uc3QgdHJhZGVDb21wYW55ID0gKCkgPT4gYWpheCgnL2FwaS9sb2dpc3RpY3NfbGlzdCcse30pO1xuXG4vLyDnlKjmiLfnoa7orqTlj5HotKdcbmV4cG9ydCBjb25zdCBjb25maXJtRmFodW8gPSAodG9rZW46IHN0cmluZywgaWQgOnN0cmluZywgbG9naXN0aWNzX2NvbXBhbnkgOnN0cmluZywgdHJhY2tpbmdfbnVtYmVyIDpzdHJpbmcpID0+IGFqYXgoJy9hcGkvb3JkZXJfc2hpcG1lbnRzJywgeyB0b2tlbiwgaWQsIGxvZ2lzdGljc19jb21wYW55LCB0cmFja2luZ19udW1iZXJ9KTtcblxuLy8g55So5oi356Gu6K6kL+WPlua2iOiuouWNlSAodHlwZeWAvDHvvJrnoa7orqTvvJsy5Y+W5raI77yJXG5leHBvcnQgY29uc3QgY29uZmlybU9yZGVyID0gKHRva2VuOiBzdHJpbmcsIG9wX2lkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykgPT4gYWpheCgnL2FwaS9vcmRlcl9vZmZlcicse3Rva2VuLG9wX2lkLHR5cGV9KTtcblxuLy8g5bmz5Y+w5pS26LSn5Zyw5Z2AXG5leHBvcnQgY29uc3QgYWRkcmVzcyA9ICgpID0+IGFqYXgoJy9hcGkvYWRkcmVzcycse30pO1xuXG4vLyDmt7vliqDorqLljZVcbmV4cG9ydCBjb25zdCBhZGRPcmRlciA9ICh0b2tlbjogc3RyaW5nLCBpbmZvcm1hdGlvbjogc3RyaW5nLCBhbW91bnQ6IHN0cmluZywgbm90ZTogc3RyaW5nLCBwaWN0dXJlOiBzdHJpbmcpID0+IGFqYXgoJy9hcGkvYWRkX29yZGVyJywgeyB0b2tlbiwgaW5mb3JtYXRpb24sIGFtb3VudCwgbm90ZSwgcGljdHVyZX0pO1xuXG4vLyDnlKjmiLfmoKHpqoxcbmV4cG9ydCBjb25zdCBqaWFveWFuID0gKHRva2VuOiBzdHJpbmcpID0+IGFqYXgoJy9hcGkvY2hlY2tfdXNlcl9hcHRpdHVkZScse3Rva2VufSk7Il19