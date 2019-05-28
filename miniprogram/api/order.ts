import {ajax} from './ajax';

// 全部订单
export const orderAll = (token: string, type: string, page: number) => ajax('/api/order_list', {token, type,page});

// 订单详情
export const orderDetail = (token: string, id: string) => ajax('/api/order_detail',{token,id});

// 快递公司列表
export const tradeCompany = () => ajax('/api/logistics_list',{});

// 用户确认发货
export const confirmFahuo = (token: string, id :string, logistics_company :string, tracking_number :string) => ajax('/api/order_shipments', { token, id, logistics_company, tracking_number});

// 用户确认/取消订单 (type值1：确认；2取消）
export const confirmOrder = (token: string, op_id: string, type: string) => ajax('/api/order_offer',{token,op_id,type});