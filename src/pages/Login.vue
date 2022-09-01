<template>
  <div>
    <Header />
    <div class="login">登录页面</div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Login",
  data() {
    return {};
  },
  components: { Header, Footer },
};
</script>

<style lang="less" scoped>
// .login {
//   color: @themeColor;
// }
</style>
