<template>
  <header :class="{ login: isLogin, logout: !isLogin }">
    <h1>先来写博客吧</h1>
    <p>记录学习的点点滴滴，分享总结的经验和踩过的坑</p>
    <div class="buttons">
      <el-button>立即登录</el-button>
      <el-button>注册账号</el-button>
    </div>
    <template v-if="isLogin">
      <h1>登录后的页面</h1>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style lang="less" scoped>
header.login {
  padding: 0 12% 30px 12%;
  display: grid;
  justify-items: center;
  background: #f9f4ec;
  h1 {
    color: rgba(0, 0, 0, 0.719);
  }
}

header.logout {
  padding: 0 12% 30px 12%;
  display: grid;
  justify-items: center;
  background: #323a2fef;
}

h1 {
  color: #fafcff;
  font-size: 40px;
  margin: 60px 0 0 0;
  text-transform: uppercase;
}

p {
  color: #fafcff;
  // 居中
  margin: 30px auto 0 auto;
}

.buttons {
  margin-top: 20px;
}
</style>
