import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/section/goods.vue';
import appraise from '../components/appraise/appraise.vue';
import bussiness from '../components/bussiness/bussiness.vue';
Vue.use(goods);
Vue.use(appraise);
Vue.use(bussiness);
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/appraise',
      name: 'appraise',
      component: appraise
    },
    {
      path: '/bussiness',
      name: 'bussiness',
      component: bussiness
    }
  ]
});
