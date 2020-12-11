import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 样式重置
import 'normalize.css';
// 全局组件注册
import antComponents from '@/components/common/index';
// pc自适应
import autoRem from '@/plugins/auto-computed';

const app = createApp(App);

app
  .use(antComponents)
  .use(autoRem)
  .use(store)
  .use(router)
  .mount('#app');
