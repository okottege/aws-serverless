<template>
  <h1>{{msg}}</h1>
</template>
<script>
import axios from 'axios';
import config from '../config';

export default {
  name: 'Greet',
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    axios.get(`${config.backEnd.greetingServiceUrl}/greet/OshanKottege`)
      .then((resp) => {
        this.msg = resp.data;
      });
  },
};
</script>
