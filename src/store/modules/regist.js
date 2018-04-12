//注册模块
import store from '@/store'
import router from '@/router'
import * as types from '../mutation-types'
import { message } from '@/tools/talk'
import { analy, postModelTwo } from '@/tools/net'
import { REGIST_PIC_VALIDATE, REGIST_CODE, REGIST_ONE_SUMBIT, REGTST_TWO_SUMBIT, REGIST_PHONE_CODE_VALI } from '@/config/url'

const state = {
    text: "发送验证码",
    sendAbel: true, //发送验证码是否可点
    codeStatus: false,
    clock: null, //倒计时
    timeStamp: "", //图形验证码时间戳
    picCodeTrue: '', //判断图形验证码是否正确 
    oneSumbit: false, //第一步提交信息
    twoSumbit: false, //第二步提交信息
}

const actions = {
    registPicVaildate: ({ commit }, obj) => fetch(REGIST_PIC_VALIDATE, postModelTwo(obj)).then(analy).then((datas) => {
        commit(types.REGIST_PIC_VALIDATE, { datas })
    }).catch(function(error) {
        console.log('异常', error)
    }),
    registPicTime({ commit }, obj) {
        commit(types.REGIST_PIC_TIME, obj)
    },
    async registSendCode({ commit }, obj) {
        if (state.sendAbel) {
            state.sendAbel = false;
            fetch(REGIST_CODE, postModelTwo(obj)).then(analy).then((datas) => {
                commit(types.REGIST_CODE, { datas })
            }).catch(function(error) {
                console.log('异常', error)
                state.sendAbel = true;
            });
        }
    },
    // registSendCode({ commit }, obj) {
    //     commit(types.REGIST_CODE, { result: 200 }) //模拟测试发送短信验证码
    // },
    registOneSumbit: ({ commit }, obj) => fetch(REGIST_PHONE_CODE_VALI, postModelTwo(obj)).then(analy).then((datas) => {
        if (datas.code === 200) {
            let VM = commit
            fetch(REGIST_ONE_SUMBIT, postModelTwo(obj)).then(analy).then((datas) => {
                VM(types.REGIST_ONE_SUMBIT, { datas })
            }).catch(function(error) {
                console.log('异常', error)
            })
        } else {
            message(datas.message, 4)
        }
    }),
    // registOneSumbit: ({ commit }, obj) => fetch(REGIST_ONE_SUMBIT, postModelTwo(obj)).then(analy).then((datas) => {
    //     commit(types.REGIST_ONE_SUMBIT, { datas })
    // }).catch(function(error) {
    //     console.log('异常', error)
    // }),
    registTwoSumbit: ({ commit }, obj) => fetch(REGTST_TWO_SUMBIT, postModelTwo(obj)).then(analy).then((datas) => {
        commit(types.REGTST_TWO_SUMBIT, { datas })
    }).catch(function(error) {
        console.log('异常', error)
    })
}
const mutations = {
    [types.REGIST_PIC_VALIDATE](state, obj) {
        console.log(obj)
    },
    [types.REGIST_PIC_TIME](state, obj) {
        state.timeStamp = obj
    },
    [types.REGIST_CODE](state, obj) {
        // console.log(obj.datas, state.sendAbel)
        if (obj.datas.result === 200) {
            message(obj.datas.message, 2);
            let time = 60;
            state.text = time + 's';
            let clock = setInterval(function() {
                time--;
                state.text = time + 's';
                if (time == 0) {
                    state.text = '发送验证码';
                    clearInterval(clock);
                    state.sendAbel = true;
                }
            }, 1000);
        } else {
            message(obj.datas.message, 2);
            state.sendAbel = true;
        }
    },
    [types.REGIST_ONE_SUMBIT](state, obj) {
        console.log(obj.datas)
        if (obj.datas.code === "200") {
            state.oneSumbit = true
            message(obj.datas.message, 2)
        } else {
            state.oneSumbit = false
            message(obj.datas.message, 4)
        }
    },
    [types.REGTST_TWO_SUMBIT](state, obj) {
        console.log(obj.datas)
        if (obj.datas.code === "200") {
            state.twoSumbit = true
            message(obj.datas.message, 2);
        } else {
            state.twoSumbit = false
            message(obj.datas.message, 4)
        }
    }
}
export default {
    state,
    actions,
    mutations
}