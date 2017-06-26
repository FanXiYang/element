<template>
  <div id="app">
   <v-header></v-header>
    <v-section>
      <v-goods></v-goods>
    </v-section>
    <v-footer></v-footer>
  </div>
</template>


<script type="text/ecmascript-6">
  import header from '../src/components/header/header.vue';
  import section from '../src/components/section/section.vue';
  import goods from '../src/components/footer/footer.vue';
export default {
  components: {
    'v-header': header,
    'v-section': section,
    'v-goods': goods,
    'v-footer': goods
  }
};
</script>

<style>
@import "common/css/reset.css";
@import "common/css/style.css";
@import "common/css/style2.css";
@import "common/css/footer.css";
</style>
