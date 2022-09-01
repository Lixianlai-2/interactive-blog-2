import auth from "./modules/auth";
// import auth from './modules/auth'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 引入两个模块
  modules: {
    auth,
    // blog,
  },
});
