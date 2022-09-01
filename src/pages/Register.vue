<template>
  <div id="register">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <p class="error">当前用户名已注册</p>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码"></el-input>
    <p class="error">当前用户名已注册</p>
    <el-button size="medium">立即注册</el-button>
    <p class="notice">
      已有账号？ <router-link to="/login">立即登录</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#register {
  display: grid;
  justify-content: center;
  // grid-template-rows: auto auto auto auto auto auto auto 1fr;
  padding-top: 30px;

  h4 {
    margin: 10px 0 5px;
  }

  .error {
    font-size: 12px;
    color: #3f463c;
  }

  p {
    margin: 5px 0;
  }

  input {
    width: 400px;
  }

  button {
    margin-top: 10px;
    justify-self: start;
  }

  .notice {
    font-size: 12px;
    color: #3f463c;
    text-align: center;
    margin-top: 30px;

    a {
      color: #5433fe;
    }
  }
}
</style>
