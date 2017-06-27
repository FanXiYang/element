// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 15 + 'px';
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
