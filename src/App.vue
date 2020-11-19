<template>
  <div id="app">
    <keep-alive exclude="Detial">
      <router-view/>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="img" src="~assets/img/tabbar/home.svg" alt="">
         <img slot="img_active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/category">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt="">
         <img slot="img_active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tab-bar-item>
       <tab-bar-item path="/car">
        <img slot="img" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="img_active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="img_active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from 'common/tabBar/tabBar'
import tabBarItem from 'common/tabBar/tabBarItem'

export default {
  name: 'app',
  components: {
   
    tabBar,
    tabBarItem,
   
  }
}
</script>

<style scoped>
  @import'assets/css/base.css';
</style>
