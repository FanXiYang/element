<template>
<div>
  <section>
    <div class="router">
      <ul>
        <li><router-link to="/goods">商品</router-link></li>
        <li><router-link to="/appraise">评价</router-link></li>
        <li><router-link to="/business">商家</router-link></li>
      </ul>
    </div>
    <div class="content">
      <div class="left-content">
           <ul>
             <li>
               <div><a href="#">热销榜</a></div>
             </li>
             <li>
               <div><a href="#"><img src="../../components/section/special_3@2x.png" alt="">单人特色套餐</a></div>
             </li>
             <li>
               <div><a href="#">特色粥品</a></div>
             </li>
             <li>
               <div><a href="#">精选凉菜</a></div>
             </li>
             <li>
               <div><a href="#">爽口凉菜</a></div>
             </li>
             <li>
               <div><a href="#">半成品</a></div>
             </li>
             <li>
               <div><a href="#">饭类</a></div>
             </li>
             <li>
               <div><a href="#">面类</a></div>
             </li>
           </ul>
      </div>
      <div class="right-content">
        <div class="food-content">
          <div class="kinds">
            <span>单人特色套餐</span>
          </div>
          <div class="kinds-details">
            <div class="details-img">
              <img src="../../components/section/2.png" alt="">
            </div>
            <div class="details-infor">
              <p class="name">皮蛋瘦肉粥配包子套餐</p>
              <p class="species">咸粥</p>
              <p class="sell">月售<span>1132</span>份 好评率100%</p>
              <div class="price">
                <p>
                  <span>￥24</span><del>￥28</del>
                </p>
                <div class="buy">
                  <div class="del">-</div>
                  <input type="text" value="1" class="number">
                  <div class="add">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="food-content">
          <div class="kinds">
            <span>特色粥品</span>
          </div>
          <div class=" special">
            <div class="details-img">
              <img src="../../components/section/3.png" alt="">
            </div>
            <div class="details-infor">
              <p class="name">莲子核桃黑米粥</p>
              <p class="sell">月售<span>1132</span>份 好评率100%</p>
              <div class="price">
                <p>
                  <span>￥10</span>
                </p>
                <div class="buy">
                  <div class="del">-</div>
                  <input type="text" value="1" class="number">
                  <div class="add">+</div>
                </div>
              </div>
            </div>
          </div>
          <div class=" special">
            <div class="details-img">
              <img src="../../components/section/3.png" alt="">
            </div>
            <div class="details-infor">
              <p class="name">雪梨银耳百合粥</p>
              <p class="sell">月售<span>1132</span>份 好评率100%</p>
              <div class="price">
                <p>
                  <span>￥24</span>
                </p>
                <div class="buy">
                  <div class="del">-</div>
                  <input type="text" value="1" class="number">
                  <div class="add">+</div>
                </div>
              </div>
            </div>
          </div>
          <div class=" special">
            <div class="details-img">
              <img src="../../components/section/3.png" alt="">
            </div>
            <div class="details-infor">
              <p class="name">南瓜粥</p>
              <p class="sell">月售<span>1132</span>份 好评率100%</p>
              <div class="price">
                <p>
                  <span>￥24</span>
                </p>
                <div class="buy">
                  <div class="del">-</div>
                  <input type="text" value="1" class="number">
                  <div class="add">+</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
    export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
