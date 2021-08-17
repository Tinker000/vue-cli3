import moment from "moment";
import http from "@/tool/http";

export default {
  install(Vue) {
    // 时间计算方式 具体使用参考moment.js官网
    Vue.prototype.$moment = moment;
    //  http请求
    Vue.prototype.$http = http;
  }
};
