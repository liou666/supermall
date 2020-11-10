<template>
  <div class="carGoodsList">
     <scroll class="content" ref="scroll">
          <div  class="goods-item" v-for="(item,index) in goodsList" :key="index" >
                <div class="cart-tick" @click="isChange(index)" :class="{active:item.checked}">                    
                    <img src="~assets/images/cart/tick.svg" alt="">
                </div>      
                <div class="image-info">
                    <img :src="item.image" alt="">
                </div>
                <div class="text-info">
                    <p class="title-info">{{item.title}}</p>
                    <p class="desc-info">{{item.desc}}</p>
                    <div class="other-info">
                        <span class="price-info">{{item.price}}</span>
                        <span class="count-info">x{{item.count}}</span>
                    </div>
                </div>
          </div>
        
     </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Scroll from 'components/content/scroll/scroll';
import goodsListItem from './goodsListItem';
export default {
        data() {
            return {
                isActive:true
            }
        },
        components: {
            Scroll,
            goodsListItem
        },
        computed: {
            ...mapGetters(['goodsList'])
        },
        activated() {
            this.$refs.scroll.refresh()
        },
        methods: {
            isChange(index){
                this.goodsList[index].checked=!this.goodsList[index].checked;
                console.log(this.goodsList.every(item=>item.checked));
            }
        },
}
</script>

<style scoped>
    .active{
        background-color: orangered;
    }
    .content{
         /* position: absolute;
         top: 44px;
         left: 0;
         right: 0;
         bottom: 49px; */
       height: calc(100vh - 44px - 49px - 32px);
       overflow: hidden;
    }
    /* .image-info img{
      width: 100px;
    }
    */
    .goods-item{
       padding: 5px;
        display: flex;
    border-bottom: 2px solid #e5e5e5;
    align-items: center;
        
    }
    .cart-tick{
        width: 16px;
        height: 16px;
     border: 1px solid #ddd;
        border-radius: 50%;
        margin-right: 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
       
    }
    
   .image-info{
       width: 20%;
        margin-right: 10px;
   }
    .image-info img{
        width: 100%;
        border-radius: 10px;
       
    }
    .text-info{
        display: flex;
        flex-direction: column;
        width: 75%;
    justify-content: space-between;
    }
   .title-info,.desc-info{
       overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
   
   }
   .desc-info{
       font-size: 14px;
     margin-bottom: 20px;
   }
   .title-info{
         font-size: 16px;
         font-weight: 700;
   }
   .other-info{
       margin-bottom: 5px;
       display: flex;

   }
   .price-info{
       color: orange;
       margin-right: auto;
   }
</style>