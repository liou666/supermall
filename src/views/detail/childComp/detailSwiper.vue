<template>
    <swiper class="mySwiper">
           <swiper-item  v-for="(item,index) in topImages" :key="index" class="mySwiperItem">
                 <img :src="item" alt="">     
           </swiper-item>
       </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper/index';
export default {
    name:"DetailSwiper",
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
          Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .mySwiper{
        height: 200px;
      
    }
</style>