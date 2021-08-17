// import Vue from 'vue';
import moment from "moment";

export default {
  install(Vue) {
    // 千分符
    Vue.filter("formatNumber", function(value = "0", currencyType = "") {
      let res;
      if (value.toString().indexOf(".") === -1) {
        res =
          (value || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") +
          ".00";
      } else {
        let prev = value.toString().split(".")[0];
        let next =
          value.toString().split(".")[1] < 10
            ? value.toString().split(".")[1] + "0"
            : value.toString().split(".")[1];
        res =
          (prev || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") +
          "." +
          next;
      }
      return currencyType + res;
    });
    /** 状态映射 */
    Vue.filter("mapState", function(value, object, separator = "") {
      if (Array.isArray(value)) {
        return value.map(key => object[key]).join(separator);
      } else if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        typeof value === "symbol"
      ) {
        return object[value];
      }
    });
    /** 时间戳格式化 */
    Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD") {
      if (dataStr) {
        return moment(dataStr).format(pattern);
      } else {
        return dataStr;
      }
    });
  }
};
