<template>
  <div id="app">
    <Header id="header" />
    <main><router-view /></main>
    <Footer id="footer" />
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
  grid-template-columns: 12% auto 12%;
  grid-template-areas:
    "header header header"
    ".      main  ."
    "footer footer footer";
}

#header {
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}

main {
  grid-area: main;
}

#footer {
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
  // border: 1px solid red;
  background: #000000b7;
}
</style>
