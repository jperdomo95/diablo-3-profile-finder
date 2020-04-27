import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth'

Vue.use(Vuex)

export default new Vuex.Store({
  // Registrar los módulos del store
  modules: {
    oauth
  }
})
