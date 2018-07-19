import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign  */

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

const state = {
  isLoggedIn: false,
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

};

export default new Vuex.Store({});
