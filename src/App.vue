<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>


<script type="text/ecmascript-6">
  import header from '../src/components/header/header.vue';
  import footer from '../src/components/footer/footer.vue';
  import goods from '../src/components/section/goods.vue';
  import appraise from './components/appraise/appraise.vue';
  export default {
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-goods': goods,
    'v-appraise': appraise
  }
};
</script>
<style>
  @import "common/css/font-awesome.min.css";
  @import "common/css/font-awesome.css";
 @import "common/css/style.css";
 @import "common/css/reset.css";
 @import "common/css/content.css";
 @import "common/css/appra.css";
 @import "common/css/footer.css";
 html, body {
   font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', Arial, sans-serif;
 }
</style>

