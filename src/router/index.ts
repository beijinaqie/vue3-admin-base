import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import testRoutes from './testRoutes';
import vuex from '@/store/index';
import allComponents from '@/router/componentsRegister';

function compare(target: Array<object>) {
  target.map(item => {
    if (item['path'] in allComponents.menus) {
      item['component'] = allComponents.menus[item['path']]['component'];

      if (item['children'] && item['children'].length) {
        compare(item['children']);
      }
    }
  });

  return target;
}

const routes: Array<RouteRecordRaw> = [
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router
  .isReady()
  .then(() => {
    setTimeout(() => {
      const roleRoutes = compare(testRoutes);
      const permissionRoutes = [
        ...roleRoutes,
        {
          path: '/:pathMatch(.*)',
          redirect: '/404'
        }
      ];

      vuex.commit('menus/set-menus', compare(roleRoutes));
      permissionRoutes.map(route => {
        router.addRoute(route as RouteRecordRaw);
      });
      router.replace(router.currentRoute.value.fullPath);
    }, 500);
  })
  .catch(err => {
    console.log(err);
  });

export default router;
