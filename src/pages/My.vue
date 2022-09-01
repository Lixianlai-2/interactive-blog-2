<template>
  <div id="my">
    <section class="user-info">
      <img src="https://i.ibb.co/xC2rYPm/image.png" alt="image" border="0" />
      <h3>李先来</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>前端异步解密</h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>

      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>前端异步解密</h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "../assets/base.less";

.user-info {
  display: grid;
  grid: auto auto/ 80px 1fr;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ebebeb;

  h3 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-top: 10px;
  }

  img {
    grid-column: 1/2;
    grid-row: 1 / span 2;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}

.item {
  display: grid;
  // grid: auto auto auto / 80px 1fr;
  margin: 20px 0;
  grid-template-rows: auto auto auto;
  grid-template-columns: 80px 1fr;
  .date {
    grid-column: 1/2;
    grid-row: 1 / span 3;
    justify-self: center;
    text-align: center;
  }
  span {
    display: block;
  }

  .day {
    font-size: 40px;
  }

  h3 {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  p {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-top: 7px;
  }

  .actions {
    grid-column: 2;
    grid-row: 3;
    font-size: 12px;
  }
}
</style>
