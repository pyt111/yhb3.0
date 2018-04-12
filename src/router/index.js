import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//首页
const Home = resolve => {
  require.ensure(['@/components/page/Home.vue'], () => {
    resolve(require('@/components/page/Home.vue'))
  })
};
//注册
const Regist = resolve => {
  require.ensure(['@/components/page/Regist.vue'], () => {
    resolve(require('@/components/page/Regist.vue'))
  })
};
//登录
const Login = resolve => {
  require.ensure(['@/components/page/Login.vue'], () => {
    resolve(require('@/components/page/Login.vue'))
  })
};
//重置
const Resetpwd = resolve => {
  require.ensure(['@/components/page/Resetpwd.vue'], () => {
    resolve(require('@/components/page/Resetpwd.vue'))
  })
};
//产品列表页
const ProductList = resolve => {
  require.ensure(['@/components/page/ProductList.vue'], () => {
    resolve(require('@/components/page/ProductList.vue'))
  })
};
//产品详情页
const ProductDetail = resolve => {
  require.ensure(['@/components/page/ProductDetail.vue'], () => {
    resolve(require('@/components/page/ProductDetail.vue'))
  })
};
//新手引导
const Guide = resolve => {
  require.ensure(['@/components/page/Guide.vue'], () => {
    resolve(require('@/components/page/Guide.vue'))
  })
};
//app下载
const AppDownLoad = resolve => {
  require.ensure(['@/components/page/AppDownLoad.vue'], () => {
    resolve(require('@/components/page/AppDownLoad.vue'))
  })
};
//正在开发中
const Developing = resolve => {
  require.ensure(['@/components/page/Developing.vue'], () => {
    resolve(require('@/components/page/Developing.vue'))
  })
};
//错误页面
const Error = resolve => {
  require.ensure(['@/components/page/Error.vue'], () => {
    resolve(require('@/components/page/Error.vue'))
  })
};
//我要借款
const BorrowMoney = resolve => {
  require.ensure(['@/components/page/BorrowMoney.vue'], () => {
    resolve(require('@/components/page/BorrowMoney.vue'))
  })
};
//信息披露
const Publicity = resolve => {
  require.ensure(['@/components/page/Publicity.vue'], () => {
    resolve(require('@/components/page/Publicity.vue'))
  })
};
const YhbIntroduce = resolve => {
  require.ensure(['@/components/page/publicity/Introduce.vue'], () => {
    resolve(require('@/components/page/publicity/Introduce.vue'))
  })
};
const BusinessIntroduce = resolve => {
  require.ensure(['@/components/page/publicity/BusinessIntroduce.vue'], () => {
    resolve(require('@/components/page/publicity/BusinessIntroduce.vue'))
  })
};
const Management = resolve => {
  require.ensure(['@/components/page/publicity/Management.vue'], () => {
    resolve(require('@/components/page/publicity/Management.vue'))
  })
};
const SafeConduct = resolve => {
  require.ensure(['@/components/page/publicity/SafeConduct.vue'], () => {
    resolve(require('@/components/page/publicity/SafeConduct.vue'))
  })
};
const News = resolve => {
  require.ensure(['@/components/page/publicity/News.vue'], () => {
    resolve(require('@/components/page/publicity/News.vue'))
  })
};
const NewsItem = resolve => {
  require.ensure(['@/components/page/publicity/NewsItem.vue'], () => {
    resolve(require('@/components/page/publicity/NewsItem.vue'))
  })
};
const Proclamation = resolve => {
  require.ensure(['@/components/page/publicity/Proclamation.vue'], () => {
    resolve(require('@/components/page/publicity/Proclamation.vue'))
  })
};
const ProclamationItem = resolve => {
  require.ensure(['@/components/page/publicity/ProclamationItem.vue'], () => {
    resolve(require('@/components/page/publicity/ProclamationItem.vue'))
  })
};
const Aptitude = resolve => {
  require.ensure(['@/components/page/publicity/Aptitude.vue'], () => {
    resolve(require('@/components/page/publicity/Aptitude.vue'))
  })
};
const Partner = resolve => {
  require.ensure(['@/components/page/publicity/Partner.vue'], () => {
    resolve(require('@/components/page/publicity/Partner.vue'))
  })
};
const JoinUs = resolve => {
  require.ensure(['@/components/page/publicity/JoinUs.vue'], () => {
    resolve(require('@/components/page/publicity/JoinUs.vue'))
  })
};
const TouchUs = resolve => {
  require.ensure(['@/components/page/publicity/TouchUs.vue'], () => {
    resolve(require('@/components/page/publicity/TouchUs.vue'))
  })
};
//我的账户
const Account = resolve => {
  require.ensure(['@/components/page/Account.vue'], () => {
    resolve(require('@/components/page/Account.vue'))
  })
};
const Pandect = resolve => {
  require.ensure(['@/components/page/account/Pandect.vue'], () => {
    resolve(require('@/components/page/account/Pandect.vue'))
  })
};
const MyFinancing = resolve => {
  require.ensure(['@/components/page/account/MyFinancing.vue'], () => {
    resolve(require('@/components/page/account/MyFinancing.vue'))
  })
};
const Current = resolve => {
  require.ensure(['@/components/page/account/Current.vue'], () => {
    resolve(require('@/components/page/account/Current.vue'))
  })
};
const Coupon = resolve => {
  require.ensure(['@/components/page/account/Coupon.vue'], () => {
    resolve(require('@/components/page/account/Coupon.vue'))
  })
};
const Warranty = resolve => {
  require.ensure(['@/components/page/account/Warranty.vue'], () => {
    resolve(require('@/components/page/account/Warranty.vue'))
  })
};
const Information = resolve => {
  require.ensure(['@/components/page/account/Information.vue'], () => {
    resolve(require('@/components/page/account/Information.vue'))
  })
};
const BankSupervise = resolve => {
  require.ensure(['@/components/page/account/BankSupervise.vue'], () => {
    resolve(require('@/components/page/account/BankSupervise.vue'))
  })
};
const BankSuperviseAdd = resolve => {
  require.ensure(['@/components/page/account/BankSuperviseAdd.vue'], () => {
    resolve(require('@/components/page/account/BankSuperviseAdd.vue'))
  })
};
const BankSuperviseChange = resolve => {
  require.ensure(['@/components/page/account/BankSuperviseChange.vue'], () => {
    resolve(require('@/components/page/account/BankSuperviseChange.vue'))
  })
};
const MyNews = resolve => {
  require.ensure(['@/components/page/account/MyNews.vue'], () => {
    resolve(require('@/components/page/account/MyNews.vue'))
  })
};
const MyNewsContent = resolve => {
  require.ensure(['@/components/page/account/MyNewsContent.vue'], () => {
    resolve(require('@/components/page/account/MyNewsContent.vue'))
  })
};
const Recommend = resolve => {
  require.ensure(['@/components/page/account/Recommend.vue'], () => {
    resolve(require('@/components/page/account/Recommend.vue'))
  })
};


