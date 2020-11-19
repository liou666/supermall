<template>
    <div class="detial-base-info">
        <div class="goods-info">
            <div class="title-info">
                {{goods.title}}
            </div>
            <div class="price-info">
                <span class="real-price">￥{{goods.nowPrice}}</span>
                <span class="old-price">{{goods.oldPrice}}</span>
                <span class="discount" v-show="goods.discount">{{goods.discount}}</span>
            </div>
        </div>
        <div class="columns-info">
            <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
        </div>
        <div class="serivces-info">
            <div class="serivces-item" v-for="(item,index) in goods.services" :key="index">
                <span class="icon" v-show="item.icon"><img :src="item.icon" alt=""></span>
                <span class="text">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>
    .detial-base-info{
      padding: 16px 0;
    }
    
    .title-info{
        font-size: 18px;
        padding: 0 7px;
    }
    .price-info{
        margin: 18px 0;
        display: flex;
        align-items: center;
         padding: 0 7px;
    }
    .real-price{
        font-size: 20px;
        color: var(--color-high-text);
    }
    .old-price{
        font-size: 14px;
        color: #999;
        text-decoration: line-through;
        margin: 0 5px;
    }
    .discount{
        display: inline-block;
        width: 40px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        border-radius: 10px;
        background-color: var(--color-tint);
        color: #fff;
    }
    .columns-info{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #888;
       
        border-bottom: 2px solid #eee;
        margin-bottom: 16px;
         padding: 0 7px 10px;
    }
    .serivces-info{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        border-bottom: 5px solid #ddd;
      
        padding: 0 7px 16px;
    }
    .serivces-item{
        display: flex;
    }
    .icon{
        width: 14px;
    }
    .icon img{
        width: 100%;
        vertical-align: middle;
    }
</style>