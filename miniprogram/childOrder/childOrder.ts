

Page({
  data: {

    title:'',
    note:'',
    imei:'',
    level:'',
    code:'',
    price:''
  },

  onLoad(options:any) {
    console.log(options);
    this.setData!({
      title: options.title,
      note: options.note,
      imei: options.imei,
      level: options.level,
      code: options.code,
      price: options.price
    })
  }
});
