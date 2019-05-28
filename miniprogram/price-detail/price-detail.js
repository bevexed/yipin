"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        arr: ''
    },
    onLoad: function (e) {
        var _this = this;
        index_1.sheet(e.id).then(function (res) {
            _this.setData({
                arr: res.data
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJpY2UtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFDO0FBQ3JDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBQyxFQUFFO0tBQ1A7SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFDO1FBQVIsaUJBTUM7UUFMQyxhQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixHQUFHLEVBQUMsR0FBRyxDQUFDLElBQUk7YUFDYixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGVldCB9IGZyb20gJy4uL2FwaS9pbmRleCc7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGFycjonJ1xyXG4gIH0sXHJcbiAgb25Mb2FkKGUpe1xyXG4gICAgc2hlZXQoZS5pZCkudGhlbihyZXMgPT57XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGFycjpyZXMuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19