<template>
  <div id="header-wrap">
    <div id="header">
      <a-row>
        <a-col class="logo-wrap">
          <div id="logo">
            <img
              src="https://v3.cn.vuejs.org/logo.png"
              alt="logo"
              title="logo"
            />
          </div>
          <h1>vue3-admin</h1>
        </a-col>
        <a-col></a-col>
      </a-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #header {
    width: 100%;
    .logo-wrap {
      #logo {
        width: 55px;
        height: 55px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
