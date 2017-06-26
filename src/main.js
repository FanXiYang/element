// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import header from '../src/components/header/header.vue';
import section from '../src/components/section/section.vue';
import goods from '../src/components/section/goods.vue';
import footer from '../src/components/footer/footer.vue';

Vue.use(header);
Vue.use(section);
Vue.use(goods);
Vue.use(footer);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/goods',
      component: goods
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app');
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 15 + 'px';
};
