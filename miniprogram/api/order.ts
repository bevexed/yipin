import {ajax} from './ajax';

// 全部订单
export const orderAll = (token:string) => ajax('/api/order_list', {token});

// 订单详情
export const orderDetail = (token: string, id: string) => ajax('/api/order_detail',{token,id});