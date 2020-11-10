<template>   
    <div class="car">
        <nav-bar class="carNavBar">
            <div slot="center">购物车（{{goodsCount}}）</div>
        </nav-bar>
        <car-goods-list />
        <car-bottom-bar  />
    </div>
</template>

<script>
import navBar from 'components/common/navBar/navBar';
import carGoodsList from './carChild/carGoodsList';
import carBottomBar from './carChild/carBottomBar'
import {mapGetters} from 'vuex' ; 
export default {
    name:"car",
    components:{
        navBar,
        carGoodsList,
        carBottomBar
    },
    computed: {
        ...mapGetters(['goodsCount'])
    },
}
</script>

<style scoped>
    .car{
        height: 100vh;
    }
    .carNavBar{
        background-color: var(--color-tint);
        font-weight: 700;
       
    }
</style>