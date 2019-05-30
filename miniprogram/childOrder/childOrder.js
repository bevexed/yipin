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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRPcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoaWxkT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUVKLEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFDLEVBQUU7UUFDUCxJQUFJLEVBQUMsRUFBRTtRQUNQLEtBQUssRUFBQyxFQUFFO1FBQ1IsSUFBSSxFQUFDLEVBQUU7UUFDUCxLQUFLLEVBQUMsRUFBRTtLQUNUO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBVztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG5cbiAgICB0aXRsZTonJyxcbiAgICBub3RlOicnLFxuICAgIGltZWk6JycsXG4gICAgbGV2ZWw6JycsXG4gICAgY29kZTonJyxcbiAgICBwcmljZTonJ1xuICB9LFxuXG4gIG9uTG9hZChvcHRpb25zOmFueSkge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXG4gICAgICBub3RlOiBvcHRpb25zLm5vdGUsXG4gICAgICBpbWVpOiBvcHRpb25zLmltZWksXG4gICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbCxcbiAgICAgIGNvZGU6IG9wdGlvbnMuY29kZSxcbiAgICAgIHByaWNlOiBvcHRpb25zLnByaWNlXG4gICAgfSlcbiAgfVxufSk7XG4iXX0=