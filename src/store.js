import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //login
    user: {},
    isSignIn: false,
    //file
    fileId: '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSignIn(state, isSignIn) {
      state.isSignIn = isSignIn;
    },
    setFileId(state, fileId) {
      state.fileId = fileId
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    isSignIn(state){
      return state.isSignIn
    },
    fileId(state) {
      return state.fileId
    },
  },
  actions: {

  }
})
