<template>
  <div class="createPage">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows="3"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows="20"></el-input>
    <p class="msg">限30个字</p>
    <el-button>确定</el-button>
  </div>
</template>

<script>
export default {
  name: "createPage",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
span {
  color: blue;
}

h3 {
  padding-top: 20px;
}
</style>
