<template>
  <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" @load="imageLoad">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        SwiperItem,
        Swiper
    },
    methods: {
      imageLoad(){   
        this.$emit('swiperImageLoad')
      }
    },
}
</script>

<style>

</style>