import Vue from 'vue';
import Vuex from 'vuex';
import VueLocalStorage from 'vue-localstorage';

Vue.use(VueLocalStorage);
Vue.use(Vuex);

/* eslint-disable no-param-reassign  */

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

const state = {
  isLoggedIn: !!this.$localstorage.getItem('token'),
};

const mutations = {
  [LOGIN](appState) {
    appState.pending = true;
  },

  [LOGIN_SUCCESS](appState) {
    appState.isLoggedIn = true;
    appState.pending = false;
  },

  [LOGOUT](appState) {
    appState.isLoggedIn = false;
  },

  [LOGIN_FAILURE](appState) {
    appState.pending = false;
  },
};

const actions = {
  login({ commit }, credentials) {
    commit(LOGIN);
    this.$localstorage.set('access-token', 'token');
    commit(LOGIN_SUCCESS);
  },
  logout({ commit }) {
    this.$localstorage.removeItem('token');
    commit(LOGOUT);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
