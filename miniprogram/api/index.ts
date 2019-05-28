import {ajax} from "./ajax"


// 首页banner图数据和咨询数据
// 首页banner图数据和咨询数据
// 首页banner图数据和咨询数据

export const reqBanner = () => ajax('/api/banners', {});

// 售后查询
export const reqAfterQuery = (imei: string) => ajax('/api/after_query', {imei});

// 用户注册API
export const reqRegister = ({openid, phone, password, code}: any) => ajax('/api/register', {openid, phone, password, code})

// 成为合作商
export interface Partnet {
	token: string;
	phone: number | string;
	name: string;
	address: string;
	identity?: string;
	id_card?: number | string;
	id_card_positive?: any;
	id_card_contrary?: any;
}

export const reqPartner = (data: Partnet) => ajax('/api/partner', data);


// 省市列表
export const reqAddressList = () => ajax('/api/address_list');


// 手机型号
export const reqPhoneModels = () => ajax('/api/phone_models');

// 发送 信息
export const sendMsg = ({mobile, type}: any) => ajax('/api/send_message', {mobile, type});

// 用户登录
interface Login {
	type: number;
	openid?: string;
	phone?: string;
	password?: string;
}

export const reqLogin = ({type, openid, phone, password}: Login) => ajax('/api/login', {type, openid, phone, password});

// 手机贴膜
interface FreeFile {
	token: string;
	phone_model: string | null;
	serial_number: string;
	phone: number | string | undefined;
	code: string | number;
}

export const reqGetFreeFilm = (data: FreeFile) => ajax('/api/get_free_film', data);

// 客服点话
export const reqService = () => ajax('/api/service');

// 修改用户基本信息
interface BasicInformation {
	token: string;
	name?: string;
	id_card?: number | string;
	id_card_positive?: any;
	id_card_contrary?: any;
}

export const reqUpdateBasicInformation = (data:BasicInformation)=>ajax('/api/update_basic_information',data);

// 修改用户收款信息
interface GatheringInformation {
	token: string;
	alipay_account?: string;
	alipay_name?: string;
	bank_name?: string;
	bank_number?: string;
	bank_type?: string;
	opening_bank?: string;
}

export const requpdate_gathering_information = (data: GatheringInformation) => ajax('/api/update_gathering_information', data);

// 获取用户信息
export const reqUserInformation = (token: object) => ajax('/api/user_information', token);
