import * as types from './mutation-types'
import router from '@/router'
import store from '@/store'
import { message } from '@/tools/talk'

export const mutations = {
    [types.EXIT](states, obj) {
        if (!obj.status) {
            store.state.token = '';
            store.state.user = {};
            message(obj.msg, 2, () => router.push('/'))
        } else {
            store.state.token = '';
            store.state.user = {};
            message('您已成功退出', 2, () => router.push('/'))
        }
    },
    [types.HOME_IMG_UPLOAD](states, obj) {
        state.user.img = obj.img
    },
    [types.TRAPDOOR](states, obj) {
        state.token = obj.token
        state.user = obj.user
        state.trade = true
    },
    [types.TRADE](states, obj) {
        state.trade = obj.trade
    }
}