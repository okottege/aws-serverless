<template>
  <div></div>
</template>
<script>

export default {
  mounted() {
    console.log('checking tokens in the redirect url...');

    const idToken = this.$route.query.id_token;
    const accessToken = this.$route.query.access_token;

    if (idToken && accessToken) {
      console.log('id token: ', idToken);
      console.log('access token: ', accessToken);
    } else {
      console.log('No tokens were found.');
    }
  },
};
</script>

