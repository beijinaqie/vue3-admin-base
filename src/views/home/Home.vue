<template>
  <div id="home">
    <Header></Header>
    <div class="main-wrap">
      <home-menu></home-menu>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/Header';
import HomeMenu from 'components/home-menu/HomeMenu';
export default {
  name: 'Home',
  components: {
    Header,
    HomeMenu
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  .main-wrap {
    display: flex;
    .main {
      min-width: calc(100vw - 256px);
      min-height: calc(100vh - 64px);
    }
  }
}
</style>
