<template>
<div>
  <header>
      <div id="logo">
       <div class="header-bg"></div>
       <div class="header-logo">
         <img src="./1.jpg" alt="">
       </div>
       <div class="header-mes">
         <div class="header-brand">
           <img src="../../components/header/brand@2x.png" alt="">
           <p>粥品香坊（大运村）</p>
         </div>
         <p class="header-arrive">蜂鸟专送/38分钟到达</p>
         <div class="header-decrease">
           <img src="../../components/header/decrease_1@2x.png" alt="">
           <p>在线支付漫28减5，满50减10</p>
         </div>
       </div>
       <div class="header-number"><p>5个 <a> ></a></p></div>
     </div>
      <div class="bulletin">
        <img src="../../components/header/bulletin@2x.png" alt="">
        <p><nobr>粥品香坊其烹饪粥料的方法源于中国千年古法,在融合现代制作工艺</nobr></p>>
      </div>
       <div class="header-router">
         <ul>
           <li><router-link to="/goods">商品</router-link></li>
           <li><router-link to="/appraise">评价</router-link></li>
           <li><router-link to="/bussiness">商家</router-link></li>
         </ul>
       </div>
  </header>

</div>

</template>

<script>
    export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
