import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import testRoutes from './testRoutes';

const routes: Array<RouteRecordRaw> = [
  ...testRoutes,
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Login.vue')
  },
  {
    path: '/403',
    name: 'Err403',
    component: () => import('views/error/403.vue')
  },
  {
    path: '/404',
    name: 'Err404',
    component: () => import('views/error/404.vue')
  },
  {
    path: '/500',
    name: 'Err500',
    component: () => import('views/error/500.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
