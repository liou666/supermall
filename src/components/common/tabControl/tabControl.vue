<template>
  <div class="tab-control">
      <div :class="{active:index==currentIndex}" @click="itemClick(index)" class="tab-control-item" v-for="(item,index) in title" :key="index">
          {{item}}
      </div>
  </div>
</template>

<script>

export default {
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        },
        goodsType:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
           currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;
            // console.log(this.goodsType[index]);
            this.$emit('tabClick',index);
        }
    },
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        height: 50px;
       /* box-shadow: 0 1px 2px rgba(0,0,0,.06); */
       justify-content: center;
       align-items: center;
    }
    .tab-control-item{
        flex: 1;
        text-align: center;
        line-height: 50px;
        height: 100%;
    }
    .active{
        color:var(--color-high-text);
        border-bottom: 2px solid var(--color-tint);
      
    }
</style>