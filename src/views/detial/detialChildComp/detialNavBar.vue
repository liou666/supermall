<template>
    <div >
        <nav-bar class="detialNavBar">
            <div class="left" slot="left"><img src="~assets/img/common/back.svg" alt=""></div>
            <div  class="center" slot="center">
               <div :class="{active:index==currentIndex}" @click="itemClick(index)" v-for="(item,index) in title" :key="index">
                   {{item}}
               </div>
            </div>
           
        </nav-bar>
    </div>
</template>

<script>
import navBar from 'common/navBar/navBar';
export default {
    props:{
        _currentIndex:{
            type:Number,
            default:0
        }
    },
   data() {
       return {
           title:['商品','参数','评论','推荐'],
           currentIndex:0
       }
   },
  
    components:{
        navBar
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;
            this.$emit('topClick',index)
        }
    },
}
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: space-evenly;
        color: #000;
    }
    img{
        vertical-align: middle;
        width: 20px;
        transform: translateY(-1px);
    }
   .detialNavBar{
       background-color: #fff;
   }
   .active{
       color: var(--color-tint);
   }
</style>