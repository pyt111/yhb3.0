// import * as api from '../tools/api'
import * as types from './mutation-types' //加不加最后的.js没什么区别
import { EXIT, TRADE } from '@/config/url.js'
import { postModelOne, analy, getModel } from '@/tools/net'
import { confirmMoadl } from '@/tools/talk'


export const actions = {
    exit({ commit }, obj) {
        confirmMoadl('退出', "是否退出当前账号？", () => {
            //postModelOne 带token 加密POST请求
            fetch(EXIT, postModelOne(obj)).then(analy).then((datas) => {
                commit(types.EXIT, { datas });
            }).catch(function(error) {
                commit(types.EXIT, {});
                console.log(error, '异常')
            })
        }, () => {})
    },
    userImgUpload({ commit }, obj) {
        commit(types.HOME_IMG_UPLOAD, obj);
    },
    developeTrapdoor({ commit }, obj) {
        commit(types.TRAPDOOR, obj);
    },
    tradeSwitch({ commit }, obj) {
        fetch(TRADE, getModel()).then(analy).then(
            (datas) => commit(types.TRADE, datas)
        )
    }
}