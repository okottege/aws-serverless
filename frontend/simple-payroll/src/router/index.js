import Vue from 'vue';
import Router from 'vue-router';
import { Auth } from 'aws-amplify';

import Home from '@/components/Home/Home';
import SignIn from '@/components/Login/SignIn';
import Dashboard from '@/components/Home/Dashboard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: SignIn },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        authRequired: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.authRequired) {
    const user = await Auth.currentUserInfo();

    if (user) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
