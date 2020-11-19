<template>
    <div class="detial-goods-info">
        <div class="desc-info">
            <div class="start"></div>
            <div class="text">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div v-if="detailInfo.detailImage" class="info-key">
            {{detailInfo.detailImage[0].key}}
        </div>
        <div v-if="detailInfo.detailImage">
            <div class="detail-image-info" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
            <img @load="imageLoad" v-lazy="item" alt="">
            </div>
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
        }
    },
    methods: {
        imageLoad(){
            this.$emit('imgLoad')
        }
    },
}
</script>

<style scoped>
    .detial-goods-info{   
        padding: 20px 7px 30px;
    }
    .start,.end{
        width: 100px;
        height: 1px;
        background-color: #333;
        position: relative;
        margin:10px 0;
    }
    .end{
        float: right;
    }
    .start::before{
        content: '';
        width: 4px;
        height: 4px;
        background-color: #000;
        position: absolute;
        top: -4px;
    }
     .end::before{
        content: '';
        width: 4px;
        height: 4px;
        background-color: #000;
        position: absolute;
        top: -4px;
        right: 0;
    }
    
  .info-key{
      margin: 30px 0 10px 0;
      font-weight: 700;
  }
  img{
      width: 100%;
  }
</style>