<template>
     <tab-bar>
     <tab-bar-item path="/home" >
       <img src="~assets/images/tabbar/home.svg" slot="item-icon">
       <img src="~assets/images/tabbar/home_active.svg" slot="item-icon-active">
       <div slot="item-text">首页</div>
       </tab-bar-item>
     <tab-bar-item path="/category">
         <img src="~assets/images/tabbar/category.svg" slot="item-icon">
          <img src="~assets/images/tabbar/category_active.svg" slot="item-icon-active">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/car">
         <img src="~assets/images/tabbar/cart.svg" slot="item-icon">
         <img src="~assets/images/tabbar/cart_active.svg" slot="item-icon-active"> 
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile">
         <img src="~assets/images/tabbar/profile.svg" slot="item-icon">
          <img src="~assets/images/tabbar/profile_active.svg" slot="item-icon-active"> 
       <div slot="item-text">我的</div>
     </tab-bar-item>
     
     </tab-bar>

</template>

<script>
import tabBar from 'components/common/tabBar/tabBar';
import tabBarItem from 'components/common/tabBar/tabBarItem';
export default {
    name:"mainTabBar",
    components: {
    tabBar,
    tabBarItem
}
}
</script>

<style>

</style>