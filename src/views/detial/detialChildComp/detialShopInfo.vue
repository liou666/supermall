<template>
  <div class="detial-shop-info">
      <div class="shop-title">
          <img class="shop-logo" :src="shop.logo" alt="">
          <span class="shop-name">{{shop.name}}</span> 
      </div>
      <div class="info-other">
          <div class="left-info">
              <div class="sell-info">
                 <span class="count">{{shop.sells | showCount}}</span>
                  <p>总销量</p>
              </div>
              <div class="goodsCountInfo">
                  <span class="count">{{shop.goodsCount}}</span>
                  <p>全部宝贝</p>
               </div>
          </div>
          <div class="right-info">
              <div class="score-info" v-for="(item,index) in shop.score" :key="index">
                  <span class="name">{{item.name}}</span>
                  <span class="score" :class="{score_active:item.isBetter}">{{item.score}}</span>
                  <span class="quality" :class="{quality_active:item.isBetter}" >{{item.isBetter?"高":"低"}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        shop:{
            type:Object,
            dfalut(){
                return {}
            }
        }
    },
    filters:{
        showCount(count){
            if(count>=10000){
                return (count/10000).toFixed(1)+'万'
            }else{
                return count
            }
        }
    }
}
</script>

<style scoped>
    .detial-shop-info{
        padding: 7px;
        padding-bottom: 40px;
        border-bottom: 5px solid #f5f5f5;
    }
    .shop-title{
        display: flex;
        align-items: center;
    }
    .shop-logo{
        width: 100px;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 14px;
    }
   .shop-name{
       font-size: 18px;
   }
   .info-other{
       display: flex;
       justify-content: space-evenly;
       margin-top: 30px;
   }
   .left-info{
       display: flex;
       border-right: 1px solid #ccc;
        text-align: center;
        align-items: center;
        /* padding-right: 20px; */
   }
   .count{
       display: inline-block;
       font-size: 22px;
       font-weight: 700;
       margin-bottom: 10px;
      
   }
   p{
       font-size: 14px;
   }
   .sell-info {
       margin-right: 24px;  
   }
  .goodsCountInfo{
      margin-right: 20px;
  }
  .score-info{
      margin: 8px 0;
  }
  .score{
      margin: 0 10px;
      display: inline-block;
      width: 40px;
      text-align: center;
      color:green
  }
  .quality{
      color:#fff;
      background-color: green;
  }
  .quality_active{
      color:#fff;
      background-color: red;
  }
  .score_active{
      color: red;
  }
</style>