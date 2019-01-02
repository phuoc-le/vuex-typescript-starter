import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router';
import * as passport from 'passport';
import {AddCustomerComponent, ListCustomerComponent} from './components/customer';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/about';
import {ListComponent} from './components/list';
import {UpdateCustomerComponent} from './components/customer/update';
import {LoginComponent} from './components/login';
import store from './store';
import {RegisterComponent} from './components/register';

require('./hot-reload');
Vue.use(VueRouter);

const createRoutes: () => RouteConfig[] = () => [
  {
    name: 'home',
    path: '/',
    component: HomeComponent,
    meta: {requiresAuth: true}
  },
  {
    name: 'google-callback',
    path: '/auth/google/callback',
    component: LoginComponent,
  },
  {
    name: 'about',
    path: '/about',
    component: AboutComponent
  },
  {
    name: 'login',
    path: '/login',
    component: LoginComponent
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterComponent
  },
  {
    name: 'list',
    path: '/list',
    component: ListComponent,
  },
  {
    name: 'customer-add',
    path: '/customer/add/',
    component: AddCustomerComponent,
    meta: {requiresAuth: true}
  },
  {
    name: 'customer-update',
    path: '/customer/update/:id',
    component: UpdateCustomerComponent,
    meta: {requiresAuth: true}
  },
  {
    name: 'customer-list',
    path: '/customer/list',
    component: ListCustomerComponent,
    meta: {requiresAuth: true}
  },
];

const router = new VueRouter({mode: 'history', routes: createRoutes()});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['user/isLoggedIn']) {
      next();
      return
    }
    next('/login')
  } else {
    next()
  }
});

export default router;
