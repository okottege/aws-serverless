<template>
  <div>
    <h1>Welcome to Dashboard</h1>
    <p>This is a very basic page that calls the backend services that are hosted in a .net core serverless environment.</p>
    <h2>{{ msg }}</h2>
    <p>The current serverside time (UTC) is <strong>{{ msgUTCDateTime }}</strong></p>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import { Auth } from 'aws-amplify';

import config from '../../config';

export default {
  data() {
    return {
      msg: '',
      msgUTCDateTime: '',
    };
  },
  computed: {
    ...mapGetters([
      'loggedInUser',
    ]),
  },
  async mounted() {
    const token = (await Auth.currentSession()).idToken.jwtToken;
    const headers = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const utcTime = (await axios.get(`${config.backEnd.serviceUrl}/get-utc`, headers)).data;
      this.msgUTCDateTime = utcTime;
    } catch (err) {
      console.log('Error: ', JSON.stringify(err));
    }
  },
};
</script>
