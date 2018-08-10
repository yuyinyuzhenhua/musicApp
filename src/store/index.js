// vuex  入口

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'  //state修改之后，打印一些logger；之前是什么，之后是什么


Vue.use(Vuex)  //注册插件

// 检测state的修改是不是通过vuex
const debug = process.env.NODE_ENV !== 'production'  //npm run build  线上

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,  //性能损耗，所以在线下使用
    plugins: debug ? [createLogger()] : []
})