import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  state() {
    //全局状态管理
    return {
      currentPath: "/home",
      userInfo: "",
    };
  },
  //唯一修改
  mutations: {
    changeCurrentPath(state, value) {
      state.currentPath = value;
    },
    changeUserInfo(state, value) {
      state.userInfo = value;
      console.log(state.userInfo);
    },
  },
  //异步修改
  actions: {},
  // vuex计算属性
  getters: {},
  modules: {},
  //配置插件
  plugins: [
    createPersistedState({
      reducer: (state) => {
        return {
          userInfo: state.userInfo,
          goodproid: state.goodproid,
        };
      },
    }),
  ],
});

export default store;
