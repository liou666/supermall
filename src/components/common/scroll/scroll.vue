<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    props:{
      probeType:{
        type:Number,
        default:3
      },
      pullUpLoad:{
        type:Boolean,
        default:true
      }
    },
    data() {
      return {
        scroll:{}
      }
    },
    mounted() {
      
          this.initScroll()
     
    },
    methods: {
      initScroll(){
        if(this.$refs.wrapper){
          this.scroll= new BScroll(this.$refs.wrapper,{
             probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
          });
         this.scroll.on('scroll',position=>{this.$emit('scroll',position)});
         this.scroll.on('pullingUp',()=>{this.$emit('pullingUp')})
        } 
      },
      scrollTo(x,y,time=300){
        this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){     
      
        this.scroll&&this.scroll.refresh()
      }
    },
}
</script>

<style scoped>
   
</style>