import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// 定义各组件需要通信的数据

const state = {
  valueOfInput: '',
  isInputFocused: false,
  
}