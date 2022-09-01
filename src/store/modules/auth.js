// auth是有几种方法的一个对象
// import { cp } from "shelljs";
// import Vuex from "vuex";
import auth from "../../api/auth";

const state = {
  user: null,
  isLogin: false,
};

const getters = {
  // 获取state的属性
  // getters里面必须是函数
  user: (state) => state.user,
  isLogin: (state) => state.isLogin,
};

// 相当于methods
const mutations = {
  setUser(state, payload) {
    state.user = payload.user;
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin;
  },
};

// 异步的methods
const actions = {
  login({ commit }, { username, password }) {
    // 如果登录成功,下面的auth是认证相关的api，它有login方法，这是发请求
    auth.login({ username, password }).then((res) => {
      commit("setUser", { user: res.data });
      commit("setLogin", { isLogin: true });
    });
  },

  // 异步注册
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password });
    commit("setUser", { user: res.data });
    commit("setLogin", { isLogin: true });
  },

  // 登出后的重新设置
  async logout({ commit }) {
    // 返回logout对应url的Promise
    await auth.logout();

    // 登出后设置对应值
    commit("setUser", { user: null });
    commit("setLogin", { isLogin: false });
  },

  // 检查是否登入
  async checkLogin({ commit, state }) {
    if (state.isLogin) return true;

    let res = await auth.getInfo();

    commit("setLogin", { isLogin: res.isLogin });

    if (!res.isLogin) return false;
    commit("setUser", { user: res.data });
    return true;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
