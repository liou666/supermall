<template>
    <div id="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="shop-name">{{shop.name}}</span>
        </div>
        <div class="shop-other">
            <div class="shop-other-left">
               <div class="info-sells">
                    <span class="sells-count">{{shop.sells | sellCountFilter}}</span>
                    <div class="sells-text">总销量</div>
               </div>
               <div class="info-goods">
                    <span class="goods-count">{{shop.goodsCount}}</span>
                    <div class="goods-text">全部宝贝</div>
               </div>
            </div>
            <div class="shop-other-right">
                <table>
                    <tbody>
                        <tr v-for="(item,index) in shop.score" :key="index">
                            <td>{{item.name}}</td>
                            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                            <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?"高":"低"}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellCountFilter(value){
            if(value<10000){
                return value
            }else{
                return (value/10000).toFixed(1)+'万'
            }
            
        }
    }
}
</script>

<style scoped>
#shop-info{
    padding: 20px;
    font-size: 14px;
}
 .shop-top{
     margin-bottom: 10px;
 }
    .shop-top img{
        width: 100px;
        vertical-align: middle;
        border-radius: 10px;
        margin-right: 10px;
    }
    .shop-name{
        font-size: 18px;
    }
    .shop-other{
        display: flex;
       justify-content: space-evenly;
    }
    .shop-other-left{
        display: flex;
       padding-right:10px;
        border-right: 1px solid #ccc;
        align-items: center;
        
    }
    .info-sells{
        margin-right: 18px;
    }
    .sells-count, .goods-count{
        font-weight: 700;
        font-size: 20px;
       margin-bottom: 10px;
        display: inline-block;
    }
    
    .shop-other-right{
        
    }
    .score{
        display: inline-block;
        margin: 0 10px;
       color:green ;
    }
    .score-better{
        color: red;
    }
    .better{
        color: #fff;
        background-color: green;
    }
    .better-more{
        background-color: red;
    }
</style>