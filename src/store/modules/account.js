//我的账户模块
import * as types from '../mutation-types'
import store from '@/store'
import router from '@/router'

const state = {
    bread: [], //面包屑导航
    navOpen: 0,
}

const actions = {
    accountBreadChange({ commit }, obj) {
        commit(types.ACC_BREAD_CHANGE, obj)
    },
    accountNavChange: ({ commit }, obj) => {
        commit(types.ACC_NAV_CHANGE, obj)
    }
}

const mutations = {
    [types.ACC_BREAD_CHANGE](state, obj) {
        state.bread = obj
    },
    [types.ACC_NAV_CHANGE](state, obj) {
        state.navOpen = obj
    }
}

export default {
    state,
    actions,
    mutations
}