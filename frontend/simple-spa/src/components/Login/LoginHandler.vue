<template>
  <div></div>
</template>
<script>

export default {
  mounted() {
    console.log('checking tokens in the redirect url...');

    const accessToken = this.$route.hash.match(/(?:access_token)=([^&]+)/);
    const idToken = this.$route.hash.match(/(?:id_token)=([^&]+)/);
    const verification = this.$route.hash.match(/(?:state)=([^&]+)/);
    const expiresIn = this.$route.hash.match(/(?:expires_in)=(\d+)/);

    if (idToken && accessToken) {
      console.log('id token: ', idToken);
      console.log('access token: ', accessToken);
      console.log('state: ', verification);
      console.log('expires in: ', expiresIn);
    } else {
      console.log('No tokens were found.');
    }
  },
};
</script>

