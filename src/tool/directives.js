export default {
  install(Vue) {
    Vue.directive("bind-confirm", {
      bind(el, binding, vnode) {
        const context = vnode.context;
        // 给指令所绑定的组件设置ref
        context.$refs[context._uid] = vnode.componentInstance;
        // 给指令所绑定的组件的上下文设置handleConfirm方法
        context.handleConfirm = () => {
          return context.$refs[context._uid].handleConfirm();
        };
      }
    });
  }
};
