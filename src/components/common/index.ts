import { App } from 'vue';
import {
  Row,
  Col,
  Button,
  Input,
  Form,
  Table,
  Pagination,
  message,
  Modal,
  Menu
} from 'ant-design-vue';

export default {
  install(app: App<Element>) {
    const antCom = [Row, Col, Button, Input, Form, Table, Pagination, Menu];
    const antCtx = { message, Modal };

    // 注册全局ant组件
    antCom.map(com => {
      app.use(com);
    });

    // 挂载实例原型上
    Object.keys(antCtx).map(ctx => {
      app.config.globalProperties[`$${ctx}`] = antCtx[ctx];
      app.provide(`$${ctx}`, antCtx[ctx]);
    });
  }
};
