//export const BASEURL = 'http://192.168.1.200:8080/web'  //服务器地址  孔
//export const BASEURL = 'http://192.168.1.61:8888'  //服务器地址  汪
//export const BASEURL = 'http://192.168.1.203:8080'  //服务器地址  林
//export const BASEURL = 'http://www.yhb118.com/web'  //服务器地址 正式环境
export const BASEURL = 'http://139.196.25.57/web' //服务器地址   57测试
    // export const BASEURL = 'http://www.yhb118.com/web' //正式地址
    // export const BASEURL = 'http://my.yhb.com/web' //服务器地址  


// export const IMG = 'http://www.art.com' //图片服务器地址
export const IMG = 'http://www.yhb118.com/res' //正式环境图片服务器地址
    // export const IMG = 'http://139.196.25.57/res' //57图片服务器地址

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
export const FACEUPLOAD = BASEURL + '/file/uploadImage' //用户头像上传接口
export const HOME_PRODUCTS = BASEURL + '/invest/center' //获取产品列表
export const HOME_BANNER = BASEURL + '/banner/getBanner' //首页轮播图
export const HOME_INVEST_RECORD = BASEURL + '/index/getInvestRecord' //首页投资记录
export const HOME_NEWS_LIST = BASEURL + '/index/getNewsForIndex' //首页新闻列表
export const HOME_NOTICE = BASEURL + '/news/notice' //首页公告



//产品详情页
export const PRO_DETAIL_INFO = BASEURL + '/invest/proInfo' //产品详情信息
export const GET_INVEST_RECORD = BASEURL + '/invest/record' //投资记录

//个人中心
export const ACC_BIND_STATE = BASEURL + '/user/grade' //四种绑定状态

//账户总览
export const ACC_OV_CAP = BASEURL + '/user/info' //账户总览资金概况

//银行卡管理 
export const SUPPORT_BANK_UPDATE = BASEURL + '/user/bankList' // 获取支持的银行列表

//信息披露
export const PUB_NEWS_DETAILS = BASEURL + '/news/newsDetails' //新闻详情展示
export const PUB_NEWS_TOTAL = BASEURL + '/news/newsCout' //新闻列表总条数
export const PUB_NEWS_LIST = BASEURL + '/news/newsList' //新闻列表当前页数据
export const PUB_ANNOUNCEMENT_DETAILS = BASEURL + '/news/noticeDetails' //公告详情展示
export const PUB_ANNOUNCEMENT_TOTAL = BASEURL + '/news/noticeCount' //公告列表总条数
export const PUB_ANNOUNCEMENT_LIST = BASEURL + '/news/noticeList' //公告列表当前页数据