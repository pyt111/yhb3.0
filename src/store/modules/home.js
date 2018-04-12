//首页模块
import * as types from '../mutation-types'
import store from '@/store'
import router from '@/router'
import { HOME_INVEST_RECORD, HOME_GET_AGENTMESSAGE, HOME_NOTICE, HOME_NEWS_TEXTLIST, HOME_PRODUCTS, HOME_GENERAL, HOME_BANNER } from '@/config/url'
import { getModel, analy } from '@/tools/net'

const state = {
  main: {
    endMilliseconds: 0, //结束时间
    startMillFlag: 0,
    people: 0, //已购人数
    percent: 0, //已完成比例 百分比
    endMillFlag: 0,
    total: 0, //总投资额
    min: 0, //起投金额
    rate: 0, //普通年化收益率
    left: 1, //剩余可投金额
    name: '', //产品名称
    startMilliseconds: -1, //开始时间
    id: 0, //产品ID
    day: 0, //周期
    type: 0, //1.定期 2.经销商专属 3.新手
    isSkill: 0, //0.非秒杀 1.秒杀
  },
  actived: false,
  secClock: null, //定时器
  content: '何腾飞',
  record: [], //投资记录
  agentMessage: [], //代理商信息
  notice: '', //滚动公告
  textList: [], //新闻列表
  afficheList: [], //公告列表
  products: [], //产品列表
  newList: [], //新手产品列表
  general: {
    allAmount: 0, //总金额
    allReg: 0, //总注册量
  },
  banners: [] //首页banner图
}
const actions = {
  HOMEBANNER: ({ commit }, obj) => fetch(HOME_BANNER, getModel()).then(analy).then((datas) => {
    commit(types.HOME_BANNER, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  HOMERECORD: ({ commit }, obj) => fetch(HOME_INVEST_RECORD, getModel()).then(analy).then((datas) => {
    commit(types.HOME_INVEST_RECORD, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  HOMEAGENT: ({ commit }, obj) => fetch(HOME_GET_AGENTMESSAGE, getModel()).then(analy).then((datas) => {
    commit(types.HOME_GET_AGENTMESSAGE, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  HOMENOTICE: ({ commit }, obj) => fetch(HOME_NOTICE, getModel()).then(analy).then((datas) => {
    commit(types.HOME_NOTICE, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  HOMETEXTLIST: ({ commit }, obj) => fetch(HOME_NEWS_TEXTLIST, getModel()).then(analy).then((datas) => {
    commit(types.HOME_NEWS_TEXTLIST, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  HOMEPRODUCT: ({ commit }, obj) => fetch(HOME_PRODUCTS, getModel()).then(analy).then((datas) => {
    commit(types.HOME_PRODUCTS, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  HOMEGENERAL: ({ commit }, obj) => fetch(HOME_GENERAL, getModel()).then(analy).then((datas) => {
    commit(types.HOME_GENERAL, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  })
}
const mutations = {
  [types.HOME_BANNER](state, obj) {
    // console.log(obj.datas.result.banners)
    state.banners = obj.datas.result.banners
  },
  [types.HOME_INVEST_RECORD](state, obj) {
    // console.log(obj.datas)
    state.record = obj.datas
    // console.log(state.record)
  },
  [types.HOME_GET_AGENTMESSAGE](state, obj) {
    state.agentMessage = obj.datas
    // console.log(obj)
  },
  [types.HOME_NOTICE](state, obj) {
    // console.log(obj.datas.newsContent);
    state.notice = obj.datas.newsContent
  },
  [types.HOME_NEWS_TEXTLIST](state, obj) {
    // console.log(obj.datas)
    state.textList = obj.datas.list1
    state.afficheList = obj.datas.artilelist
  },
  [types.HOME_PRODUCTS](state, obj) {
    // console.log(obj)
    if (obj.datas.killList[0] == '') {
      state.actived = true
    } else {
      state.main = obj.datas.killList[0]
      state.actived = false
    }
    state.products = obj.datas.snzList
    state.newList = obj.datas.newList
    // console.log(state.main)
    if (state.main.isSkill === 1) {
      let maxTimeDelay = 1000;
      let minTimeDelay = 21;
      clearInterval(state.secClock);
      state.secClock = setInterval(function () {
        let start = state.main.startMilliseconds;
        let end = state.main.endMilliseconds;
        if (start > 0) {
          state.main.startMilliseconds = state.main.startMilliseconds - maxTimeDelay
          if (start < state.main.startMillFlag) {
            clearInterval(state.secClock);
            state.secClock = setInterval(function () { //秒杀开始倒计时毫秒
              if (state.main.startMilliseconds > 0) {
                state.main.startMilliseconds = state.main.startMilliseconds - minTimeDelay
              } else {
                clearInterval(state.secClock);
                setInterval(function () { //秒杀进行中倒计时秒
                  if (state.main.endMilliseconds > state.main.endMillFlag) {
                    state.main.endMilliseconds = state.main.endMilliseconds - maxTimeDelay
                  } else {
                    clearInterval(state.secClock);
                    state.secClock = setInterval(function () { //秒杀即将结束倒计时毫秒
                      state.main.endMilliseconds = state.main.endMilliseconds - minTimeDelay;
                      if (state.main.endMilliseconds < 0) {
                        clearInterval(state.secClock);
                      }
                    }, minTimeDelay);
                  }
                }, maxTimeDelay);
              }
            }, minTimeDelay)
          }
        } else if (end > 0) {
          state.main.endMilliseconds = state.main.endMilliseconds - maxTimeDelay
          if (end < state.main.endMillFlag) {
            clearInterval(state.secClock);
            state.secClock = setInterval(function () {
              state.main.endMilliseconds = state.main.endMilliseconds - minTimeDelay;
              if (state.main.endMilliseconds < 0) {
                clearInterval(state.secClock);
              }
            }, minTimeDelay);
          }
        }
      }, maxTimeDelay)
    }
  },
  [types.HOME_GENERAL](state, obj) {
    // console.log(obj.datas)
    state.general.allAmount = obj.datas.sumMoney
    state.general.allReg = obj.datas.userCount
  }
}
export default {
  state,
  actions,
  mutations
}
