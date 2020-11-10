<template>
  <div class="bottomBar">
      <div class="bottomLeft ">
          <i class="icon customerService"></i>
          <p>客服</p>
      </div>
       <div class="bottomLeft ">
          <i class="icon shop"></i>
          <p>店铺</p>
      </div>
       <div class="bottomLeft">
          <i class="icon favorite" :class="{active:isActive}" @click="change" ></i>
          <p>收藏</p>
      </div>
      <div class="addToCar" @click="addToCar">加入购物车</div>
      <div class="toBuy">购买</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isActive:false
        }
    },
    methods: {
        change(){
            this.isActive=!this.isActive
        },
        addToCar(){
            this.$emit('addCar')
        }
    },
}   
</script>

<style scoped>
    .bottomBar{
        display: flex;
        height: 49px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        color: #444;
    }
    .bottomLeft{
        flex: 0 0 50px;
        display: flex;flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
    .addToCar{
        flex: 1;
        background-color: orange;
         display: flex;flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .toBuy{
        flex: 0 0 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: hotpink;
    }
    .icon{
        width: 22px;
        height: 20px;
        background: url('~assets/images/detail/detail_bottom.png') 0 0/100%;
        margin-bottom: 2px;
    }
  .bottomLeft  .active{
          background-position-y: -27px;
    }
    .favorite{
         background-position-y:  0px;
        /* background-position-y:  -27px; */
    }
    .customerService{
        background-position-y:  -53px;
    }
    .shop{
        background-position-y: -100px;
    }
</style>