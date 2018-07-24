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
const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';

const getUserFromBackendStore = async () => {
  const user = await Auth.currentUserInfo();
  return user;
};

const state = {
  isLoggedIn: this.loggedInUser !== undefined,
  loggedInUser: undefined,
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
  [SET_LOGGED_IN_USER](appState, user) {
    appState.loggedInUser = user;
  },
  [UPDATE_LOGIN_STATUS](appState, isLoggedIn) {
    appState.isLoggedIn = isLoggedIn;
  },
};

const getters = {
  isLoggedIn: appState => appState.isLoggedIn,
  loggedInUser: appState => appState.loggedInUser,
};

const actions = {
  async login({ commit }, credentials) {
    commit(LOGIN);
    let user;
    try {
      await Auth.signIn(credentials.email, credentials.password);
      user = await getUserFromBackendStore();
    } catch (err) {
      console.log('Error login in ', JSON.stringify(err));
    }
    commit(LOGIN_SUCCESS);
    commit(SET_LOGGED_IN_USER, user);
  },
  async logout({ commit }) {
    await Auth.signOut();
    commit(LOGOUT);
    commit(SET_LOGGED_IN_USER, undefined);
  },
  async loadLoggedInUser({ commit }) {
    const user = await getUserFromBackendStore();
    commit(SET_LOGGED_IN_USER, user);
  },
  updateLoginStatus({ commit }, loggedInUser) {
    const isLoggedIn = loggedInUser !== null || loggedInUser !== undefined || loggedInUser !== {};
    commit(UPDATE_LOGIN_STATUS, isLoggedIn);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
