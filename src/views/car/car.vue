<template>
  <div id="car">
     <nav-bar>
       <div slot="center">购物车({{product.length}})</div>
     </nav-bar>   
    <scroll ref="scroll" class="wrapper">
        <car-item :product='product'/>     
    </scroll>
    <car-tool-bar/>
  </div>
</template>

<script>
import navBar from 'common/navBar/navBar.vue'
import CarItem from './carChildComp/carItem.vue';
import CarToolBar from './carChildComp/carToolBar.vue';
import Scroll from 'common/scroll/scroll'
export default {
  data(){
    return {
      product:[],   
    }
  },
  components: { 
    navBar,
    CarItem,
    CarToolBar,
    Scroll 
  },
  created() {
    this.product=this.$store.state.cartList;
  },
  activated() {
  
    this.$refs.scroll.refresh&&this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
#car{
  width: 100vw;
  height: 100vh;

}
.wrapper{
  height: calc(100% - 44px - 49px - 36px);
  overflow: hidden;
}
</style>