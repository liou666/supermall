<template>
     <swiper class="detialSwiper">
        <swiper-item v-for="(item,index) in banner" :key="index">        
            <img :src="item" alt="" @load="imageLoad">
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
    },
    methods: {
        imageLoad(){
            this.$emit('imgLoad')
        }
    },
}
</script>

<style scoped>
  .detialSwiper{
      height: 280px;
      overflow: hidden;
  }
</style>