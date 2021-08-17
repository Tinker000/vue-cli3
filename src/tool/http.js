import axios from "axios";
// import Vue from "vue";
import router from "../router";
import { Loading, Message } from 'element-ui';
// const vm = new Vue();

let loading = '';
const request = axios.create({
  // 默认请求地址
  // baseURL: process.env.VUE_APP_API,
  timeout: 30000, // request timeout
});
request.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

// request 请求拦截器
request.interceptors.request.use(
  config => {
    loading = Loading.service()
    return config;
  },
  error => {
    loading = Loading.service()
    return Promise.reject(error);
  }
);
// request response 拦截器
request.interceptors.response.use(
  res => {
    loading.close()
    //拦截响应，做统一处理
    if (res.data.code || res.data.code == 0) {
      switch (res.data.code) {
        case 0:
          return Promise.resolve(res.data);
        case 401:
          localStorage.clear();
          router.push("/");
          break
        default:
          return Promise.reject(res);
      }
    } else {
      Message.error(res.data.msg)
      return Promise.reject(res);
    }
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    loading.close()
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);
export default request;
