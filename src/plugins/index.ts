import { App } from 'vue';
import eventBus from '@/plugins/event-bus';
const pluginCtx = { eventBus };

export default {
  install(app: App<Element>) {
    Object.keys(pluginCtx).map(ctx => {
      app.config.globalProperties[`$${ctx}`] = pluginCtx[ctx];
      app.provide(`$${ctx}`, pluginCtx[ctx]);
    });
  }
};
