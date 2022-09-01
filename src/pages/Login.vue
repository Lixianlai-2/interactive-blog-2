<template>
  <div id="login">
    <h4>用户名</h4>
    <input placeholder="用户名" v-model="username" />
    <h4>密码</h4>
    <input
      type="password"
      placeholder="密码"
      v-model="password"
      @keydown.enter="onLogin"
    />
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">
      没有账号？<router-link to="/register">注册新用户</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="less" scoped>
@import "../assets/base.less";

#login {
  display: grid;
  justify-content: center;
  padding-top: 30px;
  // 让每一行的高度取决于其自身，剩下的空间用白色占满
  // grid-template-rows: auto auto auto auto auto 1fr;

  h4 {
    margin: 10px 0 5px;
  }

  p {
    margin: 5px 0;
  }

  input {
    width: 400px;
  }

  .error {
    font-size: 12px;
    color: #3f463c;
  }

  button {
    margin-top: 30px;
    justify-self: start;
  }

  .notice {
    justify-content: center;
    display: flex;
    font-size: 12px;
    text-align: center;
    margin-top: 30px;
    color: #3f463c;

    a {
      color: @themeColor;
    }
  }
}

input {
  line-height: 40px;
  border: 1px solid #eaeaea;
  padding: 0 10px;
  border-radius: 4px;
  outline: none;
}
</style>
