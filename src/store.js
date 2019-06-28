import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //login
    user: {},
    isSignIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSignIn(state, isSignIn) {
      state.isSignIn = isSignIn;
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    isSignIn(state){
      return state.isSignIn
    },
  },
  actions: {

  }
})
