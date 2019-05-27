import {ajax} from "./ajax"


// 首页banner图数据和咨询数据
// 首页banner图数据和咨询数据
// 首页banner图数据和咨询数据

export const reqBanner = () => ajax('/api/banners', {});

// 售后查询
export const reqAfterQuery = (imei: string) => ajax('/api/after_query', {imei});

// 用户注册API
export const reqRegister = ({openid, phone, password, code}: any) => ajax('/api/register', {openid, phone, password, code})

// 发送 信息
export const sendMsg = ({mobile, type}: any) => ajax('/api/send_message', {mobile, type});

// 用户登录
interface Login {
	type: number,
	openid?: string,
	phone?: string,
	password?: string,
}

export const reqLogin = ({type, openid, phone, password}: Login) => ajax('/api/login', {type, openid, phone, password});
