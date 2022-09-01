import axios from "axios";

// 在活动后显示反馈 与Notification的不同之处在于后者通常用于显示系统级被动通知。
import { Message } from "element-ui";

// 全局axios默认值，即将被发送的自定义post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

//   `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
// 线上的博客地址
//在只需要配置单个或有限明确的接口域名时可以直接设置，在生产环境和开发环境切换时需手动更改
axios.defaults.baseURL = "//blog-server.hunger-valley.com";

export default function request1(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
    };
    if (type.toLowerCase() === "get") {
      option.params = data;
    } else {
      option.data = data;
    }
    if (localStorage.token) {
      // 用户身份信息的登录与注册？
      axios.defaults.headers.common["Authorization"] = localStorage.token;
    }

    // 后端发送请求之后
    axios(option)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          if (res.data.token) {
            localStorage.token = res.data.token;
          }
          resolve(res.data);
        } else {
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch((err) => {
        Message.err("网络异常");
        reject({ msg: "网络异常" });
      });
  });
}
