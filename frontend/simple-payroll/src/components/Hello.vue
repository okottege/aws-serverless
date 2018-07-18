<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <b-container>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="fmgrpUsername" label="Email" label-for="txtEmail">
          <b-form-input id="txtEmail" type="email" v-model="form.email" required
            placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="frmgrpPassword" label="Password" label-for="txtPassword">
          <b-form-input id="txtPassword" type="password" v-model="form.password"
            required>
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log('Form output: ', JSON.stringify(this.form));
    },
    onReset(e) {
      e.preventDefault();

      this.form.email = null;
      this.form.password = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