Vue.use(Router)
import store from '../store'


export default new Router({
  mode: 'history',
  routes: [{
    path: '/index',
    name: 'Home',
    component: Home,
  },
  {
    //注册
    // path: '/regist',
    path: '/',
    name: 'Regist',
    component: Regist,
    // beforeEnter: (to, from, next) => {
    //     if (store.state.trade) {
    //         next()
    //     } else {
    //         next({ path: '/developing' })
    //     }
    // }
  },
  {
    //登录
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.trade) {
        next()
      } else {
        next({ path: '/app' })
      }
    }
  },
  {
    //重置密码
    path: '/resetpwd',
    name: 'Resetpwd',
    component: Resetpwd
  },
  {
    //产品列表页
    path: '/product',
    name: 'ProductList',
    component: ProductList
  },
  {
    //产品详情页
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    //新手引导
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    //信息披露
    path: '/publicity',
    name: 'Publicity',
    component: Publicity,
    children: [{
      //平台介绍
      path: '',
      name: 'yhbIntroduce',
      component: YhbIntroduce,
      meta: { pBar: 1 }
    },
    {
      //安全保障
      path: 'safeConduct',
      name: 'SafeConduct',
      component: SafeConduct,
      meta: { pBar: 2 }
    },
    {
      //风控介绍
      path: 'management',
      name: 'Management',
      component: Management,
      meta: { pBar: 3 }
    },
    {
      //业务介绍
      path: 'businessIntroduce',
      name: 'BusinessIntroduce',
      component: BusinessIntroduce,
      meta: { pBar: 4 }
    },
    {
      //惠宝新闻
      path: 'news',
      name: 'News',
      component: News,
      meta: { pBar: 5 }
    },
    {
      path: 'news/:id',
      name: 'NewsItem',
      component: NewsItem,
      meta: { pBar: 5 }
    },
    {
      //惠宝公告
      path: 'proclamation',
      name: 'Proclamation',
      component: Proclamation,
      meta: { pBar: 6 }
    },
    {
      path: 'proclamation/:id',
      name: 'ProclamationItem',
      component: ProclamationItem,
      meta: { pBar: 6 }
    },
    {
      //荣誉资质
      path: 'aptitude',
      name: 'Aptitude',
      component: Aptitude,
      meta: { pBar: 9 }
    },
    {
      //合作伙伴
      path: 'partner',
      name: 'Partner',
      component: Partner,
      meta: { pBar: 10 }
    },
    {
      //加入我们
      path: 'joinUs',
      name: 'JoinUs',
      component: JoinUs,
      meta: { pBar: 11 }
    },
    {
      //联系我们
      path: 'touchUs',
      name: 'TouchUs',
      component: TouchUs,
      meta: { pBar: 12 }
    }
    ]
  },
  {
    //我要借款
    path: '/borrow',
    name: 'Borrow',
    component: BorrowMoney
  },
  {
    //我的账户
    path: '/account',
    name: 'Account',
    component: Account,
    children: [{
      //账户总览
      path: '',
      name: 'Pandect',
      component: Pandect,
      meta: { aBar: 1 }
    },
    {
      //我的理财
      path: 'financing',
      name: 'MyFinancing',
      component: MyFinancing,
      meta: { aBar: 2 }
    },
    {
      //活期宝
      path: 'current',
      name: 'Current',
      component: Current,
      meta: { aBar: 3 }
    },
    {
      //我的礼券
      path: 'coupon',
      name: 'Coupon',
      component: Coupon,
      meta: { aBar: 4 }
    },
    {
      //我的保单
      path: 'warranty',
      name: 'Warranty',
      component: Warranty,
      meta: { aBar: 5 }
    },
    {
      //个人资料
      path: 'information',
      name: 'Information',
      component: Information,
      meta: { aBar: 6 }
    },
    {
      //银行卡管理
      path: 'banksupervise',
      name: 'BankSupervise',
      component: BankSupervise,
      meta: { aBar: 7 }
    },
    {
      //添加银行卡
      path: 'banksupervise/add',
      name: 'banksupervise-add',
      component: BankSuperviseAdd,
      meta: { aBar: 7 }
    },
    {
      //修改银行卡
      path: 'banksupervise/change',
      name: 'BankSupervise-change',
      component: BankSuperviseChange,
      meta: { aBar: 7 }
    },
    {
      //我的消息
      path: 'mynews',
      name: 'MyNews',
      component: MyNews,
      meta: { aBar: 8 }
    },
    {
      path: 'mynews/:id',
      name: 'MyNewsContent',
      component: MyNewsContent,
      meta: { aBar: 8 }
    },
    {
      //推荐好友
      path: 'recommend',
      name: 'Recommend',
      component: Recommend,
      meta: { aBar: 9 }
    }
    ]
  },
  {
    //app下载
    path: '/app',
    name: 'AppDownLoad',
    component: AppDownLoad,
  },
  {
    //正在开发中
    path: '/developing',
    name: 'Developing',
    component: Developing
  },
  {
    //错误页面
    path: '/*',
    name: 'Error',
    component: Error
  }
  ],
  scrollBehavior(to, from, savedPosition) { //滚动行为
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
