<template>
  <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper';
export default {
    props:{ 
        banner:{
            type:Array
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped> 

</style>