<template>
  <div id="home">
    <p>这是home页</p>
    <a-button type="primary">登录</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
export default {
  name: 'Home',
  components: {
    AButton: Button
  }
};
</script>

,<style lang="scss" scoped></style>
