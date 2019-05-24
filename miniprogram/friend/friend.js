Page({
  data: {
    current: 'tab1',
    current_scroll: 'tab1',

    value1: '',
    value2: '',
    value3: '',
    value4: '输入框已禁用',
    value5: '',
    value6: '',
    value7: ''
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },

  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key
    });
  }

  
});