import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let instance = null;
function render() {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
}

// 不在qiankun中
if (!window.__POWERED_BY_QIANKUN__) {
  render();
} else {
  // 动态添加公共路径
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {}
export async function mount(props) {
  console.log(props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
}
