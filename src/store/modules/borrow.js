//我要借款模块
import store from '@/store'
import router from '@/router'
import * as types from '../mutation-types'
import { message } from '@/tools/talk'
import { analy, postModelTwo } from '@/tools/net'
import { REGIST_PIC_VALIDATE, REGIST_CODE } from '@/config/url'

const state = {
    timeStamp: "", //图形验证码时间戳
    picCodeTrue: '', //判断图形验证码是否正确
}

const actions = {
    borrowPicTime({ commit }, obj) {
        commit(types.BORROW_PIC_TIME, obj)
    }
}

const mutations = {
    [types.BORROW_PIC_TIME](state, obj) {
        state.timeStamp = obj
    }
}
export default {
    state,
    actions,
    mutations
}