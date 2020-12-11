<template>
  <div id="home">
    <Header></Header>
    <home-menu></home-menu>
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
}
</style>
