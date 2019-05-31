"use strict";
Page({
    data: {
        title: '',
        note: '',
        imei: '',
        level: '',
        code: '',
        price: ''
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            title: options.title,
            note: options.note,
            imei: options.imei,
            level: options.level,
            code: options.code,
            price: options.price
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRPcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoaWxkT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUVKLEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFDLEVBQUU7UUFDUCxJQUFJLEVBQUMsRUFBRTtRQUNQLEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFDLEVBQUU7UUFDUCxLQUFLLEVBQUMsRUFBRTtLQUNUO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBVztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gICAgdGl0bGU6JycsXHJcbiAgICBub3RlOicnLFxyXG4gICAgaW1laTonJyxcclxuICAgIGxldmVsOicnLFxyXG4gICAgY29kZTonJyxcclxuICAgIHByaWNlOicnXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSxcclxuICAgICAgbm90ZTogb3B0aW9ucy5ub3RlLFxyXG4gICAgICBpbWVpOiBvcHRpb25zLmltZWksXHJcbiAgICAgIGxldmVsOiBvcHRpb25zLmxldmVsLFxyXG4gICAgICBjb2RlOiBvcHRpb25zLmNvZGUsXHJcbiAgICAgIHByaWNlOiBvcHRpb25zLnByaWNlXHJcbiAgICB9KVxyXG4gIH1cclxufSk7XHJcbiJdfQ==