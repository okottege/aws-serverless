import Vue from 'vue';
import Vuex from 'vuex';
import { Auth } from 'aws-amplify';

Vue.use(Vuex);

/* eslint-disable no-param-reassign  */
/* eslint-disable no-undef */

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

const state = {
  isLoggedIn: !!localStorage.getItem('access-token'),
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

const getters = {
  isLoggedIn: appState => appState.isLoggedIn,
};

const actions = {
  async login({ commit }, credentials) {
    commit(LOGIN);
    try {
      const user = await Auth.signIn(credentials.email, credentials.password);
      localStorage.set('access-token', user.signInUserSession.idToken.jwtToken);
      console.log('User found for credentials.');
    } catch (err) {
      console.log('Error login in ', JSON.stringify(err));
    }
    commit(LOGIN_SUCCESS);
  },
  logout({ commit }) {
    localStorage.removeItem('access-token');
    commit(LOGOUT);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
