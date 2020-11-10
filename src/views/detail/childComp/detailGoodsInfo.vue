<template>
  <div id="detail-goods-info" v-if="Object.keys(detailInfo).length!=0">
    <div class="start"></div>
    <div class="info-desc">{{detailInfo.desc}}</div>
    <div class="end"></div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-image">
        <img alt="" v-for="(item,index) in detailInfo.detailImage[0].list"  :key="index" @load="imgLoad" :src="item"  >
    </div>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        },
        
    },
    methods: {
            imgLoad(){    
               if(++this.count==this.detailInfo.detailImage[0].list.length){
                   this.$emit('imageLoad')
               }
            }
     },
     data() {
         return {
             count:0
         }
     },
}
</script>

<style scoped>
    #detail-goods-info{
        padding: 20px;
    }
    .start,.end{
        width: 100px;
        height: 1px;
        background-color: #666;
        position: relative; 
    }
    .start::before,.end::before{
        content: '';
        position: absolute;
        top: -3px;    
        width: 4px;
        height: 4px;
        background-color: #000;
    }
    .start::before{
        left: 0;
    }
    .end::before{
        right: 0;
    }
    .end{
      display: flex;
      margin-left: auto;
    }
    .info-desc{
        font-size: 14px;
        margin: 10px 0;
    }
    .info-key{
        color: #444;
        margin: 5px 0;
    }
    .info-image img{
        width: 100%;
    }
</style>