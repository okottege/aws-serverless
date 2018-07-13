<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>Utc Date Time {{msgUtcDateTime}}</h2>
  </div>
</template>
<script>
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
  mounted() {
    const baseUrl = config.backEnd.serviceUrl;
    axios.get(`${baseUrl}/greetings/OshanKottege`)
      .then((resp) => {
        this.msg = resp.data;
      });
    axios.get(`${baseUrl}/get-utc`)
      .then((resp) => {
        this.msgUtcDateTime = resp.data;
      });
  },
};
</script>
