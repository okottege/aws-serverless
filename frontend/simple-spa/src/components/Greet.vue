<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>Utc Date Time {{msgUtcDateTime}}</h2>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify';
import axios from 'axios';
import config from '../config';

export default {
  name: 'Greet',
  data() {
    return {
      msg: '',
      msgUtcDateTime: '',
    };
  },
  async mounted() {
    const baseUrl = config.backEnd.serviceUrl;
    axios.get(`${baseUrl}/greetings/OshanKottege`)
      .then((resp) => {
        this.msg = resp.data;
      });

    const user = await this.signIn();
    const idToken = user.signInUserSession.idToken.jwtToken;

    const headers = {
      headers: {
        Authorization: idToken,
      },
    };

    try {
      const utcTime = await axios.get(`${baseUrl}/get-utc`, headers);
      this.msgUtcDateTime = utcTime.data;
    } catch (err) {
      console.log('Error: ', JSON.stringify(err));
    }
  },
  methods: {
    async signIn() {
      console.log('Signing in...');
      try {
        const user = await Auth.signIn('oshan@sample-email.com', 'password01');
        console.log('Sign in successful.  Found user for email');
        return user;
      } catch (err) {
        console.log('Error signing in: ', err);
        return err;
      }
    },
  },
};
</script>
