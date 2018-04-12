//信息披露模块
import store from '@/store'
import router from '@/router'
import * as types from '../mutation-types'
import { getModel, postModelTwo, analy } from '@/tools/net'
import { PUB_NEWS_TOTAL, PUB_NEWS_LIST, PUB_NEWS_DETAILS, PUB_ANNOUNCEMENT_TOTAL, PUB_ANNOUNCEMENT_LIST, PUB_ANNOUNCEMENT_DETAILS } from '@/config/url'

const state = {
  bread: [], //面包屑导航,
  navOpen: 1,
  newsDetails: {
    title: '', //新闻标题
    origin: '余惠宝', //来源
    time: '', //发布时间
    content: '', //内容,带标签的文本
    previous: { //上一条新闻
      title: '', //新闻标题
      id: '', //新闻Id
    },
    next: { //下一条新闻
      title: '', //新闻标题
      id: '', //新闻Id
    }
  },
  announcementDetails: {
    title: '', //公告标题
    origin: '余惠宝', //来源
    time: '', //发布时间
    id: '', //公告Id
    previous: {
      title: '', //公告标题
      id: '', //公告Id
    },
    next: {
      title: '', //公告标题
      id: '', //公告id
    }
  },
  newsTotal: 0, //新闻页总条数
  newsList: [],
  announcementTotal: 0, //公告页总条数
  announcementList: [],
}

const actions = {
  publicityBreadChange({ commit }, obj) {
    commit(types.PUB_BREAD_CHANGE, obj)
  },
  publicityNavChange: ({ commit }, obj) => {
    // console.log('执行', obj)
    commit(types.PUB_NAV_CHANGE, obj)
  },
  publicityNewsTotal: ({ commit }, obj) => fetch(PUB_NEWS_TOTAL, getModel()).then(analy).then((datas) => {
    commit(types.PUB_NEWS_TOTAL, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  publicityNewsList: ({ commit }, obj) => fetch(PUB_NEWS_LIST, postModelTwo(obj)).then(analy).then((datas) => {
    commit(types.PUB_NEWS_LIST, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  publicityNewsDetails: ({ commit }, obj) => fetch(PUB_NEWS_DETAILS, postModelTwo(obj)).then(analy).then((datas) => {
    commit(types.PUB_NEWS_DETAILS, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  publicityAnnouncementTotal: ({ commit }, obj) => fetch(PUB_ANNOUNCEMENT_TOTAL, getModel()).then(analy).then((datas) => {
    commit(types.PUB_ANNOUNCEMENT_TOTAL, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  publicityAnnouncementList: ({ commit }, obj) => fetch(PUB_ANNOUNCEMENT_LIST, postModelTwo(obj)).then(analy).then((datas) => {
    commit(types.PUB_ANNOUNCEMENT_LIST, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  }),
  publicityAnnouncementDetails: ({ commit }, obj) => fetch(PUB_ANNOUNCEMENT_DETAILS, postModelTwo(obj)).then(analy).then((datas) => {
    commit(types.PUB_ANNOUNCEMENT_DETAILS, { datas })
  }).catch(function (error) {
    console.log('异常', error)
  })
}
const mutations = {
  [types.PUB_BREAD_CHANGE](state, obj) {
    state.bread = obj
  },
  [types.PUB_NAV_CHANGE](state, obj) {
    // console.log("==================" + obj)
    state.navOpen = obj
  },
  [types.PUB_NEWS_TOTAL](state, obj) {
    // console.log(obj.datas)
    state.newsTotal = obj.datas.total
  },
  [types.PUB_NEWS_LIST](state, obj) {
    // console.log(obj.datas)
    state.newsList = obj.datas
  },
  [types.PUB_NEWS_DETAILS](state, obj) {
    // console.log(obj.datas)
    state.newsDetails = obj.datas
  },
  [types.PUB_ANNOUNCEMENT_TOTAL](state, obj) {
    // console.log(obj.datas)
    state.announcementTotal = obj.datas.total
  },
  [types.PUB_ANNOUNCEMENT_LIST](state, obj) {
    // console.log(obj.datas)
    state.announcementList = obj.datas
  },
  [types.PUB_ANNOUNCEMENT_DETAILS](state, obj) {
    console.log(obj.datas)
    state.announcementDetails = obj.datas
  }
}
export default {
  state,
  actions,
  mutations
}
