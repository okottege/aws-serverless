<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href='/'>Home</b-navbar-brand>
      <b-collapse is-nav id="nav-collapse">

        <b-navbar-nav>
          <b-nav-item href="/login" v-if="!isLoggedIn">Login</b-nav-item>
          <b-nav-item href="#" v-if="isLoggedIn" @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      compLoaded: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  async created() {
    await this.$store.dispatch('loadLoggedInUser');
  },
  computed: {
    ...mapGetters([
      'loggedInUser',
      'isLoggedIn',
    ]),
  },
  watch: {
    loggedInUser() {
      if (this.loggedInUser) {
        this.$store.dispatch('updateLoginStatus', this.loggedInUser);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
