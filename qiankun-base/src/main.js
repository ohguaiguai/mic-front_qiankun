import Vue from 'vue';
import App from './App.vue';
import router from './router';

import elmentUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elmentUI);
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000', // 默认会加载这个html, 解析里面的js， 子应用必须支持跨域
    container: '#vue',
    activeRule: '/vue',
    props: {
      a: 1,
    },
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', // 默认会加载这个html, 解析里面的js， 子应用必须支持跨域
    container: '#react',
    activeRule: '/react',
  },
];

registerMicroApps(apps);
start();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
