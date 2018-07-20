<template>
  <div id="app">
    <section>
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
    </section>
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/login" v-if="!isLoggedIn">Login</b-nav-item>
      <b-link href="#" v-if="isLoggedIn" @click="logout">Logout</b-link>
    </b-navbar-nav>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
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
