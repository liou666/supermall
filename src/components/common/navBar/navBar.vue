<template>
      <header>
          <div class="left"><slot name="left"></slot></div>
          <div class="center"><slot name="center"></slot></div>
          <div class="right"><slot name="right"></slot></div>
      </header>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style scoped>
    header{
        display: flex;
        height: 44px;
        line-height: 44px;
       text-align: center;
       /* position: fixed;
       top: 0;
       left: 0;
       right: 0;
       z-index: 9; */
       box-shadow: 0 2px 3px rgba(0,0,0,0.04);
    }
    .left,.right{
        width: 60px;
       
    }
    .center{
        flex: 1;
        color: #fff;
    }
</style>