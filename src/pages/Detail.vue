<template>
  <div class="detail">
    <section class="user-info">
      <img src="" alt="" />
      <h3>浅析前端异步</h3>
      <p><router-link to="/user">Foo</router-link>发布于2天前</p>
    </section>
    <!-- 文章跟图片都由后端提供 -->
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {};
    }
  };
  </script>
  
  <style lang="less" scoped>
  @import "../assets/article.less";
  .detail {
    .user-info {
      display: grid;
      grid: auto auto / 80px 1fr;
  
      margin-top: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ebebeb;
  
      h3 {
        grid-column: 2;
        grid-row: 1;
        margin: 5px 0;
      }
  
      p {
        grid-column: 2;
        grid-row: 2;
  
        margin-top: 0;
        font-size: 12px;
        color: #8f8f8c;
  
        a {
          // color: @themeColor;
          text-decoration: none;
        }
      }
    }
  }