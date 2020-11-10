<template>
   <footer class="tabBar">
     <slot></slot>
    </footer>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style>
 .tabBar{
     display: flex;
     height: 49px;
     background-color: #f2f2f2;
     text-align: center;
     position: fixed;
     left: 0;
     right: 0;
     bottom:0;
     box-shadow: 0 -3px 3px rgba(0,0,0,0.07);
   }
  
</style>