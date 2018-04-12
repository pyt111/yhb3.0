//产品详情
import * as types from '../mutation-types'
import { postModelTwo, analy } from '@/tools/net'
import { PRO_DETAIL_INFO, GET_INVEST_RECORD } from '@/config/url'
import router from '@/router'


const state = {
  details: {
    total: 0,
    min: 0,
    productItems: {
      receive: '', //回款计划
      safeInsur: '', //借款企业信息
      enterprise: '', //安全保障
    },
    memberRate: 0,//会员预期年化收益率
    rate: 0,//预期年化收益率
    left: 0,//剩余可投金额
    name: '',//产品名称
    Btime: '',//标的开始时间
    Etime: '',//标的结束时间
    day: 0,//期限
    percent: 0//进度
  },
  records: [] //投资记录
}

const actions = {
  getProDetailInfo: ({ commit }, obj) => fetch(PRO_DETAIL_INFO, postModelTwo(obj)).then(analy).then((datas) => {
    commit(types.PRO_DETAIL_INFO, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  getInvestRecord: ({ commit }, obj) => fetch(GET_INVEST_RECORD, postModelTwo(obj)).then(analy).then((datas) => {
    commit(types.GET_INVEST_RECORD, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  })
}

const mutations = {
  [types.PRO_DETAIL_INFO](state, obj) {
    if (!obj) {
      router.go(-1)
    } else {
      console.log(obj.datas)
      state.details = obj.datas
    }
    // state.details = obj.datas
  },
  [types.GET_INVEST_RECORD](state, obj) {
    console.log(obj.datas)
    state.records = obj.datas
  }
}
export default {
  state,
  actions,
  mutations
}
