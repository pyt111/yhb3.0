//export const BASEURL = 'https://www.yhb118.com/web'  //服务器地址 正式环境
// export const BASEURL = 'http://139.196.25.57/web' //服务器地址   57测试
// export const BASEURL = 'http://my.yhb.com/web' //服务器地址
// export const BASEURL = 'http://192.168.1.153:8080/p2p_yhb/web' //服务器地址 赵东
// export const BASEURL = 'http://192.168.1.18:8080/p2p_yhb/web' //服务器地址 周明鹤
// export const BASEURL = 'http://192.168.1.33:8080/p2p_yhb/web' //服务器地址 王著
// export const BASEURL = 'http://192.168.1.32:8080/p2p_yhb/web' //服务器地址 周杉
export const BASEURL = 'http://192.168.1.20:8080/p2p_yhb/web' //服务器地址 冯志春
// export const BASEURL = '/web' //服务器地址

// export const IMG = 'http://www.art.com' //图片服务器地址
export const IMG = 'https://www.yhb118.com/res' //正式环境图片服务器地址

// export const IMG = '/res' //图片服务器地址

// export const RYZZIMG = 'https://www.yhb118.com/res' //荣誉资质图片(本地)

export const WEIBO = 'http://weibo.com/5676187359/profile?rightmod=1&wvr=6&mod=personinfo' //余惠宝官方微博


export const LOGIN = BASEURL + '/inlet/login' //登录接口
export const REGISTER = BASEURL + '/inlet/register' //注册接口
export const EXIT = BASEURL + '/inlet/exit' //退出接口
export const SMSCODE = BASEURL + '/inlet/sendPhoneVerifCode' //发送验证码接口

export const RECHARGE = BASEURL + '/pay/toDeposit' //充值信息请求后台接口

export const PHONECODEVALI = BASEURL + '/inlet/checkPhoneVerifCodeJson' //短信验证码验证接口

export const RESETPWD = BASEURL + '/inlet/setNewUserPassword' //修改登陆密码接口

//配置项
export const TRADE = BASEURL + '/index/getTransaction' //平台是否开启交易接口

// 首页
export const HOME_BANNER = BASEURL + '/webIndexBanner.do' //首页轮播图
export const HOME_INVEST_RECORD = BASEURL + '/record.do' //首页投资记录
export const HOME_GET_AGENTMESSAGE = BASEURL + '/getAgentMessage.do' //首页获取代理商信息
export const HOME_NOTICE = BASEURL + '/article/getNotic.do' //首页滚动公告
export const HOME_NEWS_TEXTLIST = BASEURL + '/article/getArticle.do' //首页新闻列表
export const HOME_PRODUCTS = BASEURL + '/getFrontList.do' //首页产品列表
export const HOME_GENERAL = BASEURL + '/article/getSum.do' //总交易额和注册量

//注册
export const REGIST_PIC_VALIDATE = BASEURL + '/registCalcPicNew.do' //验证图形验证码
export const REGIST_CODE = BASEURL + '/sendIdentifyingCodeNew.do' //注册短信验证码
export const REGIST_PHONE_CODE_VALI = BASEURL + '/checkPhoneCode.do' //验证短信验证码
export const REGIST_ONE_SUMBIT = BASEURL + '/registOneLogin.do' //提交第一步信息
export const REGTST_TWO_SUMBIT = BASEURL + '/registTwoLogin.do' //提交第二步信息

//产品列表页
export const NEW_PRODUCT_LIST = BASEURL + '/getProductListPc.do' //分类产品列表
export const ALL_PRODUCT_LIST = BASEURL + '/getProList.do' //全部产品

//产品详情页
export const PRO_DETAIL_INFO = BASEURL + '/getProductDetail.do' //产品详情信息
export const GET_INVEST_RECORD = BASEURL + '/buyRecord.do' //投资记录

//我要借款
export const BORROW_PIC_VALIDATE = BASEURL + '/registCalcPicNew.do' //验证图形验证码

//个人中心
export const ACC_BIND_STATE = BASEURL + '/user/grade' //四种绑定状态

//账户总览
export const ACC_OV_CAP = BASEURL + '/user/info' //账户总览资金概况

//银行卡管理
export const SUPPORT_BANK_UPDATE = BASEURL + '/user/bankList' // 获取支持的银行列表

//信息披露
export const PUB_NEWS_DETAILS = BASEURL + '/article/getNotice.do' //新闻详情展示
export const PUB_NEWS_TOTAL = BASEURL + '/article/newsCout.do' //新闻列表总条数
export const PUB_NEWS_LIST = BASEURL + '/article/newsList.do' //新闻列表当前页数据
export const PUB_ANNOUNCEMENT_DETAILS = BASEURL + '/article/getNotice.do' //公告详情展示
export const PUB_ANNOUNCEMENT_TOTAL = BASEURL + '/article/noticeCount.do' //公告列表总条数
export const PUB_ANNOUNCEMENT_LIST = BASEURL + '/article/noticeList.do' //公告列表当前页数据w
