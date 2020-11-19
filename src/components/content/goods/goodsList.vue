<template>
  <div class="goods">
      <div class="goodsList"  v-for="(item,index) in goods" :key="index">
          <goods-list-item :product="item"/>    
      </div>
  </div>
</template>

<script>
import GoodsListItem from './goodsListItem.vue';
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{GoodsListItem},
    
}
</script>

<style scoped>
    .goods{
        display: flex;     
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-around;
         font-size: 14px;
    }
    .goodsList{
      width: 48%;
      text-align: center;
      padding-bottom: 3px;
    }
    
</style>