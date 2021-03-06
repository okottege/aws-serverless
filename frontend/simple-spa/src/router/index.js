import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import LoginHandler from '@/components/Login/LoginHandler';
import SignIn from '@/components/Login/SignIn';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/successful-login', name: 'SuccessfulLogin', component: LoginHandler },
    { path: '/login', name: 'Login', component: SignIn },
  ],
});
