<template>
  <div>
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
  data() {
    return {
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
      this.$store.dispatch('login', this.form);
      this.$router.push('/');
    },
    onReset(e) {
      e.preventDefault();

      this.form.email = null;
      this.form.password = null;
    },
  },
};
</script>
