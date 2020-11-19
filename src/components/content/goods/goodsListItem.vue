<template>
  <div class="goods-list-item" @click="goodsListClick">
      <img v-lazy="showImage" @load="imageLoad" alt="" >
          <div class="info-title">{{product.title}}</div>
          <div class="info-other">
              <span class="price-info">￥{{product.price}}</span>
              <span class="star"><img src="~assets/img/common/collect.svg" alt=""></span>
              <span class="fav-info">{{product.cfav}}</span>
          </div>
  </div>
</template>

<script>
export default {
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
     methods: {
        imageLoad(){
           if(this.$route.path.includes('/home')){
                this.$bus.$emit('homeImgLoad')
           }else if(this.$route.path.includes('/detail')){
               this.$bus.$emit('detailImgLoad')
           }
        },
        goodsListClick(){
            this.$router.push('/detial/'+this.product.iid)
            // console.log(this.$route.params);
        }
    },
    computed: {
        showImage(){
            
            return this.product.image || this.product.show.img
        }
    },
   
}
</script>

<style scoped>
 img{
         width: 100%;
        border-radius: 8px;
       
     }
     .info-title{
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
        
     }
     .price-info{
         color: var(--color-tint);
         margin-right: 10px;
     }
     .star img{
         width: 14px;
         vertical-align: middle;
         margin-bottom: 2px;
     }
 
</style>