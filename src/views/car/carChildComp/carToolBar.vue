<template>
    <div class="car-tool-bar">
      <div class="select-all" @click="itemClick">
        <img :class="{iconSelect:isSelected}"  class="icon" src="~assets/img/cart/tick.svg" alt="">
        <span >全选</span>
      </div>
      <div class="total-price">
          <span >合计:</span><span>￥{{showTotalPrice.toFixed(2)}}</span>
      </div>
      <div class="goToCount" @click="goToCount">
          去计算({{showSelectCount}})
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSelected:false,
            isSelectedAll:false
          }
    },
    computed: {
        showSelectCount(){
            return this.$store.state.cartList.reduce((count,item)=>{
              return count+=item.checked?1:0
            },0)
        },
        showTotalPrice(){
            return this.$store.state.cartList.reduce((total,item)=>{
                return total+=item.checked?item.newPrice*item.count:0
            },0)
        }
    },
    methods: {
        itemClick(){        
            this.isSelected=!this.isSelected;
            this.isSelectedAll=!this.isSelectedAll
            this.$store.state.cartList.forEach(item=>{
               if(this.isSelectedAll){
                   item.checked=true;
               }else{
                   item.checked=false
               }
               
            })
        },
        goToCount(){
       const isNoSelected =  this.$store.state.cartList.every(item=>!item.checked)
        if(isNoSelected){
            this.$toast.show('未选择任何商品')
        }else{
            this.$toast.show('结算功能尚未完善。。。')
        }
           
        }
    },
}
</script>

<style scoped>
    .car-tool-bar{
        height: 36px;
        background-color: #eee;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 49px;
        display: flex;
        align-items: center;
        padding-left: 7px;
        box-shadow: 0 -3px 2px rgba(0,0,0,0.1);
    }
    .select-all span{
        font-size: 14px;
    }
   .select-all  .iconSelect{
  
    background-color: var(--color-tint);
}
    .icon{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
  margin-right: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  vertical-align: middle;
}
.total-price{
    margin: 0 auto 0 20px;
}
.goToCount{
    width: 100px;
    background-color: orangered;
    color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>