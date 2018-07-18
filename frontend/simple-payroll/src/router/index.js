import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import SignIn from '@/components/Login/SignIn';
import Dashboard from '@/components/Home/Dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: SignIn },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  ],
});
