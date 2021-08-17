import Vue from "vue";
import Vuex from "vuex";
import vuexStorage from "./vuexStorage";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";

Vue.use(Vuex);

var store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
});
const array = Object.keys(state).map(key => key);
vuexStorage.init(store, array); // 此处传入的数组，定义要实现同步的state 名称
export default store;
