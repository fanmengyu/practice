//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import tab from './tab'
import user from './user'

//应用Vuex插件
Vue.use(Vuex)


//创建并暴露store
export default new Vuex.Store({
	modules:{ tab,user,}
})