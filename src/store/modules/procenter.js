//产品列表
import * as types from '../mutation-types'
import { postModelTwo, analy, getModel } from '@/tools/net'
import { NEW_PRODUCT_LIST, ALL_PRODUCT_LIST } from '@/config/url'
import router from '@/router'

const state = {
    newProductList: { //分类产品列表
        ReserveFor: [],
        periodical: [],
        livingTime: ''
    },
    allProductList: [], //全部产品
}

const actions = {
    NEWPRODUCTLIST: ({ commit }, obj) => fetch(NEW_PRODUCT_LIST, postModelTwo(obj)).then(analy).then((datas) => {
        commit(types.NEW_PRODUCT_LIST, { datas })
    }).catch(function(error) {
        console.log('异常', error)
    }),
    ALLPRODUCTLIST: ({ commit }, obj) => fetch(ALL_PRODUCT_LIST, getModel()).then(analy).then((datas) => {
        commit(types.ALL_PRODUCT_LIST, { datas })
    }).catch(function() {
        console.log('异常', error)
    })
}

const mutations = {
    [types.NEW_PRODUCT_LIST](state, obj) {
        console.log(obj.datas)
        state.newProductList = obj.datas
    },
    [types.ALL_PRODUCT_LIST](state, obj) {
        console.log(obj.datas)
        state.allProductList = obj.datas.snzList
    }
}

export default {
    state,
    actions,
    mutations
}