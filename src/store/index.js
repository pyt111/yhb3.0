import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import 'fetch-polyfill'
import { actions } from './actions'
import { mutations } from './mutations'
import home from './modules/home'
import login from './modules/login'
import regist from './modules/regist'
import borrow from './modules/borrow'
import account from './modules/account'
import recharge from './modules/recharge'
import resetpwd from './modules/resetpwd'
import procenter from './modules/procenter'
import prodetail from './modules/prodetail'
import publicity from './modules/publicity'

// import main from './main' //主模块
Vue.use(Vuex);
let token = '';
let user = null;
try {
    token = localStorage.getItem('token');
    user = JSON.parse(localStorage.getItem('user'));
} catch (e) {
    token = '';
    user = null;
}
const store = new Vuex.Store({
    state: {
        token: token,
        user: user ? user : {
            name: '何腾飞',
            img: '//i0.hdslb.com/bfs/face/121922b3ec1235997d5611f826e19faf31bd6d40.jpg_52x52.jpg'
        },
        trade: false, //是否开启交易
        capital: {
            balance: 1000
        },
        notice: {
            state: 1,
            type: 0,
            config: null
        },
        noticeClose: {
            state: 1,
            key: ''
        },
        message: {
            state: 1,
            type: 0,
            config: null
        },
        simpleModal: {
            state: 1,
            type: 0,
            config: null
        },
        confirmMoadl: {
            state: 1,
            config: null
        }
    },
    mutations,
    actions,
    modules: {
        home,
        login,
        borrow,
        regist,
        account,
        recharge,
        resetpwd,
        procenter,
        prodetail,
        publicity,
    },
})
export default store