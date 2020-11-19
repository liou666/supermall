<template>
  <footer class="tab-bar">
     <slot></slot>
  </footer>
</template>

<script>
import tabBarItem from './tabBarItem';

export default {
    components:{
        tabBarItem,
        
    }
}
</script>

<style scoped> 
    .tab-bar{
        height: 49px;
        background-color: #f8f8f8;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom:0;
        box-shadow: 0 -2px rgba(0,0,0,0.06);
    }
</style>