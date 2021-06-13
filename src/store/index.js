import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    idToken: null,
  },
  getters: {
    idToken: (store) => store.idToken,
    email: (store) => store.email,
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
    updateEmail(state, email) {
      state.email = email;
    },
  },
  actions: {},
  modules: {},
});
