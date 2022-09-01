import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// 引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 使用ElementUI插件
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
