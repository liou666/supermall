<template>
  <div class="goods-list">
          <div class="goods-list-item" v-for="(item,index) in goods" :key="index" >
                <div @click="itemClick(index)">
                  <img v-lazy="showImage(item)" alt="" @load="imageLoad">
                  <div class="goods-info">
                     <p>{{item.title}}</p> 
                     <div class="goods-desc">
                        <span class="price">￥{{item.price}}</span>
                         <span class="collect">{{item.cfav}}</span>
                     </div>                
                   </div>
                </div>
          </div>  
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    computed: {
       
    },
    methods: {
        imageLoad(){
            this.$bus.$emit('itemImageLoad')
          
        },
          itemClick(index){
              this.$router.push('/detail/'+this.goods[index].iid);
              
          },
           showImage(value){
            return value.image || value.show.img
        }
    },
}
</script>

<style>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-top: 10px;
    }
    .goods-list-item{
      width: 48%;
        
    }
    .goods-list-item img{
        width: 100%;
        border-radius: 5px;
        margin: 3px 0;
    }
    .goods-info{
        font-size: 12px;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
   .goods-desc{
       display: flex;
      justify-content: center;
      
   }
   .price{
       margin-right: 20px;
       color: var(--color-tint);
   }
 .collect{
     position: relative;
 }
 .collect::before{
     content: '';
     position: absolute;
     top: 0;
     left: -14px;
     width: 14px;
     height: 14px;
     background: url('~assets/images/common/collect.svg')0 0/14px 14px;
 }
</style>