// 引入请求的方法
import request from "../helper/request.js";

// 接口
const URL = {
  // 获取全部的博客
  GET_LIST: "/blog",
  GET_DETAIL: "/blog/:blogId",
  CREATE: "/blog",
  UPDATE: "/blog/:blogId",
  DELETE: "/blog/:blogId",
};

export default {
  // 默认第一页，atIndex是获取到展示到首页的博客
  getBLogs({ page = 1, userId, atIndex } = { page: 1 }) {
    return request(URL.GET_LIST, "GET", { page, userId, atIndex });
  },

  // 不传递的话，默认是1,获取到展示到首页的博客
  getIndexBlogs({ page = 1 } = { page: 1 }) {
    return this.getBLogs({ page, atIndex: true });
  },

  getBLogsByUserId(userId, { page = 1, atIndex } = { page: 1 }) {
    return this.getBLogs({ userId, page, atIndex });
  },

  // 获取详情
  getDetail({ blogId }) {
    return request(URL.GET_DETAIL.replace(":blogId", blogId));
  },

  updateBlog({ blogId }, { title, content, description, atIndex }) {
    return request(URL.UPDATE.replace(":blogId", blogId), "PATCH", {
      title,
      content,
      description,
      atIndex,
    });
  },

  deleteBlog({ blogId }) {
    return request(URL.DELETE.replace(":blogId", blogId), "DELETE");
  },

  createBlog(
    // atIndex默认不展示在首页
    { title = "", content = "", description = "", atIndex = false } = {
      title: "",
      content: "",
      description: "",
      atIndex: false,
    }
  ) {
    return request(URL.CREATE, "POST", {
      title,
      content,
      description,
      atIndex,
    });
  },
};
