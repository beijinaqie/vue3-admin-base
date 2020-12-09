import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { message } from 'ant-design-vue';
import 'normalize.css';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .mount('#app');

app.config.globalProperties.$message = message;
app.provide('$message', message);
