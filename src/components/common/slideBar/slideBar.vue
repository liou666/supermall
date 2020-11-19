<template>
    <scroll class="slide-bar wrapper" ref="scroll" >
      
        <div class="slide-bar-item" v-for="(item,index) in keyWords" :key="index" :class="{active:index===currentIndex}" @click="itemClick(index)">
               {{item.title}}
          </div>  
        
    </scroll>
 
</template>

<script>
import scroll from 'common/scroll/scroll.vue'

export default {
  components: { scroll },
  props:{
        keyWords:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            isActive:false,
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;
            this.$emit('slideBarClick',index)
        }
    },
    updated(){
        this.$refs.scroll.refresh();     
    },
}
</script>

<style scoped>
    .slide-bar{
        width: 90px;
        text-align: center;   
         display: flex;
        flex-direction: column;  
         background-color: #f7f7f7;         
    }
    .slide-bar-item{
         height: 46px;
        line-height: 46px;
        font-size: 14px;
        border-bottom: 1px solid #fff;   
    }
     .slide-bar-item:last-child{
        border: 0;
    }
    .active{
        background-color: #fff;
        color: var(--color-tint);
        font-size: 18px;
        font-weight: 700;
    }
   .wrapper{
    height: 100%;
    overflow: hidden;
  }
</style>