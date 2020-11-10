<template>
    <div v-if="Object.keys(goods).length!=0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class='info-price'>
            <span class="new-price">￥{{goods.realPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
       <div class="info-service">
           <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
               <img :src="goods.services[index-1].icon" alt="">
               <span>{{goods.services[index-1].name}}</span>
           </span>
       </div>
    </div>
</template>

<script>
export default {
    props:{
      goods:{
        type:Object,
        default(){
           return {}
        }
      }
    },
    created() {
      
    },
}
</script>

<style scoped>
    .base-info{
        padding: 20px 20px 40px 20px;
        border-bottom: 5px solid #e4e4e4;
    }
    .info-title{
        font-size: 14px;
        margin: 5px 1px;
    }
    .info-price{
       display: flex;
       align-items: center;
        padding-top: 10px;
    }
.new-price{
    color: var(--color-tint);
    font-size: 18px;
    font-weight: 700;
  
}
.old-price{
    color: #ccc;
    font-size: 12px;
    text-decoration: line-through;
    margin: 0 5px;
}
.discount{
    width: 40px;
    height: 24px;
    background-color:  var(--color-high-text) ;
    color: #fff;
    display: inline-block;
    border-radius:10px ;
    text-align: center;
    line-height: 24px;
}
.info-other{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #888;
    padding: 18px 0;
    box-shadow: 0 2px 3px rgba(0,0,0,0.02);
}
.info-service{
    display: flex;
    justify-content: space-between;
    font-size: 12px;  
}
.info-service img{
    width: 14px;
    vertical-align: middle;
}
</style>