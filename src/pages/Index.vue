<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item">
        <figure class="avatar">
          <img
            src="https://i.ibb.co/xC2rYPm/image.png"
            alt="image"
            border="0"
          />
          <figcaption>李先来</figcaption>
        </figure>
        <h3>Vue计算属性 <span>2天前</span></h3>
        <p>
          本文要涉及的概念有，用插值语法实现简单输入，如何让input里面的值动态变化，并对让Vue对页面进行重新渲染，get()的作用，怎么读取computed中的内容？怎么在控制台区分计算属性跟普通属性...
        </p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img
            src="https://i.ibb.co/xC2rYPm/image.png"
            alt="image"
            border="0"
          />
          <figcaption>李先来</figcaption>
        </figure>
        <h3>Vue监视属性 <span>3天前</span></h3>
        <p>
          监视有哪两种写法，计算属性是怎么实现的，watch内置一个handler函数，watch还有什么配置呢...
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default { components: { Header, Footer } };
</script>

<style lang="less" scoped>
#index {
  .item {
    display: grid;
    grid: auto auto / 80px 1fr;
    margin: 35px 0;
    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      margin-left: 0;
      text-align: center;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    figcaption {
      font-size: 12px;
    }
  }
  h3 {
    grid-column: 2;
    grid-row: 1;

    span {
      font-size: 12px;
      font-weight: normal;
    }
  }
}
</style>
