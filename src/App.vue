<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="less">
@import "./assets/reset.less";
@import "./assets/base.less";
#app {
  // 占满页面
  min-height: 100vh;
  display: grid;
  // 分为三行，中间一行撑满剩余空间
  grid-template-rows: auto 1fr auto;
}
</style>
