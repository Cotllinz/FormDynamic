import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultForm: []
  },
  mutations: {
    setResultForm(state, payload) {
      state.resultForm.push(payload)
    }
  },
  actions: {},
  getters: {
    getResultForm(state) {
      return state.resultForm
    }
  },
  modules: {},
  plugins: [
    createPersistedState({
      paths: ['resultForm']
    })
  ]
})
