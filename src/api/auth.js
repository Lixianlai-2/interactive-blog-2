// 认证相关
import request from "../helper/request.js";

const URL = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  GET_INFO: "/auth",
};

export default {
  register({ username, password }) {
    return request(URL.REGISTER, "POST", { username, password });
  },

  login({ username, password }) {
    return request(URL.LOGIN, "POST", { username, password });
  },

  logout() {
    localStorage.removeItem("token");
    return request(URL.LOGOUT);
  },

  getInfo() {
    return request(URL.GET_INFO);
  },
};
